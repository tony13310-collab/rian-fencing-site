#!/usr/bin/env node
// Cross-validate eventDetails.ts vs opponents.ts — find EVERY discrepancy
import { execSync } from 'child_process';

const result = execSync(`npx tsx -e "
import { allEvents } from './src/data/events';
import { eventDetails, makeEventId } from './src/data/eventDetails';
import { opponents } from './src/data/opponents';

// Build opponent bouts grouped by event date
const oppByDate = {};
for (const [name, opp] of Object.entries(opponents)) {
  for (const b of opp.bouts) {
    const d = new Date(b.date);
    const iso = d.toISOString().slice(0,10);
    const key = iso + '|' + b.type;
    if (!oppByDate[iso]) oppByDate[iso] = { pool: [], de: [] };
    if (b.type === 'Pool') {
      oppByDate[iso].pool.push({ opponent: name, score: b.score, win: b.win });
    } else {
      oppByDate[iso].de.push({ opponent: name, score: b.score, win: b.win, round: b.type });
    }
  }
}

console.log('='.repeat(70));
console.log('CROSS-VALIDATION: eventDetails.ts vs opponents.ts');
console.log('='.repeat(70));

let totalDiscrepancies = 0;

for (const e of allEvents) {
  const id = makeEventId(e.date, e.event);
  const detail = eventDetails[id];
  const oppData = oppByDate[e.date] || { pool: [], de: [] };
  
  const detPool = detail?.pool?.bouts?.length || 0;
  const detDE = detail?.de?.length || 0;
  const oppPool = oppData.pool.length;
  const oppDE = oppData.de.length;
  
  if (detPool !== oppPool || detDE !== oppDE) {
    totalDiscrepancies++;
    console.log('');
    console.log('❌ ' + e.date + ' ' + e.event + ' (' + e.tournament + ')');
    console.log('   eventDetails: ' + detPool + ' pool, ' + detDE + ' DE');
    console.log('   opponents.ts: ' + oppPool + ' pool, ' + oppDE + ' DE');
    
    if (detPool > 0 && oppPool > 0) {
      // Compare actual opponents
      const detNames = new Set(detail.pool.bouts.map(b => b.opponent));
      const oppNames = new Set(oppData.pool.map(b => b.opponent));
      const onlyInDet = [...detNames].filter(n => !oppNames.has(n));
      const onlyInOpp = [...oppNames].filter(n => !detNames.has(n));
      if (onlyInDet.length) console.log('   Only in eventDetails: ' + onlyInDet.join(', '));
      if (onlyInOpp.length) console.log('   Only in opponents.ts: ' + onlyInOpp.join(', '));
    }
    
    if (detPool === 0 && oppPool > 0) {
      console.log('   → eventDetails MISSING pool data (need FTL scrape)');
    }
    if (detDE === 0 && oppDE > 0) {
      console.log('   → eventDetails MISSING DE data (need FTL scrape)');
    }
    if (detPool > oppPool) {
      console.log('   → opponents.ts missing ' + (detPool - oppPool) + ' pool bouts');
    }
    if (oppPool > detPool && detPool > 0) {
      console.log('   → eventDetails missing ' + (oppPool - detPool) + ' pool bouts');
    }
  }
}

// Check dates in opponents.ts that don't match any event
const eventDates = new Set(allEvents.map(e => e.date));
const unmatchedDates = {};
for (const [name, opp] of Object.entries(opponents)) {
  for (const b of opp.bouts) {
    const d = new Date(b.date);
    const iso = d.toISOString().slice(0,10);
    if (!eventDates.has(iso)) {
      if (!unmatchedDates[iso]) unmatchedDates[iso] = { pool: 0, de: 0, tournaments: new Set() };
      if (b.type === 'Pool') unmatchedDates[iso].pool++;
      else unmatchedDates[iso].de++;
      unmatchedDates[iso].tournaments.add(b.tournament);
    }
  }
}

if (Object.keys(unmatchedDates).length > 0) {
  console.log('');
  console.log('='.repeat(70));
  console.log('ORPHAN BOUTS: dates in opponents.ts with NO matching event');
  console.log('='.repeat(70));
  for (const [date, data] of Object.entries(unmatchedDates).sort()) {
    console.log(date + ': ' + data.pool + ' pool, ' + data.de + ' DE — ' + [...data.tournaments].join(', '));
  }
}

console.log('');
console.log('='.repeat(70));
console.log('SUMMARY: ' + totalDiscrepancies + ' events with discrepancies');
console.log('='.repeat(70));
"`, { encoding: 'utf8' });
console.log(result);
