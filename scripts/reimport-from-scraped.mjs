// Re-import pool data from ftl-scraped-data.json into eventDetails.ts
// Match by ftlEventId to avoid offset bugs
import fs from 'fs';

const scrapedData = JSON.parse(fs.readFileSync('scripts/ftl-scraped-data.json', 'utf-8'));
const eventsSrc = fs.readFileSync('src/data/events.ts', 'utf-8');
const detailsSrc = fs.readFileSync('src/data/eventDetails.ts', 'utf-8');

// Build ftlEventId → event info mapping from events.ts (line by line)
const eventsByFtlId = {};
for (const line of eventsSrc.split('\n')) {
  const ftlMatch = line.match(/ftlEventId:\s*"([^"]+)"/);
  if (!ftlMatch) continue;
  const ftlId = ftlMatch[1];
  
  const dateM = line.match(/date:\s*"([^"]+)"/);
  const tournM = line.match(/tournament:\s*"([^"]+)"/);
  const eventM = line.match(/event:\s*"([^"]+)"/);
  const placeM = line.match(/place:\s*(\d+)/);
  const totalM = line.match(/total:\s*(\d+)/);
  const ratingM = line.match(/rating:\s*"([^"]*)"/);
  const seedM = line.match(/poolSeed:\s*(\d+)/);
  
  if (!dateM || !eventM || !placeM || !totalM) continue;
  
  const slug = eventM[1].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  eventsByFtlId[ftlId] = {
    id: `${dateM[1]}_${slug}`,
    date: dateM[1],
    tournament: tournM ? tournM[1] : '',
    event: eventM[1],
    place: parseInt(placeM[1]),
    total: parseInt(totalM[1]),
    rating: ratingM ? ratingM[1] : '',
    poolSeed: seedM ? parseInt(seedM[1]) : null,
  };
}

console.log(`Found ${Object.keys(eventsByFtlId).length} events with ftlEventId`);

// Find which ones already have correct data in eventDetails.ts
const existingIds = new Set();
for (const idMatch of detailsSrc.matchAll(/"(\d{4}-\d{2}-\d{2}_[^"]+)"/g)) {
  existingIds.add(idMatch[1]);
}
console.log(`Already in eventDetails: ${existingIds.size}`);

// Build new entries from scraped data
const newEntries = [];
let skipped = 0;
let imported = 0;

for (const [key, scraped] of Object.entries(scrapedData)) {
  const ftlId = scraped.eventId;
  const eventInfo = eventsByFtlId[ftlId];
  
  if (!eventInfo) {
    console.log(`  SKIP: ${key} - no matching event in events.ts`);
    skipped++;
    continue;
  }
  
  if (existingIds.has(eventInfo.id)) {
    console.log(`  EXISTS: ${eventInfo.id}`);
    skipped++;
    continue;
  }
  
  // Validate place/total match
  if (scraped.place !== eventInfo.place || scraped.total !== eventInfo.total) {
    console.log(`  MISMATCH: ${eventInfo.id} - events=${eventInfo.place}/${eventInfo.total} scraped=${scraped.place}/${scraped.total}`);
    skipped++;
    continue;
  }
  
  // Parse pool bouts - format: "V5", "D1", etc.
  const poolBouts = scraped.poolBouts || [];
  let wins = 0, losses = 0, ts = 0, tr = 0;
  const processedBouts = [];
  
  for (const bout of poolBouts) {
    const scoreStr = bout.score || '';
    const isV = scoreStr.startsWith('V');
    const isD = scoreStr.startsWith('D');
    const touchNum = parseInt(scoreStr.replace(/^[VD]/, '')) || 0;
    
    if (isV) {
      wins++;
      ts += 5;
      tr += touchNum;
      processedBouts.push({
        opponent: bout.opponent || '',
        club: bout.club || '',
        score: `5-${touchNum}`,
        win: true,
      });
    } else if (isD) {
      losses++;
      ts += touchNum;
      tr += 5;
      processedBouts.push({
        opponent: bout.opponent || '',
        club: bout.club || '',
        score: `${touchNum}-5`,
        win: false,
      });
    }
  }
  
  newEntries.push({
    id: eventInfo.id,
    date: eventInfo.date,
    tournament: eventInfo.tournament,
    event: eventInfo.event,
    place: eventInfo.place,
    total: eventInfo.total,
    rating: eventInfo.rating,
    poolSeed: scraped.poolSeed || eventInfo.poolSeed,
    bouts: processedBouts,
    wins, losses, ts, tr,
    poolSize: processedBouts.length + 1,
  });
  imported++;
  console.log(`  IMPORT: ${eventInfo.id} - pool ${wins}-${losses} (${ts}-${tr})`);
}

console.log(`\nImported: ${imported}, Skipped: ${skipped}`);

if (newEntries.length === 0) {
  console.log('Nothing to import');
  process.exit(0);
}

// Add entries to eventDetails.ts
const insertPoint = detailsSrc.lastIndexOf('};');

let newCode = '';
for (const e of newEntries) {
  const escapedTourn = e.tournament.replace(/"/g, '\\"');
  newCode += `\n  "${e.id}": {\n`;
  newCode += `    id: "${e.id}",\n`;
  newCode += `    date: "${e.date}",\n`;
  newCode += `    tournament: "${escapedTourn}",\n`;
  newCode += `    event: "${e.event}",\n`;
  newCode += `    location: "",\n`;
  newCode += `    place: ${e.place},\n`;
  newCode += `    total: ${e.total},\n`;
  newCode += `    rating: "${e.rating}",\n`;
  newCode += `    pool: {\n`;
  newCode += `      poolNumber: 0,\n`;
  newCode += `      seed: ${e.poolSeed || 'null'},\n`;
  newCode += `      bouts: [\n`;
  for (const bout of e.bouts) {
    const opp = bout.opponent.replace(/"/g, '\\"');
    const club = bout.club.replace(/"/g, '\\"');
    newCode += `        { opponent: "${opp}", club: "${club}", score: "${bout.score}", win: ${bout.win} },\n`;
  }
  newCode += `      ],\n`;
  newCode += `      wins: ${e.wins},\n`;
  newCode += `      losses: ${e.losses},\n`;
  newCode += `      touchesScored: ${e.ts},\n`;
  newCode += `      touchesReceived: ${e.tr},\n`;
  newCode += `      indicator: ${e.ts - e.tr},\n`;
  newCode += `      poolRank: null,\n`;
  newCode += `      poolSize: ${e.poolSize},\n`;
  newCode += `      deSeed: null,\n`;
  newCode += `    },\n`;
  newCode += `  },\n`;
}

const newDetailsSrc = detailsSrc.slice(0, insertPoint) + newCode + detailsSrc.slice(insertPoint);
fs.writeFileSync('src/data/eventDetails.ts', newDetailsSrc);
console.log(`\nWrote ${newEntries.length} entries to eventDetails.ts`);
