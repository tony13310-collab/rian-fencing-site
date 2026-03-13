// FTL Pool Scraper - run in browser evaluate
// This is the JS function to extract Rian's pool data from FTL pool page
export const POOL_EXTRACTOR = `
(() => {
  const tables = document.querySelectorAll('table');
  const allPools = [];
  
  for (const table of tables) {
    const rows = [...table.querySelectorAll('tr')];
    const dataRows = [];
    let weiIdx = -1;
    
    for (const row of rows) {
      const cells = [...row.querySelectorAll('td')].map(c => c.textContent.trim());
      if (cells.length < 10) continue;
      if (cells[0].includes('WEI Rian')) weiIdx = dataRows.length;
      dataRows.push(cells);
    }
    
    if (weiIdx < 0) continue;
    
    const n = dataRows.length;
    const weiRow = dataRows[weiIdx];
    const bouts = [];
    
    for (let i = 0; i < n; i++) {
      if (i === weiIdx) continue;
      const oppRow = dataRows[i];
      const weiVsOpp = weiRow[2 + i];
      const oppVsWei = oppRow[2 + weiIdx];
      
      const weiMatch = weiVsOpp ? weiVsOpp.match(/[VD](\\d+)/) : null;
      const oppMatch = oppVsWei ? oppVsWei.match(/[VD](\\d+)/) : null;
      
      const nameParts = oppRow[0].split('\\n');
      const name = nameParts[0].trim();
      const club = (nameParts[1] || '').trim().split('/')[0].trim();
      
      if (weiMatch && oppMatch) {
        bouts.push({
          opponent: name,
          club: club,
          score: weiMatch[1] + '-' + oppMatch[1],
          win: weiVsOpp.startsWith('V')
        });
      }
    }
    
    const seed = parseInt(weiRow[1]) || 0;
    const wins = parseInt(weiRow[weiRow.length - 5]) || 0;
    const losses = n - 1 - wins;
    const ts = parseInt(weiRow[weiRow.length - 3]) || 0;
    const tr = parseInt(weiRow[weiRow.length - 2]) || 0;
    const ind = weiRow[weiRow.length - 1];
    
    allPools.push({ seed, wins, losses, ts, tr, ind, bouts });
  }
  
  // Also check for multiple pool rounds
  const poolLinks = [...document.querySelectorAll('a')].filter(a => a.href && a.href.includes('/pools/scores/'));
  
  return { pools: allPools, otherPoolLinks: poolLinks.map(a => a.href) };
})()
`;
