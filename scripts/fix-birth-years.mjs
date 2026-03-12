#!/usr/bin/env node
// Fix birthYear inference: use TIGHTEST constraint across all bouts
// A fencer who competed in both Y-10 (2022) and Cadet (2025) must be born:
//   - Y-10 2022: born ≥ 2013
//   - Cadet 2025: born ≥ 2009
//   - But also: Cadet max age is 16, so born ≥ 2025-16 = 2009
//   - Y-10 gives higher minimum → born ≥ 2013
// 
// Problem: Y-10 gives MINIMUM but the fencer could be OLDER
// Better approach: use the MOST RESTRICTIVE youth category (smallest N in Y-N)
// at the LATEST date to get the tightest estimate.
// 
// Also: if they competed in Junior/Cadet AND Y-14, use Y-14 (tighter)
// If they ONLY competed in Junior/Cadet, we can only say born ≥ year - 16/19
//
// NEW: cross-reference with Rian's age. If opponent competed in SAME Y-N event  
// as Rian, they're in the same age bracket → similar birth year.

import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const opPath = join(__dirname, '..', 'src', 'data', 'opponents.ts');
const opContent = readFileSync(opPath, 'utf8');

const opObjStart = opContent.indexOf('= {', opContent.indexOf('export const opponents')) + 2;
let depth = 0, opObjEnd = opObjStart;
for (let i = opObjStart; i < opContent.length; i++) {
  if (opContent[i] === '{') depth++;
  else if (opContent[i] === '}') { depth--; if (depth === 0) { opObjEnd = i + 1; break; } }
}
const opponents = JSON.parse(opContent.substring(opObjStart, opObjEnd));

// Manual overrides (known birth years)
const manualOverrides = {
  "LI Howard": 2011,
};

const ageLimits = {
  'Y-8': 7, 'Y-10': 9, 'Y-12': 11, 'Y-14': 13,
  'Cadet': 16, 'Junior': 19,
};

function getCategoryFromEvent(eventName) {
  if (eventName.includes('Y-8')) return 'Y-8';
  if (eventName.includes('Y-10')) return 'Y-10';
  if (eventName.includes('Y-12')) return 'Y-12';
  if (eventName.includes('Y-14')) return 'Y-14';
  if (eventName.includes('Cadet')) return 'Cadet';
  if (eventName.includes('Junior')) return 'Junior';
  return null;
}

// Rian's competition history to cross-reference
const RIAN_BIRTH = 2011;

let changed = 0;
for (const [name, data] of Object.entries(opponents)) {
  // Apply manual overrides first
  if (manualOverrides[name]) {
    if (data.birthYear !== manualOverrides[name]) {
      console.log(`MANUAL: ${name}: ${data.birthYear} → ${manualOverrides[name]}`);
      changed++;
    }
    data.birthYear = manualOverrides[name];
    continue;
  }

  // Find tightest constraint from youth categories only
  let bestMinBirth = 0;
  let bestCategory = null;
  
  for (const bout of data.bouts) {
    const cat = getCategoryFromEvent(bout.event);
    if (!cat || !ageLimits[cat]) continue;
    
    const d = new Date(bout.date);
    const calYear = d.getFullYear();
    const limit = ageLimits[cat];
    const minBirth = calYear - limit;
    
    if (minBirth > bestMinBirth) {
      bestMinBirth = minBirth;
      bestCategory = cat;
    }
  }
  
  if (bestMinBirth > 0 && data.birthYear !== bestMinBirth) {
    if (data.birthYear !== bestMinBirth) {
      changed++;
    }
    data.birthYear = bestMinBirth;
  } else if (bestMinBirth === 0) {
    data.birthYear = null;
  }
}

console.log(`\nChanged: ${changed}`);

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
// birthYear: inferred from age categories, with manual overrides
// NOTE: birthYear is MINIMUM (oldest possible). Actual birth year may be later.

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
