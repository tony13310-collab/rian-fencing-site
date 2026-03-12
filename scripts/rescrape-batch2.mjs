#!/usr/bin/env node
/**
 * Batch scrape Rian Wei's pool data from FTL using Playwright.
 * Batch 2: events 17-32 (older events).
 */
import { chromium } from 'playwright';
import fs from 'fs';

const EVENTS = [
  { idx: 17, date: "2024-03-03", cat: "Y-12", eid: "4409C222A752442D88257A1375AF9AE4", expPlace: 17, expTotal: 192 },
  { idx: 18, date: "2024-03-02", cat: "Y-14", eid: "A2C6B962E7A84407B05DF6B67CCCD4E1", expPlace: 91, expTotal: 248 },
  { idx: 19, date: "2024-01-15", cat: "Y-12", eid: "644FBA3227B84C80B5B3DE9E164EC1D0", expPlace: 3, expTotal: 148 },
  { idx: 20, date: "2024-01-13", cat: "Y-14", eid: "0E3BC82880D6424C8ECF74CF9BECEB6F", expPlace: 16, expTotal: 185 },
  { idx: 21, date: "2023-11-24", cat: "Y-12", eid: "BB56151C198C4C53B9E0E4DD87BA02EB", expPlace: 5, expTotal: 119 },
  { idx: 22, date: "2023-07-08", cat: "Y-12", eid: "1FEEB9ECE7AB45D4B0A727EE4C05AC19", expPlace: 53, expTotal: 215 },
  { idx: 23, date: "2023-03-05", cat: "Y-12", eid: "992AAC53069443FFBF2FCDF3289A1855", expPlace: 35, expTotal: 172 },
  { idx: 24, date: "2022-11-25", cat: "Y-12", eid: "8FAB048015534C599A09D88BABE1BDF0", expPlace: 36, expTotal: 118 },
  { idx: 25, date: "2022-09-11", cat: "Y-12", eid: "40F22F48BAC044338777BD4EBE0C4754", expPlace: 3, expTotal: 21 },
  { idx: 26, date: "2022-05-15", cat: "Y-12", eid: "481717804B454DCD8A0F7AB21AD44B16", expPlace: 46, expTotal: 61 },
  { idx: 27, date: "2022-05-14", cat: "Y-10", eid: "C14125BFE6F04D59966C4A87F2F012D9", expPlace: 30, expTotal: 39 },
  { idx: 28, date: "2020-01-19", cat: "Y-8", eid: "CFC6B385D6E24432BD1C0653D0C044A0", expPlace: 3, expTotal: 18 },
  { idx: 29, date: "2020-01-18", cat: "Y-10", eid: "42E9FDAA09124D7D92BBD8DDCC19248B", expPlace: 57, expTotal: 76 },
  { idx: 30, date: "2019-11-30", cat: "Y-8", eid: "789FD17BB4584040913F28C0F049A204", expPlace: 8, expTotal: 22 },
  { idx: 31, date: "2019-11-29", cat: "Y-10", eid: "78B98358BC5C466C8A8885BAE5AF1D4C", expPlace: 44, expTotal: 65 },
  { idx: 32, date: "2018-11-24", cat: "Y-8", eid: "DBBEB129B3214384B3F79B747E60ADA8", expPlace: 14, expTotal: 18 },
];

function makeEventId(date, cat) {
  const slug = cat.toLowerCase() + "-men-s-saber";
  return `${date}_${slug}`;
}

async function getPoolRoundId(page, eid) {
  const url = `https://www.fencingtimelive.com/events/results/${eid}`;
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);

  const poolHref = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a'));
    for (const a of links) {
      const href = a.getAttribute('href') || '';
      if (href.includes('/pools/scores/')) return href;
    }
    return null;
  });

  return poolHref;
}

async function scrapePool(page, poolUrl) {
  await page.goto(poolUrl, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(4000);

  const poolData = await page.evaluate(() => {
    const tables = document.querySelectorAll('table');

    for (const table of tables) {
      const text = table.textContent || '';
      if (!text.match(/WEI.*Rian|Wei.*Rian/i)) continue;

      const rows = table.querySelectorAll('tr');
      const fencers = []; // { name, club, cells[] }
      let rianIdx = -1;

      for (let r = 0; r < rows.length; r++) {
        const cells = Array.from(rows[r].querySelectorAll('td, th')).map(c => c.textContent?.trim());
        if (cells.length < 5) continue;

        // First cell contains name + club info
        const firstCell = cells[0] || '';
        // FTL format: "NAME\nCLUB / Division / Country"
        const lines = firstCell.split('\n').map(s => s.trim()).filter(Boolean);
        if (lines.length === 0) continue;

        const name = lines[0];
        // Skip header row
        if (name === '' || name === 'Name' || !name.match(/[A-Z]/)) continue;
        // Check it looks like a fencer name (has uppercase)
        if (!name.match(/^[A-Z]/)) continue;

        // Extract club from second line
        let club = '';
        if (lines.length > 1) {
          const parts = lines[1].split('/').map(s => s.trim());
          club = parts[0] || '';
        }

        // Seed is cells[1]
        fencers.push({ name, club, cells });

        if (name.match(/WEI\s+Rian/i) || (name.includes('WEI') && text.includes('CAPITALFA'))) {
          rianIdx = fencers.length - 1;
        }
      }

      if (rianIdx === -1) continue;

      const rianCells = fencers[rianIdx].cells;
      const bouts = [];
      let wins = 0, losses = 0, ts = 0, tr = 0;

      // Score cells start at index 2 (after name, seed) and go to index 2+poolSize-1
      // The diagonal (self) cell is 'X' or empty
      const poolSize = fencers.length;
      let oppIdx = 0;

      for (let c = 2; c < 2 + poolSize; c++) {
        if (oppIdx === rianIdx) { oppIdx++; continue; } // skip self
        const cell = rianCells[c] || '';
        const match = cell.match(/^([VD])(\d+)$/i);
        if (!match) { oppIdx++; continue; }

        const isWin = match[1].toUpperCase() === 'V';
        const rianScore = parseInt(match[2]);

        // Get opponent's score against Rian from their row
        const oppCells = fencers[oppIdx]?.cells;
        let oppScore = 0;
        if (oppCells) {
          const oppCell = oppCells[2 + rianIdx] || '';
          const oppMatch = oppCell.match(/^[VD](\d+)$/i);
          if (oppMatch) oppScore = parseInt(oppMatch[1]);
        }

        const opponent = fencers[oppIdx];
        bouts.push({
          opponent: opponent?.name || 'UNKNOWN',
          club: opponent?.club || '',
          score: `${rianScore}-${oppScore}`,
          win: isWin
        });

        if (isWin) wins++;
        else losses++;
        ts += rianScore;
        tr += oppScore;
        oppIdx++;
      }

      if (bouts.length > 0) {
        return {
          bouts,
          wins,
          losses,
          touchesScored: ts,
          touchesReceived: tr,
          indicator: ts - tr,
          poolSize
        };
      }
    }

    return null;
  });

  return poolData;
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
  });
  const page = await context.newPage();
  const results = [];

  for (const ev of EVENTS) {
    console.log(`\n[${ev.idx}] ${ev.date} ${ev.cat} (${ev.eid.substring(0, 8)}...)`);
    try {
      // Step 1: Get pool round link from results page
      const poolHref = await getPoolRoundId(page, ev.eid);
      if (!poolHref) {
        console.log(`  ❌ No pool link found`);
        results.push({
          eventId: makeEventId(ev.date, ev.cat),
          ftlEventId: ev.eid,
          place: ev.expPlace,
          total: ev.expTotal,
          pool: null,
          error: "No pool link on results page"
        });
        continue;
      }

      const poolUrl = `https://www.fencingtimelive.com${poolHref}`;
      console.log(`  Pool URL: ${poolUrl}`);

      // Step 2: Scrape pool data
      const poolData = await scrapePool(page, poolUrl);
      if (!poolData) {
        console.log(`  ❌ Could not parse Rian's pool data`);
        results.push({
          eventId: makeEventId(ev.date, ev.cat),
          ftlEventId: ev.eid,
          place: ev.expPlace,
          total: ev.expTotal,
          pool: null,
          error: "Could not find/parse Rian's pool"
        });
        continue;
      }

      console.log(`  ✅ ${poolData.wins}W-${poolData.losses}L, ${poolData.touchesScored}-${poolData.touchesReceived} (${poolData.poolSize} fencers)`);
      results.push({
        eventId: makeEventId(ev.date, ev.cat),
        ftlEventId: ev.eid,
        place: ev.expPlace,
        total: ev.expTotal,
        pool: poolData
      });
    } catch (err) {
      console.error(`  ❌ Error: ${err.message}`);
      results.push({
        eventId: makeEventId(ev.date, ev.cat),
        ftlEventId: ev.eid,
        place: ev.expPlace,
        total: ev.expTotal,
        pool: null,
        error: err.message
      });
    }

    await page.waitForTimeout(1500);
  }

  await browser.close();

  const outPath = '/Users/tony/.openclaw/workspace-fencing/rian-fencing-site/scripts/rescrape-batch2.json';
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
  console.log(`\n=== SUMMARY ===`);
  console.log(`Saved ${results.length} results to ${outPath}`);
  const withPool = results.filter(r => r.pool);
  console.log(`  With pool: ${withPool.length}/${results.length}`);
  const failed = results.filter(r => !r.pool);
  if (failed.length > 0) {
    console.log(`  Failed: ${failed.map(r => `#${EVENTS.find(e => e.eid === r.ftlEventId)?.idx}`).join(', ')}`);
  }
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
