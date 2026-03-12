// This function extracts Rian's pool data from an FTL pool page
// Run via browser evaluate after navigating to the pool page
// Returns JSON with bouts, wins, losses, touchesScored, touchesReceived, indicator, poolSize
function parseRianPool() {
  const tables = document.querySelectorAll('table');
  for (const table of tables) {
    const html = table.innerHTML;
    if (!html.includes('WEI') || !(html.includes('Rian') || html.includes('RIAN'))) continue;
    
    const rows = table.querySelectorAll('tr');
    const fencers = [];
    let rianIdx = -1;
    
    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].querySelectorAll('td');
      if (cells.length < 3) continue;
      const nameCell = cells[0].innerText.trim().split('\n');
      const name = nameCell[0].trim();
      const club = nameCell[1] ? nameCell[1].split('/')[0].trim() : '';
      const scores = [];
      for (let j = 2; j < cells.length - 5; j++) {
        scores.push(cells[j].innerText.trim());
      }
      const v = cells[cells.length - 5]?.innerText.trim();
      const ts = cells[cells.length - 3]?.innerText.trim();
      const tr = cells[cells.length - 2]?.innerText.trim();
      const ind = cells[cells.length - 1]?.innerText.trim();
      
      if (name.includes('WEI') && (name.includes('Rian') || name.includes('RIAN'))) {
        rianIdx = fencers.length;
      }
      fencers.push({name, club, scores, v, ts, tr, ind});
    }
    
    if (rianIdx === -1) continue;
    
    const rian = fencers[rianIdx];
    const bouts = [];
    let wins = 0, losses = 0, touchesScored = 0, touchesReceived = 0;
    
    for (let j = 0; j < fencers.length; j++) {
      if (j === rianIdx) continue;
      // Rian's score column for opponent j
      // If j < rianIdx, score is at index j; if j >= rianIdx, at index j (self column is blank)
      const rianScore = rian.scores[j] || '';
      if (!rianScore) continue;
      
      const isWin = rianScore.startsWith('V');
      const rianPoints = parseInt(rianScore.substring(1));
      
      // Get opponent's score against Rian
      const oppScore = fencers[j].scores[rianIdx] || '';
      const oppPoints = parseInt(oppScore.substring(1));
      
      const score = isWin ? `${rianPoints}-${oppPoints}` : `${rianPoints}-${oppPoints}`;
      
      bouts.push({
        opponent: fencers[j].name,
        club: fencers[j].club,
        score,
        win: isWin
      });
      
      if (isWin) wins++; else losses++;
      touchesScored += rianPoints;
      touchesReceived += oppPoints;
    }
    
    return {
      bouts,
      wins,
      losses,
      touchesScored,
      touchesReceived,
      indicator: touchesScored - touchesReceived,
      poolSize: fencers.length
    };
  }
  return null;
}
