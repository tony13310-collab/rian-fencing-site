"use client";

import { useState } from "react";
import type { TournamentEvent, PoolData } from "@/app/live/page";
import OpponentCard from "./OpponentCard";

interface Props {
  event: TournamentEvent;
  poolData: PoolData | null;
  setPoolData: (d: PoolData | null) => void;
}

export default function PoolDashboard({ event, poolData, setPoolData }: Props) {
  const [refreshing, setRefreshing] = useState(false);

  const API_BASE = "https://rian-fencing-api.tony13310.workers.dev";

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      const resp = await fetch(`${API_BASE}/api/ftl/pools/${event.id}`);
      const data = await resp.json();

      if (data.rianPool) {
        const pool = data.rianPool;
        const fencers = pool.fencers.map((f: any) => ({
          seed: f.seed,
          name: f.name,
          club: f.club,
          country: f.country,
          rating: undefined,
          strength: undefined,
        }));

        // Build bout results from scores
        const rianIdx = pool.fencers.findIndex((f: any) => f.name === "WEI Rian" || f.name.startsWith("WEI Rian"));
        const bouts = rianIdx >= 0 ? pool.fencers[rianIdx].scores.map((s: any, i: number) => {
          // Map score index to opponent (skip self)
          const opIdx = i >= rianIdx ? i + 1 : i;
          const opp = pool.fencers[opIdx];
          return {
            win: s.win,
            opponent: opp?.name || "Unknown",
            score: s.score,
          };
        }) : [];

        setPoolData({
          rianSeed: rianIdx >= 0 ? pool.fencers[rianIdx].seed : 0,
          poolNumber: pool.poolNumber,
          fencers,
          bouts: bouts.length > 0 ? bouts : undefined,
          lastRefreshed: new Date().toLocaleTimeString(),
        });
      } else {
        // Rian not found — might be in a different event
        setPoolData(null);
      }
    } catch (err) {
      console.error("Pool fetch error:", err);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {event.name}
          </h2>
          <p className="text-white/40 text-sm mt-1">
            Pool Round • {event.date}
          </p>
        </div>
        <button
          onClick={handleRefresh}
          disabled={refreshing}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm disabled:opacity-50"
        >
          <svg
            className={`w-4 h-4 text-white/50 ${refreshing ? "animate-spin" : ""}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {refreshing ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {/* Pool info cards */}
      {poolData && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white/[0.03] rounded-xl p-3 text-center">
            <p className="text-white/30 text-[10px] uppercase tracking-wider">Seed</p>
            <p className="text-2xl font-black text-white">#{poolData.rianSeed}</p>
          </div>
          <div className="bg-white/[0.03] rounded-xl p-3 text-center">
            <p className="text-white/30 text-[10px] uppercase tracking-wider">Pool</p>
            <p className="text-2xl font-black text-white">{poolData.poolNumber}</p>
          </div>
          <div className="bg-white/[0.03] rounded-xl p-3 text-center">
            <p className="text-white/30 text-[10px] uppercase tracking-wider">Pool Size</p>
            <p className="text-2xl font-black text-white">{poolData.fencers.length}</p>
          </div>
          <div className="bg-white/[0.03] rounded-xl p-3 text-center">
            <p className="text-white/30 text-[10px] uppercase tracking-wider">Fencers</p>
            <p className="text-2xl font-black text-white">{event.total || "—"}</p>
          </div>
        </div>
      )}

      {/* Pool fencers */}
      {poolData ? (
        <div className="space-y-2">
          <h3 className="text-white/50 text-xs uppercase tracking-wider font-bold">
            Pool Opponents
          </h3>
          {poolData.fencers.map((f, i) => (
            <OpponentCard
              key={i}
              fencer={f}
              isRian={f.name === "WEI Rian"}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-4xl mb-4">⚔️</div>
          <p className="text-white/40 text-sm mb-4">
            Pool assignments not yet available
          </p>
          <button
            onClick={handleRefresh}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-sm hover:from-red-600 hover:to-orange-600 transition-all"
          >
            Check Now
          </button>
        </div>
      )}

      {/* Pool results (after bouts) */}
      {poolData?.bouts && poolData.bouts.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-white/50 text-xs uppercase tracking-wider font-bold">
            Pool Results
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {poolData.bouts.map((b, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 p-3 rounded-xl ${
                  b.win ? "bg-green-500/5 border border-green-500/10" : "bg-red-500/5 border border-red-500/10"
                }`}
              >
                <span className={`text-sm font-bold ${b.win ? "text-green-400" : "text-red-400"}`}>
                  {b.win ? "V" : "D"}
                </span>
                <span className="text-white/70 text-sm">{b.opponent}</span>
                <span className="text-white/40 text-sm ml-auto">{b.score}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Last refreshed */}
      {poolData?.lastRefreshed && (
        <p className="text-white/15 text-[10px] text-center">
          Last refreshed: {poolData.lastRefreshed}
        </p>
      )}
    </div>
  );
}
