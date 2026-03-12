#!/usr/bin/env node
// Add birthYear field to every opponent in opponents.ts
// Inferred from age categories: Y-14 in year Y → born ≥ Y-13

import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const opPath = join(__dirname, '..', 'src', 'data', 'opponents.ts');
const opContent = readFileSync(opPath, 'utf8');

// Parse opponents object
const opObjStart = opContent.indexOf('= {', opContent.indexOf('export const opponents')) + 2;
let depth = 0, opObjEnd = opObjStart;
for (let i = opObjStart; i < opContent.length; i++) {
  if (opContent[i] === '{') depth++;
  else if (opContent[i] === '}') { depth--; if (depth === 0) { opObjEnd = i + 1; break; } }
}
const opponents = JSON.parse(opContent.substring(opObjStart, opObjEnd));

const ageLimits = {
  'Y-8': 7, 'Y-10': 9, 'Y-12': 11, 'Y-14': 13,
  'Cadet': 16, 'Junior': 19, 'Senior': 99, 'Div I': 99
};

function getCategoryFromEvent(eventName) {
  if (eventName.includes('Y-8')) return 'Y-8';
  if (eventName.includes('Y-10')) return 'Y-10';
  if (eventName.includes('Y-12')) return 'Y-12';
  if (eventName.includes('Y-14')) return 'Y-14';
  if (eventName.includes('Cadet')) return 'Cadet';
  if (eventName.includes('Junior')) return 'Junior';
  if (eventName.includes('Div I') || eventName.includes('Division I')) return 'Div I';
  if (eventName.includes('Senior')) return 'Senior';
  return null;
}

let inferred = 0;
let unknown = 0;

for (const [name, data] of Object.entries(opponents)) {
  let minBirthYear = 0;
  
  for (const bout of data.bouts) {
    const cat = getCategoryFromEvent(bout.event);
    if (!cat || !ageLimits[cat] || ageLimits[cat] > 50) continue; // skip Senior/Div I (too broad)
    
    const d = new Date(bout.date);
    const calYear = d.getFullYear();
    const limit = ageLimits[cat];
    const bornAfter = calYear - limit;
    if (bornAfter > minBirthYear) {
      minBirthYear = bornAfter;
    }
  }
  
  if (minBirthYear > 0) {
    data.birthYear = minBirthYear;
    inferred++;
  } else {
    data.birthYear = null;
    unknown++;
  }
}

console.log(`Inferred: ${inferred}, Unknown: ${unknown}, Total: ${inferred + unknown}`);

// Stats
const byYear = {};
for (const data of Object.values(opponents)) {
  const y = data.birthYear || 'unknown';
  byYear[y] = (byYear[y] || 0) + 1;
}
console.log('\nBirth year distribution:');
for (const [year, count] of Object.entries(byYear).sort()) {
  console.log(`  ${year}: ${count}`);
}

// Write back
const sortedNames = Object.keys(opponents).sort();
const totalBouts = Object.values(opponents).reduce((s, d) => s + d.total, 0);

let output = `// Auto-generated H2H opponent database - ${sortedNames.length} opponents, ${totalBouts} bouts
// Generated from FencingTracker history + FTL pool bouts
// birthYear: inferred from age categories (Y-14 in year Y → born ≥ Y-13)

export interface OpponentBout {
  tournament: string;
  event: string;
  date: string;
  type: string;
  win: boolean;
  score: string;
}

export interface OpponentData {
  wins: number;
  losses: number;
  total: number;
  winRate: number;
  clubs: string[];
  birthYear: number | null;
  bouts: OpponentBout[];
}

export function getOpponentSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const opponents: Record<string, OpponentData> = ${JSON.stringify(
  Object.fromEntries(sortedNames.map(n => [n, opponents[n]])),
  null,
  2
)};

export function findOpponentBySlug(slug: string): [string, OpponentData] | null {
  for (const [name, data] of Object.entries(opponents)) {
    if (getOpponentSlug(name) === slug) return [name, data];
  }
  return null;
}
`;

writeFileSync(opPath, output);
console.log(`\nopponents.ts updated with birthYear field!`);
