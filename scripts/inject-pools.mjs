#!/usr/bin/env node
// Inject pool bout data into events.ts
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const poolData = JSON.parse(readFileSync(join(__dirname, process.argv[2] || 'all-pool-data.json'), 'utf8'));
const eventsPath = join(__dirname, '..', 'src', 'data', 'events.ts');
let content = readFileSync(eventsPath, 'utf8');

let injected = 0;
let skipped = 0;

for (const [shortId, data] of Object.entries(poolData)) {
  // Find the event entry with this ftlEventId
  const fullIdRegex = new RegExp(`ftlEventId:\\s*"(${shortId}[A-F0-9]*)"`, 'i');
  const match = content.match(fullIdRegex);
  if (!match) {
    console.log(`SKIP: No event found for ID ${shortId}`);
    skipped++;
    continue;
  }
  
  const fullId = match[1];
  
  // Check if poolBouts already exists for this event
  // Find the event object containing this ftlEventId
  const idPos = content.indexOf(`ftlEventId: "${fullId}"`);
  if (idPos < 0) continue;
  
  // Find the start of this event object (go back to find opening {)
  let braceCount = 0;
  let objStart = idPos;
  while (objStart > 0) {
    if (content[objStart] === '}') braceCount++;
    if (content[objStart] === '{') {
      braceCount--;
      if (braceCount < 0) break;
    }
    objStart--;
  }
  
  // Find the end of this event object
  braceCount = 0;
  let objEnd = objStart;
  while (objEnd < content.length) {
    if (content[objEnd] === '{') braceCount++;
    if (content[objEnd] === '}') {
      braceCount--;
      if (braceCount === 0) break;
    }
    objEnd++;
  }
  
  const eventObj = content.substring(objStart, objEnd + 1);
  
  // Skip if already has poolBouts
  if (eventObj.includes('poolBouts')) {
    console.log(`SKIP: ${shortId} already has poolBouts`);
    skipped++;
    continue;
  }
  
  // Build poolBouts array
  const boutsStr = data.bouts.map(b => {
    const opp = b.o.replace(/'/g, "\\'");
    const club = b.c.replace(/'/g, "\\'");
    return `{ opponent: "${opp}", club: "${club}", score: "${b.w ? 'V' : 'D'}${b.s.split('-')[0]}", win: ${b.w} }`;
  }).join(',\n          ');
  
  // Also need to compute the opponent's score for proper "V5-3" format
  // Actually the score field should be like "V5" or "D3" based on the convention
  // Let me re-check the PoolBout interface...
  // score: string; // "V5", "D3", etc.  -- OK so just V or D + Rian's touches
  
  const boutsStr2 = data.bouts.map(b => {
    const opp = b.o.replace(/"/g, '\\"');
    const club = b.c.replace(/"/g, '\\"');
    const [rianScore, oppScore] = b.s.split('-');
    const scoreStr = b.w ? `V${rianScore}` : `D${rianScore}`;
    return `{ opponent: "${opp}", club: "${club}", score: "${scoreStr}", win: ${b.w} }`;
  }).join(',\n          ');
  
  // Insert poolBouts before ftlEventId
  const insertPoint = `ftlEventId: "${fullId}"`;
  const replacement = `poolBouts: [\n          ${boutsStr2}\n        ], ftlEventId: "${fullId}"`;
  
  content = content.replace(insertPoint, replacement);
  injected++;
  console.log(`OK: ${shortId} → ${data.wins}W pool, ${data.bouts.length} bouts`);
}

writeFileSync(eventsPath, content);
console.log(`\nDone: ${injected} injected, ${skipped} skipped`);
