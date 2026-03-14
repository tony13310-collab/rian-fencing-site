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

  // Count bouts per season from both sources, take max per season, then sum
  // This ensures StatsBar totals = sum of season header totals
  const detSeasons: Record<string, { pool: number; de: number }> = {};
  for (const e of allEvents) {
    const id = e.date + "_" + e.event.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "");
    const detail = (eventDetails as Record<string, (typeof eventDetails)[keyof typeof eventDetails]>)[id];
    const year = parseInt(e.date.slice(0, 4));
    const month = parseInt(e.date.slice(5, 7));
    const sy = month >= 7 ? year : year - 1;
    const season = `${sy}-${sy + 1}`;
    if (!detSeasons[season]) detSeasons[season] = { pool: 0, de: 0 };
    if (detail?.pool) detSeasons[season].pool += detail.pool.wins + detail.pool.losses;
    if (detail?.de) detSeasons[season].de += detail.de.length;
  }

  // Map opponent bouts to seasons using allEvents date→season mapping
  const dateSeason: Record<string, string> = {};
  for (const e of allEvents) dateSeason[e.date] = e.season;
  const oppSeasons: Record<string, { pool: number; de: number }> = {};
  for (const opp of Object.values(opponents)) {
    for (const b of opp.bouts) {
      const d = new Date(b.date);
      const iso = d.toISOString().slice(0, 10);
      let season = dateSeason[iso];
      if (!season) {
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const sy = month >= 7 ? year : year - 1;
        season = `${sy}-${sy + 1}`;
      }
      if (!oppSeasons[season]) oppSeasons[season] = { pool: 0, de: 0 };
      if (b.type === "Pool") oppSeasons[season].pool++;
      else oppSeasons[season].de++;
    }
  }

  const allSeasonKeys = new Set([...Object.keys(detSeasons), ...Object.keys(oppSeasons)]);
  let poolBouts = 0;
  let deBouts = 0;
  for (const s of allSeasonKeys) {
    const det = detSeasons[s] || { pool: 0, de: 0 };
    const opp = oppSeasons[s] || { pool: 0, de: 0 };
    poolBouts += Math.max(det.pool, opp.pool);
    deBouts += Math.max(det.de, opp.de);
  }

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
      sub: "STR 2279",
      color: "from-sky-400 to-blue-500",
    },
    {
      label: "DE Bouts",
      value: deBouts.toString(),
      sub: "STR 2608",
      color: "from-teal-400 to-cyan-500",
    },

  ];

  return (
    <section className="relative z-20 px-4 sm:px-6 max-w-6xl mx-auto pt-12 pb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
