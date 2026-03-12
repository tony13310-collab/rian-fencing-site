"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { makeEventId, eventDetails } from "@/data/eventDetails";
import {
  CompEvent,
  TournamentLevel,
  AgeCategory,
  seasonOrder,
  levelColors,
  categoryColors,
  seasonMeta,
} from "@/data/events";
import { PlacementFilter } from "@/components/FilterBar";

interface SeasonTimelineProps {
  events: CompEvent[];
  selectedLevels: Set<TournamentLevel>;
  selectedCategories: Set<AgeCategory>;
  selectedPlacements?: Set<PlacementFilter>;
}

function getPlaceDisplay(place: number | null, total: number | null) {
  if (!place || !total) return { text: "—", color: "text-white/40" };
  const pct = place / total;
  let color = "text-white/50";
  if (place <= 3) color = "text-amber-400 font-black";
  else if (pct <= 0.05) color = "text-cyan-400 font-bold";
  else if (pct <= 0.1) color = "text-green-400 font-bold";
  else if (pct <= 0.25) color = "text-white font-semibold";
  return { text: `${place}`, color };
}

function getSeasonLabel(season: string) {
  const [start, end] = season.split("-");
  return `${start}–${end.slice(2)}`;
}

function getSeasonAge(season: string) {
  const startYear = parseInt(season.split("-")[0]);
  const age = startYear - 2011; // Rian born 2011
  return `Age ${age}`;
}

export default function SeasonTimeline({
  events,
  selectedLevels,
  selectedCategories,
  selectedPlacements = new Set(),
}: SeasonTimelineProps) {
  // Filter events
  const filtered = events.filter((e) => {
    const levelOk =
      selectedLevels.size === 0 || selectedLevels.has(e.level);
    const catOk =
      selectedCategories.size === 0 || selectedCategories.has(e.category);
    let placeOk = selectedPlacements.size === 0;
    if (!placeOk && e.place && e.total) {
      if (selectedPlacements.has("Gold") && e.place === 1) placeOk = true;
      if (selectedPlacements.has("Top 4") && e.place <= 4) placeOk = true;
      if (selectedPlacements.has("Top 8") && e.place <= 8) placeOk = true;
      if (selectedPlacements.has("Top 16") && e.place <= 16) placeOk = true;
      if (selectedPlacements.has("Top 32") && e.place <= 32) placeOk = true;
    }
    return levelOk && catOk && placeOk;
  });

  // Group by season
  const bySeason: Record<string, CompEvent[]> = {};
  for (const e of filtered) {
    if (!bySeason[e.season]) bySeason[e.season] = [];
    bySeason[e.season].push(e);
  }

  // Group events within season by tournament
  function groupByTournament(events: CompEvent[]) {
    const groups: Record<string, CompEvent[]> = {};
    for (const e of events) {
      if (!groups[e.tournament]) groups[e.tournament] = [];
      groups[e.tournament].push(e);
    }
    return groups;
  }

  return (
    <section id="results" className="py-12 px-3 sm:px-6 max-w-6xl mx-auto">
      <div className="relative">
        {/* Timeline line removed per design */}

        {seasonOrder.map((season, sidx) => {
          const seasonEvents = bySeason[season];
          if (!seasonEvents || seasonEvents.length === 0) return null;

          const tournaments = groupByTournament(seasonEvents);
          const medals = seasonEvents.filter(
            (e) => e.place && e.place <= 3
          ).length;

          return (
            <motion.div
              key={season}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: sidx * 0.1 }}
              className="relative mb-16 last:mb-0"
            >

              {/* Season header */}
              {(() => {
                const meta = seasonMeta.find((m) => m.season === season);
                const rankingOrder = [
                  "Y-10",
                  "Y-12",
                  "Y-14",
                  "Cadet",
                  "Junior",
                  "Div I",
                ] as const;
                const rankStyles: Record<
                  string,
                  { bg: string; text: string; border: string }
                > = {
                  "Y-10": {
                    bg: "bg-slate-500/10",
                    text: "text-slate-400",
                    border: "border-slate-500/20",
                  },
                  "Y-12": {
                    bg: "bg-emerald-500/10",
                    text: "text-emerald-400",
                    border: "border-emerald-500/20",
                  },
                  "Y-14": {
                    bg: "bg-green-500/10",
                    text: "text-green-400",
                    border: "border-green-500/20",
                  },
                  Cadet: {
                    bg: "bg-blue-500/10",
                    text: "text-blue-400",
                    border: "border-blue-500/20",
                  },
                  Junior: {
                    bg: "bg-purple-500/10",
                    text: "text-purple-400",
                    border: "border-purple-500/20",
                  },
                  "Div I": {
                    bg: "bg-red-500/10",
                    text: "text-red-400",
                    border: "border-red-500/20",
                  },
                };
                return (
                  <div className="mb-6">
                    <div className="flex items-center gap-4 flex-wrap">
                      <h3 className="text-2xl md:text-3xl font-black gradient-text">
                        {getSeasonLabel(season)}
                      </h3>
                      <span className="text-white/50 text-sm font-medium">
                        {getSeasonAge(season)}
                      </span>
                      <span className="text-white/45 text-sm">
                        {seasonEvents.length} events
                      </span>

                      {/* Rating */}
                      {meta?.rating && (
                        <span className="text-amber-400 text-sm font-bold">
                          {meta.rating}
                        </span>
                      )}

                      {/* Ranking badges */}
                      {meta?.rankings &&
                        rankingOrder.map((cat) => {
                          const rank = meta.rankings?.[cat];
                          if (!rank) return null;
                          const style =
                            rankStyles[cat] || {
                              bg: "bg-gray-500/10",
                              text: "text-gray-400",
                              border: "border-gray-500/20",
                            };
                          return (
                            <span
                              key={cat}
                              className={`px-3 py-1.5 rounded-xl ${style.bg} border ${style.border} text-sm font-bold flex items-center gap-1.5`}
                            >
                              <span className="text-white/40 text-xs uppercase tracking-wider">
                                {cat}
                              </span>
                              <span
                                className={`${style.text} font-black text-base`}
                              >
                                #{rank}
                              </span>
                            </span>
                          );
                        })}
                    </div>
                    {/* Quick stats */}
                    <div className="flex gap-4 mt-2 text-sm">
                      {medals > 0 && (
                        <span className="text-amber-400">
                          🏆 {medals} medals
                        </span>
                      )}

                      {(() => {
                        let totalWins = 0;
                        let totalBouts = 0;
                        for (const e of seasonEvents) {
                          const id = makeEventId(e.date, e.event);
                          const detail = eventDetails[id];
                          if (detail?.pool) {
                            totalWins += detail.pool.wins;
                            totalBouts += detail.pool.wins + detail.pool.losses;
                          }
                        }
                        if (totalBouts === 0) return null;
                        const pct = Math.round((totalWins / totalBouts) * 100);
                        return (
                          <span className={`${pct >= 75 ? "text-green-400" : pct >= 60 ? "text-blue-400/70" : "text-white/50"}`}>
                            Pool: {totalWins}-{totalBouts - totalWins} ({pct}%)
                          </span>
                        );
                      })()}
                    </div>
                  </div>
                );
              })()}

              {/* Tournament cards */}
              <div className="space-y-4">
                {Object.entries(tournaments).map(
                  ([tourName, tourEvents], tidx) => {
                    const level = tourEvents[0].level;
                    const colors = levelColors[level];

                    return (
                      <motion.div
                        key={tourName}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: tidx * 0.05 }}
                        className={`rounded-2xl border ${colors.border} bg-gradient-to-r ${colors.cardBg} overflow-hidden backdrop-blur-sm`}
                      >
                        {/* Tournament header */}
                        <div className="px-3 sm:px-5 py-3 flex items-center justify-between border-b border-white/5 gap-2">
                          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                            <span
                              className={`text-[10px] w-[60px] sm:w-[72px] py-1 rounded-md ${colors.bg} ${colors.text} uppercase tracking-wider font-bold text-center inline-block shrink-0`}
                            >
                              {level === "International" ? "INTL" : level === "National" ? "NAT'L" : level}
                            </span>
                            <h4 className="text-white/90 font-bold text-xs sm:text-sm md:text-base truncate">
                              {tourName}
                            </h4>
                          </div>
                          <span className="text-white/50 text-[10px] sm:text-xs shrink-0">
                            {new Date(tourEvents[0].date).toLocaleDateString(
                              "en-US",
                              { month: "short", year: "numeric" }
                            )}
                          </span>
                        </div>

                        {/* Events */}
                        <div className="divide-y divide-white/5">
                          {tourEvents.map((event) => {
                            const pd = getPlaceDisplay(
                              event.place,
                              event.total
                            );
                            const catBg =
                              categoryColors[event.category] || "bg-gray-600";

                            return (
                              <Link
                                href={`/event/${makeEventId(event.date, event.event)}`}
                                key={event.date + event.event}
                                className="block px-3 sm:px-5 py-3 flex items-center justify-between hover:bg-white/[0.04] transition-colors cursor-pointer gap-2"
                              >
                                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                                  <span
                                    className={`${catBg} w-[60px] sm:w-[72px] py-1 rounded-md text-[10px] font-bold text-white uppercase tracking-wider text-center inline-block shrink-0`}
                                  >
                                    {event.category}
                                  </span>
                                  <span className="text-white/60 text-xs sm:text-sm truncate">
                                    {event.event}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                                  {event.medal && (
                                    <span className="text-base sm:text-xl">
                                      {event.medal}
                                    </span>
                                  )}
                                  <div className="text-right min-w-[55px] sm:min-w-[80px]">
                                    <span className={`text-sm sm:text-lg ${pd.color}`}>
                                      {pd.text}
                                    </span>
                                    {event.total && (
                                      <span className="text-white/45 text-[10px] sm:text-sm">
                                        /{event.total}
                                      </span>
                                    )}
                                  </div>
                                  {event.rating && (
                                    <span className="text-[10px] px-1.5 sm:px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-400 border border-amber-500/20 font-bold hidden sm:inline">
                                      {event.rating}
                                    </span>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    );
                  }
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
