#!/usr/bin/env node
// Infer opponent birth years from age categories they competed in
// Y-14 in calendar year Y → born ≥ Y-13 (under 14 on Jan 1)
// Y-12 in calendar year Y → born ≥ Y-11
// Cadet (U17) in calendar year Y → born ≥ Y-16
// Junior (U20) in calendar year Y → born ≥ Y-19

import { readFileSync } from 'fs';
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

const results = {};
for (const [name, data] of Object.entries(opponents)) {
  let minBirthYear = 0; // highest lower bound = latest possible birth year minimum
  
  for (const bout of data.bouts) {
    const cat = getCategoryFromEvent(bout.event);
    if (!cat || !ageLimits[cat]) continue;
    
    const d = new Date(bout.date);
    const calYear = d.getFullYear();
    const limit = ageLimits[cat];
    
    // Under <limit+1> on Jan 1 of calYear → born ≥ calYear - limit
    const bornAfter = calYear - limit;
    if (bornAfter > minBirthYear) {
      minBirthYear = bornAfter;
    }
  }
  
  if (minBirthYear > 0) {
    results[name] = minBirthYear;
  }
}

// Filter to 2010-2012 range (could be born in these years)
const peers = {};
for (const [name, minYear] of Object.entries(results)) {
  // minYear is the EARLIEST they could be born
  // They could be born minYear, minYear+1, minYear+2, etc.
  // We want 2010, 2011, or 2012
  // If minYear <= 2012, they COULD be born 2010-2012
  // But if minYear > 2012, they're definitely younger (2013+)
  // If minYear <= 2009, they could be much older
  
  // Best estimate: if minYear = 2012 → likely 2012 or 2013
  // if minYear = 2011 → likely 2011 or 2012 (from Y-14 in older year)
  // if minYear = 2010 → likely 2010 or 2011
  
  // For display, use minYear as best guess (it's the oldest they could be)
  if (minYear >= 2010 && minYear <= 2012) {
    peers[name] = minYear;
  }
}

// Sort by total bouts
const sorted = Object.entries(peers)
  .map(([name, year]) => {
    const data = opponents[name];
    const recentBouts = data.bouts.filter(b => {
      const d = new Date(b.date);
      return d > new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
    });
    return { name, birthYear: year, recentBouts: recentBouts.length, totalBouts: data.total };
  })
  .filter(x => x.recentBouts > 0)
  .sort((a, b) => b.recentBouts - a.recentBouts);

console.log(`\nTotal opponents with inferred birth years: ${Object.keys(results).length}`);
console.log(`Peers (2010-2012) with recent bouts: ${sorted.length}\n`);

console.log('Name'.padEnd(30) + 'BirthYear  Recent  Total');
console.log('-'.repeat(60));
for (const p of sorted.slice(0, 40)) {
  console.log(`${p.name.padEnd(30)} ${p.birthYear}       ${p.recentBouts}       ${p.totalBouts}`);
}

// Output as TS map
console.log('\n\n// Paste into peerBirthYears.ts:');
console.log('export const peerBirthYears: Record<string, number> = {');
for (const p of sorted) {
  console.log(`  "${p.name}": ${p.birthYear},`);
}
console.log('};');
