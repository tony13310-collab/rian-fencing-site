"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { opponents, getOpponentSlug } from "@/data/opponents";

type SortKey = "total" | "winRate" | "name" | "recent";

export default function OpponentsClient() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortKey>("total");
  const [filter, setFilter] = useState<"all" | "rivals" | "dominated" | "nemesis">("all");

  const entries = useMemo(() => {
    let list = Object.entries(opponents).map(([name, data]) => ({
      name,
      slug: getOpponentSlug(name),
      ...data,
      lastDate: data.bouts[0]?.date || "",
    }));

    // Filter
    if (filter === "rivals") list = list.filter((o) => o.total >= 3);
    else if (filter === "dominated") list = list.filter((o) => o.winRate >= 80 && o.total >= 2);
    else if (filter === "nemesis") list = list.filter((o) => o.winRate <= 30 && o.total >= 2);

    // Search
    if (search) {
      const q = search.toLowerCase();
      list = list.filter((o) => o.name.toLowerCase().includes(q));
    }

    // Sort
    if (sort === "total") list.sort((a, b) => b.total - a.total);
    else if (sort === "winRate") list.sort((a, b) => b.winRate - a.winRate || b.total - a.total);
    else if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === "recent") {
      list.sort((a, b) => {
        const da = new Date(a.lastDate).getTime() || 0;
        const db = new Date(b.lastDate).getTime() || 0;
        return db - da;
      });
    }

    return list;
  }, [search, sort, filter]);

  const totalOpponents = Object.keys(opponents).length;
  const totalBouts = Object.values(opponents).reduce((s, d) => s + d.total, 0);
  const totalWins = Object.values(opponents).reduce((s, d) => s + d.wins, 0);

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-2xl mx-auto px-3 sm:px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            <Link
              href="/"
              className="text-white/40 hover:text-white/70 transition-colors text-sm"
            >
              ← Home
            </Link>
            <span className="text-white/10">|</span>
            <h1 className="text-white/80 font-bold">Head-to-Head Database</h1>
          </div>

          {/* Stats bar */}
          <div className="flex gap-4 mb-3 text-xs">
            <div>
              <span className="text-white/50">Opponents</span>{" "}
              <span className="text-white/70 font-bold">{totalOpponents}</span>
            </div>
            <div>
              <span className="text-white/50">Total Bouts</span>{" "}
              <span className="text-white/70 font-bold">{totalBouts}</span>
            </div>
            <div>
              <span className="text-white/50">Overall</span>{" "}
              <span className="text-green-400 font-bold">
                {totalWins}W
              </span>
              <span className="text-white/45"> - </span>
              <span className="text-red-400 font-bold">
                {totalBouts - totalWins}L
              </span>
              <span className="text-white/50">
                {" "}({Math.round((totalWins / totalBouts) * 100)}%)
              </span>
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="🔍 Search opponent..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/60 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter + Sort */}
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
            {[
              { key: "all" as const, label: "All", count: totalOpponents },
              { key: "rivals" as const, label: "🔥 Rivals (3+)", count: Object.values(opponents).filter(d => d.total >= 3).length },
              { key: "dominated" as const, label: "💪 Dominated", count: Object.values(opponents).filter(d => d.winRate >= 80 && d.total >= 2).length },
              { key: "nemesis" as const, label: "⚠️ Nemesis", count: Object.values(opponents).filter(d => d.winRate <= 30 && d.total >= 2).length },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === f.key
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                    : "bg-white/5 text-white/40 border border-white/5 hover:border-white/10"
                }`}
              >
                {f.label}
                <span className="ml-1 text-white/45">{f.count}</span>
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex gap-1.5 mt-2">
            {[
              { key: "total" as SortKey, label: "Most Faced" },
              { key: "recent" as SortKey, label: "Recent" },
              { key: "winRate" as SortKey, label: "Win Rate" },
              { key: "name" as SortKey, label: "A-Z" },
            ].map((s) => (
              <button
                key={s.key}
                onClick={() => setSort(s.key)}
                className={`px-2.5 py-1 rounded-md text-[10px] font-medium uppercase tracking-wider transition-all ${
                  sort === s.key
                    ? "bg-white/10 text-white/70"
                    : "text-white/50 hover:text-white/40"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="max-w-2xl mx-auto px-3 sm:px-4 py-3">
        <p className="text-white/45 text-xs">
          {entries.length} opponent{entries.length !== 1 ? "s" : ""}
          {search && ` matching "${search}"`}
        </p>
      </div>

      {/* Opponent list */}
      <div className="max-w-2xl mx-auto px-3 sm:px-4 pb-20">
        <AnimatePresence mode="popLayout">
          {entries.map((opp, i) => {
            const winPct = opp.winRate;
            const barColor =
              winPct >= 80 ? "bg-green-400" :
              winPct >= 60 ? "bg-emerald-400" :
              winPct >= 40 ? "bg-yellow-400" :
              winPct >= 20 ? "bg-orange-400" :
              "bg-red-400";

            return (
              <motion.div
                key={opp.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: Math.min(i * 0.02, 0.5) }}
              >
                <Link
                  href={`/opponents/${opp.slug}`}
                  className="block py-3 px-4 -mx-1 rounded-xl hover:bg-white/[0.03] transition-colors border-b border-white/[0.03]"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex-1 min-w-0">
                      <span className="text-white/80 font-medium text-sm truncate block">
                        {opp.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 ml-3">
                      <div className="text-right">
                        <span className="text-green-400 font-bold text-sm">
                          {opp.wins}
                        </span>
                        <span className="text-white/45 text-sm"> - </span>
                        <span className="text-red-400 font-bold text-sm">
                          {opp.losses}
                        </span>
                      </div>
                      <div
                        className={`w-10 text-center px-1.5 py-0.5 rounded text-[10px] font-black ${
                          winPct >= 60
                            ? "bg-green-500/15 text-green-400"
                            : winPct >= 40
                            ? "bg-yellow-500/15 text-yellow-400"
                            : "bg-red-500/15 text-red-400"
                        }`}
                      >
                        {winPct}%
                      </div>
                    </div>
                  </div>

                  {/* Win rate bar */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${barColor} rounded-full transition-all`}
                        style={{ width: `${winPct}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-white/45 shrink-0">
                      {opp.total} bout{opp.total !== 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Last met */}
                  <div className="text-[10px] text-white/45 mt-1">
                    Last: {opp.lastDate} · {opp.bouts[0]?.tournament}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {entries.length === 0 && (
          <div className="text-center py-16 text-white/45">
            <p className="text-4xl mb-4">🤺</p>
            <p className="text-sm">No opponents found</p>
          </div>
        )}
      </div>
    </main>
  );
}
