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

async function handleFTLEvent(eventId: string): Promise<Response> {
  // Fetch event schedule page to get saber events
  const ftlUrl = `https://www.fencingtimelive.com/tournaments/eventSchedule/${eventId}`;
  const resp = await fetch(ftlUrl, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });

  const html = await resp.text();

  // Parse event links from HTML
  const eventPattern = /href="\/events\/view\/([A-F0-9]+)"[^>]*>([^<]+)/gi;
  const events: { id: string; name: string }[] = [];
  let match;
  while ((match = eventPattern.exec(html)) !== null) {
    const name = match[2].trim();
    // Only saber events
    if (name.toLowerCase().includes("saber") || name.toLowerCase().includes("sabre")) {
      events.push({ id: match[1], name });
    }
  }

  return jsonResponse({ tournamentId: eventId, events });
}

async function handleFTLPools(eventId: string): Promise<Response> {
  // Fetch event results page to find pool link
  const resultsUrl = `https://www.fencingtimelive.com/events/results/${eventId}`;
  const resp = await fetch(resultsUrl, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });

  const html = await resp.text();

  // Find pool scores link
  const poolPattern = /href="\/pools\/scores\/([^"]+)"/;
  const poolMatch = poolPattern.exec(html);

  if (!poolMatch) {
    return jsonResponse({ eventId, pools: null, message: "No pool data found (page may require JS rendering)" });
  }

  const poolUrl = `https://www.fencingtimelive.com/pools/scores/${poolMatch[1]}`;

  return jsonResponse({
    eventId,
    poolUrl,
    message: "Pool URL found — client needs browser rendering to extract pool data",
  });
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

function jsonResponse(data: any, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...CORS_HEADERS,
    },
  });
}
