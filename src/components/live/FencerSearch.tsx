"use client";

import { useState } from "react";
import type { FTProfile } from "./EventDashboard";
import { opponents } from "@/data/opponents";

const API_BASE = "https://rian-fencing-api.tony13310.workers.dev";

export default function FencerSearch() {
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState<{ usfa_id: number; name: string; club: string; birthYear?: number; currentRating?: string }[]>([]);
  const [selectedFencer, setSelectedFencer] = useState<FTProfile | null>(null);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch() {
    const words = query.trim().split(/\s+/);
    if (words.length < 2) {
      setError("Please enter first + last name (e.g. \"Kim Kendrick\")");
      return;
    }
    setSearching(true);
    setError("");
    setResults([]);
    setSelectedFencer(null);

    try {
      const resp = await fetch(`${API_BASE}/api/ft/search-saber?q=${encodeURIComponent(query)}`);
      const data = await resp.json();
      if (Array.isArray(data) && data.length > 0) {
        setResults(data);
        // Check if any result has the query as actual surname
        const qLower = query.trim().toLowerCase();
        const hasSurnameMatch = data.some((f: any) => {
          const parts = (f.name || "").toLowerCase().split("-");
          return parts[parts.length - 1] === qLower;
        });
        if (!hasSurnameMatch && qLower.split(/\s+/).length === 1) {
          setError("Tip: Add a first name for better results (e.g. \"" + query.trim() + " Rian\")");
        }
      } else {
        const words = query.trim().split(/\s+/);
        if (words.length === 1) {
          setError("No results. Try adding a first name (e.g. \"" + query.trim() + " Rian\")");
        } else {
          setError("No Men's Saber fencers found");
        }
      }
    } catch {
      setError("Search failed");
    } finally {
      setSearching(false);
    }
  }

  async function selectFencer(f: { usfa_id: number; name: string; club: string }) {
    setLoadingProfile(true);
    setSelectedFencer(null);

    try {
      const resp = await fetch(`${API_BASE}/api/ft/profile/${f.usfa_id}`);
      const data = await resp.json();
      if (data.error) {
        setError("Could not load profile");
      } else {
        setSelectedFencer(data);
      }
    } catch {
      setError("Failed to load profile");
    } finally {
      setLoadingProfile(false);
    }
  }

  // H2H from local DB
  const h2h = selectedFencer ? (() => {
    // Try matching by FT name (e.g. "Max Gerstmann" -> look for "GERSTMANN Max" in opponents)
    const ftName = selectedFencer.name;
    const parts = ftName.split(" ");
    // Try "LAST First" format
    const possibleKeys = [
      ftName,
      `${parts[parts.length - 1].toUpperCase()} ${parts.slice(0, -1).join(" ")}`,
      // Also try with middle initials
    ];
    for (const key of possibleKeys) {
      // Search opponents by partial match
      const match = Object.entries(opponents).find(([name]) => {
        const n = name.toUpperCase();
        const k = key.toUpperCase();
        return n.includes(k) || k.includes(n);
      });
      if (match) {
        return { name: match[0], ...match[1] };
      }
    }
    return null;
  })() : null;

  const threatLevel = selectedFencer
    ? selectedFencer.deStrength >= 3000 ? "elite"
    : selectedFencer.deStrength >= 2700 ? "strong"
    : selectedFencer.deStrength >= 2400 ? "mid"
    : "developing"
    : null;

  const threatColors: Record<string, string> = {
    elite: "bg-red-500/10 text-red-400 border-red-500/20",
    strong: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    mid: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    developing: "bg-green-500/10 text-green-400 border-green-500/20",
  };

  return (
    <div className="space-y-4">
      {/* Search input */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">🔍</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search fencer by first + last name..."
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-orange-500/30 text-sm"
          />
        </div>
        <button
          onClick={handleSearch}
          disabled={searching || query.trim().split(/\s+/).length < 2}
          className="px-6 py-3 bg-white text-black font-bold text-sm rounded-xl hover:bg-white/90 transition-colors disabled:opacity-30"
        >
          {searching ? "..." : "Search"}
        </button>
      </div>

      {/* Search results dropdown */}
      {results.length > 0 && !selectedFencer && (
        <div className="space-y-1">
          {results.map((f) => (
            <button
              key={f.usfa_id}
              onClick={() => selectFencer(f)}
              className="w-full text-left p-3 bg-white/[0.03] hover:bg-white/[0.06] rounded-xl transition-colors"
            >
              <span className="text-white/80 text-sm font-medium">{f.name.replace(/-/g, " ")}</span>
              <span className="text-white/60 text-sm ml-3">{f.club}</span>
              {f.currentRating && f.currentRating !== "U" && (
                <span className="text-white/50 text-sm ml-2">{f.currentRating}</span>
              )}
              {f.birthYear && (
                <span className="text-white/50 text-sm ml-1">({f.birthYear})</span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Loading */}
      {loadingProfile && (
        <div className="text-center py-8">
          <div className="w-6 h-6 border-2 border-orange-400/30 border-t-orange-400 rounded-full animate-spin mx-auto mb-3" />
          <p className="text-white/60 text-sm">Loading scouting report...</p>
        </div>
      )}

      {/* Fencer Profile Card */}
      {selectedFencer && (
        <div className="bg-white/[0.02] rounded-2xl border border-white/5 p-5 space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-black text-white">{selectedFencer.name}</h2>
              <p className="text-white/70 text-sm mt-1">
                {selectedFencer.club || "Unattached"} • Born {selectedFencer.birthYear || "?"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {threatLevel && (
                <span className={`text-sm px-3 py-1 rounded-full border font-bold ${threatColors[threatLevel]}`}>
                  {threatLevel === "elite" ? "🔥 Elite" : threatLevel === "strong" ? "⚠️ Strong" : threatLevel === "mid" ? "Mid" : "✅ Developing"}
                </span>
              )}
              <button
                onClick={() => { setSelectedFencer(null); setResults([]); setQuery(""); }}
                className="text-white/50 hover:text-white/50 text-sm p-1"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-white/[0.03] rounded-lg p-3 text-center">
              <p className="text-white/60 text-xs uppercase">Rating</p>
              <p className="text-white/90 text-lg font-black">{selectedFencer.currentRating || "U"}</p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-3 text-center">
              <p className="text-white/60 text-xs uppercase">DE Str</p>
              <p className="text-white/90 text-lg font-black">{selectedFencer.deStrength || "—"}</p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-3 text-center">
              <p className="text-white/60 text-xs uppercase">Pool Str</p>
              <p className="text-white/90 text-lg font-black">{selectedFencer.poolStrength || "—"}</p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-3 text-center">
              <p className="text-white/60 text-xs uppercase">Avg %ile</p>
              <p className="text-white/90 text-lg font-black">{selectedFencer.avgPercentile}%</p>
            </div>
          </div>

          {/* Season Podiums */}
          {(selectedFencer.podium.gold + selectedFencer.podium.silver + selectedFencer.podium.bronze > 0) && (
            <div className="flex gap-4 text-sm">
              {selectedFencer.podium.gold > 0 && <span className="text-yellow-400">🥇 ×{selectedFencer.podium.gold}</span>}
              {selectedFencer.podium.silver > 0 && <span className="text-gray-300">🥈 ×{selectedFencer.podium.silver}</span>}
              {selectedFencer.podium.bronze > 0 && <span className="text-orange-400">🥉 ×{selectedFencer.podium.bronze}</span>}
              <span className="text-white/50">(this season)</span>
            </div>
          )}

          {/* H2H with Rian */}
          {h2h && (
            <div>
              <h4 className="text-white/70 text-xs uppercase tracking-wider font-bold mb-2">
                ⚔️ Head-to-Head vs Rian: {h2h.wins}W - {h2h.losses}L
              </h4>
              <div className="space-y-1">
                {h2h.bouts.slice(0, 8).map((b: any, i: number) => (
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

          {!h2h && (
            <p className="text-white/50 text-sm">No prior bouts with Rian on record</p>
          )}

          {/* Recent Results */}
          {selectedFencer.recentResults.length > 0 && (
            <div>
              <h4 className="text-white/70 text-xs uppercase tracking-wider font-bold mb-2">
                📅 Recent Results
              </h4>
              <div className="space-y-1">
                {selectedFencer.recentResults.map((r, i) => {
                  const pct = Math.round((1 - r.place / r.total) * 100);
                  const pctColor = pct >= 80 ? "text-green-400" : pct >= 50 ? "text-yellow-400" : "text-red-400";
                  return (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-white/60 w-16">{r.date}</span>
                      <span className={`font-mono w-14 ${pctColor}`}>{r.place}/{r.total}</span>
                      <span className="text-white/70 truncate flex-1">{r.event}</span>
                      {r.ratingEarned && r.ratingEarned !== "U" && (
                        <span className="text-white/50 text-xs">{r.ratingEarned}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* FencingTracker Link */}
          <a
            href={`https://fencingtracker.com/p/${selectedFencer.usfaId}/${selectedFencer.name.replace(/ /g, '-')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-blue-400/60 hover:text-blue-400 transition-colors"
          >
            View full profile on FencingTracker →
          </a>
        </div>
      )}

      {error && <p className="text-red-400/60 text-sm text-center">{error}</p>}
    </div>
  );
}
