"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { makeEventId } from "@/data/eventDetails";
import {
  CompEvent,
  TournamentLevel,
  AgeCategory,
  seasonOrder,
  levelColors,
  categoryColors,
  seasonMeta,
} from "@/data/events";

interface SeasonTimelineProps {
  events: CompEvent[];
  selectedLevels: Set<TournamentLevel>;
  selectedCategories: Set<AgeCategory>;
}

function getPlaceDisplay(place: number | null, total: number | null) {
  if (!place || !total) return { text: "—", color: "text-white/20" };
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
  return `Age ${age}–${age + 1}`;
}

export default function SeasonTimeline({
  events,
  selectedLevels,
  selectedCategories,
}: SeasonTimelineProps) {
  // Filter events
  const filtered = events.filter((e) => {
    const levelOk =
      selectedLevels.size === 0 || selectedLevels.has(e.level);
    const catOk =
      selectedCategories.size === 0 || selectedCategories.has(e.category);
    return levelOk && catOk;
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
    <section id="results" className="py-12 px-6 max-w-6xl mx-auto">
      <div className="relative">
        {/* Vertical timeline line (left side) */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent" />

        {seasonOrder.map((season, sidx) => {
          const seasonEvents = bySeason[season];
          if (!seasonEvents || seasonEvents.length === 0) return null;

          const tournaments = groupByTournament(seasonEvents);
          const medals = seasonEvents.filter(
            (e) => e.place && e.place <= 3
          ).length;
          const bestPlace = seasonEvents.reduce(
            (best, e) => {
              if (!e.place || !e.total) return best;
              const pct = e.place / e.total;
              return !best.pct || pct < best.pct
                ? { pct, place: e.place, total: e.total }
                : best;
            },
            { pct: null as number | null, place: 0, total: 0 }
          );

          return (
            <motion.div
              key={season}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: sidx * 0.1 }}
              className="relative pl-10 md:pl-24 mb-16 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 -translate-x-1/2 top-2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_12px_rgba(0,212,255,0.5)]" />
              </div>

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
                      <span className="text-white/30 text-sm font-medium">
                        {getSeasonAge(season)}
                      </span>
                      <span className="text-white/20 text-sm">
                        {seasonEvents.length} events
                      </span>

                      {/* Rating badge */}
                      {meta?.rating && (
                        <span className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-600/20 border border-amber-500/30 text-amber-400 text-sm font-black tracking-wider">
                          ⚔️ {meta.rating}
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
                      {bestPlace.pct && (
                        <span className="text-cyan-400/60">
                          Best: {bestPlace.place}/{bestPlace.total} (
                          {(bestPlace.pct * 100).toFixed(0)}%)
                        </span>
                      )}
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
                        className={`rounded-2xl border ${colors.border} bg-gradient-to-r ${colors.bg} overflow-hidden backdrop-blur-sm`}
                      >
                        {/* Tournament header */}
                        <div className="px-5 py-3 flex items-center justify-between border-b border-white/5">
                          <div className="flex items-center gap-3">
                            <span
                              className={`text-[10px] w-[72px] py-1 rounded-md ${colors.text} border ${colors.border} uppercase tracking-wider font-bold text-center inline-block`}
                            >
                              {level}
                            </span>
                            <h4 className="text-white/90 font-bold text-sm md:text-base">
                              {tourName}
                            </h4>
                          </div>
                          <span className="text-white/20 text-xs">
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
                                className="block px-5 py-3 flex items-center justify-between hover:bg-white/[0.04] transition-colors cursor-pointer"
                              >
                                <div className="flex items-center gap-3">
                                  <span
                                    className={`${catBg} w-[72px] py-1 rounded-md text-[10px] font-bold text-white uppercase tracking-wider text-center inline-block shrink-0`}
                                  >
                                    {event.category}
                                  </span>
                                  <span className="text-white/60 text-sm">
                                    {event.event}
                                  </span>
                                </div>
                                <div className="flex items-center gap-3">
                                  {event.medal && (
                                    <span className="text-xl">
                                      {event.medal}
                                    </span>
                                  )}
                                  <div className="text-right min-w-[80px]">
                                    <span className={`text-lg ${pd.color}`}>
                                      {pd.text}
                                    </span>
                                    {event.total && (
                                      <span className="text-white/15 text-sm">
                                        /{event.total}
                                      </span>
                                    )}
                                  </div>
                                  {event.rating && (
                                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-400 border border-amber-500/20 font-bold">
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
