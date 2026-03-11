"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden grid-bg pb-16">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.4) 0%, transparent 70%)",
            top: "-200px",
            right: "-200px",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)",
            bottom: "-150px",
            left: "-150px",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Fencing saber silhouette decoration */}
      <motion.div
        className="absolute right-10 top-1/2 -translate-y-1/2 text-[200px] opacity-[0.03] font-black select-none hidden lg:block"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.03 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        🤺
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Weapon badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          {profile.weapon} • {profile.club}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black tracking-tight mb-4"
        >
          <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        {/* Chinese name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-3xl text-white/50 font-light tracking-[0.3em] mb-8"
        >
          {profile.chineseName}
        </motion.p>

        {/* Rating & Ranking badges - reads from profile.currentRankings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <div className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-600/20 border border-amber-500/30 backdrop-blur-sm">
            <span className="text-amber-400 font-black text-lg tracking-wide">
              ⚔️ {profile.rating}
            </span>
          </div>
          {profile.currentRankings.map((r) => {
            const colors: Record<string, { bg: string; border: string; text: string }> = {
              green: { bg: "bg-green-500/10", border: "border-green-500/20", text: "text-green-400" },
              blue: { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
              purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400" },
              red: { bg: "bg-red-500/10", border: "border-red-500/20", text: "text-red-400" },
            };
            const c = colors[r.color] || colors.blue;
            return (
              <div key={r.category} className={`px-5 py-2.5 rounded-xl ${c.bg} border ${c.border} backdrop-blur-sm`}>
                <span className="text-white/40 text-xs font-medium mr-1.5">{r.category}</span>
                <span className={`${c.text} font-black text-lg`}>#{r.rank}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-8"
        >
          {profile.bio}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#results"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300 hover:scale-105"
          >
            View Results
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-xl border border-white/20 text-white/70 font-medium text-lg hover:bg-white/5 transition-all duration-300"
          >
            About
          </a>
        </motion.div>
      </div>

    </section>
  );
}
