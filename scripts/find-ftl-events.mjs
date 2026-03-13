#!/usr/bin/env node
// Batch find FTL event IDs for all 22 missing competitions
import https from 'https';

const missing = [
  { date: "2025-03-15", tourn: "Capital Czajkowski", event: "Senior Mixed Saber", from: "2025-03-14", to: "2025-03-16" },
  { date: "2025-01-05", tourn: "January NAC", event: "Cadet Men's Saber", from: "2025-01-03", to: "2025-01-07" },
  { date: "2024-10-12", tourn: "Ben Gutenberg", event: "Y-14 Men's Saber", from: "2024-10-11", to: "2024-10-13" },
  { date: "2024-09-21", tourn: "River City", event: "Cadet Men's Saber", from: "2024-09-20", to: "2024-09-22" },
  { date: "2024-05-05", tourn: "Mission SYC", event: "Y-12 Men's Saber", from: "2024-05-03", to: "2024-05-06" },
  { date: "2024-05-04", tourn: "Mission SYC", event: "Y-14 Men's Saber", from: "2024-05-03", to: "2024-05-06" },
  { date: "2024-04-21", tourn: "NoVA Knights", event: "Cadet Men's Saber", from: "2024-04-19", to: "2024-04-22" },
  { date: "2024-04-20", tourn: "NoVA Knights", event: "Y-14 Men's Saber", from: "2024-04-19", to: "2024-04-22" },
  { date: "2023-09-24", tourn: "River City", event: "Y-14 Men's Saber", from: "2023-09-22", to: "2023-09-25" },
  { date: "2023-09-23", tourn: "River City", event: "Cadet Men's Saber", from: "2023-09-22", to: "2023-09-25" },
  { date: "2023-09-03", tourn: "North Texas", event: "Y-14 Men's Saber", from: "2023-09-01", to: "2023-09-04" },
  { date: "2023-09-02", tourn: "North Texas", event: "Y-12 Men's Saber", from: "2023-09-01", to: "2023-09-04" },
  { date: "2023-04-16", tourn: "Fairfax", event: "Y-12 Men's Saber", from: "2023-04-14", to: "2023-04-17" },
  { date: "2023-03-11", tourn: "Ben Gutenberg", event: "Y-12 Men's Saber", from: "2023-03-10", to: "2023-03-12" },
  { date: "2023-02-11", tourn: "River City", event: "Y-12 Men's Saber", from: "2023-02-10", to: "2023-02-12" },
  { date: "2023-01-14", tourn: "Capitol Clash", event: "Y-12 Men's Saber", from: "2023-01-13", to: "2023-01-16" },
  { date: "2022-10-02", tourn: "NoVA Knights", event: "Y-12 Men's Saber", from: "2022-09-30", to: "2022-10-03" },
  { date: "2022-10-01", tourn: "NoVA Knights", event: "Y-14 Men's Saber", from: "2022-09-30", to: "2022-10-03" },
  { date: "2022-09-03", tourn: "North Texas", event: "Y-12 Men's Saber", from: "2022-09-01", to: "2022-09-04" },
  { date: "2022-07-11", tourn: "USA Fencing National Championships", event: "Y-10 Men's Saber", from: "2022-07-01", to: "2022-07-13" },
  { date: "2022-06-12", tourn: "DCFC", event: "Y-10 Mixed Saber", from: "2022-06-11", to: "2022-06-13" },
  { date: "2021-06-19", tourn: "Fairfax", event: "Y-10 Men's Saber", from: "2021-06-18", to: "2021-06-20" },
];

function searchFTL(from, to, country='USA') {
  return new Promise((resolve, reject) => {
    const url = `https://www.fencingtimelive.com/tournaments/search/data/advanced?from=${from}&to=${to}&country=${country}`;
    https.get(url, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch(e) { reject(new Error('Parse error: ' + data.slice(0,200))); }
      });
    }).on('error', reject);
  });
}

function getEventSchedule(tournId) {
  return new Promise((resolve, reject) => {
    const url = `https://www.fencingtimelive.com/tournaments/eventSchedule/${tournId}`;
    const options = {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' }
    };
    https.get(url, options, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  const results = [];
  for (const m of missing) {
    try {
      const tournaments = await searchFTL(m.from, m.to);
      // Find matching tournament
      const matches = tournaments.filter(t => {
        const name = t.name?.toLowerCase() || '';
        const search = m.tourn.toLowerCase();
        return name.includes(search) || search.split(' ').every(w => name.includes(w.toLowerCase()));
      });
      
      if (matches.length === 0) {
        console.log(`❌ ${m.date} ${m.tourn} — no tournament match in ${tournaments.length} results`);
        // Show all results for debugging
        tournaments.forEach(t => console.log(`    ${t.name} | ${t.location}`));
        results.push({ ...m, tournId: null, eventId: null });
        continue;
      }
      
      const tourn = matches[0];
      console.log(`✅ ${m.date} ${m.tourn} → ${tourn.name} (${tourn.id})`);
      
      // Now get event schedule to find specific event
      const html = await getEventSchedule(tourn.id);
      
      // Parse event links from HTML
      // Format: <a href="/events/view/ID"><strong>Event Name</strong></a>
      const eventRegex = /href="\/events\/view\/([A-F0-9]{32})"[^>]*>\s*(?:<strong>)?\s*([^<]+)/gi;
      let match;
      const events = [];
      const seen = new Set();
      while ((match = eventRegex.exec(html)) !== null) {
        const id = match[1];
        const name = match[2].trim();
        if (!seen.has(id)) {
          seen.add(id);
          events.push({ id, name });
        }
      }
      
      // Match the event
      const eventName = m.event.toLowerCase();
      const isMen = eventName.includes("men's") || eventName.includes('mixed');
      const eventMatch = events.find(e => {
        const en = e.name.toLowerCase();
        if (!en.includes('sab')) return false;
        // Don't match women's if looking for men's (unless mixed)
        if (isMen && en.includes("women's") && !eventName.includes('mixed')) return false;
        // Match category
        if (eventName.includes('y-14') && (en.includes('y-14') || en.includes('y14'))) return true;
        if (eventName.includes('y-12') && (en.includes('y-12') || en.includes('y12'))) return true;
        if (eventName.includes('y-10') && (en.includes('y-10') || en.includes('y10'))) return true;
        if (eventName.includes('cadet') && en.includes('cadet')) return true;
        if (eventName.includes('junior') && en.includes('junior')) return true;
        if (eventName.includes('senior') && (en.includes('senior') || en.includes('div i'))) return true;
        if (eventName.includes('mixed saber') && en.includes('sab') && en.includes('mix')) return true;
        return false;
      });
      
      if (eventMatch) {
        console.log(`   → Event: ${eventMatch.name} (${eventMatch.id})`);
        results.push({ ...m, tournId: tourn.id, eventId: eventMatch.id, eventName: eventMatch.name });
      } else {
        console.log(`   ⚠️ No event match for "${m.event}" in ${events.length} events`);
        events.forEach(e => console.log(`      ${e.name} (${e.id})`));
        results.push({ ...m, tournId: tourn.id, eventId: null, events });
      }
      
      // Rate limit
      await new Promise(r => setTimeout(r, 500));
    } catch(e) {
      console.log(`💥 ${m.date} ${m.tourn} — error: ${e.message}`);
      results.push({ ...m, error: e.message });
    }
  }
  
  // Write results
  const fs = await import('fs');
  fs.writeFileSync('scripts/ftl-event-ids.json', JSON.stringify(results, null, 2));
  console.log(`\nDone! ${results.filter(r => r.eventId).length}/${missing.length} events found`);
}

main().catch(console.error);
