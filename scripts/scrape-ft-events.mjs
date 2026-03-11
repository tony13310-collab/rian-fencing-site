/**
 * Scrape all missing event details from FencingTracker
 * FT event pages have pool scores + DE scores in data-tt attributes
 * Output: eventDetails entries to append to eventDetails.ts
 */

import { JSDOM } from 'jsdom';

const RIAN_FT_ID = '100259666';

// All FT event IDs mapped to our event data
// Extracted from fencingtracker.com/p/100259666/Rian-Wei
const FT_EVENTS = [
  // 2025-26 (missing only)
  { ftId: 33131, date: '2025-05-18', event: "Cadet Men's Saber", tournament: "May NAC", loc: "Milwaukee, WI" },
  { ftId: 32532, date: '2025-05-16', event: "Junior Men's Saber", tournament: "May NAC", loc: "Milwaukee, WI" },
  { ftId: 30717, date: '2025-03-08', event: "Y-14 Men's Saber", tournament: "March NAC", loc: "Richmond, VA" },
  { ftId: 30510, date: '2025-03-07', event: "Cadet Men's Saber", tournament: "March NAC", loc: "Richmond, VA" },
  { ftId: 30488, date: '2025-02-17', event: "Cadet Men's Saber", tournament: "February NAC", loc: "Philadelphia, PA" },
  { ftId: 30011, date: '2025-02-16', event: "Junior Men's Saber", tournament: "February NAC", loc: "Philadelphia, PA" },
  { ftId: 29289, date: '2025-01-05', event: "Cadet Men's Saber", tournament: "Junior Olympics", loc: "Minneapolis, MN" },
  { ftId: 29017, date: '2024-12-07', event: "Junior Men's Saber", tournament: "December NAC", loc: "Kansas City, MO" },
  { ftId: 28280, date: '2024-12-06', event: "Cadet Men's Saber", tournament: "December NAC", loc: "Kansas City, MO" },
  { ftId: 28161, date: '2024-11-10', event: "Cadet Men's Saber", tournament: "November NAC", loc: "Louisville, KY" },
  // SYC events (may have data on FT)
  { ftId: 32426, date: '2025-03-21', event: "Y-14 Men's Saber", tournament: "Capitol Clash SYC", loc: "Bethesda, MD" },
  { ftId: 29987, date: '2025-01-18', event: "Y-14 Men's Saber", tournament: "Capitol Clash SYC", loc: "Bethesda, MD" },
  { ftId: 28238, date: '2024-12-01', event: "Y-14 Men's Saber", tournament: "Cobra Challenge SYC", loc: "Virginia" },
  { ftId: 28200, date: '2024-11-30', event: "Cadet Men's Saber", tournament: "Cobra Challenge SYC", loc: "Virginia" },
  { ftId: 27583, date: '2024-10-12', event: "Y-14 Men's Saber", tournament: "Cobra Challenge SYC", loc: "Virginia" },
  { ftId: 26641, date: '2024-09-21', event: "Cadet Men's Saber", tournament: "RYC", loc: "Virginia" },
  // 2023-24 season
  { ftId: 26085, date: '2024-07-05', event: "Y-12 Men's Saber", tournament: "Summer Nationals", loc: "Dallas, TX" },
  { ftId: 25169, date: '2024-07-04', event: "Y-14 Men's Saber", tournament: "Summer Nationals", loc: "Dallas, TX" },
  { ftId: 25164, date: '2024-07-01', event: "Cadet Men's Saber", tournament: "Summer Nationals", loc: "Dallas, TX" },
  { ftId: 25120, date: '2024-05-05', event: "Y-12 Men's Saber", tournament: "SYC", loc: "Virginia" },
  { ftId: 24245, date: '2024-05-04', event: "Y-14 Men's Saber", tournament: "SYC", loc: "Virginia" },
  { ftId: 24105, date: '2024-04-21', event: "Cadet Men's Saber", tournament: "RYC", loc: "Virginia" },
  { ftId: 23820, date: '2024-04-20', event: "Y-14 Men's Saber", tournament: "RYC", loc: "Virginia" },
  { ftId: 23703, date: '2024-03-16', event: "Cadet Men's Saber", tournament: "March NAC", loc: "TBD" },
  { ftId: 22782, date: '2024-03-03', event: "Y-12 Men's Saber", tournament: "March NAC", loc: "TBD" },
  { ftId: 22481, date: '2024-03-02', event: "Y-14 Men's Saber", tournament: "March NAC", loc: "TBD" },
  { ftId: 22442, date: '2024-01-15', event: "Y-12 Men's Saber", tournament: "SYC", loc: "Virginia" },
  { ftId: 21352, date: '2024-01-13', event: "Y-14 Men's Saber", tournament: "SYC", loc: "Virginia" },
  // 2022-23 season
  { ftId: 21270, date: '2023-11-24', event: "Y-12 Men's Saber", tournament: "SYC", loc: "Virginia" },
  { ftId: 20411, date: '2023-09-24', event: "Y-14 Men's Saber", tournament: "SYC", loc: "Virginia" },
  { ftId: 19034, date: '2023-09-23', event: "Cadet Men's Saber", tournament: "RYC", loc: "Virginia" },
  { ftId: 19017, date: '2023-09-03', event: "Y-14 Men's Saber", tournament: "SYC", loc: "Virginia" },
  { ftId: 18460, date: '2023-09-02', event: "Y-12 Men's Saber", tournament: "SYC", loc: "Virginia" },
  { ftId: 18446, date: '2023-07-08', event: "Y-12 Men's Saber", tournament: "Summer Nationals", loc: "Phoenix, AZ" },
  { ftId: 18068, date: '2023-04-16', event: "Y-12 Men's Saber", tournament: "RYC", loc: "Virginia" },
  { ftId: 16704, date: '2023-03-11', event: "Y-12 Men's Saber", tournament: "SYC", loc: "Virginia" },
  { ftId: 15795, date: '2023-03-05', event: "Y-12 Men's Saber", tournament: "March NAC", loc: "TBD" },
  { ftId: 15726, date: '2023-02-11', event: "Y-12 Men's Saber", tournament: "RYC", loc: "Virginia" },
  { ftId: 15461, date: '2023-01-14', event: "Y-12 Men's Saber", tournament: "SYC", loc: "Virginia" },
  { ftId: 14816, date: '2022-11-25', event: "Y-12 Men's Saber", tournament: "SYC", loc: "Virginia" },
  { ftId: 14121, date: '2022-10-02', event: "Y-12 Men's Saber", tournament: "RYC", loc: "Virginia" },
  { ftId: 12984, date: '2022-10-01', event: "Y-14 Men's Saber", tournament: "RYC", loc: "Virginia" },
  { ftId: 12975, date: '2022-09-11', event: "Y-12 Men's Saber", tournament: "RYC", loc: "Virginia" },
  { ftId: 12617, date: '2022-09-03', event: "Y-12 Men's Saber", tournament: "SYC", loc: "Virginia" },
  { ftId: 12466, date: '2022-07-11', event: "Y-10 Men's Saber", tournament: "Summer Nationals", loc: "TBD" },
  { ftId: 10765, date: '2022-06-12', event: "Y-10 Mixed Saber", tournament: "Local", loc: "Virginia" },
  { ftId: 10758, date: '2022-05-15', event: "Y-12 Men's Saber", tournament: "SYC", loc: "Virginia" },
  { ftId: 9680, date: '2022-05-14', event: "Y-10 Men's Saber", tournament: "SYC", loc: "Virginia" },
  { ftId: 9666, date: '2021-06-19', event: "Y-10 Men's Saber", tournament: "RYC", loc: "Virginia" },
  { ftId: 7333, date: '2021-05-31', event: "Y-10 Men's Saber", tournament: "SYC", loc: "Virginia" },
  { ftId: 7147, date: '2020-01-19', event: "Y-8 Men's Saber", tournament: "SYC", loc: "Virginia" },
  { ftId: 5142, date: '2020-01-18', event: "Y-10 Men's Saber", tournament: "SYC", loc: "Virginia" },
  { ftId: 5133, date: '2019-11-30', event: "Y-8 Men's Saber", tournament: "SYC", loc: "Virginia" },
  { ftId: 3767, date: '2019-11-29', event: "Y-10 Men's Saber", tournament: "SYC", loc: "Virginia" },
  { ftId: 3760, date: '2018-11-24', event: "Y-8 Men's Saber", tournament: "SYC", loc: "Virginia" },
  // Local/skip
  { ftId: 30848, date: '2025-03-15', event: "Senior Mixed Saber", tournament: "Local", loc: "Bethesda, MD" },
  // Cobra Challenge Y-14 Champion (Nov 2025) - SYC
  // This one might not be on FT... it's the Nov 29 2025 one
];

async function scrapeEvent(evt) {
  const url = `https://fencingtracker.com/event/${evt.ftId}/results`;
  const res = await fetch(url);
  const html = await res.text();
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  
  // Find Rian's row
  const rows = doc.querySelectorAll('tr');
  let rianRow = null;
  let place = null;
  
  for (const row of rows) {
    const link = row.querySelector(`a[href*="${RIAN_FT_ID}"]`);
    if (link) {
      rianRow = row;
      const cells = row.querySelectorAll('td');
      place = parseInt(cells[0]?.textContent?.trim()) || null;
      break;
    }
  }
  
  if (!rianRow) {
    return { ...evt, error: 'Rian not found' };
  }
  
  // Get total participants
  const totalRows = doc.querySelectorAll('tr');
  let total = 0;
  for (const row of totalRows) {
    const cells = row.querySelectorAll('td');
    if (cells.length >= 2) {
      const rank = parseInt(cells[0]?.textContent?.trim());
      if (rank && rank > total) total = rank;
    }
  }
  
  // Extract pool bouts from data-tt attributes in pool column
  const cells = rianRow.querySelectorAll('td');
  const poolBouts = [];
  const deBouts = [];
  
  // Pool bouts are in the 3rd td (index 2), DE in 4th td (index 3)
  if (cells.length >= 4) {
    // Pool spans
    const poolSpans = cells[2].querySelectorAll('span[data-tt]');
    for (const span of poolSpans) {
      const tt = span.getAttribute('data-tt'); // e.g. "5:1 vs. HJERPE Wade H. - Very Hard"
      const match = tt.match(/(\d+):(\d+)\s+vs\.\s+(.+?)\s+-\s+/);
      if (match) {
        const myScore = parseInt(match[1]);
        const oppScore = parseInt(match[2]);
        const opponent = match[3].trim();
        const win = myScore > oppScore;
        poolBouts.push({
          opponent,
          club: "", // FT doesn't show club in tooltip
          score: `${myScore}-${oppScore}`,
          win,
        });
      }
    }
    
    // DE spans
    const deSpans = cells[3].querySelectorAll('span[data-tt]');
    const deRounds = ['T256', 'T128', 'T64', 'T32', 'T16', 'T8', 'T4', 'T2'];
    let deIdx = 0;
    
    // Figure out starting round based on place and total
    // Work backwards from number of DE bouts
    const numDEBouts = deSpans.length;
    
    for (const span of deSpans) {
      const tt = span.getAttribute('data-tt');
      const match = tt.match(/(\d+):(\d+)\s+vs\.\s+(.+?)\s+-\s+/);
      if (match) {
        const myScore = parseInt(match[1]);
        const oppScore = parseInt(match[2]);
        const opponent = match[3].trim();
        const win = myScore > oppScore;
        
        // Determine round name
        let round = `DE ${deIdx + 1}`;
        // Try to calculate from total and place
        if (total) {
          // Starting DE round based on total entrants
          let startRound;
          if (total <= 8) startRound = 'T8';
          else if (total <= 16) startRound = 'T16';
          else if (total <= 32) startRound = 'T32';
          else if (total <= 64) startRound = 'T64';
          else if (total <= 128) startRound = 'T128';
          else if (total <= 256) startRound = 'T256';
          else startRound = 'T512';
          
          const roundOrder = ['T512', 'T256', 'T128', 'T64', 'T32', 'T16', 'T8', 'T4', 'T2'];
          const startIdx = roundOrder.indexOf(startRound);
          if (startIdx >= 0 && startIdx + deIdx < roundOrder.length) {
            round = roundOrder[startIdx + deIdx];
          }
        }
        
        deBouts.push({
          round,
          opponent,
          club: "",
          score: `${myScore}-${oppScore}`,
          win,
        });
        deIdx++;
      }
    }
  }
  
  // Calculate pool stats
  const poolWins = poolBouts.filter(b => b.win).length;
  const poolLosses = poolBouts.filter(b => !b.win).length;
  const ts = poolBouts.reduce((s, b) => s + parseInt(b.score.split('-')[0]), 0);
  const tr = poolBouts.reduce((s, b) => s + parseInt(b.score.split('-')[1]), 0);
  
  return {
    ...evt,
    place,
    total,
    pool: {
      bouts: poolBouts,
      wins: poolWins,
      losses: poolLosses,
      touchesScored: ts,
      touchesReceived: tr,
      indicator: ts - tr,
    },
    de: deBouts,
  };
}

function makeEventId(date, event) {
  return `${date}_${event.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().replace(/-+/g, '-').replace(/^-|-$/g, '')}`;
}

function formatEventDetail(data) {
  if (data.error) return null;
  
  const id = makeEventId(data.date, data.event);
  
  let code = `  "${id}": {\n`;
  code += `    id: "${id}",\n`;
  code += `    date: "${data.date}",\n`;
  code += `    tournament: "${data.tournament}",\n`;
  code += `    event: "${data.event}",\n`;
  code += `    location: "${data.loc}",\n`;
  code += `    place: ${data.place},\n`;
  code += `    total: ${data.total},\n`;
  code += `    rating: "",\n`;
  code += `    pool: {\n`;
  code += `      poolNumber: 0,\n`;
  code += `      seed: null,\n`;
  code += `      bouts: [\n`;
  for (const b of data.pool.bouts) {
    code += `        { opponent: "${b.opponent.replace(/"/g, '\\"')}", club: "", score: "${b.score}", win: ${b.win} },\n`;
  }
  code += `      ],\n`;
  code += `      wins: ${data.pool.wins},\n`;
  code += `      losses: ${data.pool.losses},\n`;
  code += `      touchesScored: ${data.pool.touchesScored},\n`;
  code += `      touchesReceived: ${data.pool.touchesReceived},\n`;
  code += `      indicator: ${data.pool.indicator},\n`;
  code += `      poolRank: null,\n`;
  code += `      poolSize: ${data.pool.bouts.length + 1},\n`;
  code += `      deSeed: null,\n`;
  code += `    },\n`;
  code += `    de: [\n`;
  for (const b of data.de) {
    code += `      { round: "${b.round}", opponent: "${b.opponent.replace(/"/g, '\\"')}", club: "", score: "${b.score}", win: ${b.win} },\n`;
  }
  code += `    ],\n`;
  code += `  },`;
  
  return code;
}

async function main() {
  console.log(`Scraping ${FT_EVENTS.length} events from FencingTracker...`);
  
  let successCount = 0;
  let output = '';
  
  for (const evt of FT_EVENTS) {
    process.stdout.write(`${evt.date} ${evt.event.padEnd(25)} FT:${evt.ftId} ... `);
    
    try {
      const data = await scrapeEvent(evt);
      
      if (data.error) {
        console.log(`❌ ${data.error}`);
      } else {
        const code = formatEventDetail(data);
        if (code) {
          output += code + '\n';
          successCount++;
          console.log(`✅ ${data.place}/${data.total} pool:${data.pool.wins}-${data.pool.losses} de:${data.de.length} bouts`);
        }
      }
    } catch (e) {
      console.log(`❌ Error: ${e.message}`);
    }
    
    // Rate limiting
    await new Promise(r => setTimeout(r, 500));
  }
  
  console.log(`\n=== Done: ${successCount}/${FT_EVENTS.length} events scraped ===\n`);
  
  // Write output to file
  const fs = await import('fs');
  fs.writeFileSync('scripts/scraped-events.txt', output);
  console.log('Output written to scripts/scraped-events.txt');
}

main();
