#!/usr/bin/env node
// Comprehensive data audit - cross-reference all data sources
import { readFileSync } from 'fs';

// Load data via tsx eval workaround
import { execSync } from 'child_process';
const evalTS = (expr) => execSync(`npx tsx -e "import { allEvents } from './src/data/events'; import { eventDetails } from './src/data/eventDetails'; import { opponents } from './src/data/opponents'; ${expr}"`, { cwd: process.cwd(), encoding: 'utf8' }).trim();

// Parse TS files directly
const eventsSrc = readFileSync('src/data/events.ts', 'utf8');
const detailsSrc = readFileSync('src/data/eventDetails.ts', 'utf8');
const opponentsSrc = readFileSync('src/data/opponents.ts', 'utf8');

console.log('='.repeat(60));
console.log('🔍 COMPREHENSIVE DATA AUDIT');
console.log('='.repeat(60));

let totalErrors = 0;
let totalWarnings = 0;

function error(msg) { totalErrors++; console.log(`  ❌ ERROR: ${msg}`); }
function warn(msg) { totalWarnings++; console.log(`  ⚠️  WARN: ${msg}`); }
function ok(msg) { console.log(`  ✅ ${msg}`); }

// ============================================================
// AUDIT 1: events.ts ↔ eventDetails.ts place/total consistency
// ============================================================
console.log('\n📋 AUDIT 1: events.ts ↔ eventDetails.ts place/total');
const events = [];
for (const line of eventsSrc.split('\n')) {
  const m = line.match(/date:\s*"(\d{4}-\d{2}-\d{2})",\s*tournament:\s*"([^"]+)",\s*event:\s*"([^"]+)".*?place:\s*(\d+|null),\s*total:\s*(\d+)/);
  if (m) events.push({ date: m[1], tournament: m[2], event: m[3], place: m[4] === 'null' ? null : parseInt(m[4]), total: parseInt(m[5]) });
}

let audit1Match = 0, audit1Mismatch = 0, audit1Missing = 0;
for (const e of events) {
  const key = e.date + '_' + e.event.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
  // Find in eventDetails
  const placeMatch = detailsSrc.match(new RegExp(`"${key.replace(/[.*+?${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?place:\\s*(\\d+)[\\s\\S]*?total:\\s*(\\d+)`));
  if (!placeMatch) {
    error(`${key} — missing from eventDetails.ts`);
    audit1Missing++;
    continue;
  }
  const detPlace = parseInt(placeMatch[1]);
  const detTotal = parseInt(placeMatch[2]);
  if (e.place !== null && detPlace !== e.place) {
    error(`${key} — place mismatch: events=${e.place}, details=${detPlace}`);
    audit1Mismatch++;
  } else if (detTotal !== e.total) {
    error(`${key} — total mismatch: events=${e.total}, details=${detTotal}`);
    audit1Mismatch++;
  } else {
    audit1Match++;
  }
}
ok(`${audit1Match}/${events.length} events match, ${audit1Mismatch} mismatches, ${audit1Missing} missing`);

// ============================================================
// AUDIT 2: Pool bout math — wins/losses/TS/TR/indicator
// ============================================================
console.log('\n📋 AUDIT 2: Pool bout internal consistency (W-L, TS, TR, Indicator)');

// Parse eventDetails entries
const detailEntries = [];
const entryRegex = /"(\d{4}-\d{2}-\d{2}_[^"]+)":\s*\{/g;
let match;
const detLines = detailsSrc.split('\n');
while ((match = entryRegex.exec(detailsSrc)) !== null) {
  detailEntries.push(match[1]);
}

let audit2Ok = 0, audit2Err = 0;
for (const key of detailEntries) {
  // Extract pool bouts for this entry
  const startIdx = detailsSrc.indexOf(`"${key}"`);
  // Find the next entry or end
  const nextEntry = detailEntries[detailEntries.indexOf(key) + 1];
  const endIdx = nextEntry ? detailsSrc.indexOf(`"${nextEntry}"`) : detailsSrc.length;
  const chunk = detailsSrc.slice(startIdx, endIdx);
  
  // Extract bouts
  const boutRegex = /\{\s*opponent:\s*"([^"]+)",\s*club:\s*"([^"]*)",\s*score:\s*"(\d+)-(\d+)",\s*win:\s*(true|false)\s*\}/g;
  const bouts = [];
  let bm;
  while ((bm = boutRegex.exec(chunk)) !== null) {
    bouts.push({ opponent: bm[1], club: bm[2], myScore: parseInt(bm[3]), oppScore: parseInt(bm[4]), win: bm[5] === 'true' });
  }
  
  if (bouts.length === 0) continue;
  
  // Check win/loss matches score
  let boutErrors = [];
  for (const b of bouts) {
    if (b.win && b.myScore <= b.oppScore) {
      boutErrors.push(`${b.opponent}: win=true but score ${b.myScore}-${b.oppScore}`);
    }
    if (!b.win && b.myScore >= b.oppScore) {
      boutErrors.push(`${b.opponent}: win=false but score ${b.myScore}-${b.oppScore}`);
    }
  }
  
  // Check computed stats
  const computedWins = bouts.filter(b => b.win).length;
  const computedLosses = bouts.filter(b => !b.win).length;
  const computedTS = bouts.reduce((s, b) => s + b.myScore, 0);
  const computedTR = bouts.reduce((s, b) => s + b.oppScore, 0);
  const computedInd = computedTS - computedTR;
  
  // Extract stored values
  const winsMatch = chunk.match(/wins:\s*(\d+)/);
  const lossesMatch = chunk.match(/losses:\s*(\d+)/);
  const tsMatch = chunk.match(/touchesScored:\s*(\d+)/);
  const trMatch = chunk.match(/touchesReceived:\s*(\d+)/);
  const indMatch = chunk.match(/indicator:\s*(-?\d+)/);
  
  if (winsMatch && parseInt(winsMatch[1]) !== computedWins) {
    boutErrors.push(`wins: stored=${winsMatch[1]}, computed=${computedWins}`);
  }
  if (lossesMatch && parseInt(lossesMatch[1]) !== computedLosses) {
    boutErrors.push(`losses: stored=${lossesMatch[1]}, computed=${computedLosses}`);
  }
  if (tsMatch && parseInt(tsMatch[1]) !== computedTS) {
    boutErrors.push(`TS: stored=${tsMatch[1]}, computed=${computedTS}`);
  }
  if (trMatch && parseInt(trMatch[1]) !== computedTR) {
    boutErrors.push(`TR: stored=${trMatch[1]}, computed=${computedTR}`);
  }
  if (indMatch && parseInt(indMatch[1]) !== computedInd) {
    boutErrors.push(`Ind: stored=${indMatch[1]}, computed=${computedInd}`);
  }
  
  if (boutErrors.length > 0) {
    error(`${key}: ${boutErrors.join('; ')}`);
    audit2Err++;
  } else {
    audit2Ok++;
  }
}
ok(`${audit2Ok}/${detailEntries.length} events pass pool math check, ${audit2Err} errors`);

// ============================================================
// AUDIT 3: opponents.ts internal consistency
// ============================================================
console.log('\n📋 AUDIT 3: opponents.ts W-L-total-winRate consistency');

// Parse opponents
const oppEntries = [];
const oppRegex = /"([^"]+)":\s*\{\s*"wins":\s*(\d+),\s*"losses":\s*(\d+),\s*"total":\s*(\d+),\s*"winRate":\s*(\d+)/g;
while ((match = oppRegex.exec(opponentsSrc)) !== null) {
  oppEntries.push({ name: match[1], wins: parseInt(match[2]), losses: parseInt(match[3]), total: parseInt(match[4]), winRate: parseInt(match[5]) });
}

let audit3Ok = 0, audit3Err = 0;
for (const o of oppEntries) {
  const errors = [];
  if (o.wins + o.losses !== o.total) {
    errors.push(`W+L=${o.wins}+${o.losses}=${o.wins+o.losses} ≠ total=${o.total}`);
  }
  const expectedWR = o.total > 0 ? Math.round(o.wins / o.total * 100) : 0;
  if (Math.abs(expectedWR - o.winRate) > 1) {
    errors.push(`winRate=${o.winRate}% ≠ computed=${expectedWR}%`);
  }
  // Count actual bouts
  const oppStart = opponentsSrc.indexOf(`"${o.name}"`);
  const boutsSection = opponentsSrc.slice(oppStart, oppStart + 5000);
  const boutCount = (boutsSection.match(/"tournament":/g) || []).length;
  if (boutCount !== o.total) {
    errors.push(`bout count=${boutCount} ≠ total=${o.total}`);
  }
  
  if (errors.length > 0) {
    error(`${o.name}: ${errors.join('; ')}`);
    audit3Err++;
  } else {
    audit3Ok++;
  }
}
ok(`${audit3Ok}/${oppEntries.length} opponents pass consistency check, ${audit3Err} errors`);

// ============================================================
// AUDIT 4: eventDetails pool bouts ↔ opponents.ts cross-reference
// ============================================================
console.log('\n📋 AUDIT 4: Cross-reference eventDetails pool bouts with opponents.ts');

// Extract all pool bouts from eventDetails with tournament context
const allPoolBouts = [];
for (const key of detailEntries) {
  const startIdx = detailsSrc.indexOf(`"${key}"`);
  const nextEntry = detailEntries[detailEntries.indexOf(key) + 1];
  const endIdx = nextEntry ? detailsSrc.indexOf(`"${nextEntry}"`) : detailsSrc.length;
  const chunk = detailsSrc.slice(startIdx, endIdx);
  
  const tournMatch = chunk.match(/tournament:\s*"([^"]+)"/);
  const tournament = tournMatch ? tournMatch[1] : key;
  
  const boutRegex2 = /opponent:\s*"([^"]+)",\s*club:\s*"([^"]*)",\s*score:\s*"(\d+)-(\d+)",\s*win:\s*(true|false)/g;
  let bm2;
  while ((bm2 = boutRegex2.exec(chunk)) !== null) {
    allPoolBouts.push({ key, tournament, opponent: bm2[1], score: `${bm2[3]}-${bm2[4]}`, win: bm2[5] === 'true' });
  }
}

// Check if these opponents exist in opponents.ts
let found = 0, notFound = 0;
const notFoundNames = new Set();
for (const b of allPoolBouts) {
  if (opponentsSrc.includes(`"${b.opponent}"`)) {
    found++;
  } else {
    notFound++;
    notFoundNames.add(b.opponent);
  }
}
if (notFound > 0) {
  warn(`${notFound} pool bouts reference opponents not in opponents.ts`);
  for (const name of [...notFoundNames].slice(0, 10)) {
    console.log(`      Missing: ${name}`);
  }
  if (notFoundNames.size > 10) console.log(`      ... and ${notFoundNames.size - 10} more`);
} else {
  ok(`All ${found} pool bout opponents found in opponents.ts`);
}

// ============================================================
// AUDIT 5: Duplicate bout detection
// ============================================================
console.log('\n📋 AUDIT 5: Duplicate bout detection in eventDetails');
const boutKeys = new Set();
let dupes = 0;
for (const b of allPoolBouts) {
  const bk = `${b.key}|${b.opponent}`;
  if (boutKeys.has(bk)) {
    error(`Duplicate: ${b.opponent} in ${b.key}`);
    dupes++;
  }
  boutKeys.add(bk);
}
if (dupes === 0) ok(`No duplicate bouts found in ${allPoolBouts.length} pool bouts`);

// ============================================================
// AUDIT 6: Pool score sanity (saber = 5 touches to win)
// ============================================================
console.log('\n📋 AUDIT 6: Pool score sanity check (saber rules)');
let saneScores = 0, oddScores = 0;
for (const b of allPoolBouts) {
  const [my, opp] = b.score.split('-').map(Number);
  if (b.win) {
    if (my !== 5) {
      warn(`${b.key} vs ${b.opponent}: won with score ${b.score} (expected 5-x)`);
      oddScores++;
    } else {
      saneScores++;
    }
  } else {
    if (opp !== 5) {
      warn(`${b.key} vs ${b.opponent}: lost with score ${b.score} (expected x-5)`);
      oddScores++;
    } else {
      saneScores++;
    }
  }
}
ok(`${saneScores}/${allPoolBouts.length} scores follow saber rules, ${oddScores} unusual`);

// ============================================================
// AUDIT 7: Birth year coverage
// ============================================================
console.log('\n📋 AUDIT 7: Birth year coverage in opponents.ts');
const byMatch = opponentsSrc.match(/"birthYear":\s*(null|\d+)/g) || [];
let withBY = 0, nullBY = 0;
for (const m of byMatch) {
  if (m.includes('null')) nullBY++;
  else withBY++;
}
ok(`${withBY} opponents with birthYear, ${nullBY} with null`);
if (nullBY > 0) warn(`${nullBY} opponents missing birth year`);

// ============================================================
// AUDIT 8: ftlEventId coverage
// ============================================================
console.log('\n📋 AUDIT 8: ftlEventId coverage in events.ts');
const withFtl = (eventsSrc.match(/ftlEventId/g) || []).length;
ok(`${withFtl}/${events.length} events have ftlEventId`);
if (withFtl < events.length) {
  warn(`${events.length - withFtl} events missing ftlEventId`);
}

// ============================================================
// AUDIT 9: FTL CSV verification (sample 5 events)
// ============================================================
console.log('\n📋 AUDIT 9: FTL CSV spot-check (skipped — run separately with network)');

// ============================================================
// SUMMARY
// ============================================================
console.log('\n' + '='.repeat(60));
console.log(`📊 AUDIT SUMMARY: ${totalErrors} errors, ${totalWarnings} warnings`);
if (totalErrors === 0) console.log('🎉 All critical checks passed!');
else console.log('🔴 Fix errors above before deploying.');
console.log('='.repeat(60));
