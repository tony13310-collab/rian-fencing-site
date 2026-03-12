"use client";

import { motion } from "framer-motion";
import { seasons } from "@/data/profile";

function getCategoryBadge(category: string) {
  const map: Record<string, string> = {
    "Y-14": "badge-y14",
    Cadet: "badge-cadet",
    Junior: "badge-junior",
    "Div I": "badge-div1",
  };
  return map[category] || "bg-gray-600";
}

function getPlaceColor(place: number | null, total: number | null) {
  if (!place || !total) return "text-white/40";
  const pct = place / total;
  if (place <= 3) return "text-amber-400 font-black";
  if (pct <= 0.05) return "text-cyan-400 font-bold";
  if (pct <= 0.1) return "text-green-400 font-bold";
  if (pct <= 0.25) return "text-white font-semibold";
  return "text-white/60";
}

export default function ResultsTable() {
  const currentSeason = seasons[0];

  // Group events by tournament
  const tournaments: Record<
    string,
    (typeof currentSeason.events)[0][]
  > = {};
  currentSeason.events.forEach((e) => {
    if (!tournaments[e.tournament]) tournaments[e.tournament] = [];
    tournaments[e.tournament].push(e);
  });

  return (
    <section id="results" className="py-16 sm:py-24 px-3 sm:px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-3">
          <span className="gradient-text">Competition Results</span>
        </h2>
        <p className="text-white/40 text-lg">
          2025-2026 National Tournament Circuit
        </p>
      </motion.div>

      <div className="space-y-8">
        {Object.entries(tournaments).map(([tourName, events], tidx) => (
          <motion.div
            key={tourName}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: tidx * 0.1 }}
            className="gradient-border bg-[#12121a] rounded-2xl overflow-hidden"
          >
            {/* Tournament header */}
            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {tourName}
                </h3>
                <p className="text-white/50 text-sm">
                  {events[0].location} •{" "}
                  {new Date(events[0].date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
              {events.some((e) => e.result.place && e.result.place <= 3) && (
                <span className="text-3xl">🏆</span>
              )}
            </div>

            {/* Events */}
            <div className="divide-y divide-white/5">
              {events.map((event, eidx) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: eidx * 0.05 + tidx * 0.1 }}
                  className="px-6 py-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`${getCategoryBadge(event.category)} px-3 py-1 rounded-lg text-xs font-bold text-white uppercase tracking-wider`}
                    >
                      {event.category}
                    </span>
                    <div>
                      <span className="text-white/80 font-medium">
                        {event.event}
                      </span>
                      <span className="text-white/45 text-sm ml-3">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {"medal" in event && event.medal && (
                      <span className="text-2xl">{event.medal}</span>
                    )}
                    <div className="text-right">
                      {event.result.place && event.result.total ? (
                        <>
                          <span
                            className={`text-xl ${getPlaceColor(event.result.place, event.result.total)}`}
                          >
                            {event.result.place}
                          </span>
                          <span className="text-white/45 text-sm">
                            /{event.result.total}
                          </span>
                        </>
                      ) : (
                        <span className="text-white/45">—</span>
                      )}
                    </div>
                    {"rating" in event && event.rating && (
                      <span className="text-xs px-2 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        {event.rating}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
