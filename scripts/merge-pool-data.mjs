#!/usr/bin/env node
// Merge FTL scraped pool data into events.ts
// Matches by place+total since we don't have eventId in events.ts yet

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const poolData = JSON.parse(readFileSync(join(__dirname, 'ftl-scraped-data.json'), 'utf8'));
const eventsPath = join(__dirname, '..', 'src', 'data', 'events.ts');
let eventsTs = readFileSync(eventsPath, 'utf8');

// Build lookup by place+total
const lookup = {};
for (const [key, data] of Object.entries(poolData)) {
  const k = `${data.place}/${data.total}`;
  if (!lookup[k]) lookup[k] = [];
  lookup[k].push({ key, ...data });
}

// Find each event line and add pool data
let matched = 0;
let unmatched = [];

for (const [key, data] of Object.entries(poolData)) {
  // Try to find the event in events.ts by place and total
  const placeStr = `place: ${data.place}`;
  const totalStr = `total: ${data.total}`;
  
  // Find lines that have both place and total
  const lines = eventsTs.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes(placeStr) && line.includes(totalStr)) {
      // Check if it already has poolSeed
      if (line.includes('poolSeed')) continue;
      
      // Add pool data before the closing }
      const poolSeedStr = `, poolSeed: ${data.poolSeed}`;
      const ftlIdStr = `, ftlEventId: "${data.eventId}"`;
      
      // Insert before the last } on the line (or }, or }),)
      const insertPoint = line.lastIndexOf('}');
      if (insertPoint > 0) {
        lines[i] = line.slice(0, insertPoint) + poolSeedStr + ftlIdStr + line.slice(insertPoint);
        matched++;
        break;
      }
    }
  }
  eventsTs = lines.join('\n');
}

writeFileSync(eventsPath, eventsTs);
console.log(`Matched: ${matched}/${Object.keys(poolData).length}`);

// Now create a separate pool bouts data file for detailed bout data
const boutsData = {};
for (const [key, data] of Object.entries(poolData)) {
  if (data.poolBouts && data.poolBouts.length > 0) {
    boutsData[data.eventId] = {
      poolSeed: data.poolSeed,
      poolBouts: data.poolBouts,
      deSeed: data.deSeed
    };
  }
}

const boutsPath = join(__dirname, '..', 'src', 'data', 'pool-bouts.ts');
const boutsTs = `// Pool bout details by FTL event ID
// Auto-generated from FTL scraping

import type { PoolBout } from './events';

export interface PoolData {
  poolSeed: number;
  poolBouts: PoolBout[];
  deSeed: number | null;
}

export const poolBoutsData: Record<string, PoolData> = ${JSON.stringify(boutsData, null, 2)};
`;

writeFileSync(boutsPath, boutsTs);
console.log(`Pool bouts saved for ${Object.keys(boutsData).length} events`);
