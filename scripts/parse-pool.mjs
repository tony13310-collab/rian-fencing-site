// Parse pool fencers array to extract Rian's bouts
const fencers = JSON.parse(process.argv[2]);

const rianIdx = fencers.findIndex(f => f.name.includes('WEI'));
if (rianIdx === -1) { console.log(JSON.stringify(null)); process.exit(0); }

const rian = fencers[rianIdx];
const bouts = [];
let wins = 0, losses = 0, ts = 0, tr = 0;

for (let i = 0; i < fencers.length; i++) {
  if (i === rianIdx) continue;
  const opp = fencers[i];
  const rStr = rian.scores[i] || '';
  const oStr = opp.scores[rianIdx] || '';
  
  let win = false, rScore = 0, oScore = 0;
  if (rStr.startsWith('V')) { win = true; rScore = parseInt(rStr.substring(1)) || 5; }
  else if (rStr.startsWith('D')) { win = false; rScore = parseInt(rStr.substring(1)) || 0; }
  
  if (oStr.startsWith('V')) { oScore = parseInt(oStr.substring(1)) || 5; }
  else if (oStr.startsWith('D')) { oScore = parseInt(oStr.substring(1)) || 0; }
  
  bouts.push({ opponent: opp.name, club: opp.club, score: `${rScore}-${oScore}`, win });
  if (win) wins++; else losses++;
  ts += rScore; tr += oScore;
}

console.log(JSON.stringify({
  bouts, wins, losses, touchesScored: ts, touchesReceived: tr,
  indicator: ts - tr, poolRank: null, poolSize: fencers.length
}));
