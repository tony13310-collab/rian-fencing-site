#!/usr/bin/env node
// Fix opponents.ts:
// 1. Remove duplicate bouts (same opponent+date+event+type, keep the one with matching events.ts data)
// 2. Fix score mismatches using events.ts as source of truth
// 3. Fix numeric club IDs using pool bout data from events.ts

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Dynamically import TS files
const { allEvents } = await import('../src/data/events.ts');
const { opponents } = await import('../src/data/opponents.ts');

// Build lookup from events.ts pool bouts: date|opponent → {club, score, win}
const evPoolLookup = new Map();
for (const e of allEvents) {
  if (!e.poolBouts) continue;
  for (const b of e.poolBouts) {
    const d = e.date;
    evPoolLookup.set(`${d}|${b.opponent}`, {
      club: b.club,
      score: b.score,
      win: b.win,
      tournament: e.tournament,
      event: e.event
    });
  }
}

// Tournament name normalization
const tournamentAliases = {
  'National Championships and July Challenge (Summer Nationals)': 'Summer Nationals',
  'SYC': null, // will match by date
};

let dupesRemoved = 0;
let scoresFixed = 0;
let clubsFixed = 0;
const fixedOpponents = {};

for (const [name, data] of Object.entries(opponents)) {
  const seen = new Map(); // date|event|type → bout
  const fixedBouts = [];
  
  for (const bout of data.bouts) {
    const key = `${bout.date}|${bout.event}|${bout.type}`;
    
    if (seen.has(key)) {
      // Duplicate! Keep the first one (or the one matching events.ts)
      dupesRemoved++;
      
      // Check if this duplicate has a different score — pick the one matching events.ts
      const d = new Date(bout.date);
      const iso = d.toISOString().split('T')[0];
      const evData = evPoolLookup.get(`${iso}|${name}`);
      
      if (evData) {
        const rianScore = parseInt(bout.score.split('-')[0]);
        const evRianScore = parseInt(evData.score.replace(/[VD]/, ''));
        if (rianScore === evRianScore) {
          // This dupe matches events.ts better, replace
          const idx = fixedBouts.indexOf(seen.get(key));
          if (idx >= 0) fixedBouts[idx] = bout;
          seen.set(key, bout);
          scoresFixed++;
        }
      }
      continue;
    }
    
    seen.set(key, bout);
    
    // Fix score if it conflicts with events.ts
    const d = new Date(bout.date);
    const iso = d.toISOString().split('T')[0];
    const evData = evPoolLookup.get(`${iso}|${name}`);
    
    if (evData && bout.type === 'Pool') {
      const rianScore = parseInt(bout.score.split('-')[0]);
      const oppScore = parseInt(bout.score.split('-')[1]);
      const evRianScore = parseInt(evData.score.replace(/[VD]/, ''));
      
      if (rianScore !== evRianScore) {
        // events.ts is source of truth (directly from FTL)
        const evOppScore = evData.win ? oppScore : rianScore; // approximate
        bout.score = evData.score.startsWith('V') ? 
          `${evRianScore}-${oppScore}` : `${evRianScore}-${oppScore}`;
        bout.win = evData.win;
        scoresFixed++;
      }
    }
    
    fixedBouts.push(bout);
  }
  
  // Fix clubs using events.ts data
  const fixedClubs = new Set();
  for (const bout of fixedBouts) {
    const d = new Date(bout.date);
    const iso = d.toISOString().split('T')[0];
    const evData = evPoolLookup.get(`${iso}|${name}`);
    if (evData) {
      fixedClubs.add(evData.club);
    }
  }
  
  // Keep existing non-numeric clubs, replace numeric ones
  const existingClubs = data.clubs.filter(c => !/^\d+$/.test(c));
  const allClubs = [...new Set([...existingClubs, ...fixedClubs])];
  
  if (allClubs.length > existingClubs.length || existingClubs.length < data.clubs.length) {
    clubsFixed += data.clubs.filter(c => /^\d+$/.test(c)).length;
  }
  
  // Recalculate stats
  const wins = fixedBouts.filter(b => b.win).length;
  const losses = fixedBouts.filter(b => !b.win).length;
  
  fixedOpponents[name] = {
    ...data,
    wins,
    losses,
    total: fixedBouts.length,
    winRate: fixedBouts.length > 0 ? Math.round((wins / fixedBouts.length) * 100) / 100 : 0,
    clubs: allClubs.length > 0 ? allClubs : data.clubs, // fallback to original if we can't fix
    bouts: fixedBouts
  };
}

// Count total bouts
let totalBouts = 0;
for (const data of Object.values(fixedOpponents)) {
  totalBouts += data.bouts.length;
}

console.log(`Duplicates removed: ${dupesRemoved}`);
console.log(`Scores fixed: ${scoresFixed}`);
console.log(`Numeric club IDs addressed: ${clubsFixed}`);
console.log(`Total opponents: ${Object.keys(fixedOpponents).length}`);
console.log(`Total bouts: ${totalBouts}`);

// Write back
const opPath = join(__dirname, '..', 'src', 'data', 'opponents.ts');
let content = readFileSync(opPath, 'utf8');

// Find and replace the opponents object
const startMarker = 'export const opponents: Record<string, OpponentData> = ';
const startIdx = content.indexOf(startMarker);
if (startIdx < 0) {
  console.error('Could not find opponents export');
  process.exit(1);
}

const beforeExport = content.substring(0, startIdx);
const jsonStr = JSON.stringify(fixedOpponents, null, 2);

// Update header comment
const header = `// Auto-generated H2H opponent database - ${Object.keys(fixedOpponents).length} opponents, ${totalBouts} bouts
// Generated from FencingTracker history + FTL pool bouts
// Last fixed: ${new Date().toISOString().split('T')[0]}`;

const newContent = beforeExport.replace(/\/\/ Auto-generated.*?\n\/\/ Generated.*?\n(\/\/ Last.*?\n)?/, header + '\n')
  + startMarker + jsonStr + ';\n';

writeFileSync(opPath, newContent);
console.log('Written to opponents.ts');
