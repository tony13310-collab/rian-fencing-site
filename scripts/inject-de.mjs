#!/usr/bin/env node
// Inject DE results from de-results.json into eventDetails.ts

import fs from 'fs';

const deResults = JSON.parse(fs.readFileSync('scripts/de-results.json', 'utf8'));
let src = fs.readFileSync('src/data/eventDetails.ts', 'utf8');

let injected = 0;
for (const [key, bouts] of Object.entries(deResults)) {
  if (!bouts || bouts.length === 0) continue;
  
  // Find the event in eventDetails.ts
  const keyIdx = src.indexOf(`"${key}"`);
  if (keyIdx === -1) {
    console.log(`Key not found: ${key}`);
    continue;
  }
  
  // Check if already has de: field
  const keys = [...src.matchAll(/"(\d{4}-\d{2}-\d{2}_[^"]+)":/g)].map(m => m[1]);
  const nextKeyIdx = keys.indexOf(key) + 1;
  const endKey = nextKeyIdx < keys.length ? keys[nextKeyIdx] : null;
  const endIdx = endKey ? src.indexOf(`"${endKey}"`) : src.lastIndexOf('}');
  const chunk = src.substring(keyIdx, endIdx);
  
  if (/de:\s*\[\s*\{/.test(chunk)) {
    // Already has DE data
    continue;
  }
  
  // Build DE array string
  const deStr = bouts.map(b => {
    const opponent = b.opponent.replace(/'/g, "\\'");
    const club = (b.club || '').replace(/'/g, "\\'");
    return `      { round: "${b.round}", opponent: "${opponent}", club: "${club}", score: "${b.score}", win: ${b.win} }`;
  }).join(',\n');
  
  // Find the closing of pool object and place field, insert de before place
  // Look for "place:" in this event's chunk
  const placeIdx = chunk.indexOf('place:');
  if (placeIdx !== -1) {
    const insertPos = keyIdx + placeIdx;
    const deField = `de: [\n${deStr}\n    ],\n    `;
    src = src.substring(0, insertPos) + deField + src.substring(insertPos);
    injected++;
  } else {
    // Try to insert before the closing }
    const closeIdx = chunk.lastIndexOf('}');
    if (closeIdx !== -1) {
      const insertPos = keyIdx + closeIdx;
      const deField = `    de: [\n${deStr}\n    ],\n  `;
      src = src.substring(0, insertPos) + deField + src.substring(insertPos);
      injected++;
    }
  }
}

fs.writeFileSync('src/data/eventDetails.ts', src);
console.log(`Injected DE data for ${injected} events`);
