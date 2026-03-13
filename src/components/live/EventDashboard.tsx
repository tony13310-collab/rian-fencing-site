"use client";

import { useState, useEffect, useCallback } from "react";
import type { TournamentEvent, PoolData, DEData } from "@/app/live/page";
import OpponentCard from "./OpponentCard";

const API_BASE = "https://rian-fencing-api.tony13310.workers.dev";

export interface FTProfile {
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
  event: TournamentEvent;
  tournamentName: string;
}

export default function EventDashboard({ event, tournamentName }: Props) {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [poolData, setPoolData] = useState<PoolData | null>(null);
  const [deData, setDeData] = useState<DEData | null>(null);
  const [rianPlace, setRianPlace] = useState<string | null>(null);
  const [rianPoolSeed, setRianPoolSeed] = useState<number | null>(null);
  const [error, setError] = useState("");

  // FT profile cache: name -> profile
  const [ftCache, setFtCache] = useState<Record<string, FTProfile | "loading" | "error">>({});
  const [ftProgress, setFtProgress] = useState({ loaded: 0, total: 0 });

  // Batch fetch FT profiles for all opponents
  const prefetchFTProfiles = useCallback(async (names: string[]) => {
    const uniqueNames = [...new Set(names.filter(n => n !== "WEI Rian" && !n.startsWith("WEI Rian")))];
    if (uniqueNames.length === 0) return;

    setFtProgress({ loaded: 0, total: uniqueNames.length });

    // Mark all as loading
    setFtCache(prev => {
      const next = { ...prev };
      uniqueNames.forEach(n => { if (!next[n]) next[n] = "loading"; });
      return next;
    });

    // Fetch in parallel with concurrency limit of 3
    let loaded = 0;
    const queue = [...uniqueNames];
    const workers = Array.from({ length: 3 }, async () => {
      while (queue.length > 0) {
        const name = queue.shift()!;
        try {
          const searchName = name.replace(/,\s*/, " ").trim();
          const resp = await fetch(`${API_BASE}/api/ft/profile?q=${encodeURIComponent(searchName)}`);
          const data = await resp.json();
          if (data.error) {
            setFtCache(prev => ({ ...prev, [name]: "error" }));
          } else {
            setFtCache(prev => ({ ...prev, [name]: data as FTProfile }));
          }
        } catch {
          setFtCache(prev => ({ ...prev, [name]: "error" }));
        }
        loaded++;
        setFtProgress({ loaded, total: uniqueNames.length });
      }
    });
    await Promise.all(workers);
  }, []);

  const fetchData = async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);
    setError("");

    const allOpponentNames: string[] = [];

    try {
      // Fetch pool data
      const poolResp = await fetch(`${API_BASE}/api/ftl/pools/${event.id}`);
      const poolJson = await poolResp.json();

      if (poolJson.rianPool) {
        const pool = poolJson.rianPool;
        const rianIdx = pool.fencers.findIndex((f: any) =>
          f.name === "WEI Rian" || f.name.startsWith("WEI Rian")
        );

        const fencers = pool.fencers.map((f: any) => ({
          seed: f.seed,
          name: f.name,
          club: f.club,
          country: f.country,
          scores: f.scores,
          victories: f.victories,
          vm: f.vm,
          ts: f.ts,
          tr: f.tr,
          ind: f.ind,
        }));

        // Collect opponent names for pre-fetch
        fencers.forEach((f: any) => {
          if (f.name !== "WEI Rian" && !f.name.startsWith("WEI Rian")) {
            allOpponentNames.push(f.name);
          }
        });

        const bouts = rianIdx >= 0 ? pool.fencers[rianIdx].scores.map((s: any, i: number) => {
          const opIdx = i >= rianIdx ? i + 1 : i;
          const opp = pool.fencers[opIdx];
          return { win: s.win, opponent: opp?.name || "Unknown", score: s.score };
        }) : [];

        setPoolData({
          rianSeed: rianIdx >= 0 ? pool.fencers[rianIdx].seed : 0,
          poolNumber: pool.poolNumber,
          strip: pool.strip,
          fencers,
          bouts: bouts.length > 0 ? bouts : undefined,
          lastRefreshed: new Date().toLocaleTimeString(),
        });

        setRianPoolSeed(rianIdx >= 0 ? pool.fencers[rianIdx].seed : null);
      } else {
        setPoolData(null);
      }

      // Fetch results data
      try {
        const resultsResp = await fetch(`${API_BASE}/api/ftl/results/${event.id}`);
        const resultsJson = await resultsResp.json();
        if (resultsJson.rianEntry) {
          setRianPlace(resultsJson.rianEntry.place);
        }
      } catch {}

      // Fetch DE data
      try {
        const deResp = await fetch(`${API_BASE}/api/ftl/de/${event.id}`);
        const deJson = await deResp.json();
        if (deJson.matches && deJson.matches.length > 0) {
          const matches = deJson.matches.map((m: any, i: number) => ({
            round: `T${Math.pow(2, 7 - i)}`,
            opponent: m.opponent,
            club: "",
            score: m.score,
            win: m.win,
            status: "completed" as const,
          }));
          setDeData({
            rianDESeed: parseInt(deJson.rianDESeed) || 0,
            matches,
            lastRefreshed: new Date().toLocaleTimeString(),
          });
          // Collect DE opponent names
          matches.forEach((m: any) => allOpponentNames.push(m.opponent));
        }
      } catch {}

    } catch (err: any) {
      setError(`Failed to load data: ${err.message}`);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }

    // Pre-fetch all FT profiles in background
    if (allOpponentNames.length > 0) {
      prefetchFTProfiles(allOpponentNames);
    }
  };

  useEffect(() => {
    fetchData();
  }, [event.id]);

  const rianBouts = poolData?.bouts || [];
  const wins = rianBouts.filter(b => b.win).length;
  const losses = rianBouts.filter(b => !b.win).length;

  return (
    <div className="space-y-6">
      {/* Event header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white/30 text-xs">{tournamentName}</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">{event.name}</h2>
          <p className="text-white/40 text-sm mt-1">
            {event.date}{event.total ? ` • ${event.total} fencers` : ""}
          </p>
        </div>
        <button
          onClick={() => fetchData(true)}
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

      {/* Loading state */}
      {loading && (
        <div className="text-center py-16">
          <div className="w-8 h-8 border-2 border-red-400/30 border-t-red-400 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/40 text-sm">Fetching data from FencingTimeLive...</p>
        </div>
      )}

      {error && <div className="text-center py-8 text-red-400/60 text-sm">{error}</div>}

      {!loading && (
        <>
          {/* FT pre-load progress bar */}
          {ftProgress.total > 0 && ftProgress.loaded < ftProgress.total && (
            <div className="bg-white/[0.03] rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/40 text-xs">📊 Loading scouting data...</span>
                <span className="text-white/30 text-xs">{ftProgress.loaded}/{ftProgress.total}</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300"
                  style={{ width: `${(ftProgress.loaded / ftProgress.total) * 100}%` }}
                />
              </div>
            </div>
          )}

          {poolData ? (
            <>
              {/* Rian's stats cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white/[0.03] rounded-xl p-3 text-center">
                  <p className="text-white/30 text-[10px] uppercase tracking-wider">Pool Seed</p>
                  <p className="text-2xl font-black text-white">#{poolData.rianSeed}</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-3 text-center">
                  <p className="text-white/30 text-[10px] uppercase tracking-wider">Pool</p>
                  <p className="text-2xl font-black text-white">
                    {poolData.poolNumber}
                    {poolData.strip && <span className="text-sm text-white/30 ml-1">({poolData.strip})</span>}
                  </p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-3 text-center">
                  <p className="text-white/30 text-[10px] uppercase tracking-wider">Pool Size</p>
                  <p className="text-2xl font-black text-white">{poolData.fencers.length}</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-3 text-center">
                  <p className="text-white/30 text-[10px] uppercase tracking-wider">
                    {rianBouts.length > 0 ? "Record" : "Fencers"}
                  </p>
                  <p className="text-2xl font-black">
                    {rianBouts.length > 0 ? (
                      <>
                        <span className="text-green-400">{wins}W</span>
                        <span className="text-white/20"> - </span>
                        <span className="text-red-400">{losses}L</span>
                      </>
                    ) : (
                      <span className="text-white">{event.total || "—"}</span>
                    )}
                  </p>
                </div>
              </div>

              {/* Pool Results */}
              {rianBouts.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-white/50 text-xs uppercase tracking-wider font-bold">⚔️ Pool Results</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {rianBouts.map((b, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 p-3 rounded-xl ${
                          b.win ? "bg-green-500/5 border border-green-500/10" : "bg-red-500/5 border border-red-500/10"
                        }`}
                      >
                        <span className={`text-sm font-bold ${b.win ? "text-green-400" : "text-red-400"}`}>
                          {b.score}
                        </span>
                        <span className="text-white/70 text-sm">{b.opponent}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pool Opponents */}
              <div className="space-y-2">
                <h3 className="text-white/50 text-xs uppercase tracking-wider font-bold">👥 Pool Opponents</h3>
                {poolData.fencers.map((f, i) => (
                  <OpponentCard
                    key={i}
                    fencer={f}
                    isRian={f.name === "WEI Rian" || f.name.startsWith("WEI Rian")}
                    ftProfile={typeof ftCache[f.name] === "object" ? ftCache[f.name] as FTProfile : undefined}
                    ftStatus={ftCache[f.name] === "loading" ? "loading" : ftCache[f.name] === "error" ? "error" : ftCache[f.name] ? "loaded" : "pending"}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12 bg-white/[0.02] rounded-2xl">
              <div className="text-3xl mb-3">⏳</div>
              <p className="text-white/40 text-sm">Pool assignments not yet available</p>
              <p className="text-white/20 text-xs mt-1">Click Refresh when pools are posted</p>
            </div>
          )}

          {/* DE Section */}
          <div className="border-t border-white/5 pt-6 mt-6">
            {deData && deData.matches.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white/50 text-xs uppercase tracking-wider font-bold">
                    🗡️ Direct Elimination — Seed #{deData.rianDESeed}
                  </h3>
                  {rianPlace && (
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                      rianPlace === "1" ? "bg-yellow-500/20 text-yellow-400" :
                      rianPlace === "2" ? "bg-gray-400/20 text-gray-300" :
                      rianPlace.startsWith("3") ? "bg-orange-500/20 text-orange-400" :
                      "bg-white/10 text-white/50"
                    }`}>
                      Final: {rianPlace === "1" ? "🥇" : rianPlace === "2" ? "🥈" : rianPlace.startsWith("3") ? "🥉" : ""} #{rianPlace}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  {deData.matches.map((m, i) => {
                    const ftData = typeof ftCache[m.opponent] === "object" ? ftCache[m.opponent] as FTProfile : undefined;
                    return (
                      <OpponentCard
                        key={`de-${i}`}
                        fencer={{
                          seed: 0,
                          name: m.opponent,
                          club: ftData?.club || m.club || "",
                          country: "",
                          scores: [],
                          victories: 0,
                        }}
                        deMatch={{
                          round: i === deData.matches.length - 1 ? "Final" :
                                 i === deData.matches.length - 2 ? "SF" :
                                 i === deData.matches.length - 3 ? "QF" : `R${i + 1}`,
                          score: m.score || "",
                          win: m.win ?? true,
                        }}
                        ftProfile={ftData}
                        ftStatus={ftCache[m.opponent] === "loading" ? "loading" : ftCache[m.opponent] === "error" ? "error" : ftCache[m.opponent] ? "loaded" : "pending"}
                      />
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="text-center py-8 bg-white/[0.02] rounded-2xl">
                <div className="text-3xl mb-3">🗡️</div>
                <p className="text-white/40 text-sm">DE tableau not yet available</p>
                <p className="text-white/20 text-xs mt-1">Click Refresh when DE starts</p>
              </div>
            )}
          </div>

          {poolData?.lastRefreshed && (
            <p className="text-white/15 text-[10px] text-center">
              Last refreshed: {poolData.lastRefreshed}
            </p>
          )}
        </>
      )}
    </div>
  );
}
