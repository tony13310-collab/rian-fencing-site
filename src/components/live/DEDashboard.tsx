"use client";

import { useState } from "react";
import type { TournamentEvent, DEData } from "@/app/live/page";
import OpponentCard from "./OpponentCard";

interface Props {
  event: TournamentEvent;
  deData: DEData | null;
  setDeData: (d: DEData | null) => void;
}

export default function DEDashboard({ event, deData, setDeData }: Props) {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    // TODO: Fetch DE data from FTL/FIE
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const completed = deData?.matches.filter(m => m.status === "completed") || [];
  const upcoming = deData?.matches.find(m => m.status === "upcoming");
  const projected = deData?.matches.filter(m => m.status === "projected") || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {event.name}
          </h2>
          <p className="text-white/40 text-sm mt-1">
            Direct Elimination • {event.date}
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

      {/* DE Seed */}
      {deData && (
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-4 flex items-center gap-4">
          <div className="text-center">
            <p className="text-white/30 text-[10px] uppercase">DE Seed</p>
            <p className="text-3xl font-black text-orange-400">#{deData.rianDESeed}</p>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <div className="text-sm text-white/50">
            {completed.length > 0 && (
              <span className="text-green-400">{completed.filter(m => m.win).length}W</span>
            )}
            {completed.filter(m => !m.win).length > 0 && (
              <span className="text-red-400 ml-1">{completed.filter(m => !m.win).length}L</span>
            )}
            {completed.length === 0 && "No bouts yet"}
          </div>
        </div>
      )}

      {/* Rian's Path */}
      {deData ? (
        <div className="space-y-6">
          {/* Completed matches */}
          {completed.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-white/50 text-xs uppercase tracking-wider font-bold">
                Completed
              </h3>
              {completed.map((m, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-3 rounded-xl ${
                    m.win ? "bg-green-500/5 border border-green-500/10" : "bg-red-500/5 border border-red-500/10"
                  }`}
                >
                  <span className="text-white/30 text-xs font-mono w-10">{m.round}</span>
                  <span className={`text-sm font-bold ${m.win ? "text-green-400" : "text-red-400"}`}>
                    {m.win ? "W" : "L"}
                  </span>
                  <span className="text-white/70 text-sm flex-1">
                    {m.opponent === "BYE" ? "BYE" : `vs ${m.opponent}`}
                  </span>
                  {m.score && m.score !== "BYE" && (
                    <span className="text-white/40 text-sm">{m.score}</span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Next opponent (key feature) */}
          {upcoming && (
            <div className="space-y-3">
              <h3 className="text-red-400 text-xs uppercase tracking-wider font-bold flex items-center gap-2">
                <span className="animate-pulse">●</span>
                Next Opponent — {upcoming.round}
              </h3>
              <div className="gradient-border bg-[#12121a] rounded-2xl p-1">
                <OpponentCard
                  fencer={{
                    seed: upcoming.seed || 0,
                    name: upcoming.opponent,
                    club: upcoming.club,
                    ...upcoming.analysis,
                  }}
                />
              </div>
            </div>
          )}

          {/* Projected opponents */}
          {projected.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-white/30 text-xs uppercase tracking-wider font-bold">
                Potential Future Opponents
              </h3>
              {projected.map((m, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5"
                >
                  <span className="text-white/20 text-xs font-mono w-10">{m.round}</span>
                  <span className="text-white/30 text-sm">
                    vs {m.opponent}
                    {m.club && <span className="text-white/15 ml-1">({m.club})</span>}
                    {m.seed && <span className="text-white/15 ml-1">#{m.seed}</span>}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-4xl mb-4">🗡️</div>
          <p className="text-white/40 text-sm mb-4">
            DE tableau not yet available
          </p>
          <button
            onClick={handleRefresh}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-sm hover:from-red-600 hover:to-orange-600 transition-all"
          >
            Check Now
          </button>
        </div>
      )}

      {/* Last refreshed */}
      {deData?.lastRefreshed && (
        <p className="text-white/15 text-[10px] text-center">
          Last refreshed: {deData.lastRefreshed}
        </p>
      )}
    </div>
  );
}
