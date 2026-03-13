import { allEvents, seasonMeta, seasonOrder } from "./events";
import { makeEventId } from "./eventDetails";

// --- Computed values ---
const ratingOrder = ['A', 'B', 'C', 'D', 'E', 'U'];

// Current rating = highest rating ever earned
const allRatings = allEvents.filter(e => e.rating).map(e => e.rating);
const computedRating = allRatings.sort((a, b) => {
  const ai = ratingOrder.indexOf(a[0]);
  const bi = ratingOrder.indexOf(b[0]);
  return ai - bi;
})[0] || "";

// Current season = newest season
const computedCurrentSeason = seasonOrder[0];

// Rankings from seasonMeta (manually maintained there)
const currentMeta = seasonMeta.find(m => m.season === computedCurrentSeason);
const rankColorMap: Record<string, string> = {
  "Y-8": "gray", "Y-10": "gray", "Y-12": "green", "Y-14": "green",
  "Cadet": "blue", "Junior": "purple", "Div I": "red",
};
const computedRankings = currentMeta?.rankings
  ? Object.entries(currentMeta.rankings)
      .sort(([a], [b]) => {
        const order = ["Y-10", "Y-12", "Y-14", "Cadet", "Junior", "Div I"];
        return order.indexOf(a) - order.indexOf(b);
      })
      .map(([cat, rank]) => ({
        category: cat,
        rank,
        color: rankColorMap[cat] || "blue",
      }))
  : [];

// Rating history — computed from first occurrence of each rating
const ratingHistory: { date: string; rating: string }[] = [];
const seenRatings = new Set<string>();
const sortedByDate = [...allEvents].sort((a, b) => a.date.localeCompare(b.date));
for (const ev of sortedByDate) {
  if (ev.rating && !seenRatings.has(ev.rating)) {
    seenRatings.add(ev.rating);
    ratingHistory.push({
      date: ev.date.substring(0, 7), // "YYYY-MM"
      rating: ev.rating,
    });
  }
}

// Achievements — auto-generated from events
function computeAchievements() {
  const achievements: { emoji: string; text: string; eventId: string | null }[] = [];

  // Find golds and medals (top 3) at National/SYC level with 50+ fencers
  const notable = [...allEvents]
    .filter(e => e.place && e.total && e.total >= 50)
    .sort((a, b) => b.date.localeCompare(a.date));

  // Golds
  for (const e of notable.filter(ev => ev.place === 1)) {
    const month = new Date(e.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    achievements.push({
      emoji: "🏆",
      text: `${e.tournament} ${e.event.replace("Men's Saber", "MS")} — Champion/${e.total} (${month})`,
      eventId: makeEventId(e.date, e.event),
    });
  }

  // Silver/Bronze at 100+ fencer events
  for (const e of notable.filter(ev => ev.place && ev.place >= 2 && ev.place <= 3 && ev.total! >= 100)) {
    const medal = e.place === 2 ? "🥈" : "🥉";
    const placeStr = e.place === 2 ? "2nd" : "3rd";
    const month = new Date(e.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    achievements.push({
      emoji: medal,
      text: `${e.tournament} ${e.event.replace("Men's Saber", "MS")} — ${placeStr}/${e.total} (${month})`,
      eventId: makeEventId(e.date, e.event),
    });
  }

  // Top 8 at National events with 200+ fencers
  for (const e of notable.filter(ev => ev.place && ev.place > 3 && ev.place <= 8 && ev.total! >= 200 && ev.level === "National")) {
    const month = new Date(e.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    achievements.push({
      emoji: "🏅",
      text: `${e.tournament} ${e.event.replace("Men's Saber", "MS")} — ${e.place}th/${e.total} (${month})`,
      eventId: makeEventId(e.date, e.event),
    });
  }

  // JO Junior — 11/297 in a massive Junior field
  const joJunior = allEvents.find(e => e.date === "2026-01-12" && e.event.includes("Junior"));
  if (joJunior) {
    achievements.push({
      emoji: "🌟",
      text: `Junior Olympics Junior MS — 11th/297 (Jan 2026)`,
      eventId: makeEventId(joJunior.date, joJunior.event),
    });
  }

  // Rating upgrades — each letter change is a milestone
  // If event already in achievements, append rating to existing entry instead of duplicating
  const existingEventIds = new Set(achievements.map(a => a.eventId).filter(Boolean));
  const ratingOrder = ['U', 'E', 'D', 'C', 'B', 'A'];
  const ratedEvents = [...allEvents]
    .filter(e => e.rating)
    .sort((a, b) => a.date.localeCompare(b.date));
  let prevRating = '';
  for (const e of ratedEvents) {
    const letter = e.rating.charAt(0);
    const prevLetter = prevRating.charAt(0);
    if (prevRating && e.rating !== prevRating) {
      const prevIdx = ratingOrder.indexOf(prevLetter);
      const curIdx = ratingOrder.indexOf(letter);
      const isUpgrade = curIdx > prevIdx;
      const isRenewal = letter === prevLetter; // same letter, new year
      if (isUpgrade || isRenewal) {
        const eid = makeEventId(e.date, e.event);
        const existing = achievements.find(a => a.eventId === eid);
        const label = isUpgrade ? `Earned ${e.rating}` : `Renewed ${e.rating}`;
        if (existing) {
          existing.text += ` • ${label}`;
        } else {
          const month = new Date(e.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
          const emoji = isUpgrade ? "⬆️" : "🔄";
          achievements.push({
            emoji,
            text: `${label} rating — ${e.tournament} ${e.event.replace("Men's Saber", "MS")} ${e.place}/${e.total} (${month})`,
            eventId: eid,
          });
        }
      }
    }
    prevRating = e.rating;
  }

  // First competition milestone
  const firstEvent = [...allEvents].sort((a, b) => a.date.localeCompare(b.date))[0];
  if (firstEvent) {
    const age = new Date(firstEvent.date + 'T12:00:00').getFullYear() - 2011;
    const month = new Date(firstEvent.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    achievements.push({
      emoji: "⭐",
      text: `First competition at age ${age} — ${firstEvent.tournament} ${firstEvent.event.replace("Men's Saber", "MS")} (${month})`,
      eventId: makeEventId(firstEvent.date, firstEvent.event),
    });
  }

  return achievements;
}

export const profile = {
  name: "Rian Wei",
  chineseName: "魏瑞安",
  nickname: "瑞瑞",
  birthYear: 2011,
  weapon: "Men's Saber",
  club: "Capital Fencing Academy",
  division: "Capitol Division",
  rating: computedRating,
  currentSeason: computedCurrentSeason,
  currentRankings: computedRankings,
  ratingHistory,
  location: "Bethesda, MD",
  bio: "Rising Men's Saber fencer competing at the Cadet, Junior, and Division I levels. Training at Capital Fencing Academy in the Capitol Division.",
  achievements: computeAchievements(),
  social: {
    instagram: "",
    youtube: "",
    email: "",
  },
};

// REMOVED: seasons array was duplicate of events.ts — use allEvents instead
/*
      // Summer Nationals 2025
      {
        id: "sn25-y14",
        tournament: "Summer Nationals",
        event: "Y-14 Men's Saber",
        date: "2025-07-05",
        location: "Milwaukee, WI",
        result: { place: null, total: null },
        category: "Y-14",
      },
      {
        id: "sn25-junior",
        tournament: "Summer Nationals",
        event: "Junior Men's Saber",
        date: "2025-06-28",
        location: "Milwaukee, WI",
        result: { place: 93, total: 279 },
        category: "Junior",
      },
      {
        id: "sn25-div1",
        tournament: "Summer Nationals",
        event: "Div I Men's Saber",
        date: "2025-07-01",
        location: "Milwaukee, WI",
        result: { place: 109, total: 169 },
        category: "Div I",
      },
      {
        id: "sn25-cadet",
        tournament: "Summer Nationals",
        event: "Cadet Men's Saber",
        date: "2025-07-02",
        location: "Milwaukee, WI",
        result: { place: 132, total: 256 },
        category: "Cadet",
      },
      // October NAC
      {
        id: "oct25-div1",
        tournament: "October NAC",
        event: "Div I Men's Saber",
        date: "2025-10-03",
        location: "Salt Lake City, UT",
        result: { place: 145, total: 216 },
        category: "Div I",
      },
      {
        id: "oct25-cadet",
        tournament: "October NAC",
        event: "Cadet Men's Saber",
        date: "2025-10-04",
        location: "Salt Lake City, UT",
        result: { place: 59, total: 172 },
        category: "Cadet",
      },
      {
        id: "oct25-junior",
        tournament: "October NAC",
        event: "Junior Men's Saber",
        date: "2025-10-05",
        location: "Salt Lake City, UT",
        result: { place: 101, total: 296 },
        category: "Junior",
      },
      // November NAC
      {
        id: "nov25-y14",
        tournament: "November NAC",
        event: "Y-14 Men's Saber",
        date: "2025-11-14",
        location: "Fort Worth, TX",
        result: { place: 7, total: 170 },
        category: "Y-14",
      },
      {
        id: "nov25-cadet",
        tournament: "November NAC",
        event: "Cadet Men's Saber",
        date: "2025-11-15",
        location: "Fort Worth, TX",
        result: { place: 11, total: 307 },
        category: "Cadet",
      },
      {
        id: "nov25-div1",
        tournament: "November NAC",
        event: "Div I Men's Saber",
        date: "2025-11-16",
        location: "Fort Worth, TX",
        result: { place: 42, total: 231 },
        category: "Div I",
      },
      // Junior Olympics
      {
        id: "jo26-cadet",
        tournament: "Junior Olympics",
        event: "Cadet Men's Saber",
        date: "2026-01-10",
        location: "Kansas City, MO",
        result: { place: 44, total: 277 },
        rating: "B25",
        category: "Cadet",
        hasDetail: true,
      },
      {
        id: "jo26-junior",
        tournament: "Junior Olympics",
        event: "Junior Men's Saber",
        date: "2026-01-12",
        location: "Kansas City, MO",
        result: { place: 11, total: 297 },
        rating: "B26",
        category: "Junior",
        hasDetail: true,
      },
      // SJCC
      {
        id: "sjcc26-junior",
        tournament: "January SJCC",
        event: "Junior Men's Saber",
        date: "2026-01-24",
        location: "Memphis, TN",
        result: { place: 2, total: 117 },
        rating: "A26",
        medal: "🥈",
        category: "Junior",
        hasDetail: true,
      },
      // February NAC
      {
        id: "feb26-div1",
        tournament: "February NAC",
        event: "Div I Men's Saber",
        date: "2026-02-13",
        location: "Cincinnati, OH",
        result: { place: 105, total: 209 },
        rating: "A26",
        category: "Div I",
        hasDetail: true,
      },
      {
        id: "feb26-junior",
        tournament: "February NAC",
        event: "Junior Men's Saber",
        date: "2026-02-15",
        location: "Cincinnati, OH",
        result: { place: 31, total: 203 },
        rating: "A26",
        category: "Junior",
        hasDetail: true,
      },
    ],
  },
*/
