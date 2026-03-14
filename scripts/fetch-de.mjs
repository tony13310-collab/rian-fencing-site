#!/usr/bin/env node
// Fetch DE tableau data for all events missing DE bouts

import fs from 'fs';

const API = 'https://rian-fencing-api.tony13310.workers.dev';

const detailsSrc = fs.readFileSync('src/data/eventDetails.ts', 'utf8');

// Find all event keys in eventDetails.ts
const keys = [...detailsSrc.matchAll(/"(\d{4}-\d{2}-\d{2}_[^"]+)":/g)].map(m => m[1]);

// Find which have DE data
const withDE = new Set(keys.filter(k => {
  const idx = detailsSrc.indexOf('"' + k + '"');
  const nextIdx = keys.indexOf(k) + 1;
  const endKey = nextIdx < keys.length ? keys[nextIdx] : null;
  const end = endKey ? detailsSrc.indexOf('"' + endKey + '"') : detailsSrc.length;
  const chunk = detailsSrc.substring(idx, end);
  return /de:\s*\[\s*\{/.test(chunk);
}));

// Import events to get ftlEventId mapping
// Parse events.ts to build date+event → ftlEventId map
const eventsSrc = fs.readFileSync('src/data/events.ts', 'utf8');

// Build map: find all ftlEventId entries and their nearby date+event
const ftlMap = {};
const ftlRegex = /ftlEventId:\s*"([^"]+)"/g;
let m;
while ((m = ftlRegex.exec(eventsSrc)) !== null) {
  const ftlId = m[1];
  // Look backwards for date
  const before = eventsSrc.substring(Math.max(0, m.index - 2000), m.index);
  const dateMatch = before.match(/date:\s*"(\d{4}-\d{2}-\d{2})"/g);
  const eventMatch = before.match(/event:\s*"([^"]+)"/g);
  if (dateMatch && eventMatch) {
    const date = dateMatch[dateMatch.length - 1].match(/"([^"]+)"/)[1];
    const event = eventMatch[eventMatch.length - 1].match(/"([^"]+)"/)[1];
    const slug = event.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
    const key = `${date}_${slug}`;
    ftlMap[key] = ftlId;
  }
}

console.log(`ftlMap entries: ${Object.keys(ftlMap).length}`);
console.log(`Events with DE: ${withDE.size}`);

// Find events needing DE
const needDE = [];
for (const key of keys) {
  if (withDE.has(key)) continue;
  if (ftlMap[key]) {
    needDE.push({ key, ftlEventId: ftlMap[key] });
  } else {
    console.log(`  No ftlEventId for: ${key}`);
  }
}

console.log(`Events needing DE: ${needDE.length}`);

// Fetch DE data
const results = {};
let success = 0, failed = 0, noDe = 0;

for (let i = 0; i < needDE.length; i++) {
  const { key, ftlEventId } = needDE[i];
  process.stdout.write(`[${i+1}/${needDE.length}] ${key}... `);
  
  try {
    const res = await fetch(`${API}/api/ftl/de/${ftlEventId}`);
    if (!res.ok) {
      console.log(`HTTP ${res.status}`);
      failed++;
      continue;
    }
    const data = await res.json();
    if (data.matches && data.matches.length > 0) {
      results[key] = data.matches.map(m => ({
        round: m.round || '',
        opponent: m.opponent || 'Unknown',
        club: m.club || '',
        score: m.score || '0-0',
        win: m.win ?? false,
      }));
      console.log(`${data.matches.length} DE bouts`);
      success++;
    } else {
      console.log('no DE path found');
      noDe++;
      results[key] = [];
    }
  } catch (err) {
    console.log(`error: ${err.message}`);
    failed++;
  }
  
  await new Promise(r => setTimeout(r, 500));
}

console.log(`\nDone: ${success} with DE, ${noDe} no DE path, ${failed} failed`);
fs.writeFileSync('scripts/de-results.json', JSON.stringify(results, null, 2));
console.log('Saved to scripts/de-results.json');
