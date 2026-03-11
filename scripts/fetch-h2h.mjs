// Fetch H2H data from FencingTracker and build opponents.ts
// Usage: node scripts/fetch-h2h.mjs

import { writeFileSync } from 'fs';
import { JSDOM } from 'jsdom';

const URL = 'https://fencingtracker.com/p/100259666/Rian-Wei/history';

async function main() {
  console.log('Fetching FencingTracker history...');
  const resp = await fetch(URL);
  const html = await resp.text();
  
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  
  const events = [];
  let cur = null;
  
  doc.querySelectorAll('h4, h5, table').forEach(el => {
    if (el.tagName === 'H4') {
      cur = { t: el.textContent.trim(), e: [] };
      events.push(cur);
    } else if (el.tagName === 'H5' && cur) {
      cur._c = { i: el.textContent.trim(), b: [] };
      cur.e.push(cur._c);
    } else if (el.tagName === 'TABLE' && cur && cur._c) {
      el.querySelectorAll('tbody tr').forEach(row => {
        const c = row.querySelectorAll('td');
        if (c.length >= 8) {
          cur._c.b.push({
            type: c[0]?.textContent.trim(),
            result: c[1]?.textContent.trim(),
            score: c[2]?.textContent.trim(),
            opponent: c[3]?.textContent.trim(),
            club: (c[8] || { textContent: '' }).textContent.trim(),
          });
        }
      });
    }
  });

  // Build H2H
  const h2h = {};
  events.forEach(e => {
    e.e.forEach(se => {
      const m = se.i.match(/(.+?)\s*\(([^)]+)\),\s*(.+)/);
      const ev = m ? m[1].trim() : se.i;
      const dt = m ? m[3].trim() : '';
      se.b.forEach(b => {
        const name = b.opponent;
        if (!h2h[name]) h2h[name] = { wins: 0, losses: 0, total: 0, winRate: 0, clubs: [], bouts: [] };
        const win = b.result === 'V';
        if (win) h2h[name].wins++;
        else h2h[name].losses++;
        h2h[name].total++;
        h2h[name].winRate = Math.round((h2h[name].wins / h2h[name].total) * 100);
        if (b.club && !h2h[name].clubs.includes(b.club)) h2h[name].clubs.push(b.club);
        h2h[name].bouts.push({
          tournament: e.t,
          event: ev,
          date: dt,
          type: b.type,
          win,
          score: b.score.replace(':', '-'),
        });
      });
    });
  });

  const count = Object.keys(h2h).length;
  const totalBouts = Object.values(h2h).reduce((s, d) => s + d.total, 0);
  console.log(`Built H2H: ${count} opponents, ${totalBouts} bouts`);

  const ts = `// Auto-generated H2H opponent database - ${count} opponents, ${totalBouts} bouts
// Generated from FencingTracker history data

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

export const opponents: Record<string, OpponentData> = ${JSON.stringify(h2h, null, 2)};

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
}

main().catch(console.error);
