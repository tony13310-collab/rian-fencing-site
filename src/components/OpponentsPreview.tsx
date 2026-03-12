"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { opponents, getOpponentSlug, OpponentData } from "@/data/opponents";

const RIAN_BIRTH_YEAR = 2011;
const PEER_YEARS = [2010, 2011, 2012];

// Weight: same year = 3, younger (2012) = 2, older (2010) = 1
function peerWeight(birthYear: number): number {
  if (birthYear === RIAN_BIRTH_YEAR) return 3;
  if (birthYear === RIAN_BIRTH_YEAR + 1) return 2; // younger
  if (birthYear === RIAN_BIRTH_YEAR - 1) return 1; // older
  return 0;
}

function yearLabel(year: number): string {
  if (year === RIAN_BIRTH_YEAR) return `'${String(year).slice(2)}`;
  if (year > RIAN_BIRTH_YEAR) return `'${String(year).slice(2)}`;
  return `'${String(year).slice(2)}`;
}

interface PeerEntry {
  name: string;
  birthYear: number;
  data: OpponentData;
  weight: number;
  score: number; // weight × bouts for sorting
}

export default function OpponentsPreview() {
  // Only use last 365 days
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 365);

  // Build peer list: filter to 2010-2012 birth years + recent bouts
  const peers: PeerEntry[] = [];
  for (const [name, data] of Object.entries(opponents)) {
    const birthYear = data.birthYear;
    if (!birthYear || !PEER_YEARS.includes(birthYear)) continue;

    const recentBouts = data.bouts.filter(b => new Date(b.date) >= cutoff);
    if (recentBouts.length === 0) continue;

    const wins = recentBouts.filter(b => b.win).length;
    const losses = recentBouts.length - wins;
    const weight = peerWeight(birthYear);

    peers.push({
      name,
      birthYear,
      data: {
        ...data,
        wins,
        losses,
        total: recentBouts.length,
        winRate: Math.round((wins / recentBouts.length) * 100),
        bouts: recentBouts,
      },
      weight,
      score: weight * recentBouts.length,
    });
  }

  // Sort by weighted score (same age + more bouts = higher)
  peers.sort((a, b) => b.score - a.score || b.data.total - a.data.total);

  // Split into most faced and tough matchups
  const topPeers = peers.slice(0, 10);
  const toughPeers = peers
    .filter(p => p.data.total >= 1 && p.data.winRate < 50)
    .sort((a, b) => a.data.winRate - b.data.winRate || b.data.total - a.data.total)
    .slice(0, 10);

  const totalPeers = peers.length;
  const totalBouts = peers.reduce((s, p) => s + p.data.total, 0);
  const totalWins = peers.reduce((s, p) => s + p.data.wins, 0);

  const yearColor: Record<number, string> = {
    2010: "text-orange-400/60",
    2011: "text-cyan-400/60",
    2012: "text-purple-400/60",
  };

  return (
    <section id="opponents" className="py-12 px-3 sm:px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 flex-wrap mb-1">
            <h2 className="text-2xl md:text-3xl font-black gradient-text">
              Peer Competitors
            </h2>
            <span className="text-white/50 text-sm font-medium">
              {totalPeers} peers
            </span>
            <span className="text-white/45 text-sm">
              {totalBouts} bouts
            </span>
            <span className="text-white/45 text-sm">
              {totalBouts > 0 ? Math.round((totalWins / totalBouts) * 100) : 0}% win
            </span>
          </div>
          <p className="text-white/30 text-xs">
            Last 12 months · Born 2010–2012
          </p>
        </motion.div>

        {/* Most Faced Peers */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">
            🔥 Most Faced Peers
          </h3>
          <div className="space-y-1.5">
            {topPeers.map((peer, i) => {
              const slug = getOpponentSlug(peer.name);
              const winPct = peer.data.winRate;
              return (
                <motion.div
                  key={peer.name}
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
                        {peer.name}
                      </span>
                      <span className={`text-[10px] font-bold ${yearColor[peer.birthYear] || "text-white/30"} shrink-0`}>
                        {yearLabel(peer.birthYear)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-white/40 text-xs whitespace-nowrap">
                        <span className="text-green-400">{peer.data.wins}W</span>
                        <span className="text-white/45">-</span>
                        <span className="text-red-400">{peer.data.losses}L</span>
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

        {/* Tough Matchups */}
        {toughPeers.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xs font-bold text-red-400/50 uppercase tracking-widest mb-3">
              ⚠️ Tough Matchups
            </h3>
            <div className="space-y-1.5">
              {toughPeers.map((peer) => {
                const slug = getOpponentSlug(peer.name);
                return (
                  <Link
                    key={peer.name}
                    href={`/opponents/${slug}`}
                    className="flex items-center justify-between px-3 sm:px-4 py-2.5 rounded-xl bg-red-500/[0.03] hover:bg-red-500/[0.06] transition-colors border border-red-500/10 gap-2"
                  >
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <span className="text-white/70 font-medium text-xs sm:text-sm truncate">
                        {peer.name}
                      </span>
                      <span className={`text-[10px] font-bold ${yearColor[peer.birthYear] || "text-white/30"} shrink-0`}>
                        {yearLabel(peer.birthYear)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-white/50 text-xs whitespace-nowrap">
                        <span className="text-green-400">{peer.data.wins}W</span>
                        <span className="text-white/45">-</span>
                        <span className="text-red-400">{peer.data.losses}L</span>
                      </span>
                      <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-red-500/15 text-red-400">
                        {peer.data.winRate}%
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA — links to full opponent list (all time, all ages) */}
        <Link
          href="/opponents"
          className="block text-center py-3 px-6 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold text-sm hover:bg-cyan-500/20 transition-colors"
        >
          View All {Object.keys(opponents).length} Opponents →
        </Link>
      </div>
    </section>
  );
}
