#!/usr/bin/env node
// Fix all 3 audit issues in eventDetails.ts:
// 1. Remove duplicate bouts (keep pool version, move DE to de array)
// 2. Move DE-scored bouts (>5 touches) from pool.bouts to de array
// 3. Fix opponent name mismatches
import { readFileSync, writeFileSync } from 'fs';

let src = readFileSync('src/data/eventDetails.ts', 'utf8');

// ============================================================
// FIX 3: Normalize opponent names in eventDetails to match opponents.ts
// ============================================================
const nameMap = {
  'WANG Andrew Chang': 'WANG ANDREW CHANG',
  'LI Ayden': 'LI AYDEN',
  'GATTO Enzo': 'GATTO Enzo P.',
  'SKARBONKIEWICZ Maksymilian': 'SKARBONKIEWICZ Maksymilian A.',
  "O'LOUGHLIN Jacob": "O\\'LOUGHLIN Jacob",
};

// Check opponents.ts for exact names
const oppSrc = readFileSync('src/data/opponents.ts', 'utf8');
for (const [from, to] of Object.entries(nameMap)) {
  if (!oppSrc.includes(`"${to}"`)) {
    console.log(`⚠️  Target name "${to}" not found in opponents.ts, skipping`);
    delete nameMap[from];
  }
}

// Also check names that might need different fixes
const missingNames = ['LI Yiwei', 'KUSHKOV Daniel', 'BURKE Sam'];
for (const name of missingNames) {
  if (!oppSrc.includes(`"${name}"`)) {
    console.log(`ℹ️  "${name}" not in opponents.ts (DE-only opponent, ok)`);
  }
}

let nameFixCount = 0;
for (const [from, to] of Object.entries(nameMap)) {
  const regex = new RegExp(`opponent: "${from.replace(/[.*+?${}()|[\]\\]/g, '\\$&')}"`, 'g');
  const matches = src.match(regex);
  if (matches) {
    src = src.replace(regex, `opponent: "${to}"`);
    nameFixCount += matches.length;
    console.log(`✅ Name: "${from}" → "${to}" (${matches.length} occurrences)`);
  }
}
console.log(`\nFixed ${nameFixCount} name mismatches\n`);

// ============================================================
// FIX 1 & 2: Identify DE bouts in pool arrays, handle duplicates
// ============================================================

// Parse all event entries
const entryRegex = /"(\d{4}-\d{2}-\d{2}_[^"]+)":\s*\{/g;
let m;
const entries = [];
while ((m = entryRegex.exec(src)) !== null) entries.push({ key: m[1], pos: m.index });

let deMoveCount = 0;
let dupeRemoveCount = 0;

for (let i = 0; i < entries.length; i++) {
  const entry = entries[i];
  const end = entries[i + 1]?.pos || src.length;
  const chunk = src.slice(entry.pos, end);

  // Find pool bouts section
  const boutsMatch = chunk.match(/bouts:\s*\[([\s\S]*?)\]/);
  if (!boutsMatch) continue;

  const boutsStr = boutsMatch[1];
  const boutRegex = /\{\s*opponent:\s*"([^"]+)",\s*club:\s*"([^"]*)",\s*score:\s*"(\d+)-(\d+)",\s*win:\s*(true|false)\s*\}/g;
  let bm;
  const poolBouts = [];
  const deBouts = [];
  const seenOpponents = new Set();

  while ((bm = boutRegex.exec(boutsStr)) !== null) {
    const my = parseInt(bm[3]), opp = parseInt(bm[4]);
    const isDE = my > 5 || opp > 5;
    const opponent = bm[1];

    if (seenOpponents.has(opponent)) {
      // Duplicate - one is pool, one is DE
      if (isDE) {
        deBouts.push({ opponent, club: bm[2], score: `${bm[3]}-${bm[4]}`, win: bm[5] === 'true' });
        dupeRemoveCount++;
        console.log(`🔀 DUP→DE: ${entry.key} | ${opponent} ${bm[3]}-${bm[4]}`);
      } else {
        // Pool duplicate - skip (keep first)
        dupeRemoveCount++;
        console.log(`🗑️  DUP removed: ${entry.key} | ${opponent} ${bm[3]}-${bm[4]}`);
      }
      continue;
    }
    seenOpponents.add(opponent);

    if (isDE) {
      deBouts.push({ opponent, club: bm[2], score: `${bm[3]}-${bm[4]}`, win: bm[5] === 'true' });
      deMoveCount++;
    } else {
      poolBouts.push({ opponent, club: bm[2], score: `${bm[3]}-${bm[4]}`, win: bm[5] === 'true' });
    }
  }

  if (deBouts.length === 0 && !boutsStr.match(/opponent.*opponent.*opponent/s)) continue; // no changes needed unless dupes
  if (deBouts.length === 0 && dupeRemoveCount === 0) continue;

  // Rebuild pool bouts string
  const poolBoutsStr = poolBouts.map(b =>
    `          { opponent: "${b.opponent}", club: "${b.club}", score: "${b.score}", win: ${b.win} }`
  ).join(',\n');

  // Replace old bouts array with cleaned pool bouts
  const oldBoutsSection = `bouts: [${boutsMatch[1]}]`;
  const newBoutsSection = `bouts: [\n${poolBoutsStr}\n        ]`;
  
  const chunkUpdated = chunk.replace(oldBoutsSection, newBoutsSection);

  // Recalculate pool stats
  const poolWins = poolBouts.filter(b => b.win).length;
  const poolLosses = poolBouts.filter(b => !b.win).length;
  const ts = poolBouts.reduce((s, b) => s + parseInt(b.score.split('-')[0]), 0);
  const tr = poolBouts.reduce((s, b) => s + parseInt(b.score.split('-')[1]), 0);

  let finalChunk = chunkUpdated
    .replace(/wins:\s*\d+/, `wins: ${poolWins}`)
    .replace(/losses:\s*\d+/, `losses: ${poolLosses}`)
    .replace(/touchesScored:\s*\d+/, `touchesScored: ${ts}`)
    .replace(/touchesReceived:\s*\d+/, `touchesReceived: ${tr}`)
    .replace(/indicator:\s*-?\d+/, `indicator: ${ts - tr}`);

  // Add DE bouts if any and no existing de array
  if (deBouts.length > 0) {
    const existingDE = finalChunk.match(/de:\s*\[/);
    if (existingDE) {
      // Append to existing de array
      const deInsertPoint = finalChunk.indexOf('de: [') + 5;
      const existingDEContent = finalChunk.slice(deInsertPoint).match(/^([\s\S]*?)\]/)[1];
      const newDEEntries = deBouts.map(b =>
        `      { opponent: "${b.opponent}", score: "${b.score}", win: ${b.win} }`
      ).join(',\n');
      
      if (existingDEContent.trim()) {
        finalChunk = finalChunk.replace(
          `de: [${existingDEContent}]`,
          `de: [${existingDEContent},\n${newDEEntries}\n    ]`
        );
      } else {
        finalChunk = finalChunk.replace(
          /de:\s*\[\s*\]/,
          `de: [\n${newDEEntries}\n    ]`
        );
      }
    } else {
      // Add new de array before closing brace
      const deStr = deBouts.map(b =>
        `      { opponent: "${b.opponent}", score: "${b.score}", win: ${b.win} }`
      ).join(',\n');
      // Insert before the pool closing or at end of entry
      const poolEndIdx = finalChunk.lastIndexOf('},');
      if (poolEndIdx > 0) {
        finalChunk = finalChunk.slice(0, poolEndIdx + 2) + `\n    de: [\n${deStr}\n    ],` + finalChunk.slice(poolEndIdx + 2);
      }
    }
    console.log(`📦 ${entry.key}: moved ${deBouts.length} DE bouts to de array`);
  }

  // Replace in source
  src = src.slice(0, entry.pos) + finalChunk + src.slice(end);
  
  // Recalculate positions
  const diff = finalChunk.length - chunk.length;
  for (let j = i + 1; j < entries.length; j++) {
    entries[j].pos += diff;
  }
}

console.log(`\nMoved ${deMoveCount} DE bouts from pool to de arrays`);
console.log(`Removed ${dupeRemoveCount} duplicate entries`);

writeFileSync('src/data/eventDetails.ts', src);
console.log('\n✅ eventDetails.ts updated!');
