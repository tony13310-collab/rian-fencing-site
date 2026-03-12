#!/usr/bin/env node
// Comprehensive data audit: check consistency across all data files

import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcData = join(__dirname, '..', 'src', 'data');

const eventsContent = readFileSync(join(srcData, 'events.ts'), 'utf8');
const profileContent = readFileSync(join(srcData, 'profile.ts'), 'utf8');
const edContent = readFileSync(join(srcData, 'eventDetails.ts'), 'utf8');

const issues = [];
const warnings = [];

// === 1. Parse events.ts ===
const eventEntries = [];
const eventRegex = /\{\s*date:\s*"([^"]+)",\s*tournament:\s*"([^"]+)",\s*event:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*level:\s*"([^"]+)",\s*place:\s*(\d+|null),\s*total:\s*(\d+|null),\s*rating:\s*"([^"]*)"/g;
let m;
while ((m = eventRegex.exec(eventsContent)) !== null) {
  eventEntries.push({
    date: m[1], tournament: m[2], event: m[3], category: m[4],
    level: m[5], place: m[6] === 'null' ? null : parseInt(m[6]),
    total: m[7] === 'null' ? null : parseInt(m[7]), rating: m[8]
  });
}
console.log(`\n=== DATA AUDIT ===\n`);
console.log(`Events in events.ts: ${eventEntries.length}`);

// === 2. Check profile.ts hardcoded values ===
console.log(`\n--- profile.ts checks ---`);

// Check rating
const ratingMatch = profileContent.match(/rating:\s*"([^"]+)"/);
const profileRating = ratingMatch?.[1];
// Find highest rating in events.ts
const ratings = eventEntries.filter(e => e.rating).map(e => e.rating);
const ratingOrder = ['A', 'B', 'C', 'D', 'E', 'U'];
const highestRating = ratings.sort((a, b) => {
  const ai = ratingOrder.indexOf(a[0]);
  const bi = ratingOrder.indexOf(b[0]);
  return ai - bi;
})[0];
console.log(`  Profile rating: ${profileRating}, Highest from events: ${highestRating || 'none'}`);
if (profileRating !== highestRating && highestRating) {
  warnings.push(`Profile rating "${profileRating}" may not match events highest "${highestRating}"`);
}

// Check rankings are hardcoded
const rankingsMatch = profileContent.match(/currentRankings:\s*\[([\s\S]*?)\]/);
if (rankingsMatch) {
  issues.push(`⚠️ profile.ts: currentRankings is HARDCODED - must manually update when rankings change`);
}

// Check achievements are hardcoded
const achievementsMatch = profileContent.match(/achievements:\s*\[([\s\S]*?)\],/);
if (achievementsMatch) {
  issues.push(`⚠️ profile.ts: achievements is HARDCODED - won't update when new achievements happen`);
}

// Check profile.seasons duplicates events.ts data
if (profileContent.includes('seasons = [')) {
  issues.push(`🔴 profile.ts: "seasons" array DUPLICATES events.ts data with DIFFERENT structure — data can get out of sync`);
  
  // Check for mismatches
  const profileEventsRegex = /place:\s*(\d+|null),\s*total:\s*(\d+|null)/g;
  let pm;
  const profileResults = [];
  while ((pm = profileEventsRegex.exec(profileContent)) !== null) {
    profileResults.push({ place: pm[1], total: pm[2] });
  }
  console.log(`  Profile seasons has ${profileResults.length} event results`);
}

// === 3. Check seasonMeta hardcoded values ===
console.log(`\n--- seasonMeta checks ---`);
const seasonMetaMatch = eventsContent.match(/seasonMeta:\s*SeasonMeta\[\]\s*=\s*\[([\s\S]*?)\];/);
if (seasonMetaMatch) {
  issues.push(`⚠️ events.ts: seasonMeta (ratings, rankings) is HARDCODED - must manually update each season`);
}

// === 4. Check events.ts comment header ===
const headerMatch = eventsContent.match(/\/\/.*?(\d+) events/);
if (headerMatch) {
  const headerCount = parseInt(headerMatch[1]);
  if (headerCount !== eventEntries.length) {
    issues.push(`🔴 events.ts: Header says "${headerCount} events" but actually has ${eventEntries.length}`);
  }
}

// === 5. Check eventDetails.ts coverage ===
console.log(`\n--- eventDetails.ts checks ---`);
const edIds = [];
const edIdRegex = /id:\s*"([^"]+)"/g;
while ((m = edIdRegex.exec(edContent)) !== null) {
  edIds.push(m[1]);
}
console.log(`  Event details: ${edIds.length} entries`);

// Check which events have details
let missingDetails = 0;
for (const ev of eventEntries) {
  const expectedId = `${ev.date}_${ev.event.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`;
  if (!edIds.includes(expectedId)) {
    missingDetails++;
  }
}
console.log(`  Events WITHOUT details: ${missingDetails}`);

// === 6. Check pool data consistency ===
console.log(`\n--- Pool data consistency ---`);
// Count events with poolSeed in events.ts
const poolSeedCount = (eventsContent.match(/poolSeed:/g) || []).length;
console.log(`  Events with poolSeed in events.ts: ${poolSeedCount}`);

// Count pool entries in eventDetails
const poolCount = (edContent.match(/pool:\s*\{/g) || []).length;
console.log(`  Events with pool in eventDetails: ${poolCount}`);

// === 7. Check opponents.ts ===
console.log(`\n--- opponents.ts checks ---`);
const opContent = readFileSync(join(srcData, 'opponents.ts'), 'utf8');
const opHeaderMatch = opContent.match(/(\d+) opponents, (\d+) bouts/);
if (opHeaderMatch) {
  console.log(`  Header: ${opHeaderMatch[1]} opponents, ${opHeaderMatch[2]} bouts`);
}

// Check for opponents with clubs as numbers (FencingTracker artifact)
const numClubMatches = opContent.match(/"clubs":\s*\[\s*"(\d+)"/g);
if (numClubMatches) {
  warnings.push(`opponents.ts: ${numClubMatches.length} opponents have numeric club IDs (FencingTracker artifact) instead of club names`);
}

// === 8. Check pool-bouts.ts vs eventDetails ===
console.log(`\n--- pool-bouts.ts checks ---`);
const pbContent = readFileSync(join(srcData, 'pool-bouts.ts'), 'utf8');
const pbIds = (pbContent.match(/"[A-F0-9]{32}"/g) || []).map(s => s.replace(/"/g, ''));
console.log(`  FTL event IDs in pool-bouts.ts: ${pbIds.length}`);
issues.push(`⚠️ pool-bouts.ts: Separate file with FTL event IDs — REDUNDANT with eventDetails.ts pool data`);

// === 9. Detect all hardcoded values that should be dynamic ===
console.log(`\n\n=== HARDCODED vs DYNAMIC ANALYSIS ===\n`);

const hardcoded = [
  { file: 'profile.ts', field: 'rating', desc: 'Current rating "A26"', fix: 'Compute from events.ts (find latest non-empty rating)' },
  { file: 'profile.ts', field: 'currentRankings', desc: 'Y-14 #2, Cadet #6, Junior #50', fix: 'Must be updated manually (rankings come from USA Fencing, not computable)' },
  { file: 'profile.ts', field: 'achievements', desc: '6 hardcoded achievement cards', fix: 'Auto-generate from events (golds, top finishes, rating milestones)' },
  { file: 'profile.ts', field: 'seasons', desc: 'Duplicate event list with different schema', fix: 'DELETE — use allEvents from events.ts instead' },
  { file: 'profile.ts', field: 'bio', desc: 'Static bio text', fix: 'OK to keep static (subjective text)' },
  { file: 'events.ts', field: 'seasonMeta.rating', desc: 'Hardcoded season highest rating', fix: 'Compute from events in that season' },
  { file: 'events.ts', field: 'seasonMeta.rankings', desc: 'Hardcoded national rankings per season', fix: 'Must update manually (external data)' },
  { file: 'events.ts', field: 'seasonOrder', desc: 'Hardcoded list of seasons', fix: 'Compute from unique seasons in allEvents' },
  { file: 'events.ts', field: 'header comment', desc: '"71 events"', fix: 'Remove or auto-generate' },
  { file: 'opponents.ts', field: 'header comment', desc: '"405 opponents, 944 bouts"', fix: 'Remove or auto-generate' },
  { file: 'opponents.ts', field: 'clubs', desc: 'Many are numeric IDs from FencingTracker', fix: 'Map to club names' },
];

console.log('File              | Field              | Issue');
console.log('------------------|--------------------|------');
for (const h of hardcoded) {
  console.log(`${h.file.padEnd(18)}| ${h.field.padEnd(19)}| ${h.desc}`);
  console.log(`${''.padEnd(18)}| ${''.padEnd(19)}| → Fix: ${h.fix}`);
}

// === SUMMARY ===
console.log(`\n\n=== ISSUES FOUND ===\n`);
for (const issue of issues) {
  console.log(issue);
}
console.log(`\n=== WARNINGS ===\n`);
for (const w of warnings) {
  console.log(`⚠️  ${w}`);
}

console.log(`\n=== RECOMMENDATIONS ===\n`);
console.log(`1. DELETE profile.ts "seasons" array — it duplicates events.ts and WILL get out of sync`);
console.log(`2. Make profile.rating COMPUTED from events.ts`);
console.log(`3. Make profile.achievements COMPUTED from events.ts (auto-detect golds, medals, rating milestones)`);
console.log(`4. Make seasonOrder COMPUTED from allEvents unique seasons`);
console.log(`5. Make seasonMeta.rating COMPUTED from events in that season`);
console.log(`6. DELETE pool-bouts.ts — data already in eventDetails.ts`);
console.log(`7. Fix numeric club IDs in opponents.ts`);
console.log(`8. Rankings (seasonMeta.rankings, profile.currentRankings) MUST stay manual — external data source`);
