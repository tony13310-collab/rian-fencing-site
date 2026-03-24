#!/usr/bin/env node
/**
 * Auto-update: check for new events, scrape data, update files, build & deploy
 * 
 * Steps:
 * 1. Fetch Rian's FT history → find events not yet in events.ts
 * 2. For each new event: find FTL event ID, scrape pool + DE
 * 3. Update events.ts, eventDetails.ts, opponents.ts
 * 4. Build + deploy if changes found
 */

import fs from 'fs';
import https from 'https';
import { execSync } from 'child_process';

const API = 'https://rian-fencing-api.tony13310.workers.dev';
const RIAN_FT_ID = '100259666';
const RIAN_FT_URL = `https://fencingtracker.com/p/${RIAN_FT_ID}/Rian-Wei`;

// ─── Helpers ───

function fetchJSON(url) {
  return fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json' }
  }).then(r => r.ok ? r.json() : null);
}

function fetchHTML(url) {
  return fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'text/html' }
  }).then(r => r.ok ? r.text() : null);
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ─── Step 1: Get current events from events.ts ───

function getExistingEvents() {
  const src = fs.readFileSync('src/data/events.ts', 'utf8');
  const dates = [...src.matchAll(/date:\s*"(\d{4}-\d{2}-\d{2})"/g)].map(m => m[1]);
  const events = [...src.matchAll(/event:\s*"([^"]+)"/g)].map(m => m[1]);
  const existing = new Set();
  for (let i = 0; i < dates.length; i++) {
    existing.add(`${dates[i]}|${events[i]}`);
  }
  return existing;
}

// ─── Step 2: Fetch Rian's FT history ───

async function fetchFTHistory() {
  const html = await fetchHTML(RIAN_FT_URL);
  if (!html) { console.log('Failed to fetch FT history'); return []; }

  const events = [];
  // Parse table rows: Date, Tournament, Event (link), Place, Rating, Class
  const rowRegex = /<tr[^>]*>\s*<td[^>]*>([\s\S]*?)<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>\s*<\/tr>/g;
  
  let match;
  // Skip header rows by checking for actual dates
  while ((match = rowRegex.exec(html)) !== null) {
    const dateRaw = match[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
    const tournament = match[2].replace(/<[^>]+>/g, '').trim();
    const eventCell = match[3];
    const placeRaw = match[4].replace(/<[^>]+>/g, '').trim();
    const rating = match[5].replace(/<[^>]+>/g, '').trim();
    
    // Extract event name from link
    const eventNameMatch = eventCell.match(/>([^<]+)<\/a>/);
    if (!eventNameMatch) continue;
    const eventName = eventNameMatch[1].trim();
    
    // Extract FT event ID from link
    const ftEventIdMatch = eventCell.match(/\/event\/(\d+)\/results/);
    const ftEventId = ftEventIdMatch ? ftEventIdMatch[1] : null;
    
    // Parse date - handle formats like "Feb 15" and "Mar 8, '25"
    const dateStr = dateRaw.replace(/,\s*'\d{2}$/, '').replace(/,\s*$/, '');
    
    // Parse place
    const placeMatch = placeRaw.match(/(\d+)\s*\/\s*(\d+)/);
    const place = placeMatch ? parseInt(placeMatch[1]) : null;
    const total = placeMatch ? parseInt(placeMatch[2]) : null;

    events.push({
      dateRaw,
      tournament,
      event: eventName,
      ftEventId,
      place,
      total,
      rating: rating || '',
    });
  }

  return events;
}

// ─── Step 3: Parse FT date into ISO date ───

function parseFTDate(dateRaw) {
  // Formats: "Feb 15" (current fencing season), "Mar 8, '25", "Nov 24, '18"
  const cleaned = dateRaw.replace(/\s+/g, ' ').trim();
  
  const yearMatch = cleaned.match(/'(\d{2})$/);
  const monthDay = cleaned.replace(/,?\s*'\d{2}$/, '').trim();
  
  let year;
  if (yearMatch) {
    year = 2000 + parseInt(yearMatch[1]);
  } else {
    // No year suffix = current fencing season
    // Current season: July YYYY to June YYYY+1
    // If month is Jul-Dec → use (currentYear - 1) if we're in Jan-Jun, else currentYear
    // If month is Jan-Jun → use currentYear
    const now = new Date();
    const currentYear = now.getFullYear();
    const testDate = new Date(`${monthDay}, ${currentYear}`);
    if (isNaN(testDate.getTime())) return null;
    
    const month = testDate.getMonth() + 1; // 1-12
    if (month >= 7) {
      // Jul-Dec: belongs to the start of current fencing season
      // If we're currently in Jan-Jun, these are from last calendar year
      year = now.getMonth() + 1 < 7 ? currentYear - 1 : currentYear;
    } else {
      // Jan-Jun: same calendar year as now
      year = currentYear;
    }
    
    // Safety: don't allow future dates
    const candidate = new Date(`${monthDay}, ${year}`);
    if (candidate > now) {
      year--;
    }
  }
  
  const parsed = new Date(`${monthDay}, ${year}`);
  if (isNaN(parsed.getTime())) return null;
  
  return parsed.toISOString().slice(0, 10);
}

// ─── Step 4: Determine event metadata ───

function categorizeEvent(eventName) {
  if (/Y-8/i.test(eventName)) return { category: 'Y-8', level: guessLevel(eventName) };
  if (/Y-10/i.test(eventName)) return { category: 'Y-10', level: guessLevel(eventName) };
  if (/Y-12/i.test(eventName)) return { category: 'Y-12', level: guessLevel(eventName) };
  if (/Y-14/i.test(eventName)) return { category: 'Y-14', level: guessLevel(eventName) };
  if (/Cadet/i.test(eventName)) return { category: 'Cadet', level: guessLevel(eventName) };
  if (/Junior/i.test(eventName)) return { category: 'Junior', level: guessLevel(eventName) };
  if (/Div\s*(ision)?\s*(I|1)/i.test(eventName)) return { category: 'Div I', level: guessLevel(eventName) };
  if (/Senior/i.test(eventName)) return { category: 'Senior', level: guessLevel(eventName) };
  return { category: 'Div I', level: guessLevel(eventName) };
}

function guessLevel(tournamentName) {
  if (/\bNAC\b/i.test(tournamentName)) return 'National';
  if (/\bSJCC\b/i.test(tournamentName)) return 'National';
  if (/Junior\s*Olympics/i.test(tournamentName)) return 'National';
  if (/Summer\s*Nationals?|National\s*Championships?/i.test(tournamentName)) return 'National';
  if (/\bSYC\b/i.test(tournamentName)) return 'SYC';
  if (/\bRYC\b|RJCC|ROC/i.test(tournamentName)) return 'RYC';
  return 'Local';
}

function getSeason(dateStr) {
  const year = parseInt(dateStr.slice(0, 4));
  const month = parseInt(dateStr.slice(5, 7));
  const sy = month >= 7 ? year : year - 1;
  return `${sy}-${sy + 1}`;
}

// ─── Step 5: Find FTL event ID ───

async function findFTLEventId(date, eventName, tournament) {
  // Search FTL for tournaments around that date
  const from = new Date(new Date(date).getTime() - 5 * 86400000).toISOString().slice(0, 10);
  const to = new Date(new Date(date).getTime() + 5 * 86400000).toISOString().slice(0, 10);
  
  const data = await fetchJSON(`${API}/api/ftl/search?from=${from}&to=${to}`);
  if (!data || !Array.isArray(data)) return null;
  
  // Find matching tournament
  for (const t of data) {
    const tName = (t.name || t.Name || '').toLowerCase();
    const tournLower = tournament.toLowerCase();
    // Fuzzy match on tournament name
    const keywords = tournLower.split(/\s+/).filter(w => w.length > 3);
    const matchCount = keywords.filter(k => tName.includes(k)).length;
    if (matchCount >= Math.min(2, keywords.length)) {
      // Found tournament, now get its saber events
      const eventData = await fetchJSON(`${API}/api/ftl/event/${t.id || t.Id}`);
      if (!eventData || !eventData.events) continue;
      
      // Find matching saber event
      for (const evt of eventData.events) {
        const eName = (evt.name || '').toLowerCase();
        if (eName.includes('saber') && eName.includes('men')) {
          // Check category match
          const evtLower = eventName.toLowerCase();
          if (eName.includes(evtLower.split("'s")[0].split(' ')[0].toLowerCase())) {
            return evt.id;
          }
        }
      }
    }
  }
  return null;
}

// ─── Step 6: Fetch pool + DE data ───

async function fetchPoolData(ftlEventId) {
  const data = await fetchJSON(`${API}/api/ftl/pools/${ftlEventId}`);
  if (!data) return null;
  return data;
}

async function fetchDEData(ftlEventId) {
  const data = await fetchJSON(`${API}/api/ftl/de/${ftlEventId}`);
  if (!data || !data.matches || data.matches.length === 0) return null;
  return data.matches;
}

// ─── Main ───

async function main() {
  console.log('🔄 Auto-update starting...\n');
  
  // Step 1: Get existing events
  const existing = getExistingEvents();
  console.log(`📦 Current events in database: ${existing.size}`);
  
  // Step 2: Fetch FT history
  console.log('🌐 Fetching FencingTracker history...');
  const ftEvents = await fetchFTHistory();
  console.log(`   Found ${ftEvents.length} events on FT`);
  
  if (ftEvents.length === 0) {
    console.log('❌ Could not parse FT history. Aborting.');
    process.exit(1);
  }
  
  // Step 3: Find new events
  const newEvents = [];
  
  for (const evt of ftEvents) {
    const date = parseFTDate(evt.dateRaw);
    if (!date) continue;
    
    const key = `${date}|${evt.event}`;
    if (!existing.has(key) && evt.place !== null) {
      // Only include events with results (skip future registrations)
      newEvents.push({ ...evt, date });
    }
  }
  
  if (newEvents.length === 0) {
    console.log('\n✅ No new events found. Everything is up to date!');
    return false;
  }
  
  console.log(`\n🆕 Found ${newEvents.length} new event(s):`);
  for (const evt of newEvents) {
    console.log(`   ${evt.date} | ${evt.tournament} | ${evt.event} | ${evt.place}/${evt.total}`);
  }
  
  // Step 4: For each new event, gather data
  const fullEvents = [];
  for (const evt of newEvents) {
    console.log(`\n📊 Processing: ${evt.date} ${evt.event}...`);
    
    const { category } = categorizeEvent(evt.event);
    const level = guessLevel(evt.tournament);
    const season = getSeason(evt.date);
    
    // Find FTL event ID
    console.log('   Finding FTL event ID...');
    const ftlEventId = await findFTLEventId(evt.date, evt.event, evt.tournament);
    if (ftlEventId) {
      console.log(`   FTL Event ID: ${ftlEventId}`);
    } else {
      console.log('   ⚠️ No FTL event ID found');
    }
    
    // Fetch pool data
    let poolData = null;
    if (ftlEventId) {
      console.log('   Fetching pool data...');
      poolData = await fetchPoolData(ftlEventId);
      if (poolData) {
        console.log(`   Pool: ${poolData.bouts?.length || 0} bouts`);
      }
      await sleep(500);
    }
    
    // Fetch DE data
    let deData = null;
    if (ftlEventId) {
      console.log('   Fetching DE data...');
      deData = await fetchDEData(ftlEventId);
      if (deData) {
        console.log(`   DE: ${deData.length} bouts`);
      }
      await sleep(500);
    }
    
    fullEvents.push({
      date: evt.date,
      tournament: evt.tournament,
      event: evt.event,
      category,
      level,
      place: evt.place,
      total: evt.total,
      rating: evt.rating,
      season,
      ftlEventId: ftlEventId || '',
      poolData,
      deData,
    });
  }
  
  // Step 5: Write updates to data files
  console.log('\n💾 Updating data files...');
  
  for (const evt of fullEvents) {
    // Add to events.ts
    addEventToEventsTS(evt);
    
    // Add to eventDetails.ts
    addEventToDetailsTS(evt);
    
    // Add opponents to opponents.ts
    addOpponentsFromEvent(evt);
  }
  
  console.log('✅ Data files updated');
  return true;
}

// ─── File Update Functions ───

function addEventToEventsTS(evt) {
  let src = fs.readFileSync('src/data/events.ts', 'utf8');
  
  // Build pool bouts string
  let poolBoutsStr = '';
  if (evt.poolData?.bouts && evt.poolData.bouts.length > 0) {
    const bouts = evt.poolData.bouts.map(b => 
      `          { opponent: "${esc(b.opponent)}", club: "${esc(b.club || '')}", score: "${b.score}", win: ${b.win} }`
    ).join(',\n');
    poolBoutsStr = `poolBouts: [\n${bouts}\n        ], `;
  }
  
  const ftlStr = evt.ftlEventId ? `ftlEventId: "${evt.ftlEventId}",` : '';
  
  // Find the right season section and insert
  const seasonMarker = `...s("${evt.season}"`;
  const insertIdx = src.indexOf(seasonMarker);
  
  if (insertIdx === -1) {
    console.log(`   ⚠️ Season ${evt.season} not found in events.ts — adding new season`);
    // Add before the closing ];
    const endIdx = src.lastIndexOf('];');
    const newSeason = `
  // === ${evt.season} Season ===
  ...s("${evt.season}", [
    { ${poolBoutsStr}${ftlStr}
    date: "${evt.date}", tournament: "${esc(evt.tournament)}", event: "${esc(evt.event)}", category: "${evt.category}", level: "${evt.level}", place: ${evt.place}, total: ${evt.total}, rating: "${evt.rating}" },
  ]),
`;
    src = src.substring(0, endIdx) + newSeason + src.substring(endIdx);
  } else {
    // Insert after the opening [ of this season's array
    const bracketIdx = src.indexOf('[', insertIdx + seasonMarker.length);
    const insertPoint = bracketIdx + 1;
    const newEvent = `
    { ${poolBoutsStr}${ftlStr}
    date: "${evt.date}", tournament: "${esc(evt.tournament)}", event: "${esc(evt.event)}", category: "${evt.category}", level: "${evt.level}", place: ${evt.place}, total: ${evt.total}, rating: "${evt.rating}" },`;
    src = src.substring(0, insertPoint) + newEvent + src.substring(insertPoint);
  }
  
  fs.writeFileSync('src/data/events.ts', src);
}

function addEventToDetailsTS(evt) {
  let src = fs.readFileSync('src/data/eventDetails.ts', 'utf8');
  const slug = evt.event.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
  const key = `${evt.date}_${slug}`;
  
  // Check if already exists
  if (src.includes(`"${key}"`)) return;
  
  // Build pool section
  let poolStr = 'pool: undefined';
  if (evt.poolData) {
    const p = evt.poolData;
    const boutsStr = (p.bouts || []).map(b => 
      `{ opponent: "${esc(b.opponent)}", club: "${esc(b.club || '')}", score: "${b.score}", win: ${b.win} }`
    ).join(', ');
    poolStr = `pool: { poolNumber: ${p.poolNumber || 0}, seed: ${p.seed ?? 'null'}, bouts: [${boutsStr}], wins: ${p.wins || 0}, losses: ${p.losses || 0}, touchesScored: ${p.touchesScored || 0}, touchesReceived: ${p.touchesReceived || 0}, indicator: ${p.indicator || 0}, poolRank: ${p.poolRank ?? 'null'}, poolSize: ${p.poolSize ?? 'null'}, deSeed: ${p.deSeed ?? 'null'} }`;
  }
  
  // Build DE section
  let deStr = 'de: []';
  if (evt.deData && evt.deData.length > 0) {
    const bouts = evt.deData.map(b => 
      `      { round: "${esc(b.round)}", opponent: "${esc(b.opponent)}", club: "${esc(b.club || '')}", score: "${b.score}", win: ${b.win} }`
    ).join(',\n');
    deStr = `de: [\n${bouts}\n    ]`;
  }
  
  // Insert before the closing }; of eventDetails
  const endMarker = '};';
  const lastEnd = src.lastIndexOf(endMarker);
  const newEntry = `  "${key}": {\n    id: "${key}",\n    date: "${evt.date}",\n    tournament: "${esc(evt.tournament)}",\n    event: "${esc(evt.event)}",\n    location: "",\n    place: ${evt.place}, total: ${evt.total},\n    rating: "${evt.rating}",\n    ${poolStr},\n    ${deStr},\n    ${evt.ftlEventId ? `ftlEventId: "${evt.ftlEventId}",` : ''}\n  },\n`;
  src = src.substring(0, lastEnd) + newEntry + src.substring(lastEnd);
  
  fs.writeFileSync('src/data/eventDetails.ts', src);
}

function addOpponentsFromEvent(evt) {
  let src = fs.readFileSync('src/data/opponents.ts', 'utf8');
  
  // Collect all bouts from this event
  const bouts = [];
  
  // Pool bouts
  if (evt.poolData?.bouts) {
    for (const b of evt.poolData.bouts) {
      bouts.push({
        opponent: b.opponent,
        type: 'Pool',
        score: b.score,
        win: b.win,
        date: evt.date,
        tournament: evt.tournament,
        event: evt.event,
      });
    }
  }
  
  // DE bouts
  if (evt.deData) {
    for (const b of evt.deData) {
      bouts.push({
        opponent: b.opponent,
        type: 'DE',
        score: b.score,
        win: b.win,
        date: evt.date,
        tournament: evt.tournament,
        event: evt.event,
      });
    }
  }
  
  // For each opponent, add bout to their entry
  for (const bout of bouts) {
    const name = bout.opponent;
    if (!name || name === 'Unknown' || name === 'BYE') continue;
    
    // Check if opponent already has this bout (by date + score)
    const boutKey = `${bout.date}.*${bout.score}`;
    if (src.includes(`"${name}"`) && new RegExp(boutKey).test(src)) continue;
    
    const boutStr = `{ date: "${bout.date}", tournament: "${esc(bout.tournament)}", event: "${esc(bout.event)}", type: "${bout.type}", score: "${bout.score}", win: ${bout.win} }`;
    
    if (src.includes(`"${name}"`)) {
      // Add bout to existing opponent's bouts array
      const nameIdx = src.indexOf(`"${name}"`);
      const boutsIdx = src.indexOf('bouts: [', nameIdx);
      if (boutsIdx !== -1) {
        const insertAt = boutsIdx + 'bouts: ['.length;
        src = src.substring(0, insertAt) + '\n      ' + boutStr + ',' + src.substring(insertAt);
      }
    } else {
      // Add new opponent entry before closing };
      const endMarker = '};';
      const lastEnd = src.lastIndexOf(endMarker);
      const newEntry = `  "${name}": {\n    birthYear: 0,\n    wins: 0,\n    losses: 0,\n    total: 0,\n    winRate: 0,\n    bouts: [\n      ${boutStr},\n    ],\n  },\n`;
      src = src.substring(0, lastEnd) + newEntry + src.substring(lastEnd);
    }
  }
  
  fs.writeFileSync('src/data/opponents.ts', src);
}

function esc(s) {
  return (s || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

// ─── Run ───

try {
  const hasChanges = await main();
  
  if (hasChanges) {
    const dryRun = process.argv.includes('--dry-run');
    if (dryRun) {
      console.log('\n🧪 DRY RUN — skipping build/deploy. Check git diff for changes.');
      process.exit(0);
    }
    
    console.log('\n🔨 Building...');
    execSync('npx next build', { stdio: 'inherit', cwd: '.' });
    
    console.log('\n🚀 Deploying...');
    execSync('bash scripts/deploy.sh', { stdio: 'inherit', cwd: '.' });
    
    console.log('\n📝 Committing...');
    execSync('git add -A && git commit -m "auto: update data from FencingTracker" && git push origin main', { 
      stdio: 'inherit', cwd: '.' 
    });
    
    console.log('\n🎉 Auto-update complete!');
  }
} catch (err) {
  console.error('❌ Auto-update failed:', err.message);
  process.exit(1);
}
