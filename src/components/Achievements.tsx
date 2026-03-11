"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Achievements() {
  return (
    <section id="highlights" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">
          <span className="gradient-text">Highlights</span>
        </h2>
        <p className="text-white/40 text-sm sm:text-lg">Key achievements this season</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profile.achievements.map((achievement, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="stat-card gradient-border bg-[#12121a] rounded-2xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4"
          >
            <div className="text-2xl sm:text-3xl">{achievement.slice(0, 2)}</div>
            <p className="text-white/80 text-sm sm:text-lg font-medium leading-relaxed">
              {achievement.slice(2).trim()}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Club info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 gradient-border bg-[#12121a] rounded-2xl p-8 text-center"
      >
        <h3 className="text-2xl font-bold mb-2 text-white/90">
          {profile.club}
        </h3>
        <p className="text-white/40 mb-4">
          {profile.division} • {profile.location}
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
          <span className="text-purple-400 font-medium">
            {profile.weapon}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
