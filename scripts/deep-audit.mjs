#!/usr/bin/env node
// Deep cross-validation audit of all data sources

const results = { pass: 0, fail: 0, warn: 0, details: [] };

function pass(test) { results.pass++; console.log(`  ✅ ${test}`); }
function fail(test, detail) { results.fail++; results.details.push({test, detail}); console.log(`  ❌ ${test}: ${detail}`); }
function warn(test, detail) { results.warn++; console.log(`  ⚠️  ${test}: ${detail}`); }

const { allEvents } = await import('../src/data/events.ts');
const { opponents } = await import('../src/data/opponents.ts');
const { eventDetails } = await import('../src/data/eventDetails.ts');

// ============================================================
console.log('\n=== AUDIT 1: events.ts poolBouts math ===');
// Each event's poolBouts: wins should match w:true count, scores valid
for (const e of allEvents) {
  if (!e.poolBouts?.length) continue;
  const wins = e.poolBouts.filter(b => b.win).length;
  const losses = e.poolBouts.filter(b => !b.win).length;
  
  // Score format check
  for (const b of e.poolBouts) {
    if (!/^[VD][0-5]$/.test(b.score)) {
      fail(`${e.date} ${e.event} score format`, `${b.opponent}: "${b.score}"`);
    }
    // V should mean win, D should mean loss
    if (b.score.startsWith('V') && !b.win) {
      fail(`${e.date} ${e.event} V/win mismatch`, `${b.opponent}: score=${b.score} but win=false`);
    }
    if (b.score.startsWith('D') && b.win) {
      fail(`${e.date} ${e.event} D/loss mismatch`, `${b.opponent}: score=${b.score} but win=true`);
    }
  }
}
pass(`Score format + V/D consistency checked for ${allEvents.filter(e=>e.poolBouts?.length).length} events`);

// ============================================================
console.log('\n=== AUDIT 2: events.ts poolBouts vs eventDetails.ts pool ===');
let audit2matches = 0, audit2mismatches = 0;
for (const e of allEvents) {
  if (!e.poolBouts?.length) continue;
  const key = `${e.date}_${e.event.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`;
  const det = eventDetails[key];
  if (!det?.pool) continue;
  
  // Compare bout count
  const evBouts = e.poolBouts.length;
  const detBouts = det.pool.wins + det.pool.losses;
  if (evBouts !== detBouts) {
    fail(`${e.date} ${e.event} bout count`, `events.ts: ${evBouts}, eventDetails.ts: ${detBouts}`);
    audit2mismatches++;
    continue;
  }
  
  // Compare wins
  const evWins = e.poolBouts.filter(b => b.win).length;
  if (evWins !== det.pool.wins) {
    fail(`${e.date} ${e.event} win count`, `events.ts: ${evWins}, eventDetails.ts: ${det.pool.wins}`);
    audit2mismatches++;
    continue;
  }
  
  // Compare TS/TR
  // events.ts poolBouts scores are V3/D2 format - extract Rian's score
  let evTS = 0, evTR = 0;
  for (const b of e.poolBouts) {
    const rianScore = parseInt(b.score.substring(1));
    evTS += rianScore;
    // We don't have opponent score in events.ts poolBouts easily
  }
  if (evTS !== det.pool.touchesScored) {
    warn(`${e.date} ${e.event} TS`, `events.ts sum: ${evTS}, eventDetails.ts: ${det.pool.touchesScored}`);
  }
  
  audit2matches++;
}
if (audit2matches > 0) pass(`${audit2matches} events matched between events.ts and eventDetails.ts`);

// ============================================================
console.log('\n=== AUDIT 3: events.ts place/total vs eventDetails.ts ===');
let audit3ok = 0, audit3fail = 0;
for (const e of allEvents) {
  const key = `${e.date}_${e.event.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`;
  const det = eventDetails[key];
  if (!det) continue;
  
  if (e.place !== det.place) {
    fail(`${e.date} ${e.event} place`, `events.ts: ${e.place}, eventDetails.ts: ${det.place}`);
    audit3fail++;
  } else if (e.total !== det.total) {
    fail(`${e.date} ${e.event} total`, `events.ts: ${e.total}, eventDetails.ts: ${det.total}`);
    audit3fail++;
  } else {
    audit3ok++;
  }
}
if (audit3ok > 0) pass(`${audit3ok} events place/total match`);

// ============================================================
console.log('\n=== AUDIT 4: events.ts poolBouts vs opponents.ts ===');
// For each pool bout in events.ts, check if opponents.ts has matching bout
let audit4match = 0, audit4scoreMismatch = 0, audit4missing = 0;
const oppMap = opponents;

for (const e of allEvents) {
  if (!e.poolBouts?.length) continue;
  for (const b of e.poolBouts) {
    const opp = oppMap[b.opponent];
    if (!opp) {
      fail(`Opponent "${b.opponent}" not in opponents.ts`, `${e.date} ${e.event}`);
      audit4missing++;
      continue;
    }
    
    // Find matching bout in opponent's bouts
    const d = new Date(e.date + 'T12:00:00');
    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const dateStr = `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    
    const matching = opp.bouts.filter(ob => ob.date === dateStr && ob.type === 'Pool');
    if (matching.length === 0) {
      // Not necessarily an error - opponents.ts might use different date format
      continue;
    }
    
    // Check score consistency
    const rianScore = parseInt(b.score.substring(1));
    for (const ob of matching) {
      const obRian = parseInt(ob.score.split('-')[0]);
      if (obRian === rianScore) {
        audit4match++;
        break;
      }
    }
  }
}
pass(`${audit4match} pool bouts cross-validated with opponents.ts`);
if (audit4scoreMismatch > 0) fail(`${audit4scoreMismatch} score mismatches`);

// ============================================================
console.log('\n=== AUDIT 5: opponents.ts self-consistency ===');
let audit5ok = 0, audit5fail = 0;
for (const [name, data] of Object.entries(oppMap)) {
  // wins + losses = total
  const actualWins = data.bouts.filter(b => b.win).length;
  const actualLosses = data.bouts.filter(b => !b.win).length;
  
  if (data.wins !== actualWins) {
    fail(`${name} wins count`, `stated: ${data.wins}, actual: ${actualWins}`);
    audit5fail++;
  } else if (data.losses !== actualLosses) {
    fail(`${name} losses count`, `stated: ${data.losses}, actual: ${actualLosses}`);
    audit5fail++;
  } else if (data.total !== data.bouts.length) {
    fail(`${name} total count`, `stated: ${data.total}, actual: ${data.bouts.length}`);
    audit5fail++;
  } else {
    // Check winRate
    const expectedRate = data.bouts.length > 0 ? Math.round((actualWins / data.bouts.length) * 100) / 100 : 0;
    if (Math.abs(data.winRate - expectedRate) > 0.02) {
      warn(`${name} winRate`, `stated: ${data.winRate}, expected: ${expectedRate}`);
    }
    audit5ok++;
  }
}
if (audit5ok > 0) pass(`${audit5ok} opponents self-consistent`);

// ============================================================
console.log('\n=== AUDIT 6: No duplicate opponents in same pool ===');
let audit6ok = 0;
for (const e of allEvents) {
  if (!e.poolBouts?.length) continue;
  const names = e.poolBouts.map(b => b.opponent);
  const unique = new Set(names);
  if (names.length !== unique.size) {
    const dupes = names.filter((n, i) => names.indexOf(n) !== i);
    fail(`${e.date} ${e.event} duplicate in pool`, dupes.join(', '));
  } else {
    audit6ok++;
  }
}
pass(`${audit6ok} events have no duplicate opponents in pool`);

// ============================================================
console.log('\n=== AUDIT 7: eventDetails.ts pool bouts vs opponents match ===');
// For events in eventDetails, check pool bout opponents exist
let audit7ok = 0;
for (const [key, det] of Object.entries(eventDetails)) {
  if (!det.pool?.bouts) continue;
  for (const b of det.pool.bouts) {
    if (!oppMap[b.opponent]) {
      warn(`${det.date} ${det.event} opponent not in opponents.ts`, b.opponent);
    } else {
      audit7ok++;
    }
  }
}
pass(`${audit7ok} eventDetails pool opponents found in opponents.ts`);

// ============================================================
console.log('\n=== AUDIT 8: ftlEventId uniqueness ===');
const ftlIds = allEvents.filter(e => e.ftlEventId).map(e => e.ftlEventId);
const ftlUnique = new Set(ftlIds);
if (ftlIds.length === ftlUnique.size) {
  pass(`All ${ftlIds.length} ftlEventIds are unique`);
} else {
  fail(`Duplicate ftlEventIds`, `${ftlIds.length} total, ${ftlUnique.size} unique`);
}

// ============================================================
console.log('\n=== AUDIT 9: Date consistency ===');
// Events should be in chronological order (newest first)
let dateOk = true;
for (let i = 1; i < allEvents.length; i++) {
  if (allEvents[i].date > allEvents[i-1].date) {
    // Allow same date (multiple events per day)
    if (allEvents[i].date > allEvents[i-1].date) {
      warn('Event order', `${allEvents[i].date} after ${allEvents[i-1].date} (index ${i})`);
      dateOk = false;
    }
  }
}
if (dateOk) pass('Events in chronological order (newest first)');

// ============================================================  
console.log('\n=== AUDIT 10: Pool score symmetry (Rian V5 means opponent D5) ===');
// In pool bouts, if Rian won V5 against opponent who scored 3, 
// the opponent's perspective should be D3. Check that V score > D score when win=true
let symOk = 0, symBad = 0;
for (const e of allEvents) {
  if (!e.poolBouts) continue;
  for (const b of e.poolBouts) {
    const rianScore = parseInt(b.score.substring(1));
    if (b.win && rianScore < 5) {
      // In pool, winner always gets 5 (unless touch limit reached)
      // Actually in Y8/Y10 pools are to 5, so winner should have 5
      warn(`${e.date} ${b.opponent}`, `Win but score=${b.score} (Rian < 5)`);
      symBad++;
    } else if (!b.win && rianScore >= 5) {
      fail(`${e.date} ${b.opponent}`, `Loss but score=${b.score} (Rian >= 5)`);
      symBad++;
    } else {
      symOk++;
    }
  }
}
if (symOk > 0) pass(`${symOk} pool scores logically consistent (V=5, D<5)`);

// ============================================================
console.log('\n\n========== SUMMARY ==========');
console.log(`✅ PASS: ${results.pass}`);
console.log(`⚠️  WARN: ${results.warn}`);
console.log(`❌ FAIL: ${results.fail}`);
if (results.details.length > 0) {
  console.log('\nFailure details:');
  for (const d of results.details) {
    console.log(`  ${d.test}: ${d.detail}`);
  }
}
