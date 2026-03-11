"use client";

import { motion } from "framer-motion";
import { allEvents } from "@/data/events";

export default function StatsBar() {
  const totalEvents = allEvents.length;
  const totalSeasons = new Set(allEvents.map((e) => e.season)).size;

  const medals = allEvents.filter(
    (e) => e.place && e.place <= 3
  ).length;
  const top8 = allEvents.filter(
    (e) => e.place && e.place <= 8
  ).length;
  const golds = allEvents.filter(
    (e) => e.place === 1
  ).length;

  const stats = [
    {
      label: "Seasons",
      value: totalSeasons.toString(),
      sub: "Since 2018",
      color: "from-cyan-400 to-blue-500",
    },
    {
      label: "Competitions",
      value: totalEvents.toString(),
      sub: "All time",
      color: "from-purple-400 to-violet-500",
    },
    {
      label: "Gold Medals",
      value: golds.toString(),
      sub: "1st place",
      color: "from-yellow-400 to-amber-500",
    },
    {
      label: "Medals",
      value: medals.toString(),
      sub: "Top 3 finishes",
      color: "from-amber-400 to-orange-500",
    },
    {
      label: "Top 8",
      value: top8.toString(),
      sub: "All events",
      color: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <section className="relative z-20 px-6 max-w-6xl mx-auto pt-12 pb-8">
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
            <div className="text-white/50 text-xs mt-0.5">{stat.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
