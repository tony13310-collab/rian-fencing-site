"use client";

import { motion } from "framer-motion";
import { allEvents } from "@/data/events";
import { eventDetails } from "@/data/eventDetails";
import { opponents } from "@/data/opponents";

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

  // Count pool and DE bouts from eventDetails
  let poolBoutsDetail = 0;
  let deBoutsDetail = 0;
  for (const detail of Object.values(eventDetails)) {
    if (detail.pool?.bouts) {
      poolBoutsDetail += detail.pool.bouts.length;
    }
    if (detail.de) {
      deBoutsDetail += detail.de.length;
    }
  }

  // Also count from opponents.ts (H2H database — may have more bouts)
  let poolBoutsH2H = 0;
  let deBoutsH2H = 0;
  for (const opp of Object.values(opponents)) {
    for (const b of opp.bouts) {
      if (b.type === "Pool") poolBoutsH2H++;
      else deBoutsH2H++; // T128, T64, T32, etc. are all DE rounds
    }
  }

  // Use the larger count from either source
  const poolBouts = Math.max(poolBoutsDetail, poolBoutsH2H);
  const deBouts = Math.max(deBoutsDetail, deBoutsH2H);

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
      label: "Pool Bouts",
      value: poolBouts.toString(),
      sub: "All time",
      color: "from-sky-400 to-blue-500",
    },
    {
      label: "DE Bouts",
      value: deBouts.toString(),
      sub: "All time",
      color: "from-teal-400 to-cyan-500",
    },
    {
      label: "Medals",
      value: top8.toString(),
      sub: "Top 8 finishes",
      color: "from-yellow-300 to-amber-500",
    },
  ];

  return (
    <section className="relative z-20 px-4 sm:px-6 max-w-6xl mx-auto pt-12 pb-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="stat-card bg-[#12121a] rounded-2xl p-3 sm:p-5 border border-white/5 backdrop-blur-sm"
          >
            <div
              className={`text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
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
