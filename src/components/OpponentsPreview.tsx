"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { opponents, getOpponentSlug } from "@/data/opponents";

export default function OpponentsPreview() {
  const totalOpponents = Object.keys(opponents).length;
  const totalBouts = Object.values(opponents).reduce((s, d) => s + d.total, 0);
  const totalWins = Object.values(opponents).reduce((s, d) => s + d.wins, 0);

  // Top rivals (most bouts)
  const rivals = Object.entries(opponents)
    .sort((a, b) => b[1].total - a[1].total)
    .slice(0, 10);

  // Nemesis (lost most to, at least 2 bouts)
  const nemesis = Object.entries(opponents)
    .filter(([, d]) => d.total >= 2 && d.winRate <= 30)
    .sort((a, b) => b[1].total - a[1].total)
    .slice(0, 10);

  return (
    <section id="opponents" className="py-12 px-3 sm:px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-black text-white/80 mb-1">
            ⚔️ H2H Database
          </h2>
          <p className="text-white/50 text-xs sm:text-sm">
            {totalOpponents} opponents · {totalBouts} bouts · {Math.round((totalWins / totalBouts) * 100)}% win rate
          </p>
        </motion.div>

        {/* Top Rivals */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">
            🔥 Most Faced Opponents
          </h3>
          <div className="space-y-1.5">
            {rivals.map(([name, data], i) => {
              const slug = getOpponentSlug(name);
              const winPct = data.winRate;
              return (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={`/opponents/${slug}`}
                    className="flex items-center justify-between px-3 sm:px-4 py-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors border border-white/[0.03] gap-2"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <span className="text-white/45 text-xs font-mono w-4 shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-white/70 font-medium text-xs sm:text-sm truncate">
                        {name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-white/40 text-xs whitespace-nowrap">
                        <span className="text-green-400">{data.wins}W</span>
                        <span className="text-white/45">-</span>
                        <span className="text-red-400">{data.losses}L</span>
                      </span>
                      <span
                        className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                          winPct >= 60
                            ? "bg-green-500/15 text-green-400"
                            : winPct >= 40
                            ? "bg-yellow-500/15 text-yellow-400"
                            : "bg-red-500/15 text-red-400"
                        }`}
                      >
                        {winPct}%
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Nemesis warning */}
        {nemesis.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xs font-bold text-red-400/50 uppercase tracking-widest mb-3">
              ⚠️ Tough Matchups
            </h3>
            <div className="space-y-1.5">
              {nemesis.map(([name, data]) => {
                const slug = getOpponentSlug(name);
                return (
                  <Link
                    key={name}
                    href={`/opponents/${slug}`}
                    className="flex items-center justify-between px-3 sm:px-4 py-2.5 rounded-xl bg-red-500/[0.03] hover:bg-red-500/[0.06] transition-colors border border-red-500/10 gap-2"
                  >
                    <span className="text-white/70 font-medium text-xs sm:text-sm truncate min-w-0 flex-1">
                      {name}
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-white/50 text-xs whitespace-nowrap">
                        <span className="text-green-400">{data.wins}W</span>
                        <span className="text-white/45">-</span>
                        <span className="text-red-400">{data.losses}L</span>
                      </span>
                      <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-red-500/15 text-red-400">
                        {data.winRate}%
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA */}
        <Link
          href="/opponents"
          className="block text-center py-3 px-6 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold text-sm hover:bg-cyan-500/20 transition-colors"
        >
          View All {totalOpponents} Opponents →
        </Link>
      </div>
    </section>
  );
}
