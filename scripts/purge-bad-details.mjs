// Purge mismatched eventDetails entries
// Keep only entries where place/total matches events.ts
import fs from 'fs';

const eventsSrc = fs.readFileSync('src/data/events.ts', 'utf-8');
const detailsSrc = fs.readFileSync('src/data/eventDetails.ts', 'utf-8');

// Build set of correct IDs by comparing place/total
const eventRegex = /date:\s*"([^"]+)".*?event:\s*"([^"]+)".*?place:\s*(\d+).*?total:\s*(\d+)/g;
let m;
const correctIds = new Set();

while ((m = eventRegex.exec(eventsSrc)) !== null) {
  const [, date, event, place, total] = m;
  const slug = event.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const eid = `${date}_${slug}`;
  
  const pat = new RegExp(eid.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[\\s\\S]*?place:\\s*(\\d+)[\\s\\S]*?total:\\s*(\\d+)');
  const dm = pat.exec(detailsSrc);
  if (dm && parseInt(dm[1]) === parseInt(place) && parseInt(dm[2]) === parseInt(total)) {
    correctIds.add(eid);
  }
}

console.log(`Correct entries to keep: ${correctIds.size}`);

// Parse the file and rebuild with only correct entries
// Strategy: find each entry block and keep/remove
const lines = detailsSrc.split('\n');
const output = [];
let inEntry = false;
let currentId = '';
let entryLines = [];
let braceCount = 0;
let kept = 0;
let removed = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Check if this starts a new entry
  const entryMatch = line.match(/^\s*"(\d{4}-\d{2}-\d{2}_[^"]+)":\s*\{/);
  if (entryMatch && !inEntry) {
    inEntry = true;
    currentId = entryMatch[1];
    entryLines = [line];
    braceCount = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    continue;
  }
  
  if (inEntry) {
    entryLines.push(line);
    braceCount += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    
    if (braceCount <= 0) {
      // Entry complete
      if (correctIds.has(currentId)) {
        output.push(...entryLines);
        kept++;
      } else {
        // Check if previous line in output is a comment, remove it too
        while (output.length > 0 && output[output.length - 1].trim().startsWith('//')) {
          output.pop();
        }
        // Also remove trailing empty line
        while (output.length > 0 && output[output.length - 1].trim() === '') {
          output.pop();
        }
        removed++;
        console.log(`  Removed: ${currentId}`);
      }
      inEntry = false;
      currentId = '';
      entryLines = [];
    }
    continue;
  }
  
  output.push(line);
}

fs.writeFileSync('src/data/eventDetails.ts', output.join('\n'));
console.log(`\nDone: kept ${kept}, removed ${removed}`);
