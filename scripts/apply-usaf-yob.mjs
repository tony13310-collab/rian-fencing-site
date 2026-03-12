#!/usr/bin/env node
// Apply YOB from USA Fencing point standings to opponents.ts

import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const opPath = join(__dirname, '..', 'src', 'data', 'opponents.ts');
const yobData = JSON.parse(readFileSync(join(__dirname, 'usaf-yob-data.json'), 'utf8'));

// Parse opponents
const opContent = readFileSync(opPath, 'utf8');
const opObjStart = opContent.indexOf('= {', opContent.indexOf('export const opponents')) + 2;
let depth = 0, opObjEnd = opObjStart;
for (let i = opObjStart; i < opContent.length; i++) {
  if (opContent[i] === '{') depth++;
  else if (opContent[i] === '}') { depth--; if (depth === 0) { opObjEnd = i + 1; break; } }
}
const opponents = JSON.parse(opContent.substring(opObjStart, opObjEnd));

// Build YOB lookup from USAF data
// USAF format: "Last, First" → opponents.ts format: "LAST First" or "Last First"
const yobMap = {};
for (const source of Object.values(yobData)) {
  for (const entry of source) {
    const parts = entry.name.split(',').map(s => s.trim());
    if (parts.length === 2) {
      const last = parts[0].toUpperCase();
      const first = parts[1];
      // Try multiple formats
      yobMap[`${last} ${first}`] = entry.yob;
      yobMap[`${parts[0]} ${first}`] = entry.yob; // original case
      // Also try with middle initial stripped
      const firstOnly = first.split(' ')[0];
      yobMap[`${last} ${firstOnly}`] = entry.yob;
    }
  }
}

console.log(`YOB lookup entries: ${Object.keys(yobMap).length}`);

// Match against opponents
let matched = 0;
let updated = 0;
let mismatches = [];

for (const [name, data] of Object.entries(opponents)) {
  const yob = yobMap[name];
  if (yob) {
    matched++;
    if (data.birthYear !== yob) {
      mismatches.push(`${name}: ${data.birthYear} → ${yob}`);
      updated++;
    }
    data.birthYear = yob;
  }
}

console.log(`Matched: ${matched}, Updated: ${updated}`);
if (mismatches.length > 0) {
  console.log('\nCorrections:');
  for (const m of mismatches) console.log(`  ${m}`);
}

// Write back
const sortedNames = Object.keys(opponents).sort();
const totalBouts = Object.values(opponents).reduce((s, d) => s + d.total, 0);

let output = `// Auto-generated H2H opponent database - ${sortedNames.length} opponents, ${totalBouts} bouts
// Generated from FencingTracker history + FTL pool bouts
// birthYear: from USA Fencing point standings (Y14/Cadet/Junior) + age category inference

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
console.log(`\nopponents.ts updated!`);
