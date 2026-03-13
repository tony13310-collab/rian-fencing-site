"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PoolFencer } from "@/app/live/page";
import { opponents } from "@/data/opponents";

const API_BASE = "https://rian-fencing-api.tony13310.workers.dev";

interface FTProfile {
  usfaId: string;
  name: string;
  birthYear: number | null;
  club: string;
  currentRating: string;
  deStrength: number;
  poolStrength: number;
  podium: { gold: number; silver: number; bronze: number };
  avgPercentile: number;
  recentResults: { date: string; tournament: string; event: string; place: number; total: number; ratingEarned: string }[];
  totalEvents: number;
}

interface Props {
  fencer: PoolFencer;
  isRian?: boolean;
}

export default function OpponentCard({ fencer, isRian }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [ftProfile, setFtProfile] = useState<FTProfile | null>(null);
  const [ftLoading, setFtLoading] = useState(false);
  const [ftError, setFtError] = useState("");

  // Look up in local DB
  const localData = opponents[fencer.name];
  const h2h = localData ? {
    wins: localData.wins,
    losses: localData.losses,
    bouts: localData.bouts,
  } : null;

  // Fetch FT profile when expanded
  useEffect(() => {
    if (!expanded || ftProfile || ftLoading || isRian) return;
    setFtLoading(true);
    const searchName = fencer.name.replace(/,\s*/, " ").trim();
    fetch(`${API_BASE}/api/ft/profile?q=${encodeURIComponent(searchName)}`)
      .then(r => r.json())
      .then(data => {
        if (data.error) {
          setFtError("Not found on FencingTracker");
        } else {
          setFtProfile(data);
        }
      })
      .catch(() => setFtError("Failed to load"))
      .finally(() => setFtLoading(false));
  }, [expanded, ftProfile, ftLoading, isRian, fencer.name]);

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

  // Determine threat level
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
                    ⚔️ Head-to-Head: Rian {h2h.wins}W - {h2h.losses}L
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

              {/* FencingTracker Profile */}
              {ftLoading && (
                <div className="text-center py-3">
                  <div className="inline-flex items-center gap-2 text-white/30 text-xs">
                    <div className="w-3 h-3 border border-white/20 border-t-white/50 rounded-full animate-spin" />
                    Loading FencingTracker data...
                  </div>
                </div>
              )}

              {ftProfile && (
                <div className="space-y-3">
                  {/* Threat Badge + Key Stats */}
                  <div className="flex items-center justify-between">
                    <h4 className="text-white/40 text-[10px] uppercase tracking-wider font-bold">
                      📊 Scouting Report
                    </h4>
                    {threatLevel && (
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase ${threatColors[threatLevel]}`}>
                        {threatLevel === "elite" ? "🔥 Elite" : threatLevel === "strong" ? "⚠️ Strong" : threatLevel === "mid" ? "Mid" : "✅ Developing"}
                      </span>
                    )}
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                      <p className="text-white/30 text-[10px]">Rating</p>
                      <p className="text-white/80 text-sm font-bold">{ftProfile.currentRating || "U"}</p>
                    </div>
                    <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                      <p className="text-white/30 text-[10px]">DE Str</p>
                      <p className="text-white/80 text-sm font-bold">{ftProfile.deStrength || "—"}</p>
                    </div>
                    <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                      <p className="text-white/30 text-[10px]">Pool Str</p>
                      <p className="text-white/80 text-sm font-bold">{ftProfile.poolStrength || "—"}</p>
                    </div>
                    <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                      <p className="text-white/30 text-[10px]">Avg %ile</p>
                      <p className="text-white/80 text-sm font-bold">{ftProfile.avgPercentile}%</p>
                    </div>
                  </div>

                  {/* Profile Row */}
                  <div className="flex items-center gap-3 text-xs text-white/40">
                    <span>🏠 {ftProfile.club || "Unattached"}</span>
                    <span>•</span>
                    <span>Born {ftProfile.birthYear || "?"}</span>
                    <span>•</span>
                    <span>{ftProfile.totalEvents} events</span>
                  </div>

                  {/* Season Podiums */}
                  {(ftProfile.podium.gold + ftProfile.podium.silver + ftProfile.podium.bronze > 0) && (
                    <div className="flex gap-3 text-xs">
                      {ftProfile.podium.gold > 0 && (
                        <span className="text-yellow-400">🥇 ×{ftProfile.podium.gold}</span>
                      )}
                      {ftProfile.podium.silver > 0 && (
                        <span className="text-gray-300">🥈 ×{ftProfile.podium.silver}</span>
                      )}
                      {ftProfile.podium.bronze > 0 && (
                        <span className="text-orange-400">🥉 ×{ftProfile.podium.bronze}</span>
                      )}
                      <span className="text-white/20">(this season)</span>
                    </div>
                  )}

                  {/* Recent Results */}
                  {ftProfile.recentResults.length > 0 && (
                    <div>
                      <h4 className="text-white/40 text-[10px] uppercase tracking-wider font-bold mb-2">
                        📅 Recent Results
                      </h4>
                      <div className="space-y-1">
                        {ftProfile.recentResults.slice(0, 6).map((r, i) => {
                          const pct = Math.round((1 - r.place / r.total) * 100);
                          const pctColor = pct >= 80 ? "text-green-400" : pct >= 50 ? "text-yellow-400" : "text-red-400";
                          return (
                            <div key={i} className="flex items-center gap-2 text-xs">
                              <span className="text-white/30 w-16">{r.date}</span>
                              <span className={`font-mono w-14 ${pctColor}`}>
                                {r.place}/{r.total}
                              </span>
                              <span className="text-white/40 truncate flex-1">{r.event}</span>
                              {r.ratingEarned && r.ratingEarned !== "U" && (
                                <span className="text-white/20 text-[10px]">{r.ratingEarned}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* FencingTracker Link */}
                  <a
                    href={`https://fencingtracker.com/p/${ftProfile.usfaId}/${ftProfile.name.replace(/ /g, '-')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] text-blue-400/60 hover:text-blue-400 transition-colors"
                  >
                    View on FencingTracker →
                  </a>
                </div>
              )}

              {ftError && !ftLoading && (
                <div className="text-white/20 text-xs text-center py-2">
                  {ftError}
                </div>
              )}

              {/* No data at all */}
              {!h2h && !ftProfile && !ftLoading && !ftError && (
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
