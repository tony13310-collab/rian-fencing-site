// Cloudflare Worker — FTL/FIE proxy for Live Competition Dashboard

export interface Env {}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    try {
      // /api/ftl/search?q=sjcc&from=2026-01-01&to=2026-12-31
      if (path === "/api/ftl/search") {
        return await handleFTLSearch(url);
      }

      // /api/ftl/event/:eventId — get event results page
      if (path.startsWith("/api/ftl/event/")) {
        const eventId = path.replace("/api/ftl/event/", "");
        return await handleFTLEvent(eventId);
      }

      // /api/ftl/pools/:eventId — get pool assignments
      if (path.startsWith("/api/ftl/pools/")) {
        const eventId = path.replace("/api/ftl/pools/", "");
        return await handleFTLPools(eventId);
      }

      // /api/ftl/de/:eventId — get DE tableau data
      if (path.startsWith("/api/ftl/de/")) {
        const eventId = path.replace("/api/ftl/de/", "");
        return await handleFTLDE(eventId);
      }

      // /api/ftl/results/:eventId — get results data
      if (path.startsWith("/api/ftl/results/")) {
        const eventId = path.replace("/api/ftl/results/", "");
        return await handleFTLResults(eventId);
      }

      // /api/fie/search?q=world+cup+sabre
      if (path === "/api/fie/search") {
        return await handleFIESearch(url);
      }

      return jsonResponse({ error: "Not found" }, 404);
    } catch (err: any) {
      return jsonResponse({ error: err.message }, 500);
    }
  },
};

async function handleFTLSearch(url: URL): Promise<Response> {
  const query = (url.searchParams.get("q") || "").toLowerCase();
  const from = url.searchParams.get("from") || "2024-01-01";
  const to = url.searchParams.get("to") || "2027-01-01";
  const country = url.searchParams.get("country") || "USA";

  // Fetch FTL advanced search API
  const ftlUrl = `https://www.fencingtimelive.com/tournaments/search/data/advanced?from=${from}&to=${to}&country=${country}`;
  const resp = await fetch(ftlUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Accept": "application/json",
    },
  });

  if (!resp.ok) {
    return jsonResponse({ error: "FTL search failed", status: resp.status }, 502);
  }

  const data: any = await resp.json();

  // Filter by query
  const rows = (data.rows || data || []).filter((row: any) => {
    const name = (row.Name || row.name || "").toLowerCase();
    return name.includes(query);
  });

  // Map to our format and sort by start date (newest first)
  const tournaments = rows.map((row: any) => ({
    id: row.Id || row.id || "",
    name: row.Name || row.name || "",
    location: row.Location || row.location || "",
    dates: row.dates || row.Dates || "",
    start: row.start || row.Start || row.startDate || row.StartDate || "",
  }));

  // Sort: upcoming first (within 10 days from now), then most recent past
  const now = new Date();
  const tenDaysFromNow = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000);

  tournaments.sort((a: any, b: any) => {
    const aDate = new Date(a.start);
    const bDate = new Date(b.start);
    const aUpcoming = aDate >= now && aDate <= tenDaysFromNow;
    const bUpcoming = bDate >= now && bDate <= tenDaysFromNow;

    // Upcoming tournaments first
    if (aUpcoming && !bUpcoming) return -1;
    if (!aUpcoming && bUpcoming) return 1;

    // Then sort by date descending (newest first)
    return bDate.getTime() - aDate.getTime();
  });

  return jsonResponse({ tournaments, total: tournaments.length });
}

async function handleFTLEvent(tournamentId: string): Promise<Response> {
  const ftlUrl = `https://www.fencingtimelive.com/tournaments/eventSchedule/${tournamentId}`;
  const resp = await fetch(ftlUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      "Accept": "text/html,application/xhtml+xml",
    },
  });

  const html = await resp.text();

  // FTL embeds event data in server-rendered HTML:
  // <h5>Friday January 23, 2026</h5>
  // <tr id="ev_XXXX" data-href="/events/view/XXXX">
  //   <td>8:00 AM</td>
  //   <td><a href="..."><strong>Junior Men's Saber</strong></a></td>
  //   <td>Finished at ... (117 competitors)</td>
  // </tr>

  const events: {
    id: string;
    name: string;
    date: string;
    startTime: string;
    competitors: number | null;
    status: string;
  }[] = [];

  // Extract day headers and their following events
  // Split by <h5> day headers
  const dayPattern = /<h5>([^<]+)<\/h5>/g;
  const days: { date: string; startIdx: number }[] = [];
  let match;
  while ((match = dayPattern.exec(html)) !== null) {
    days.push({ date: match[1].trim(), startIdx: match.index });
  }

  // For each day section, extract events
  for (let i = 0; i < days.length; i++) {
    const dayDate = days[i].date;
    const sectionStart = days[i].startIdx;
    const sectionEnd = i + 1 < days.length ? days[i + 1].startIdx : html.length;
    const section = html.substring(sectionStart, sectionEnd);

    // Extract event rows
    const rowPattern = /data-href="\/events\/view\/([A-F0-9]{32})"[\s\S]*?<td>([^<]*)<\/td>\s*<td>\s*<a[^>]*>\s*<strong>\s*([\s\S]*?)\s*<\/strong>\s*<\/a>\s*<\/td>\s*<td>([\s\S]*?)<\/td>/g;
    let rowMatch;
    while ((rowMatch = rowPattern.exec(section)) !== null) {
      const eventId = rowMatch[1];
      const startTime = rowMatch[2].trim();
      const eventName = decodeHtmlEntities(rowMatch[3].replace(/\s+/g, ' ').trim());
      const statusHtml = rowMatch[4];

      // Extract competitor count
      const compMatch = statusHtml.match(/\((\d+)\s*competitors?\)/);
      const competitors = compMatch ? parseInt(compMatch[1]) : null;

      // Extract status
      let status = "Unknown";
      if (statusHtml.includes("Finished")) status = "Finished";
      else if (statusHtml.includes("In Progress")) status = "In Progress";
      else if (statusHtml.includes("Not Started") || statusHtml.includes("Scheduled")) status = "Scheduled";

      events.push({
        id: eventId,
        name: eventName,
        date: dayDate,
        startTime,
        competitors,
        status,
      });
    }
  }

  // Filter to Men's Saber only (Rian's weapon + gender)
  const filtered = events.filter(e => {
    const n = e.name.toLowerCase();
    const isSaber = n.includes('saber') || n.includes('sabre');
    const isMens = n.includes("men's") && !n.includes("women's");
    return isSaber && isMens;
  });

  return jsonResponse({
    tournamentId,
    ftlUrl,
    events: filtered,
    allEvents: events.length,
    saberEvents: filtered.length,
  });
}

async function handleFTLPools(eventId: string): Promise<Response> {
  const headers = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" };

  // Step 1: Get pool round ID from event results page
  const resultsUrl = `https://www.fencingtimelive.com/events/results/${eventId}`;
  const resultsResp = await fetch(resultsUrl, { headers });
  const resultsHtml = await resultsResp.text();

  const poolLinkMatch = resultsHtml.match(/\/pools\/scores\/([A-F0-9]{32})\/([A-F0-9]{32})/);
  if (!poolLinkMatch) {
    return jsonResponse({ eventId, pools: null, message: "No pool round found for this event" });
  }

  const poolRoundId = poolLinkMatch[2];

  // Step 2: Fetch pool scores main page to get individual pool IDs
  const poolsMainUrl = `https://www.fencingtimelive.com/pools/scores/${eventId}/${poolRoundId}`;
  const poolsResp = await fetch(poolsMainUrl, { headers });
  const poolsHtml = await poolsResp.text();

  // Extract pool AJAX URLs from the JS on the page
  // The page loads each pool via: /pools/scores/{eventId}/{poolRoundId}/{poolId}?dbut=true
  const poolIdPattern = new RegExp(`/pools/scores/${eventId}/${poolRoundId}/([A-F0-9]{32})`, 'g');
  const poolIds = new Set<string>();
  let match;
  while ((match = poolIdPattern.exec(poolsHtml)) !== null) {
    poolIds.add(match[1]);
  }

  // If no pool IDs found in main page, try fetching the page's JS-loaded content
  // Actually, pool IDs might be in a script block
  if (poolIds.size === 0) {
    // Try to find pool IDs from loadPool calls or similar
    const scriptPattern = /['"]([A-F0-9]{32})['"]/g;
    while ((match = scriptPattern.exec(poolsHtml)) !== null) {
      if (match[1] !== eventId && match[1] !== poolRoundId) {
        poolIds.add(match[1]);
      }
    }
  }

  if (poolIds.size === 0) {
    return jsonResponse({ eventId, poolRoundId, pools: null, message: "Pool IDs not found in page HTML" });
  }

  // Step 3: Fetch each pool's HTML and parse fencer data
  // Find which pool has "WEI Rian" (or return all pools)
  const allPools: any[] = [];
  let rianPool: any = null;

  // Fetch pools in parallel (limit to avoid rate limiting)
  const poolIdArray = Array.from(poolIds);
  const poolFetches = poolIdArray.map(async (poolId) => {
    const poolUrl = `https://www.fencingtimelive.com/pools/scores/${eventId}/${poolRoundId}/${poolId}?dbut=true`;
    const resp = await fetch(poolUrl, { headers });
    const html = await resp.text();

    return parsePoolHtml(html, poolId);
  });

  const pools = await Promise.all(poolFetches);

  for (const pool of pools) {
    allPools.push(pool);
    if (pool.fencers.some((f: any) => f.name === "WEI Rian" || f.name.startsWith("WEI Rian"))) {
      rianPool = pool;
    }
  }

  return jsonResponse({
    eventId,
    poolRoundId,
    rianPool,
    totalPools: allPools.length,
    allPools,
  });
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"');
}

function parsePoolHtml(html: string, poolId: string): any {
  // Extract pool number
  const poolNumMatch = html.match(/Pool #(\d+)/);
  const poolNumber = poolNumMatch ? parseInt(poolNumMatch[1]) : 0;

  // Extract strip info
  const stripMatch = html.match(/On strip\s+([^\s<]+)/);
  const strip = stripMatch ? stripMatch[1] : null;

  // Extract fencers
  const fencers: any[] = [];
  const rowPattern = /<tr class="poolRow">([\s\S]*?)<\/tr>/g;
  let rowMatch;

  while ((rowMatch = rowPattern.exec(html)) !== null) {
    const row = rowMatch[1];

    // Name
    const nameMatch = row.match(/poolCompName[^>]*>([^<]+)/);
    const name = nameMatch ? decodeHtmlEntities(nameMatch[1].trim()) : "Unknown";

    // Club/affiliation
    const affilMatch = row.match(/poolAffil[^>]*>([\s\S]*?)<\/span>/);
    let club = "";
    let country = "USA";
    if (affilMatch) {
      const affilText = affilMatch[1].replace(/<[^>]+>/g, '').trim();
      const parts = affilText.split('/').map((p: string) => p.trim());
      club = parts[0] || "";
      // Last part might be country
      const countryMatch = affilMatch[1].match(/flag(\w{3})/);
      if (countryMatch) country = countryMatch[1];
    }

    // Pool position (seed within pool)
    const posMatch = row.match(/poolPos[^>]*>(\d+)/);
    const seed = posMatch ? parseInt(posMatch[1]) : 0;

    // Scores (V5, D3, etc.)
    const scorePattern = /poolScore(?:V|D)[^>]*>\s*<span>([VD])(\d+)<\/span>/g;
    const scores: { win: boolean; score: string }[] = [];
    let scoreMatch;
    while ((scoreMatch = scorePattern.exec(row)) !== null) {
      scores.push({
        win: scoreMatch[1] === 'V',
        score: `${scoreMatch[1]}${scoreMatch[2]}`,
      });
    }

    // Results (V count, V/M, TS, TR, Ind)
    const resultPattern = /poolResult[^>]*>([^<]+)/g;
    const results: string[] = [];
    let resMatch;
    while ((resMatch = resultPattern.exec(row)) !== null) {
      results.push(resMatch[1].trim());
    }

    fencers.push({
      name,
      club,
      country,
      seed,
      scores,
      victories: results[0] ? parseInt(results[0]) : 0,
      vm: results[1] || "",
      ts: results[2] ? parseInt(results[2]) : 0,
      tr: results[3] ? parseInt(results[3]) : 0,
      ind: results[4] || "",
    });
  }

  return {
    poolId,
    poolNumber,
    strip,
    fencers,
  };
}

async function handleFIESearch(url: URL): Promise<Response> {
  const query = (url.searchParams.get("q") || "").toLowerCase();

  // FIE competitions page — fetch and parse
  const fieUrl = "https://fie.org/competitions";
  const resp = await fetch(fieUrl, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });

  const html = await resp.text();

  // FIE is a Vue SPA — HTML won't have results
  // Return a note about this limitation
  return jsonResponse({
    message: "FIE is a SPA — server-side fetch returns shell only. Need browser or FIE API.",
    query,
  });
}

async function handleFTLResults(eventId: string): Promise<Response> {
  const headers = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" };
  const resp = await fetch(`https://www.fencingtimelive.com/events/results/data/${eventId}`, { headers });
  
  if (!resp.ok) {
    return jsonResponse({ eventId, error: "Failed to fetch results" }, 502);
  }

  const data: any = await resp.json();
  const rianEntry = (data || []).find((e: any) => e.name === "WEI Rian" || (e.name || "").startsWith("WEI Rian"));
  
  return jsonResponse({
    eventId,
    total: (data || []).length,
    rianEntry: rianEntry || null,
  });
}

async function handleFTLDE(eventId: string): Promise<Response> {
  const headers = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" };

  // Step 1: Get tableau link from results page
  const resultsResp = await fetch(`https://www.fencingtimelive.com/events/results/${eventId}`, { headers });
  const resultsHtml = await resultsResp.text();

  const tableauMatch = resultsHtml.match(/\/tableaus\/scores\/([A-F0-9]{32})\/([A-F0-9]{32})/);
  if (!tableauMatch) {
    return jsonResponse({ eventId, de: null, message: "No DE tableau found" });
  }

  const tableauId = tableauMatch[2];

  // Step 2: Get tree info
  const treesResp = await fetch(`https://www.fencingtimelive.com/tableaus/scores/${eventId}/${tableauId}/trees`, { headers });
  const trees: any = await treesResp.json();
  
  if (!trees || trees.length === 0) {
    return jsonResponse({ eventId, de: null, message: "No tableau trees found" });
  }

  const tree = trees[0];
  const treeGuid = tree.guid;
  const numTables = tree.numTables;

  // Step 3: Fetch the full tableau HTML (table 0 has all data)
  const tableResp = await fetch(
    `https://www.fencingtimelive.com/tableaus/scores/${eventId}/${tableauId}/trees/${treeGuid}/tables/0/${numTables}`,
    { headers }
  );
  const tableHtml = await tableResp.text();

  // Step 4: Parse Rian's DE path from the HTML
  // The tableau HTML has rows with fencer entries and scores
  // We need to find WEI Rian and trace his path through the bracket
  
  const matches: any[] = [];
  
  // Find all fencer entries and scores
  // Each bout appears as: seed + name in a cell, score in an adjacent cell
  // Pattern: <span class='tseed'>(N)</span><span class='tcln'>LAST</span> <span class='tcfn'>First</span>
  
  // Find Rian's DE seed
  const rianSeedMatch = tableHtml.match(/tseed[^>]*>\((\d+T?)\)[^<]*<\/span><span class='tcln'>WEI<\/span>\s*<span class='tcfn'>Rian<\/span>/);
  const rianDESeed = rianSeedMatch ? rianSeedMatch[1] : "?";
  
  // Parse all bouts from the tableau
  // Score pattern: <span class='tsco'>15 - 9<br/>...
  // We need to find bouts involving WEI Rian
  
  // Strategy: find all cells with WEI Rian, determine column (round), 
  // and find the adjacent score cell
  
  // Simpler approach: find "WEI" + "Rian" appearances and their context
  const rianPattern = /WEI<\/span>\s*<span class='tcfn'>Rian/g;
  let rianMatch;
  const rianPositions: number[] = [];
  while ((rianMatch = rianPattern.exec(tableHtml)) !== null) {
    rianPositions.push(rianMatch.index);
  }

  // For each Rian appearance, look backwards for seed and forwards/backwards for score
  // Round headers: "Table of 128", "Table of 64", etc.
  const roundHeaders = ["Table of 256", "Table of 128", "Table of 64", "Table of 32", "Table of 16", "Table of 8", "Semi-Finals", "Finals"];
  
  // Parse all scores near Rian's appearances
  // Find cells containing WEI Rian and the score cells in the same <tr> group
  
  // Actually, let's use a different approach: parse all bouts
  // Each bout has: winner name in one column, score in a tsco span
  // If WEI Rian appears as a winner, that's a win. If the score is after a different name, that's a loss.
  
  // Find all score cells
  const scorePattern = /tsco'>(\d+)\s*-\s*(\d+)/g;
  let scoreMatch;
  const allScores: { index: number; s1: number; s2: number }[] = [];
  while ((scoreMatch = scorePattern.exec(tableHtml)) !== null) {
    allScores.push({ index: scoreMatch.index, s1: parseInt(scoreMatch[1]), s2: parseInt(scoreMatch[2]) });
  }

  // For each Rian position, find the nearest score
  for (const rianPos of rianPositions) {
    // Find the closest score to this Rian mention
    let closestScore = null;
    let minDist = Infinity;
    for (const score of allScores) {
      const dist = Math.abs(score.index - rianPos);
      if (dist < minDist) {
        minDist = dist;
        closestScore = score;
      }
    }
    
    if (closestScore && minDist < 3000) {
      // Determine if this is a win or loss
      // If Rian's name appears BEFORE the score in a winner cell, it's a win
      // The winner appears with the score in the same row area
      
      // Look for the opponent near this score
      const scoreArea = tableHtml.substring(
        Math.max(0, closestScore.index - 1500),
        Math.min(tableHtml.length, closestScore.index + 200)
      );
      
      // Find fencer names near this score
      const namePattern = /tcln'>([^<]+)<\/span>\s*<span class='tcfn'>([^<]+)/g;
      const nearbyNames: { lastName: string; firstName: string; index: number }[] = [];
      let nameMatch;
      while ((nameMatch = namePattern.exec(scoreArea)) !== null) {
        nearbyNames.push({
          lastName: nameMatch[1],
          firstName: nameMatch[2],
          index: nameMatch.index,
        });
      }
      
      // Determine if Rian won (Rian appears in the same td/row cluster as the score)
      const isRianNearScore = scoreArea.includes("WEI</span>") && scoreArea.includes("Rian");
      const opponent = nearbyNames.find(n => n.lastName !== "WEI" && n.lastName !== "- BYE -");
      
      if (opponent) {
        // Check if score cell is after Rian's name (win) or before (loss)
        // In FTL tableau, the score appears in the loser's side
        // So if Rian is in the same cell group as the score, the score is FROM that bout
        // The winner's score comes first (higher number)
        const s1 = closestScore.s1;
        const s2 = closestScore.s2;
        const win = s1 > s2 ? isRianNearScore : !isRianNearScore;
        
        matches.push({
          opponent: decodeHtmlEntities(`${opponent.lastName} ${opponent.firstName}`),
          score: `${s1}-${s2}`,
          win: s1 > s2, // In FTL, winner's score is always first
          raw: true, // mark as needing manual verification
        });
      }
    }
  }
  
  // Deduplicate matches (same opponent may appear multiple times in HTML)
  const seen = new Set<string>();
  const uniqueMatches = matches.filter(m => {
    const key = `${m.opponent}-${m.score}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return jsonResponse({
    eventId,
    tableauId,
    rianDESeed,
    matches: uniqueMatches,
    totalRianAppearances: rianPositions.length,
  });
}

function jsonResponse(data: any, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...CORS_HEADERS,
    },
  });
}
