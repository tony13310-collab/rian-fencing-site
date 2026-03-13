"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden grid-bg pb-8">
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

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl w-full">
        {/* Name with seal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex flex-col items-center justify-center gap-3 mb-6"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-wider leading-tight uppercase"
            style={{
              fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif",
              paddingBottom: "0.1em",
            }}
          >
            <span className="gradient-text">Rian Wei</span>
          </h1>

          {/* Chinese seal stamp image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200 }}
            style={{ filter: "drop-shadow(0 0 15px rgba(196, 53, 37, 0.35))" }}
          >
            <img
              src="/seal.png"
              alt="魏瑞安"
              className="h-16 sm:h-18 md:h-20 lg:h-24 w-auto rounded-sm pb-1"
            />
          </motion.div>
        </motion.div>

        {/* Rating & Ranking badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2"
        >
          {profile.currentRankings.map((r) => {
            const colors: Record<string, { bg: string; border: string; text: string }> = {
              green: { bg: "bg-green-500/10", border: "border-green-500/20", text: "text-green-400" },
              blue: { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
              purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400" },
              red: { bg: "bg-red-500/10", border: "border-red-500/20", text: "text-red-400" },
            };
            const c = colors[r.color] || colors.blue;
            return (
              <div key={r.category} className={`px-3 sm:px-5 py-2 rounded-xl ${c.bg} border ${c.border} backdrop-blur-sm`}>
                <span className="text-white/70 text-xs sm:text-xs font-medium mr-1">{r.category}</span>
                <span className={`${c.text} font-black text-sm sm:text-lg`}>#{r.rank}</span>
              </div>
            );
          })}
          <div className="px-3 sm:px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-600/20 border border-amber-500/30 backdrop-blur-sm">
            <span className="text-amber-400 font-black text-sm sm:text-lg">{profile.rating}</span>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm sm:text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2"
        >
          {profile.bio}
        </motion.p>

        {/* CTA - 2x2 grid on mobile, row on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 justify-center px-2"
        >
          {[
            { label: "Events", href: "/events" },
            { label: "Peers", href: "/peers" },
            { label: "Contact", href: "#contact" },
            { label: "● Live", href: "/live", isLive: true },
          ].map((btn: any) => (
            <a
              key={btn.href}
              href={btn.href}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 text-center ${
                btn.isLive
                  ? "bg-gradient-to-r from-red-500 to-orange-500 text-white hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] animate-pulse"
                  : "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]"
              }`}
            >
              {btn.label}
            </a>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
