"use client";

import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  Cell,
} from "recharts";
import { motion } from "framer-motion";
import { eventDetails, makeEventId } from "@/data/eventDetails";
import { allEvents, AgeCategory } from "@/data/events";

interface PoolDataPoint {
  date: string;
  label: string; // Short tournament name
  fullLabel: string;
  category: AgeCategory;
  wins: number;
  losses: number;
  winPct: number;
  indicator: number;
  seed: number | null;
  place: number;
  total: number;
  isPerfect: boolean; // 6-0 or 5-0
}

const catColors: Record<string, string> = {
  "Y-8": "#6b7280",
  "Y-10": "#64748b",
  "Y-12": "#10b981",
  "Y-14": "#22c55e",
  Cadet: "#3b82f6",
  Junior: "#a855f7",
  "Div I": "#ef4444",
  Senior: "#f59e0b",
};

// Short tournament names for x-axis
function shortName(t: string): string {
  if (t.includes("Summer Nationals")) return "SN";
  if (t.includes("Junior Olympics")) return "JO";
  if (t.includes("SJCC")) return "SJCC";
  if (t.includes("NAC")) {
    const m = t.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);
    return m ? `${m[1]}NAC` : "NAC";
  }
  if (t.includes("Capitol Clash")) return "CC";
  if (t.includes("Cobra")) return "Cobra";
  if (t.includes("Fairfax")) return "FFX";
  if (t.includes("Mission")) return "Mission";
  if (t.includes("Ben Gut")) return "BG";
  if (t.includes("North Texas")) return "NTX";
  if (t.includes("River City")) return "RCR";
  if (t.includes("NoVA")) return "NoVA";
  if (t.includes("DCFC")) return "DCFC";
  return t.substring(0, 6);
}

const categoryOrder: AgeCategory[] = [
  "Div I",
  "Junior",
  "Cadet",
  "Y-14",
  "Y-12",
  "Y-10",
  "Y-8",
];

export default function PoolTrend() {
  const [selectedCats, setSelectedCats] = useState<Set<string>>(new Set());

  const data = useMemo(() => {
    const points: PoolDataPoint[] = [];

    // Get all events with pool data, sorted by date
    const sortedEvents = [...allEvents].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    for (const ev of sortedEvents) {
      const id = makeEventId(ev.date, ev.event);
      const detail = eventDetails[id];
      if (!detail?.pool) continue;

      const { pool } = detail;
      const totalBouts = pool.wins + pool.losses;
      if (totalBouts === 0) continue;

      points.push({
        date: ev.date,
        label: shortName(ev.tournament),
        fullLabel: `${ev.tournament} - ${ev.event}`,
        category: ev.category,
        wins: pool.wins,
        losses: pool.losses,
        winPct: Math.round((pool.wins / totalBouts) * 100),
        indicator: pool.indicator,
        seed: pool.seed,
        place: ev.place!,
        total: ev.total!,
        isPerfect: pool.losses === 0,
      });
    }

    return points;
  }, []);

  const filtered = useMemo(() => {
    if (selectedCats.size === 0) return data;
    return data.filter((d) => selectedCats.has(d.category));
  }, [data, selectedCats]);

  // Rolling average (window of 5)
  const withRolling = useMemo(() => {
    return filtered.map((d, i) => {
      const window = filtered.slice(Math.max(0, i - 4), i + 1);
      const avg = Math.round(
        window.reduce((s, w) => s + w.winPct, 0) / window.length
      );
      return { ...d, rollingAvg: avg };
    });
  }, [filtered]);

  // Stats
  const stats = useMemo(() => {
    if (filtered.length === 0)
      return { avg: 0, perfect: 0, best: 0, trend: 0 };
    const avg = Math.round(
      filtered.reduce((s, d) => s + d.winPct, 0) / filtered.length
    );
    const perfect = filtered.filter((d) => d.isPerfect).length;
    const recent10 = filtered.slice(-10);
    const early10 = filtered.slice(0, Math.min(10, filtered.length));
    const recentAvg =
      recent10.reduce((s, d) => s + d.winPct, 0) / recent10.length;
    const earlyAvg =
      early10.reduce((s, d) => s + d.winPct, 0) / early10.length;
    return {
      avg,
      perfect,
      best: Math.max(...filtered.map((d) => d.winPct)),
      trend: Math.round(recentAvg - earlyAvg),
    };
  }, [filtered]);

  const toggleCat = (cat: string) => {
    setSelectedCats((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  // Get unique categories present in data
  const availableCats = useMemo(() => {
    const cats = new Set(data.map((d) => d.category));
    return categoryOrder.filter((c) => cats.has(c));
  }, [data]);

  return (
    <section className="px-4 py-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-black text-white/90 mb-1">
            Pool Performance
          </h2>
          <p className="text-white/40 text-sm">
            Win rate trend across {data.length} events
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          <div className="bg-white/[0.04] border border-white/10 rounded-xl py-3 px-2 text-center">
            <div className="text-2xl font-black text-white/80">
              {stats.avg}%
            </div>
            <div className="text-[10px] text-white/40 uppercase tracking-wider">
              Avg Win%
            </div>
          </div>
          <div className="bg-white/[0.04] border border-white/10 rounded-xl py-3 px-2 text-center">
            <div className="text-2xl font-black text-amber-400">
              {stats.perfect}
            </div>
            <div className="text-[10px] text-white/40 uppercase tracking-wider">
              Perfect Pools
            </div>
          </div>
          <div className="bg-white/[0.04] border border-white/10 rounded-xl py-3 px-2 text-center">
            <div className="text-2xl font-black text-green-400">
              {stats.best}%
            </div>
            <div className="text-[10px] text-white/40 uppercase tracking-wider">
              Best
            </div>
          </div>
          <div className="bg-white/[0.04] border border-white/10 rounded-xl py-3 px-2 text-center">
            <div
              className={`text-2xl font-black ${
                stats.trend > 0 ? "text-green-400" : stats.trend < 0 ? "text-red-400" : "text-white/50"
              }`}
            >
              {stats.trend > 0 ? "+" : ""}
              {stats.trend}%
            </div>
            <div className="text-[10px] text-white/40 uppercase tracking-wider">
              Growth
            </div>
          </div>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-1.5 justify-center mb-6">
          {availableCats.map((cat) => {
            const active =
              selectedCats.size === 0 || selectedCats.has(cat);
            return (
              <button
                key={cat}
                onClick={() => toggleCat(cat)}
                className={`px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all ${
                  active
                    ? "text-white shadow-lg"
                    : "text-white/30 bg-white/5"
                }`}
                style={
                  active
                    ? { backgroundColor: catColors[cat] + "cc" }
                    : undefined
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Chart */}
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart
              data={withRolling}
              margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
            >
              <XAxis
                dataKey="label"
                tick={{ fill: "#ffffff40", fontSize: 9 }}
                tickLine={false}
                axisLine={{ stroke: "#ffffff10" }}
                interval="preserveStartEnd"
              />
              <YAxis
                domain={[0, 100]}
                tick={{ fill: "#ffffff30", fontSize: 10 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `${v}%`}
              />
              <ReferenceLine
                y={67}
                stroke="#ffffff15"
                strokeDasharray="3 3"
                label={{
                  value: "67%",
                  position: "right",
                  fill: "#ffffff20",
                  fontSize: 9,
                }}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null;
                  const d = payload[0]?.payload as PoolDataPoint & {
                    rollingAvg: number;
                  };
                  if (!d) return null;
                  return (
                    <div className="bg-[#1a1a2e] border border-white/10 rounded-xl px-4 py-3 shadow-xl text-xs">
                      <div className="font-bold text-white/80 mb-1">
                        {d.fullLabel}
                      </div>
                      <div className="text-white/50 text-[10px] mb-2">
                        {new Date(d.date).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between gap-4">
                          <span className="text-white/50">Pool</span>
                          <span
                            className={`font-bold ${
                              d.isPerfect
                                ? "text-amber-400"
                                : d.winPct >= 67
                                ? "text-green-400"
                                : d.winPct >= 50
                                ? "text-white/80"
                                : "text-red-400"
                            }`}
                          >
                            {d.wins}-{d.losses} ({d.winPct}%)
                          </span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="text-white/50">Indicator</span>
                          <span
                            className={`font-bold ${
                              d.indicator > 0
                                ? "text-green-400"
                                : d.indicator < 0
                                ? "text-red-400"
                                : "text-white/50"
                            }`}
                          >
                            {d.indicator > 0 ? "+" : ""}
                            {d.indicator}
                          </span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="text-white/50">Result</span>
                          <span className="font-bold text-white/70">
                            {d.place}/{d.total}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }}
              />

              {/* Win% bars */}
              <Bar dataKey="winPct" radius={[3, 3, 0, 0]} maxBarSize={12}>
                {withRolling.map((d, i) => (
                  <Cell
                    key={i}
                    fill={
                      d.isPerfect
                        ? "#f59e0b88"
                        : d.winPct >= 67
                        ? "#22c55e44"
                        : d.winPct >= 50
                        ? "#3b82f644"
                        : "#ef444444"
                    }
                    stroke={
                      d.isPerfect
                        ? "#f59e0b"
                        : d.winPct >= 67
                        ? "#22c55e"
                        : d.winPct >= 50
                        ? "#3b82f6"
                        : "#ef4444"
                    }
                    strokeWidth={0.5}
                  />
                ))}
              </Bar>

              {/* Rolling average line */}
              <Line
                type="monotone"
                dataKey="rollingAvg"
                stroke="#a855f7"
                strokeWidth={2}
                dot={false}
                name="5-event avg"
              />
            </ComposedChart>
          </ResponsiveContainer>

          <div className="flex items-center justify-center gap-4 mt-2 text-[10px] text-white/40">
            <span className="flex items-center gap-1">
              <span className="w-3 h-2 rounded-sm bg-amber-500/50 border border-amber-500 inline-block" />{" "}
              Perfect
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-2 rounded-sm bg-green-500/30 border border-green-500 inline-block" />{" "}
              67%+
            </span>
            <span className="flex items-center gap-1">
              <span className="w-6 h-0.5 bg-purple-500 inline-block rounded" />{" "}
              Rolling Avg
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
