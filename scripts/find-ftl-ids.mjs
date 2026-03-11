// Extract FTL event IDs from FencingTracker event pages
// Each FT event page contains a link to the FTL results page

import { JSDOM } from 'jsdom';

const FT_EVENTS = [
  // 2025-26 season (missing ones)
  { ftId: 38040, date: '2026-02-15', event: "Junior Men's Saber" },
  { ftId: 37957, date: '2026-02-13', event: "Div I Men's Saber" },
  { ftId: 37452, date: '2026-01-24', event: "Junior Men's Saber" },  // SJCC - already done
  { ftId: 37211, date: '2026-01-12', event: "Junior Men's Saber" },  // JO Jr - already done
  { ftId: 37178, date: '2026-01-10', event: "Cadet Men's Saber" },   // JO Cdt - already done
  { ftId: 36180, date: '2025-11-17', event: "Y-14 Men's Saber" },    // Nov Y14 - already done
  { ftId: 35924, date: '2025-11-16', event: "Cadet Men's Saber" },   // Nov Cdt - already done
  { ftId: 35917, date: '2025-11-14', event: "Div I Men's Saber" },   // Nov DI - already done
  { ftId: 35785, date: '2025-10-05', event: "Div I Men's Saber" },   // Oct DI - already done
  { ftId: 34472, date: '2025-10-04', event: "Cadet Men's Saber" },   // Oct Cdt - already done  
  // ... skipping already-done ones
  
  // Missing 2025-26 season
  { ftId: 34440, date: '2025-10-03', event: "Junior Men's Saber" },   // Oct Jr - already done
  
  // Missing 2024-25 season
  { ftId: 34432, date: '2025-07-03', event: "Y-14 Men's Saber" },    // SN Y14 - already done
  { ftId: 33180, date: '2025-06-30', event: "Cadet Men's Saber" },   // SN Cdt - already done
  { ftId: 33153, date: '2025-06-28', event: "Junior Men's Saber" },  // SN Jr - already done
  { ftId: 33131, date: '2025-05-18', event: "Cadet Men's Saber" },   // May NAC Cdt - MISSING
  { ftId: 32532, date: '2025-05-16', event: "Junior Men's Saber" },  // May NAC Jr - MISSING
  { ftId: 32426, date: '2025-03-21', event: "Y-14 Men's Saber" },    // Mar SYC Y14 - MISSING (SYC)
  { ftId: 30848, date: '2025-03-15', event: "Senior Mixed Saber" },  // Local - skip
  { ftId: 30717, date: '2025-03-08', event: "Y-14 Men's Saber" },    // Mar NAC Y14 - MISSING
  { ftId: 30510, date: '2025-03-07', event: "Cadet Men's Saber" },   // Mar NAC Cdt - MISSING
  { ftId: 30488, date: '2025-02-17', event: "Cadet Men's Saber" },   // Feb NAC Cdt - MISSING
  { ftId: 30011, date: '2025-02-16', event: "Junior Men's Saber" },  // Feb NAC Jr - MISSING
  { ftId: 29987, date: '2025-01-18', event: "Y-14 Men's Saber" },    // Jan SYC Y14 - MISSING (SYC)
  { ftId: 29289, date: '2025-01-05', event: "Cadet Men's Saber" },   // JO Cdt - MISSING
  { ftId: 29017, date: '2024-12-07', event: "Junior Men's Saber" },  // Dec NAC Jr - MISSING
  { ftId: 28280, date: '2024-12-06', event: "Cadet Men's Saber" },   // Dec NAC Cdt - MISSING
  { ftId: 28238, date: '2024-12-01', event: "Y-14 Men's Saber" },    // Dec SYC Y14 - MISSING (SYC)
  { ftId: 28200, date: '2024-11-30', event: "Cadet Men's Saber" },   // Nov SYC Cdt - MISSING (SYC)
  { ftId: 28161, date: '2024-11-10', event: "Cadet Men's Saber" },   // Nov NAC Cdt - MISSING
  { ftId: 27583, date: '2024-10-12', event: "Y-14 Men's Saber" },    // Oct SYC Y14 - MISSING (SYC)
  { ftId: 26641, date: '2024-09-21', event: "Cadet Men's Saber" },   // Sept RYC Cdt - MISSING (RYC)
  { ftId: 26085, date: '2024-07-05', event: "Y-12 Men's Saber" },    // SN Y12 - MISSING
  { ftId: 25169, date: '2024-07-04', event: "Y-14 Men's Saber" },    // SN Y14 - MISSING
  { ftId: 25164, date: '2024-07-01', event: "Cadet Men's Saber" },   // SN Cdt - MISSING
  { ftId: 25120, date: '2024-05-05', event: "Y-12 Men's Saber" },    // SYC Y12 - MISSING
  { ftId: 24245, date: '2024-05-04', event: "Y-14 Men's Saber" },    // SYC Y14 - MISSING
  { ftId: 24105, date: '2024-04-21', event: "Cadet Men's Saber" },   // RYC Cdt - MISSING
  { ftId: 23820, date: '2024-04-20', event: "Y-14 Men's Saber" },    // RYC Y14 - MISSING
  { ftId: 23703, date: '2024-03-16', event: "Cadet Men's Saber" },   // Mar NAC Cdt - MISSING
  { ftId: 22782, date: '2024-03-03', event: "Y-12 Men's Saber" },    // Mar NAC Y12 - MISSING
  { ftId: 22481, date: '2024-03-02', event: "Y-14 Men's Saber" },    // Mar NAC Y14 - MISSING
  { ftId: 22442, date: '2024-01-15', event: "Y-12 Men's Saber" },    // Jan SYC Y12 - MISSING
  { ftId: 21352, date: '2024-01-13', event: "Y-14 Men's Saber" },    // Jan SYC Y14 - MISSING
  // 2022-23 season and older
  { ftId: 21270, date: '2023-11-24', event: "Y-12 Men's Saber" },
  { ftId: 20411, date: '2023-09-24', event: "Y-14 Men's Saber" },
  { ftId: 19034, date: '2023-09-23', event: "Cadet Men's Saber" },
  { ftId: 19017, date: '2023-09-03', event: "Y-14 Men's Saber" },
  { ftId: 18460, date: '2023-09-02', event: "Y-12 Men's Saber" },
  { ftId: 18446, date: '2023-07-08', event: "Y-12 Men's Saber" },
  { ftId: 18068, date: '2023-04-16', event: "Y-12 Men's Saber" },
  { ftId: 16704, date: '2023-03-11', event: "Y-12 Men's Saber" },
  { ftId: 15795, date: '2023-03-05', event: "Y-12 Men's Saber" },
  { ftId: 15726, date: '2023-02-11', event: "Y-12 Men's Saber" },
  { ftId: 15461, date: '2023-01-14', event: "Y-12 Men's Saber" },
  { ftId: 14816, date: '2022-11-25', event: "Y-12 Men's Saber" },
  { ftId: 14121, date: '2022-10-02', event: "Y-12 Men's Saber" },
  { ftId: 12984, date: '2022-10-01', event: "Y-14 Men's Saber" },
  { ftId: 12975, date: '2022-09-11', event: "Y-12 Men's Saber" },
  { ftId: 12617, date: '2022-09-03', event: "Y-12 Men's Saber" },
  { ftId: 12466, date: '2022-07-11', event: "Y-10 Men's Saber" },
  { ftId: 10765, date: '2022-06-12', event: "Y-10 Mixed Saber" },
  { ftId: 10758, date: '2022-05-15', event: "Y-12 Men's Saber" },
  { ftId: 9680, date: '2022-05-14', event: "Y-10 Men's Saber" },
  { ftId: 9666, date: '2021-06-19', event: "Y-10 Men's Saber" },
  { ftId: 7333, date: '2021-05-31', event: "Y-10 Men's Saber" },
  { ftId: 7147, date: '2020-01-19', event: "Y-8 Men's Saber" },
  { ftId: 5142, date: '2020-01-18', event: "Y-10 Men's Saber" },
  { ftId: 5133, date: '2019-11-30', event: "Y-8 Men's Saber" },
  { ftId: 3767, date: '2019-11-29', event: "Y-10 Men's Saber" },
  { ftId: 3760, date: '2018-11-24', event: "Y-8 Men's Saber" },
];

// Fetch each FT event page and extract the FTL link
async function fetchFTLId(ftId) {
  try {
    const url = `https://fencingtracker.com/event/${ftId}/results`;
    const res = await fetch(url);
    const html = await res.text();
    
    // Look for FTL link pattern
    const ftlMatch = html.match(/fencingtimelive\.com\/events\/scores\/([A-F0-9]{32})/i) 
      || html.match(/fencingtimelive\.com[^"]*?([A-F0-9]{32})/i);
    
    // Also look for pool and tableau links
    const poolMatch = html.match(/fencingtimelive\.com\/pools\/scores\/([A-F0-9]{32})/i);
    const tabMatch = html.match(/fencingtimelive\.com\/tableaux\/scores\/([A-F0-9]{32})/i);
    
    return {
      ftId,
      ftlEventId: ftlMatch ? ftlMatch[1] : null,
      ftlPoolId: poolMatch ? poolMatch[1] : null,
      ftlTabId: tabMatch ? tabMatch[1] : null,
    };
  } catch (e) {
    return { ftId, error: e.message };
  }
}

async function main() {
  // Filter to only missing events
  const missing = FT_EVENTS.filter(e => {
    // Skip already-done ones (14 events we already have)
    const done = [
      '2026-01-24', '2026-01-12', '2026-01-10', '2026-02-15', '2026-02-13',
      '2025-11-17', '2025-11-16', '2025-11-14', 
      '2025-10-03', '2025-10-04', '2025-10-05',
      '2025-07-03', '2025-06-28', '2025-06-30'
    ];
    return !done.includes(e.date);
  });
  
  console.log(`Fetching FTL IDs for ${missing.length} events...`);
  
  for (const evt of missing) {
    const result = await fetchFTLId(evt.ftId);
    const ftl = result.ftlEventId || 'NOT_FOUND';
    console.log(`${evt.date} | ${evt.event.padEnd(25)} | FT:${evt.ftId} | FTL:${ftl}`);
    
    // Small delay to not hammer the server
    await new Promise(r => setTimeout(r, 300));
  }
}

main();
