// Import verified rescrape data (batch1 + batch2) into eventDetails.ts
// These have full scores (5-3 format) and validated place/total
import fs from 'fs';

const eventsSrc = fs.readFileSync('src/data/events.ts', 'utf-8');
let detailsSrc = fs.readFileSync('src/data/eventDetails.ts', 'utf-8');

// Load both batches
let allData = [];
for (const file of ['scripts/rescrape-results.json', 'scripts/rescrape-batch2.json']) {
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
    allData = allData.concat(data);
    console.log(`Loaded ${data.length} entries from ${file}`);
  } catch (e) {
    console.log(`Could not load ${file}: ${e.message}`);
  }
}

console.log(`Total rescrape entries: ${allData.length}`);

// Build expected place/total from events.ts
const expectedData = {};
for (const line of eventsSrc.split('\n')) {
  const dateM = line.match(/date:\s*"([^"]+)"/);
  const eventM = line.match(/event:\s*"([^"]+)"/);
  const placeM = line.match(/place:\s*(\d+)/);
  const totalM = line.match(/total:\s*(\d+)/);
  const tournM = line.match(/tournament:\s*"([^"]+)"/);
  const ratingM = line.match(/rating:\s*"([^"]*)"/);
  const seedM = line.match(/poolSeed:\s*(\d+)/);
  if (dateM && eventM && placeM && totalM) {
    const slug = eventM[1].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const id = `${dateM[1]}_${slug}`;
    expectedData[id] = {
      place: parseInt(placeM[1]),
      total: parseInt(totalM[1]),
      tournament: tournM ? tournM[1] : '',
      rating: ratingM ? ratingM[1] : '',
      poolSeed: seedM ? parseInt(seedM[1]) : null,
    };
  }
}

// Find existing IDs
const existingIds = new Set();
for (const m of detailsSrc.matchAll(/"(\d{4}-\d{2}-\d{2}_[^"]+)"/g)) {
  existingIds.add(m[1]);
}
console.log(`Existing entries in eventDetails: ${existingIds.size}`);

// Validate and prepare entries
const toImport = [];
let validated = 0, failed = 0;

for (const entry of allData) {
  const eid = entry.eventId;
  const expected = expectedData[eid];
  
  if (!expected) {
    console.log(`  SKIP ${eid}: not in events.ts`);
    failed++;
    continue;
  }
  
  if (existingIds.has(eid)) {
    console.log(`  EXISTS ${eid}`);
    continue;
  }
  
  // Validate place/total
  if (entry.place !== expected.place || entry.total !== expected.total) {
    console.log(`  FAIL ${eid}: place/total mismatch (scraped ${entry.place}/${entry.total} vs expected ${expected.place}/${expected.total})`);
    failed++;
    continue;
  }
  
  // Validate pool stats
  const pool = entry.pool;
  let calcWins = 0, calcLosses = 0, calcTS = 0, calcTR = 0;
  for (const bout of pool.bouts) {
    const [a, b] = bout.score.split('-').map(Number);
    if (bout.win) {
      calcWins++;
      calcTS += a;
      calcTR += b;
    } else {
      calcLosses++;
      calcTS += a;
      calcTR += b;
    }
  }
  
  if (calcWins !== pool.wins || calcLosses !== pool.losses) {
    console.log(`  WARN ${eid}: W/L calc mismatch (bouts: ${calcWins}-${calcLosses} vs stated: ${pool.wins}-${pool.losses})`);
  }
  
  toImport.push({
    id: eid,
    date: eid.split('_')[0],
    tournament: expected.tournament,
    event: entry.pool.bouts.length > 0 ? eid.split('_').slice(1).join('_') : '',
    place: entry.place,
    total: entry.total,
    rating: expected.rating,
    pool: {
      seed: expected.poolSeed || pool.seed || null,
      bouts: pool.bouts,
      wins: calcWins,
      losses: calcLosses,
      touchesScored: calcTS,
      touchesReceived: calcTR,
      indicator: calcTS - calcTR,
      poolSize: pool.bouts.length + 1,
    }
  });
  validated++;
  console.log(`  OK ${eid}: pool ${calcWins}-${calcLosses} (${calcTS}-${calcTR}, ind ${calcTS-calcTR})`);
}

console.log(`\nValidated: ${validated}, Failed: ${failed}, Existing: ${existingIds.size}`);

if (toImport.length === 0) {
  console.log('Nothing to import');
  process.exit(0);
}

// Generate TS code
const insertPoint = detailsSrc.lastIndexOf('};');
let code = '';
for (const e of toImport) {
  const tourn = e.tournament.replace(/"/g, '\\"');
  // Reconstruct event name from id
  const eventSlug = e.id.split('_').slice(1).join('_');
  const eventName = expectedData[e.id] ? 
    eventsSrc.split('\n').find(l => l.includes(`"${e.id.split('_')[0]}"`) && l.includes(eventSlug.replace(/-/g, '').substring(0, 5)))
    : null;
  // Just use the full match from events.ts
  let realEvent = '';
  for (const line of eventsSrc.split('\n')) {
    if (line.includes(`date: "${e.date}"`) && line.includes(`tournament: "${e.tournament}"`)) {
      const em = line.match(/event:\s*"([^"]+)"/);
      if (em) {
        const slug2 = em[1].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        if (`${e.date}_${slug2}` === e.id) {
          realEvent = em[1];
          break;
        }
      }
    }
  }
  if (!realEvent) realEvent = eventSlug.replace(/-/g, ' ');

  code += `  "${e.id}": {\n`;
  code += `    id: "${e.id}",\n`;
  code += `    date: "${e.date}",\n`;
  code += `    tournament: "${tourn}",\n`;
  code += `    event: "${realEvent}",\n`;
  code += `    location: "",\n`;
  code += `    place: ${e.place},\n`;
  code += `    total: ${e.total},\n`;
  code += `    rating: "${e.rating}",\n`;
  code += `    pool: {\n`;
  code += `      poolNumber: 0,\n`;
  code += `      seed: ${e.pool.seed},\n`;
  code += `      bouts: [\n`;
  for (const b of e.pool.bouts) {
    const opp = b.opponent.replace(/"/g, '\\"');
    const club = b.club.replace(/"/g, '\\"');
    code += `        { opponent: "${opp}", club: "${club}", score: "${b.score}", win: ${b.win} },\n`;
  }
  code += `      ],\n`;
  code += `      wins: ${e.pool.wins},\n`;
  code += `      losses: ${e.pool.losses},\n`;
  code += `      touchesScored: ${e.pool.touchesScored},\n`;
  code += `      touchesReceived: ${e.pool.touchesReceived},\n`;
  code += `      indicator: ${e.pool.indicator},\n`;
  code += `      poolRank: null,\n`;
  code += `      poolSize: ${e.pool.poolSize},\n`;
  code += `      deSeed: null,\n`;
  code += `    },\n`;
  code += `  },\n`;
}

const newSrc = detailsSrc.slice(0, insertPoint) + code + detailsSrc.slice(insertPoint);
fs.writeFileSync('src/data/eventDetails.ts', newSrc);
console.log(`\nWrote ${toImport.length} verified entries to eventDetails.ts`);
