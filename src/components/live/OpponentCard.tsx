"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PoolFencer } from "@/app/live/page";
import { opponents } from "@/data/opponents";

interface Props {
  fencer: PoolFencer;
  isRian?: boolean;
}

export default function OpponentCard({ fencer, isRian }: Props) {
  const [expanded, setExpanded] = useState(false);

  // Look up in local DB
  const localData = opponents[fencer.name];
  const h2h = localData ? {
    wins: localData.wins,
    losses: localData.losses,
    bouts: localData.bouts,
  } : null;

  if (isRian) {
    return (
      <div className="flex items-center gap-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-3">
        <span className="text-white/40 text-xs font-mono w-6 text-right">#{fencer.seed}</span>
        <div className="flex-1">
          <span className="text-white font-bold text-sm">WEI Rian ⭐</span>
          <span className="text-white/30 text-xs ml-2">CAPITALFA</span>
        </div>
      </div>
    );
  }

  const h2hColor = h2h
    ? h2h.wins > h2h.losses ? "text-green-400" 
    : h2h.wins < h2h.losses ? "text-red-400" 
    : "text-yellow-400"
    : "text-white/30";

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] rounded-xl p-3 transition-colors text-left"
      >
        <span className="text-white/40 text-xs font-mono w-6 text-right">#{fencer.seed}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-white/80 font-medium text-sm truncate">{fencer.name}</span>
            {fencer.country && fencer.country !== "USA" && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                {fencer.country}
              </span>
            )}
          </div>
          <span className="text-white/30 text-xs">{fencer.club || "—"}</span>
        </div>
        {h2h && (
          <span className={`text-xs font-bold ${h2hColor}`}>
            {h2h.wins}-{h2h.losses}
          </span>
        )}
        {!h2h && <span className="text-white/20 text-xs">NEW</span>}
        <svg
          className={`w-4 h-4 text-white/20 transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-white/[0.02] rounded-b-xl p-4 border-t border-white/5 space-y-4">
              {/* Head-to-Head History */}
              {h2h && h2h.bouts.length > 0 && (
                <div>
                  <h4 className="text-white/40 text-[10px] uppercase tracking-wider font-bold mb-2">
                    📊 Head-to-Head: Rian {h2h.wins}W - {h2h.losses}L
                  </h4>
                  <div className="space-y-1">
                    {h2h.bouts.slice(0, 8).map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <span className={b.win ? "text-green-400" : "text-red-400"}>
                          {b.win ? "W" : "L"}
                        </span>
                        <span className="text-white/50">{b.score}</span>
                        <span className="text-white/20">•</span>
                        <span className="text-white/30">{b.date}</span>
                        <span className="text-white/20 truncate">{b.type} @ {b.tournament}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Opponent stats from local DB */}
              {localData && (
                <div>
                  <h4 className="text-white/40 text-[10px] uppercase tracking-wider font-bold mb-2">
                    📈 Profile
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                      <p className="text-white/30 text-[10px]">Total Bouts</p>
                      <p className="text-white/70 text-sm font-bold">{localData.total}</p>
                    </div>
                    <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                      <p className="text-white/30 text-[10px]">Win Rate</p>
                      <p className="text-white/70 text-sm font-bold">{Math.round(localData.winRate * 100)}%</p>
                    </div>
                    <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                      <p className="text-white/30 text-[10px]">Birth Year</p>
                      <p className="text-white/70 text-sm font-bold">
                        {localData.birthYear && localData.birthYear > 0 ? localData.birthYear : "—"}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* FencingTracker data (placeholder) */}
              {fencer.rating && (
                <div>
                  <h4 className="text-white/40 text-[10px] uppercase tracking-wider font-bold mb-2">
                    🏆 FencingTracker
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {fencer.rating && (
                      <div className="bg-white/[0.03] rounded-lg p-2">
                        <p className="text-white/30 text-[10px]">Rating</p>
                        <p className="text-white/70 text-sm font-bold">{fencer.rating}</p>
                      </div>
                    )}
                    {fencer.strength != null && (
                      <div className="bg-white/[0.03] rounded-lg p-2">
                        <p className="text-white/30 text-[10px]">Strength</p>
                        <p className="text-white/70 text-sm font-bold">{fencer.strength}</p>
                      </div>
                    )}
                  </div>
                  {fencer.recentResults && fencer.recentResults.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {fencer.recentResults.map((r, i) => (
                        <div key={i} className="text-xs text-white/30 flex gap-2">
                          <span className="text-white/50">{r.place}</span>
                          <span>{r.event}</span>
                          <span className="text-white/20">{r.date}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* No data message */}
              {!h2h && !fencer.rating && (
                <p className="text-white/20 text-xs text-center py-2">
                  No prior data available — first-time opponent
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
