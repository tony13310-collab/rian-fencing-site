#!/usr/bin/env node
/**
 * Data Integrity Audit
 * 
 * Cross-checks events.ts, eventDetails.ts, and opponents.ts for:
 * 1. Events missing pool data
 * 2. Events missing DE data
 * 3. Opponents referenced in eventDetails but missing from opponents.ts
 * 4. Bout count mismatches in opponent records
 * 5. H2H win/loss/total counts that don't match actual bouts
 */

import fs from 'fs';

// ─── Load data ───

const eventsRaw = fs.readFileSync('src/data/events.ts', 'utf8');
const detailsRaw = fs.readFileSync('src/data/eventDetails.ts', 'utf8');
const opponentsRaw = fs.readFileSync('src/data/opponents.ts', 'utf8');

// ─── Parse events.ts ───

function parseEvents() {
  const events = [];
  const eventRegex = /date:\s*"([^"]+)"[^}]*tournament:\s*"([^"]+)"[^}]*event:\s*"([^"]+)"[^}]*category:\s*"([^"]+)"[^}]*level:\s*"([^"]+)"[^}]*place:\s*(\d+)[^}]*total:\s*(\d+)/g;
  let m;
  while ((m = eventRegex.exec(eventsRaw)) !== null) {
    events.push({
      date: m[1],
      tournament: m[2],
      event: m[3],
      category: m[4],
      level: m[5],
      place: parseInt(m[6]),
      total: parseInt(m[7]),
    });
  }
  return events;
}

// ─── Parse eventDetails keys ───

function parseDetailKeys() {
  const keys = new Set();
  const keyRegex = /"([^"]+)":\s*\{[\s\S]*?id:\s*"/g;
  let m;
  while ((m = keyRegex.exec(detailsRaw)) !== null) {
    keys.add(m[1]);
  }
  return keys;
}

// ─── Check event details for pool/DE ───

function checkDetails() {
  const issues = [];
  
  // Find all event detail entries
  const entryRegex = /"([^"]+)":\s*\{[^}]*id:\s*"[^"]*"/g;
  let m;
  while ((m = entryRegex.exec(detailsRaw)) !== null) {
    const key = m[1];
    // Find the full entry
    const start = m.index;
    let braceCount = 0;
    let end = start;
    let foundOpen = false;
    for (let i = start; i < detailsRaw.length; i++) {
      if (detailsRaw[i] === '{') { braceCount++; foundOpen = true; }
      if (detailsRaw[i] === '}') { braceCount--; }
      if (foundOpen && braceCount === 0) { end = i + 1; break; }
    }
    const entry = detailsRaw.substring(start, end);
    
    // Check for pool
    const hasPool = entry.includes('pool:') && !entry.includes('pool: undefined');
    const hasPoolBouts = entry.includes('bouts: [') && !entry.match(/bouts:\s*\[\s*\]/);
    
    // Check for DE
    const hasDe = entry.includes('de: [');
    const hasDeData = hasDe && !entry.match(/de:\s*\[\s*\]/);
    
    if (!hasPool || !hasPoolBouts) {
      issues.push({ key, type: 'MISSING_POOL', detail: 'No pool data' });
    }
    if (!hasDeData) {
      issues.push({ key, type: 'MISSING_DE', detail: 'No DE data' });
    }
    
    // Extract opponents from pool bouts and DE bouts
    const allOpps = [...entry.matchAll(/opponent:\s*"([^"]+)"/g)].map(m => m[1]);
    for (const opp of allOpps) {
      if (opp === 'Unknown' || opp === 'BYE') continue;
      // Handle both escaped and unescaped quotes in opponent names
      const oppClean = opp.replace(/\\'/g, "'");
      if (!opponentsRaw.includes(`"${oppClean}"`)) {
        issues.push({ key, type: 'MISSING_OPPONENT', detail: `Opponent "${oppClean}" not in opponents.ts` });
      }
    }
  }
  
  return issues;
}

// ─── Check opponent stats ───

function checkOpponentStats() {
  const issues = [];
  
  // Parse each opponent
  const oppRegex = /"([A-Z][^"]+)":\s*\{[^}]*"wins":\s*(\d+)[^}]*"losses":\s*(\d+)[^}]*"total":\s*(\d+)/g;
  let m;
  while ((m = oppRegex.exec(opponentsRaw)) !== null) {
    const name = m[1];
    const declaredWins = parseInt(m[2]);
    const declaredLosses = parseInt(m[3]);
    const declaredTotal = parseInt(m[4]);
    
    // Count actual bouts
    const nameIdx = opponentsRaw.indexOf(`"${name}"`);
    const boutsIdx = opponentsRaw.indexOf('"bouts":', nameIdx);
    if (boutsIdx === -1) continue;
    
    // Find bouts array
    const arrayStart = opponentsRaw.indexOf('[', boutsIdx);
    let bracketCount = 0;
    let arrayEnd = arrayStart;
    for (let i = arrayStart; i < opponentsRaw.length; i++) {
      if (opponentsRaw[i] === '[') bracketCount++;
      if (opponentsRaw[i] === ']') bracketCount--;
      if (bracketCount === 0) { arrayEnd = i + 1; break; }
    }
    const boutsStr = opponentsRaw.substring(arrayStart, arrayEnd);
    
    const actualWins = (boutsStr.match(/"win":\s*true/g) || []).length;
    const actualLosses = (boutsStr.match(/"win":\s*false/g) || []).length;
    const actualTotal = actualWins + actualLosses;
    
    if (declaredWins !== actualWins || declaredLosses !== actualLosses || declaredTotal !== actualTotal) {
      issues.push({
        name,
        type: 'STATS_MISMATCH',
        detail: `Declared: ${declaredWins}W-${declaredLosses}L (${declaredTotal}) / Actual: ${actualWins}W-${actualLosses}L (${actualTotal})`
      });
    }
  }
  
  return issues;
}

// ─── Check events.ts vs eventDetails.ts ───

function checkEventsVsDetails() {
  const events = parseEvents();
  const detailKeys = parseDetailKeys();
  const issues = [];
  
  for (const evt of events) {
    const slug = evt.event.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
    const key = `${evt.date}_${slug}`;
    if (!detailKeys.has(key)) {
      issues.push({ type: 'NO_DETAIL', detail: `${evt.date} ${evt.event} — no entry in eventDetails.ts (key: ${key})` });
    }
  }
  
  return issues;
}

// ─── Run ───

console.log('🔍 Running data integrity audit...\n');

const events = parseEvents();
console.log(`📦 Events: ${events.length}`);

// 1. Events vs Details
const evtDetailIssues = checkEventsVsDetails();
if (evtDetailIssues.length > 0) {
  console.log(`\n❌ Events missing from eventDetails.ts: ${evtDetailIssues.length}`);
  evtDetailIssues.forEach(i => console.log(`   ${i.detail}`));
} else {
  console.log('✅ All events have matching eventDetails entries');
}

// 2. Pool/DE/Opponent checks
const detailIssues = checkDetails();
const poolIssues = detailIssues.filter(i => i.type === 'MISSING_POOL');
const deIssues = detailIssues.filter(i => i.type === 'MISSING_DE');
const oppIssues = detailIssues.filter(i => i.type === 'MISSING_OPPONENT');

if (poolIssues.length > 0) {
  console.log(`\n⚠️  Events missing pool data: ${poolIssues.length}`);
  poolIssues.forEach(i => console.log(`   ${i.key}`));
} else {
  console.log('✅ All events have pool data');
}

if (deIssues.length > 0) {
  console.log(`\n⚠️  Events missing DE data: ${deIssues.length}`);
  deIssues.forEach(i => console.log(`   ${i.key}`));
} else {
  console.log('✅ All events have DE data');
}

if (oppIssues.length > 0) {
  console.log(`\n❌ Opponents in eventDetails but missing from opponents.ts: ${oppIssues.length}`);
  const unique = [...new Set(oppIssues.map(i => i.detail))];
  unique.forEach(d => console.log(`   ${d}`));
} else {
  console.log('✅ All opponents in eventDetails exist in opponents.ts');
}

// 3. Opponent stats
const statsIssues = checkOpponentStats();
if (statsIssues.length > 0) {
  console.log(`\n⚠️  Opponent stats mismatches: ${statsIssues.length}`);
  statsIssues.forEach(i => console.log(`   ${i.name}: ${i.detail}`));
} else {
  console.log('✅ All opponent win/loss/total stats match actual bouts');
}

// Summary
const totalIssues = evtDetailIssues.length + detailIssues.length + statsIssues.length;
console.log(`\n${'─'.repeat(50)}`);
if (totalIssues === 0) {
  console.log('🎉 All checks passed! Data is consistent.');
} else {
  console.log(`⚠️  Total issues found: ${totalIssues}`);
}

process.exit(totalIssues > 0 ? 1 : 0);
