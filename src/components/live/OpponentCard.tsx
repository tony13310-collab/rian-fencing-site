"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PoolFencer } from "@/app/live/page";
import type { FTProfile } from "./EventDashboard";
import { opponents } from "@/data/opponents";

interface Props {
  fencer: PoolFencer;
  isRian?: boolean;
  deMatch?: { round: string; score?: string; win: boolean };
  ftProfile?: FTProfile;
  ftStatus?: "pending" | "loading" | "loaded" | "error";
}

export default function OpponentCard({ fencer, isRian, deMatch, ftProfile, ftStatus }: Props) {
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
        <span className="text-white/70 text-sm font-mono w-6 text-right">#{fencer.seed}</span>
        <div className="flex-1">
          <span className="text-white font-bold text-sm">WEI Rian ⭐</span>
          <span className="text-white/60 text-sm ml-2">CAPITALFA</span>
        </div>
      </div>
    );
  }

  const h2hColor = h2h
    ? h2h.wins > h2h.losses ? "text-green-400"
    : h2h.wins < h2h.losses ? "text-red-400"
    : "text-yellow-400"
    : "text-white/60";

  // Threat level from FT data
  const threatLevel = ftProfile
    ? ftProfile.deStrength >= 3000 ? "elite"
    : ftProfile.deStrength >= 2700 ? "strong"
    : ftProfile.deStrength >= 2400 ? "mid"
    : "developing"
    : null;

  const threatColors: Record<string, string> = {
    elite: "bg-red-500/10 text-red-400 border-red-500/20",
    strong: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    mid: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    developing: "bg-green-500/10 text-green-400 border-green-500/20",
  };

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full flex items-center gap-3 rounded-xl p-3 transition-colors text-left ${
          deMatch
            ? deMatch.win
              ? "bg-green-500/5 hover:bg-green-500/10 border border-green-500/10"
              : "bg-red-500/5 hover:bg-red-500/10 border border-red-500/10"
            : "bg-white/[0.03] hover:bg-white/[0.06]"
        }`}
      >
        {/* DE round label or pool seed */}
        {deMatch ? (
          <span className="text-white/60 text-sm font-mono w-10">{deMatch.round}</span>
        ) : (
          <span className="text-white/70 text-sm font-mono w-6 text-right">#{fencer.seed}</span>
        )}

        {/* DE score */}
        {deMatch && (
          <span className={`text-sm font-bold w-12 ${deMatch.win ? "text-green-400" : "text-red-400"}`}>
            {deMatch.win ? "W" : "L"} {deMatch.score}
          </span>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-white/80 font-medium text-sm truncate">{fencer.name}</span>
            {fencer.country && fencer.country !== "USA" && (
              <span className="text-xs px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                {fencer.country}
              </span>
            )}
            {/* Inline threat badge */}
            {threatLevel && (
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full border font-bold ${threatColors[threatLevel]}`}>
                {threatLevel === "elite" ? "🔥" : threatLevel === "strong" ? "⚠️" : threatLevel === "mid" ? "—" : "✅"}
              </span>
            )}
          </div>
          <span className="text-white/60 text-sm">{ftProfile?.club || fencer.club || "—"}</span>
        </div>

        {h2h && (
          <span className={`text-sm font-bold ${h2hColor}`}>
            {h2h.wins}-{h2h.losses}
          </span>
        )}
        {!h2h && !deMatch && <span className="text-white/50 text-sm">NEW</span>}

        {/* Loading indicator for FT data */}
        {ftStatus === "loading" && (
          <div className="w-3 h-3 border border-white/20 border-t-white/50 rounded-full animate-spin" />
        )}

        <svg
          className={`w-4 h-4 text-white/50 transition-transform ${expanded ? "rotate-180" : ""}`}
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
                  <h4 className="text-white/70 text-xs uppercase tracking-wider font-bold mb-2">
                    ⚔️ Head-to-Head: Rian {h2h.wins}W - {h2h.losses}L
                  </h4>
                  <div className="space-y-1">
                    {h2h.bouts.slice(0, 8).map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <span className={b.win ? "text-green-400" : "text-red-400"}>
                          {b.win ? "W" : "L"}
                        </span>
                        <span className="text-white/50">{b.score}</span>
                        <span className="text-white/50">•</span>
                        <span className="text-white/60">{b.date}</span>
                        <span className="text-white/50 truncate">{b.type} @ {b.tournament}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FencingTracker Scouting Report */}
              {ftStatus === "loading" && (
                <div className="text-center py-3">
                  <div className="inline-flex items-center gap-2 text-white/60 text-sm">
                    <div className="w-3 h-3 border border-white/20 border-t-white/50 rounded-full animate-spin" />
                    Loading scouting data...
                  </div>
                </div>
              )}

              {ftProfile && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white/70 text-xs uppercase tracking-wider font-bold">
                      📊 Scouting Report
                    </h4>
                    {threatLevel && (
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-bold uppercase ${threatColors[threatLevel]}`}>
                        {threatLevel === "elite" ? "🔥 Elite" : threatLevel === "strong" ? "⚠️ Strong" : threatLevel === "mid" ? "Mid" : "✅ Developing"}
                      </span>
                    )}
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                      <p className="text-white/60 text-xs">Rating</p>
                      <p className="text-white/80 text-sm font-bold">{ftProfile.currentRating || "U"}</p>
                    </div>
                    <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                      <p className="text-white/60 text-xs">DE Str</p>
                      <p className="text-white/80 text-sm font-bold">{ftProfile.deStrength || "—"}</p>
                    </div>
                    <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                      <p className="text-white/60 text-xs">Pool Str</p>
                      <p className="text-white/80 text-sm font-bold">{ftProfile.poolStrength || "—"}</p>
                    </div>
                    <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                      <p className="text-white/60 text-xs">Avg %ile</p>
                      <p className="text-white/80 text-sm font-bold">{ftProfile.avgPercentile}%</p>
                    </div>
                  </div>

                  {/* Profile row */}
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <span>🏠 {ftProfile.club || "Unattached"}</span>
                    <span>•</span>
                    <span>Born {ftProfile.birthYear || "?"}</span>
                    <span>•</span>
                    <span>{ftProfile.totalEvents} events</span>
                  </div>

                  {/* Season Podiums */}
                  {(ftProfile.podium.gold + ftProfile.podium.silver + ftProfile.podium.bronze > 0) && (
                    <div className="flex gap-3 text-sm">
                      {ftProfile.podium.gold > 0 && <span className="text-yellow-400">🥇 ×{ftProfile.podium.gold}</span>}
                      {ftProfile.podium.silver > 0 && <span className="text-gray-300">🥈 ×{ftProfile.podium.silver}</span>}
                      {ftProfile.podium.bronze > 0 && <span className="text-orange-400">🥉 ×{ftProfile.podium.bronze}</span>}
                      <span className="text-white/50">(this season)</span>
                    </div>
                  )}

                  {/* Recent Results */}
                  {ftProfile.recentResults.length > 0 && (
                    <div>
                      <h4 className="text-white/70 text-xs uppercase tracking-wider font-bold mb-2">
                        📅 Recent Results
                      </h4>
                      <div className="space-y-1">
                        {ftProfile.recentResults.slice(0, 6).map((r, i) => {
                          const pct = Math.round((1 - r.place / r.total) * 100);
                          const pctColor = pct >= 80 ? "text-green-400" : pct >= 50 ? "text-yellow-400" : "text-red-400";
                          return (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <span className="text-white/60 w-16">{r.date}</span>
                              <span className={`font-mono w-14 ${pctColor}`}>{r.place}/{r.total}</span>
                              <span className="text-white/70 truncate flex-1">{r.tournament} — {r.event}</span>
                              {r.ratingEarned && r.ratingEarned !== "U" && (
                                <span className="text-white/50 text-xs">{r.ratingEarned}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <a
                    href={`https://fencingtracker.com/p/${ftProfile.usfaId}/${ftProfile.name.replace(/ /g, '-')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-400/60 hover:text-blue-400 transition-colors"
                  >
                    View on FencingTracker →
                  </a>
                </div>
              )}

              {ftStatus === "error" && (
                <div className="text-white/50 text-sm text-center py-2">Not found on FencingTracker</div>
              )}

              {!h2h && !ftProfile && ftStatus !== "loading" && ftStatus !== "error" && (
                <p className="text-white/50 text-sm text-center py-2">No prior data available</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
