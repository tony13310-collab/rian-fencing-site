"use client";

import { motion } from "framer-motion";
import { seasons } from "@/data/profile";

export default function StatsBar() {
  const currentSeason = seasons[0];
  const events = currentSeason.events;

  const totalEvents = events.length;
  const bestResult = events.reduce(
    (best, e) => {
      if (!e.result.place || !e.result.total) return best;
      const pct = e.result.place / e.result.total;
      if (!best.pct || pct < best.pct) {
        return { pct, event: e };
      }
      return best;
    },
    { pct: null as number | null, event: null as (typeof events)[0] | null }
  );

  const medals = events.filter(
    (e) => e.result.place && e.result.place <= 3
  ).length;
  const top8 = events.filter(
    (e) => e.result.place && e.result.place <= 8
  ).length;
  const top32 = events.filter(
    (e) => e.result.place && e.result.place <= 32
  ).length;

  const stats = [
    {
      label: "Events",
      value: totalEvents.toString(),
      sub: "2025-26 Season",
      color: "from-cyan-400 to-blue-500",
    },
    {
      label: "Best Finish",
      value: bestResult.event
        ? `${bestResult.event.result.place}${bestResult.event.result.place === 2 ? "nd" : bestResult.event.result.place === 1 ? "st" : "th"}`
        : "—",
      sub: bestResult.event
        ? `${bestResult.event.tournament} ${bestResult.event.category}`
        : "",
      color: "from-amber-400 to-orange-500",
    },
    {
      label: "Medals",
      value: medals.toString(),
      sub: "Top 3 finishes",
      color: "from-yellow-400 to-amber-500",
    },
    {
      label: "Top 8",
      value: top8.toString(),
      sub: "National events",
      color: "from-purple-400 to-violet-500",
    },
    {
      label: "Top 32",
      value: top32.toString(),
      sub: "National events",
      color: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <section className="relative -mt-20 z-20 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="stat-card bg-[#12121a] rounded-2xl p-5 border border-white/5 backdrop-blur-sm"
          >
            <div
              className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
            >
              {stat.value}
            </div>
            <div className="text-white/80 font-medium text-sm mt-1">
              {stat.label}
            </div>
            <div className="text-white/30 text-xs mt-0.5">{stat.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
