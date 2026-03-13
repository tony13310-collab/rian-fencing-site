#!/usr/bin/env node
import fs from 'fs';

const b3 = JSON.parse(fs.readFileSync('scripts/rescrape-batch3.json', 'utf8'));
const resolved = JSON.parse(fs.readFileSync('scripts/ftl-event-ids-resolved.json', 'utf8'));

// Build tournament name map from resolved
const tournMap = {};
for (const r of resolved) {
  const key = r.date + '_' + r.event.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/,'');
  tournMap[key] = r.tourn;
}

// Load events.ts to get location data
const eventsSrc = fs.readFileSync('src/data/events.ts', 'utf8');

let src = fs.readFileSync('src/data/eventDetails.ts', 'utf8');

// Find insertion point - before the closing };
const insertBefore = '\n};\n';
const insertIdx = src.lastIndexOf(insertBefore);

let entries = '';
let count = 0;

for (const e of b3) {
  const id = e.eventId;
  if (src.includes('"' + id + '"')) {
    console.log('  EXISTS', id);
    continue;
  }
  
  const tourn = tournMap[id] || 'Unknown';
  const eventName = id.replace(/^\d{4}-\d{2}-\d{2}_/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()).replace(/^Y /, 'Y-').replace(/Men S/,'Men\'s');
  const date = id.match(/^(\d{4}-\d{2}-\d{2})/)?.[1] || '';
  
  // Get location from events.ts
  let location = '';
  const evLine = eventsSrc.split('\n').find(l => l.includes('"' + date + '"') && l.includes('"' + resolved.find(r => r.date === date && tournMap[id]?.includes(r.tourn.split(' ')[0]))?.event + '"'));
  
  const pool = e.pool;
  const boutsStr = pool.bouts.map(b => 
    `        { opponent: ${JSON.stringify(b.opponent)}, club: ${JSON.stringify(b.club)}, score: ${JSON.stringify(b.score)}, win: ${b.win} }`
  ).join(',\n');
  
  entries += `
  "${id}": {
    id: "${id}",
    date: "${date}",
    tournament: ${JSON.stringify(tourn)},
    event: ${JSON.stringify(e.eventId.replace(/^\d{4}-\d{2}-\d{2}_/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()).replace(/^Y /, 'Y-').replace(/Men S/,"Men's").replace(/Mixed S/,"Mixed S"))},
    location: "",
    place: ${e.place},
    total: ${e.total},
    rating: "",
    pool: {
      poolNumber: 0,
      seed: null,
      bouts: [
${boutsStr}
      ],
      wins: ${pool.wins},
      losses: ${pool.losses},
      touchesScored: ${pool.touchesScored},
      touchesReceived: ${pool.touchesReceived},
      indicator: ${pool.indicator},
      poolRank: null,
      poolSize: ${pool.poolSize || pool.bouts.length + 1},
    },
    de: null,
    summary: {
      place: ${e.place},
      total: ${e.total},
      poolRecord: "${pool.wins}-${pool.losses}",
      deSeed: null,
    },
  },`;
  count++;
  console.log('  ADD', id, `pool ${pool.wins}-${pool.losses}`);
}

if (count > 0) {
  src = src.slice(0, insertIdx) + entries + src.slice(insertIdx);
  fs.writeFileSync('src/data/eventDetails.ts', src);
  console.log(`\nAdded ${count} entries to eventDetails.ts`);
} else {
  console.log('\nNothing to add');
}
