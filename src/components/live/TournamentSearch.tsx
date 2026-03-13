"use client";

import { useState } from "react";
import type { Tournament, TournamentEvent } from "@/app/live/page";

interface Props {
  onTournamentFound: (t: Tournament) => void;
  onEventSelect: (event: TournamentEvent) => void;
  tournament: Tournament | null;
}

const API_BASE = "https://rian-fencing-api.tony13310.workers.dev";

export default function TournamentSearch({ onTournamentFound, onEventSelect, tournament }: Props) {
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setSearching(true);
    setError("");
    setResults([]);

    try {
      const resp = await fetch(
        `${API_BASE}/api/ftl/search?q=${encodeURIComponent(query.trim())}&from=2018-01-01&to=2027-12-31`
      );
      const data = await resp.json();
      if (data.tournaments?.length > 0) {
        setResults(data.tournaments);
      } else {
        setError("No tournaments found. Try a different search term.");
      }
    } catch (err: any) {
      setError(`Search failed: ${err.message}`);
    } finally {
      setSearching(false);
    }
  };

  const handleSelectTournament = async (t: any) => {
    setSearching(true);
    setError("");
    try {
      const resp = await fetch(`${API_BASE}/api/ftl/event/${t.id}`);
      const data = await resp.json();

      const events: TournamentEvent[] = (data.events || []).map((e: any) => {
        const name = (e.name || "").replace(/&#x27;/g, "'").replace(/&amp;/g, "&");
        let category = "Unknown";
        if (name.includes("Y-14") || name.includes("Y14")) category = "Y-14";
        else if (name.includes("Y-12") || name.includes("Y12")) category = "Y-12";
        else if (name.includes("Cadet")) category = "Cadet";
        else if (name.includes("Junior")) category = "Junior";
        else if (name.includes("Div") || name.includes("Division")) category = "Div I";
        else if (name.includes("Senior")) category = "Senior";

        return {
          id: e.id,
          name,
          date: e.date ? `${e.date}${e.startTime ? " • " + e.startTime : ""}` : "",
          category,
          weapon: "Saber",
          gender: name.includes("Women") ? "Women" : "Men",
          total: e.competitors || undefined,
          source: "ftl" as const,
          sourceUrl: `https://www.fencingtimelive.com/events/results/${e.id}`,
        };
      });

      setResults([]);
      onTournamentFound({ id: t.id, name: t.name, location: t.location, dates: t.dates || "", source: "ftl", events });
    } catch (err: any) {
      setError(`Failed to load tournament: ${err.message}`);
    } finally {
      setSearching(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center pt-8">
        <h1 className="text-3xl sm:text-4xl font-black mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
            Live Competition
          </span>
        </h1>
        <p className="text-white/40 text-sm">
          Search a tournament to analyze pools and DE opponents in real-time
        </p>
      </div>

      {/* Search bar */}
      <div className="max-w-2xl mx-auto">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="e.g. March NAC 2026, Junior World Cup Budapest..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-red-400/50 focus:ring-1 focus:ring-red-400/20 text-sm sm:text-base"
            />
            {searching && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <div className="w-5 h-5 border-2 border-red-400/30 border-t-red-400 rounded-full animate-spin" />
              </div>
            )}
          </div>
          <button
            onClick={handleSearch}
            disabled={searching || !query.trim()}
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-bold text-sm hover:from-red-600 hover:to-orange-600 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Search
          </button>
        </div>
        <div className="flex items-center gap-3 mt-3 justify-center">
          <span className="text-[10px] text-white/20 uppercase tracking-wider">Searches:</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            🇺🇸 FencingTimeLive
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
            🌍 FIE
          </span>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="max-w-2xl mx-auto text-center text-white/30 text-sm py-4">{error}</div>
      )}

      {/* Search results — tournament list */}
      {results.length > 0 && !tournament && (
        <div className="max-w-2xl mx-auto space-y-2">
          <p className="text-white/30 text-xs uppercase tracking-wider font-bold">
            {results.length} tournament{results.length > 1 ? "s" : ""} found
          </p>
          {results.map((t) => {
            const isUpcoming = t.start && new Date(t.start) >= new Date() && new Date(t.start) <= new Date(Date.now() + 10 * 86400000);
            const isPast = t.start && new Date(t.start) < new Date();
            return (
              <button
                key={t.id}
                onClick={() => handleSelectTournament(t)}
                className={`w-full flex items-center justify-between rounded-xl p-4 transition-colors text-left ${
                  isUpcoming ? "bg-red-500/5 hover:bg-red-500/10 border border-red-500/20" : "bg-white/[0.03] hover:bg-white/[0.06]"
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-white/80 font-medium truncate">{t.name}</p>
                    {isUpcoming && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 font-bold whitespace-nowrap animate-pulse">
                        UPCOMING
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-white/30 text-sm">{t.location}</p>
                    {t.dates && (
                      <>
                        <span className="text-white/10">•</span>
                        <p className={`text-sm ${isUpcoming ? "text-red-400/70" : isPast ? "text-white/20" : "text-white/30"}`}>
                          {t.dates}
                        </p>
                      </>
                    )}
                  </div>
                </div>
                <svg className="w-5 h-5 text-white/20 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            );
          })}
        </div>
      )}

      {/* Tournament events — just clickable names */}
      {tournament && (
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="gradient-border bg-[#12121a] rounded-2xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-white">{tournament.name}</h2>
                <p className="text-white/40 text-sm">
                  {tournament.location} • {tournament.dates}
                </p>
              </div>
              <span className="text-[10px] px-2 py-1 rounded-full font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                🇺🇸 FTL
              </span>
            </div>

            <div className="space-y-2">
              {tournament.events.map((event) => (
                <button
                  key={event.id}
                  onClick={() => onEventSelect(event)}
                  className="w-full flex items-center gap-3 bg-white/[0.03] rounded-xl p-4 hover:bg-white/[0.06] transition-colors text-left"
                >
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                    event.category === "Y-14" ? "bg-cyan-500/10 text-cyan-400" :
                    event.category === "Cadet" ? "bg-green-500/10 text-green-400" :
                    event.category === "Junior" ? "bg-orange-500/10 text-orange-400" :
                    event.category === "Div I" ? "bg-red-500/10 text-red-400" :
                    "bg-white/10 text-white/60"
                  }`}>
                    {event.category}
                  </span>
                  <div className="flex-1">
                    <p className="text-white/80 text-sm font-medium">{event.name}</p>
                    <p className="text-white/30 text-xs">{event.date}{event.total ? ` • ${event.total} fencers` : ""}</p>
                  </div>
                  <svg className="w-5 h-5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Instructions when empty */}
      {!tournament && !error && !searching && results.length === 0 && (
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/[0.02] rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🔍</div>
              <p className="text-white/50 text-xs">Search tournament by name</p>
            </div>
            <div className="bg-white/[0.02] rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">⚔️</div>
              <p className="text-white/50 text-xs">Analyze pool opponents</p>
            </div>
            <div className="bg-white/[0.02] rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🗡️</div>
              <p className="text-white/50 text-xs">Scout DE bracket opponents</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
