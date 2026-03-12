
import { eventDetails } from '../src/data/eventDetails.ts';
const result = {};
for (const [key, detail] of Object.entries(eventDetails)) {
  if (detail.pool?.bouts) {
    result[key] = {
      date: detail.date,
      tournament: detail.tournament,
      event: detail.event,
      bouts: detail.pool.bouts
    };
  }
}
process.stdout.write(JSON.stringify(result));
