"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { findOpponentBySlug } from "@/data/opponents";

export default function OpponentDetailClient() {
  const { slug } = useParams<{ slug: string }>();
  const result = findOpponentBySlug(slug as string);

  if (!result) {
    return (
      <main className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white/50 mb-4">
            Opponent not found
          </h1>
          <Link href="/opponents" className="text-cyan-400 hover:text-cyan-300">
            ← Back to opponents
          </Link>
        </div>
      </main>
    );
  }

  const [name, data] = result;
  const winPct = data.winRate;

  // Group bouts by tournament+event
  const grouped: {
    key: string;
    tournament: string;
    event: string;
    date: string;
    bouts: typeof data.bouts;
  }[] = [];

  data.bouts.forEach((bout) => {
    const key = `${bout.tournament}|${bout.event}|${bout.date}`;
    const existing = grouped.find((g) => g.key === key);
    if (existing) {
      existing.bouts.push(bout);
    } else {
      grouped.push({
        key,
        tournament: bout.tournament,
        event: bout.event,
        date: bout.date,
        bouts: [bout],
      });
    }
  });

  // Streak analysis
  let currentStreak = 0;
  let streakType: "W" | "L" | null = null;
  for (const bout of data.bouts) {
    if (streakType === null) {
      streakType = bout.win ? "W" : "L";
      currentStreak = 1;
    } else if ((bout.win && streakType === "W") || (!bout.win && streakType === "L")) {
      currentStreak++;
    } else {
      break;
    }
  }

  // Pool vs DE stats
  const poolBouts = data.bouts.filter((b) => b.type === "Pool");
  const deBouts = data.bouts.filter((b) => b.type !== "Pool");
  const poolWins = poolBouts.filter((b) => b.win).length;
  const deWins = deBouts.filter((b) => b.win).length;

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5 px-4 py-3"
      >
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <Link
            href="/opponents"
            className="text-white/40 hover:text-white/70 transition-colors text-sm"
          >
            ← Opponents
          </Link>
          <span className="text-white/10">|</span>
          <span className="text-white/50 text-sm truncate">vs {name}</span>
        </div>
      </motion.div>

      <div className="max-w-lg mx-auto px-4 py-8">
        {/* Opponent header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl font-black text-white/90 mb-2">{name}</h1>

          {/* Big record display */}
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="text-center">
              <div className="text-4xl font-black text-green-400">{data.wins}</div>
              <div className="text-[10px] text-white/30 uppercase tracking-widest">Wins</div>
            </div>
            <div className="text-white/10 text-3xl font-light">—</div>
            <div className="text-center">
              <div className="text-4xl font-black text-red-400">{data.losses}</div>
              <div className="text-[10px] text-white/30 uppercase tracking-widest">Losses</div>
            </div>
          </div>

          {/* Win rate ring */}
          <div className="relative w-24 h-24 mx-auto mb-4">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke={winPct >= 60 ? "#4ade80" : winPct >= 40 ? "#facc15" : "#f87171"}
                strokeWidth="8"
                strokeDasharray={`${winPct * 2.64} ${264 - winPct * 2.64}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className={`text-xl font-black ${
                  winPct >= 60 ? "text-green-400" : winPct >= 40 ? "text-yellow-400" : "text-red-400"
                }`}
              >
                {winPct}%
              </span>
            </div>
          </div>

          {/* Streak */}
          {currentStreak > 0 && streakType && (
            <div
              className={`inline-block px-4 py-1.5 rounded-lg text-sm font-bold ${
                streakType === "W"
                  ? "bg-green-500/15 text-green-400 border border-green-500/20"
                  : "bg-red-500/15 text-red-400 border border-red-500/20"
              }`}
            >
              {streakType === "W" ? "🔥" : "⚠️"} Current: {currentStreak}
              {streakType} streak
            </div>
          )}
        </motion.div>

        {/* Pool vs DE breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 gap-3 mb-8"
        >
          <div className="bg-white/[0.04] border border-cyan-500/10 rounded-2xl py-4 px-3 text-center">
            <div className="text-[10px] text-cyan-400/50 uppercase tracking-widest mb-2 font-bold">
              Pool Bouts
            </div>
            <div className="text-2xl font-black text-white/80">
              {poolWins}-{poolBouts.length - poolWins}
            </div>
            {poolBouts.length > 0 && (
              <div className="text-white/30 text-xs mt-1">
                {Math.round((poolWins / poolBouts.length) * 100)}% win rate
              </div>
            )}
          </div>
          <div className="bg-white/[0.04] border border-purple-500/10 rounded-2xl py-4 px-3 text-center">
            <div className="text-[10px] text-purple-400/50 uppercase tracking-widest mb-2 font-bold">
              DE Bouts
            </div>
            <div className="text-2xl font-black text-white/80">
              {deWins}-{deBouts.length - deWins}
            </div>
            {deBouts.length > 0 && (
              <div className="text-white/30 text-xs mt-1">
                {Math.round((deWins / deBouts.length) * 100)}% win rate
              </div>
            )}
          </div>
        </motion.div>

        {/* All bouts grouped by tournament */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4">
            All Encounters ({data.total})
          </h2>

          <div className="space-y-4">
            {grouped.map((group, gi) => (
              <div
                key={group.key}
                className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden"
              >
                {/* Tournament header */}
                <div className="px-4 py-3 border-b border-white/5">
                  <div className="text-white/60 font-medium text-sm">
                    {group.tournament}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-white/25 text-xs">{group.event}</span>
                    <span className="text-white/10">·</span>
                    <span className="text-white/25 text-xs">{group.date}</span>
                  </div>
                </div>

                {/* Bouts in this tournament */}
                <div className="divide-y divide-white/[0.03]">
                  {group.bouts.map((bout, bi) => (
                    <div
                      key={bi}
                      className={`flex items-center justify-between px-4 py-3 ${
                        bout.win ? "bg-green-500/[0.02]" : "bg-red-500/[0.02]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black ${
                            bout.win
                              ? "bg-green-500/20 text-green-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {bout.win ? "W" : "L"}
                        </span>
                        <div>
                          <span
                            className={`text-xs font-bold uppercase tracking-wider ${
                              bout.type === "Pool"
                                ? "text-cyan-400/60"
                                : "text-purple-400/60"
                            }`}
                          >
                            {bout.type}
                          </span>
                        </div>
                      </div>
                      <span
                        className={`font-mono font-bold text-lg ${
                          bout.win ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {bout.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
