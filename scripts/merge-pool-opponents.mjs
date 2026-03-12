#!/usr/bin/env node
// Merge pool bout opponents from eventDetails into opponents.ts
// Uses the JSON scraped data + events.ts data instead of importing TS

import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const opPath = join(__dirname, '..', 'src', 'data', 'opponents.ts');

// Load FTL scraped pool data
const poolData = JSON.parse(readFileSync(join(__dirname, 'ftl-scraped-data.json'), 'utf8'));

// Load pool-bouts.ts to get event ID → pool data mapping
const poolBoutsContent = readFileSync(join(__dirname, '..', 'src', 'data', 'pool-bouts.ts'), 'utf8');

// Also parse eventDetails.ts for pool bouts (these have full "5-3" score format)
const edContent = readFileSync(join(__dirname, '..', 'src', 'data', 'eventDetails.ts'), 'utf8');

// Parse events.ts to get event metadata (date, tournament, event name) + ftlEventId mapping
const eventsContent = readFileSync(join(__dirname, '..', 'src', 'data', 'events.ts'), 'utf8');

// Extract events with ftlEventId
const eventEntries = [];
const eventRegex = /\{\s*date:\s*"([^"]+)",\s*tournament:\s*"([^"]+)",\s*event:\s*"([^"]+)"[^}]*?(?:ftlEventId:\s*"([^"]+)")?[^}]*\}/g;
let m;
while ((m = eventRegex.exec(eventsContent)) !== null) {
  eventEntries.push({
    date: m[1],
    tournament: m[2],
    event: m[3],
    ftlEventId: m[4] || null
  });
}
console.log(`Found ${eventEntries.length} events in events.ts`);

// Build FTL event ID → event metadata mapping
const ftlToEvent = {};
for (const ev of eventEntries) {
  if (ev.ftlEventId) {
    ftlToEvent[ev.ftlEventId] = ev;
  }
}

// Also extract pool bouts from eventDetails.ts (these have "5-3" score format)
// Parse each event detail block
const detailBouts = []; // { date, tournament, event, opponent, club, score, win }

// Match event detail entries
const detailRegex = /id:\s*"([^"]+)"[\s\S]*?date:\s*"([^"]+)"[\s\S]*?tournament:\s*"([^"]+)"[\s\S]*?event:\s*"([^"]+)"[\s\S]*?(?:pool:\s*\{[\s\S]*?bouts:\s*\[([\s\S]*?)\]|(?=\n  "[^"]+":|\n\};))/g;
let dm;
while ((dm = detailRegex.exec(edContent)) !== null) {
  if (!dm[5]) continue;
  const boutsStr = dm[5];
  const boutRegex = /opponent:\s*"([^"]+)"[\s\S]*?club:\s*"([^"]*)"[\s\S]*?score:\s*"([^"]+)"[\s\S]*?win:\s*(true|false)/g;
  let bm;
  while ((bm = boutRegex.exec(boutsStr)) !== null) {
    detailBouts.push({
      date: dm[2],
      tournament: dm[3],
      event: dm[4],
      opponent: bm[1],
      club: bm[2],
      score: bm[3],
      win: bm[4] === 'true'
    });
  }
}
console.log(`Extracted ${detailBouts.length} pool bouts from eventDetails.ts`);

// Also get pool bouts from FTL scraped data (these have "V5"/"D3" score format)
const ftlBouts = [];
for (const [ftlId, data] of Object.entries(poolData)) {
  const ev = ftlToEvent[ftlId];
  if (!ev) continue;
  for (const bout of data.poolBouts || []) {
    // Convert V5/D3 to 5-X format
    let score = bout.score;
    if (score.startsWith('V')) {
      score = score.substring(1) + '-?'; // We don't know exact received touches
    } else if (score.startsWith('D')) {
      score = score.substring(1) + '-5'; // Lost, opponent likely got 5
    }
    
    ftlBouts.push({
      date: ev.date,
      tournament: ev.tournament,
      event: ev.event,
      opponent: bout.opponent,
      club: bout.club || '',
      score: score,
      win: bout.win
    });
  }
}
console.log(`Extracted ${ftlBouts.length} pool bouts from FTL data`);

// Parse current opponents
const opContent = readFileSync(opPath, 'utf8');
// Extract JSON-like object
// Extract just the object literal - find matching closing brace
const opObjStart = opContent.indexOf('= {', opContent.indexOf('export const opponents')) + 2;
let depth = 0;
let opObjEnd = opObjStart;
for (let i = opObjStart; i < opContent.length; i++) {
  if (opContent[i] === '{') depth++;
  else if (opContent[i] === '}') {
    depth--;
    if (depth === 0) { opObjEnd = i + 1; break; }
  }
}
const opObjStr = opContent.substring(opObjStart, opObjEnd);
const currentOpponents = JSON.parse(opObjStr);
console.log(`Current opponents: ${Object.keys(currentOpponents).length}`);

// Merge - prefer eventDetails bouts (have exact scores), only use FTL if not in eventDetails
const allPoolBouts = [];
const seen = new Set();

// Add eventDetails bouts first
for (const b of detailBouts) {
  const key = `${b.tournament}|${b.event}|${b.opponent}`;
  if (!seen.has(key)) {
    seen.add(key);
    allPoolBouts.push(b);
  }
}

// Add FTL bouts only if not already covered
for (const b of ftlBouts) {
  const key = `${b.tournament}|${b.event}|${b.opponent}`;
  if (!seen.has(key)) {
    seen.add(key);
    allPoolBouts.push(b);
  }
}

console.log(`Total unique pool bouts to merge: ${allPoolBouts.length}`);

let added = 0;
let skipped = 0;
let newOpponents = 0;

for (const bout of allPoolBouts) {
  const name = bout.opponent;
  
  // Format date
  const d = new Date(bout.date + 'T12:00:00');
  const dateStr = d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  
  const existing = currentOpponents[name];
  
  if (existing) {
    // Check for duplicate
    const isDup = existing.bouts.some(b => 
      b.tournament === bout.tournament && 
      b.event === bout.event && 
      b.type === 'Pool'
    );
    if (isDup) {
      skipped++;
      continue;
    }
    
    existing.bouts.push({
      tournament: bout.tournament,
      event: bout.event,
      date: dateStr,
      type: 'Pool',
      win: bout.win,
      score: bout.score
    });
    existing.total++;
    if (bout.win) existing.wins++;
    else existing.losses++;
    existing.winRate = Math.round((existing.wins / existing.total) * 100);
    if (bout.club && !existing.clubs.includes(bout.club)) {
      existing.clubs.push(bout.club);
    }
    added++;
  } else {
    currentOpponents[name] = {
      wins: bout.win ? 1 : 0,
      losses: bout.win ? 0 : 1,
      total: 1,
      winRate: bout.win ? 100 : 0,
      clubs: bout.club ? [bout.club] : [],
      bouts: [{
        tournament: bout.tournament,
        event: bout.event,
        date: dateStr,
        type: 'Pool',
        win: bout.win,
        score: bout.score
      }]
    };
    added++;
    newOpponents++;
  }
}

console.log(`Added: ${added}, Skipped (dup): ${skipped}, New opponents: ${newOpponents}`);
console.log(`Total opponents now: ${Object.keys(currentOpponents).length}`);

// Sort bouts by date (newest first)
for (const data of Object.values(currentOpponents)) {
  data.bouts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Generate output
const sortedNames = Object.keys(currentOpponents).sort();
const totalBouts = Object.values(currentOpponents).reduce((s, d) => s + d.total, 0);
const totalWins = Object.values(currentOpponents).reduce((s, d) => s + d.wins, 0);

let output = `// Auto-generated H2H opponent database - ${sortedNames.length} opponents, ${totalBouts} bouts
// Generated from FencingTracker history + FTL pool bouts

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
  bouts: OpponentBout[];
}

export function getOpponentSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const opponents: Record<string, OpponentData> = ${JSON.stringify(
  Object.fromEntries(sortedNames.map(n => [n, currentOpponents[n]])),
  null,
  2
)};
`;

writeFileSync(opPath, output);
console.log(`opponents.ts updated! ${sortedNames.length} opponents, ${totalBouts} bouts`);
