// Helper script to parse pool data from FTL evaluate results
// This is used by the agent to process pool data

export function parsePoolData(fencers) {
  if (!fencers || fencers.length === 0) return null;
  
  // Find Rian's index
  const rianIdx = fencers.findIndex(f => f.name.includes('WEI'));
  if (rianIdx === -1) return null;
  
  const rian = fencers[rianIdx];
  const bouts = [];
  let wins = 0, losses = 0, touchesScored = 0, touchesReceived = 0;
  
  for (let i = 0; i < fencers.length; i++) {
    if (i === rianIdx) continue;
    
    const opp = fencers[i];
    const rianScoreStr = rian.scores[i] || '';
    const oppScoreStr = opp.scores[rianIdx] || '';
    
    // Parse Rian's score
    let win = false;
    let rianScore = 0, oppScore = 0;
    
    if (rianScoreStr.startsWith('V')) {
      win = true;
      rianScore = parseInt(rianScoreStr.substring(1)) || 5;
    } else if (rianScoreStr.startsWith('D')) {
      win = false;
      rianScore = parseInt(rianScoreStr.substring(1)) || 0;
    }
    
    // Parse opponent's score from their row
    if (oppScoreStr.startsWith('V')) {
      oppScore = parseInt(oppScoreStr.substring(1)) || 5;
    } else if (oppScoreStr.startsWith('D')) {
      oppScore = parseInt(oppScoreStr.substring(1)) || 0;
    }
    
    bouts.push({
      opponent: opp.name,
      club: opp.club,
      score: `${rianScore}-${oppScore}`,
      win
    });
    
    if (win) wins++;
    else losses++;
    touchesScored += rianScore;
    touchesReceived += oppScore;
  }
  
  return {
    bouts,
    wins,
    losses,
    touchesScored,
    touchesReceived,
    indicator: touchesScored - touchesReceived,
    poolRank: null,
    poolSize: fencers.length
  };
}
