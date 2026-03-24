#!/usr/bin/env node
/**
 * Find opponents in eventDetails.ts that are missing from opponents.ts
 * and add them with their bout data.
 */

import fs from 'fs';

const detailsRaw = fs.readFileSync('src/data/eventDetails.ts', 'utf8');
let opponentsRaw = fs.readFileSync('src/data/opponents.ts', 'utf8');

// Step 1: Find ALL opponent references in eventDetails.ts with their context
const missingOpponents = new Map(); // name -> [bout, ...]

// Find all event detail blocks by their key pattern
const blockRegex = /"(\d{4}-\d{2}-\d{2}_[^"]+)":\s*\{/g;
let bm;
const blocks = [];

while ((bm = blockRegex.exec(detailsRaw)) !== null) {
  blocks.push({ key: bm[1], start: bm.index });
}

for (let i = 0; i < blocks.length; i++) {
  const block = blocks[i];
  const nextStart = i + 1 < blocks.length ? blocks[i+1].start : detailsRaw.length;
  const entry = detailsRaw.substring(block.start, nextStart);
  
  // Extract metadata
  const dateMatch = entry.match(/date:\s*"([^"]+)"/);
  const tournMatch = entry.match(/tournament:\s*"([^"]+)"/);
  const eventMatch = entry.match(/event:\s*"([^"]+)"/);
  if (!dateMatch || !tournMatch || !eventMatch) continue;
  
  const date = dateMatch[1];
  const tournament = tournMatch[1];
  const event = eventMatch[1];
  
  // Find ALL opponent references
  const oppMatches = [...entry.matchAll(/(?:round:\s*"([^"]*)"[^}]*)?opponent:\s*"([^"]+)"[^}]*score:\s*"([^"]+)"[^}]*win:\s*(true|false)/g)];
  
  for (const om of oppMatches) {
    const round = om[1] || '';
    const name = om[2];
    const score = om[3].replace(/^[VD]/, '');
    const win = om[4] === 'true';
    
    if (name === 'Unknown' || name === 'BYE') continue;
    if (opponentsRaw.includes(`"${name}"`)) continue;
    
    if (!missingOpponents.has(name)) missingOpponents.set(name, []);
    
    // Determine type
    let type = 'Pool';
    if (round) {
      type = round; // T64, T32, Final, etc.
    } else {
      // Check if this is in pool or de section
      const oppIdx = entry.indexOf(`"${name}"`);
      const deIdx = entry.indexOf('de: [');
      if (deIdx !== -1 && oppIdx > deIdx) {
        type = 'DE';
      }
    }
    
    missingOpponents.get(name).push({ tournament, event, date, type, win, score });
  }
}

if (missingOpponents.size === 0) {
  console.log('✅ No missing opponents found');
  process.exit(0);
}

console.log(`Found ${missingOpponents.size} missing opponents:`);

function fmtDate(d) {
  const [y, m, day] = d.split('-');
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return `${months[parseInt(m)-1]} ${parseInt(day)}, ${y}`;
}

let newEntries = '';
for (const [name, bouts] of missingOpponents) {
  const wins = bouts.filter(b => b.win).length;
  const losses = bouts.filter(b => !b.win).length;
  const total = bouts.length;
  const winRate = total > 0 ? Math.round(wins / total * 100) : 0;
  
  const boutsStr = bouts.map(b =>
    `      { "tournament": "${b.tournament}", "event": "${b.event}", "date": "${fmtDate(b.date)}", "type": "${b.type}", "win": ${b.win}, "score": "${b.score}" }`
  ).join(',\n');
  
  newEntries += `  "${name}": {
    "wins": ${wins}, "losses": ${losses}, "total": ${total}, "winRate": ${winRate}, "clubs": [],
    "bouts": [
${boutsStr}
    ], "birthYear": 0
  },\n`;
  
  console.log(`  + ${name}: ${wins}W-${losses}L (${total} bouts)`);
}

const lastClose = opponentsRaw.lastIndexOf('};');
opponentsRaw = opponentsRaw.substring(0, lastClose) + newEntries + opponentsRaw.substring(lastClose);
fs.writeFileSync('src/data/opponents.ts', opponentsRaw);
console.log(`\n✅ Added ${missingOpponents.size} opponents to opponents.ts`);
