// Build opponents data from FencingTracker raw bouts file
// Usage: node scripts/build-opponents.mjs

import { readFileSync, writeFileSync } from 'fs';

const raw = readFileSync('src/data/rawBouts.txt', 'utf8');
const lines = raw.trim().split('\n');

const h2h = {};

for (const line of lines) {
  const [tournament, event, date, type, result, score, opponent, club] = line.split('|');
  if (!opponent) continue;
  
  const name = opponent.trim();
  if (!h2h[name]) {
    h2h[name] = { clubs: new Set(), bouts: [] };
  }
  
  const win = result.trim() === 'V';
  h2h[name].bouts.push({
    tournament: tournament.trim(),
    event: event.trim(),
    date: date.trim(),
    type: type.trim(),
    win,
    score: score.trim().replace(':', '-'),
  });
  
  const c = club?.trim();
  if (c) h2h[name].clubs.add(c);
}

// Convert to serializable format
const opponents = {};
for (const [name, data] of Object.entries(h2h)) {
  const wins = data.bouts.filter(b => b.win).length;
  const losses = data.bouts.length - wins;
  opponents[name] = {
    wins,
    losses,
    total: data.bouts.length,
    winRate: Math.round((wins / data.bouts.length) * 100),
    clubs: [...data.clubs],
    bouts: data.bouts,
  };
}

console.log(`Built H2H database: ${Object.keys(opponents).length} opponents, ${lines.length} bouts`);

// Write as TypeScript
const ts = `// Auto-generated H2H opponent database
// Generated from FencingTracker history data

export interface OpponentBout {
  tournament: string;
  event: string;
  date: string;
  type: string; // "Pool" | "T256" | "T128" | "T64" | "T32" | "T16" | "T8" | "T4" | "T2"
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

export const opponents: Record<string, OpponentData> = ${JSON.stringify(opponents, null, 2)};

export function getOpponentSlug(name: string): string {
  return name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().replace(/-+/g, '-').replace(/^-|-$/g, '');
}

export function findOpponentBySlug(slug: string): [string, OpponentData] | null {
  for (const [name, data] of Object.entries(opponents)) {
    if (getOpponentSlug(name) === slug) return [name, data];
  }
  return null;
}
`;

writeFileSync('src/data/opponents.ts', ts);
console.log('Written to src/data/opponents.ts');
