#!/usr/bin/env node
// Merge club names from FTL pool data into eventDetails.ts
// Matches by opponent name

import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const poolData = JSON.parse(readFileSync(join(__dirname, 'ftl-scraped-data.json'), 'utf8'));
const edPath = join(__dirname, '..', 'src', 'data', 'eventDetails.ts');
let edTs = readFileSync(edPath, 'utf8');

// Build club lookup from FTL data: opponent name → club
const clubMap = {};
for (const [key, data] of Object.entries(poolData)) {
  for (const bout of data.poolBouts || []) {
    // Normalize name: "LAST First" 
    const name = bout.opponent.trim();
    if (bout.club && bout.club.length > 0) {
      clubMap[name] = bout.club;
      // Also store lowercase version for fuzzy matching
      clubMap[name.toLowerCase()] = bout.club;
    }
  }
}

console.log(`Club map has ${Object.keys(clubMap).length} entries`);

// Also update pool seeds where missing
// Build seed lookup by place+total
const seedMap = {};
for (const [key, data] of Object.entries(poolData)) {
  seedMap[`${data.place}/${data.total}`] = { poolSeed: data.poolSeed, deSeed: data.deSeed };
}

// Replace empty club strings with actual club names
let replaced = 0;
// Find patterns like: { opponent: "NAME", club: "", score: "5-3", win: true }
edTs = edTs.replace(/\{\s*opponent:\s*"([^"]+)",\s*club:\s*"",/g, (match, name) => {
  const club = clubMap[name] || clubMap[name.toLowerCase()];
  if (club) {
    replaced++;
    return `{ opponent: "${name}", club: "${club}",`;
  }
  return match;
});

writeFileSync(edPath, edTs);
console.log(`Replaced ${replaced} empty club fields with actual club names`);
