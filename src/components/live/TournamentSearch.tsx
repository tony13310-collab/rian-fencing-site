"use client";

import { useState, useEffect } from "react";
import type { Tournament, TournamentEvent } from "@/app/live/page";
import FencerSearch from "./FencerSearch";

const API_BASE = "https://rian-fencing-api.tony13310.workers.dev";

interface UpcomingTournament {
  id: string;
  name: string;
  location: string;
  dates: string;
  start: string;
  end: string;
}

interface Props {
  onTournamentFound: (t: Tournament) => void;
  onEventSelect: (event: TournamentEvent) => void;
  tournament: Tournament | null;
}

export default function TournamentSearch({ onTournamentFound, onEventSelect, tournament }: Props) {
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState("");

  // Auto-loaded tournaments
  const [inProgress, setInProgress] = useState<UpcomingTournament[]>([]);
  const [upcoming, setUpcoming] = useState<UpcomingTournament[]>([]);
  const [autoLoading, setAutoLoading] = useState(true);

  // Search results
  const [searchResults, setSearchResults] = useState<UpcomingTournament[]>([]);

  // Selected tournament's events
  const [selectedTournament, setSelectedTournament] = useState<UpcomingTournament | null>(null);
  const [events, setEvents] = useState<TournamentEvent[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(false);

  // Auto-load upcoming tournaments on mount
  useEffect(() => {
    loadUpcoming();
  }, []);

  async function loadUpcoming() {
    setAutoLoading(true);
    try {
      const resp = await fetch(`${API_BASE}/api/ftl/upcoming`);
      const data = await resp.json();
      setInProgress(data.inProgress || []);
      setUpcoming(data.upcoming || []);
    } catch {
      setError("Failed to load tournaments");
    } finally {
      setAutoLoading(false);
    }
  }

  async function handleSearch() {
    if (!query.trim()) return;
    setSearching(true);
    setError("");
    setSearchResults([]);
    setSelectedTournament(null);
    setEvents([]);

    try {
      // Search next 7 days + in-progress (from 7 days ago)
      const now = new Date();
      const from = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
      const to = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

      const resp = await fetch(`${API_BASE}/api/ftl/search?q=${encodeURIComponent(query)}&from=${from}&to=${to}`);
      const data = await resp.json();
      setSearchResults(data.tournaments || []);
      if ((data.tournaments || []).length === 0) {
        setError("No active tournaments found for this search");
      }
    } catch {
      setError("Search failed");
    } finally {
      setSearching(false);
    }
  }

  async function selectTournament(t: UpcomingTournament) {
    setSelectedTournament(t);
    setLoadingEvents(true);
    setEvents([]);

    try {
      const resp = await fetch(`${API_BASE}/api/ftl/event/${t.id}`);
      const data = await resp.json();
      const evts: TournamentEvent[] = (data.events || []).map((e: any) => ({
        id: e.id,
        name: e.name,
        date: e.date || t.start,
        category: e.category || "",
        weapon: "Saber",
        gender: "Men",
        total: e.total,
        source: "ftl" as const,
        sourceUrl: `https://www.fencingtimelive.com/events/results/${e.id}`,
      }));

      setEvents(evts);

      // Also notify parent
      onTournamentFound({
        id: t.id,
        name: t.name,
        location: t.location,
        dates: t.dates,
        source: "ftl",
        events: evts,
      });
    } catch {
      setError("Failed to load events");
    } finally {
      setLoadingEvents(false);
    }
  }

  const TournamentCard = ({ t, badge }: { t: UpcomingTournament; badge?: string }) => (
    <button
      onClick={() => selectTournament(t)}
      className={`w-full text-left p-4 rounded-xl transition-all ${
        selectedTournament?.id === t.id
          ? "bg-red-500/10 border border-red-500/20"
          : "bg-white/[0.03] hover:bg-white/[0.06] border border-transparent"
      }`}
    >
      <div className="space-y-1">
        <div className="flex items-start gap-2 flex-wrap">
          <h3 className="text-white/90 font-bold text-sm">{t.name}</h3>
          {badge && (
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold shrink-0 ${
              badge === "LIVE" 
                ? "bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse"
                : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
            }`}>
              {badge}
            </span>
          )}
        </div>
        <p className="text-white/30 text-xs">{t.location} • {t.dates}</p>
      </div>
    </button>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          <span className="text-red-400">●</span> Live Dashboard
        </h1>
        <p className="text-white/30 text-sm mt-2">Real-time competition analysis for Rian Wei</p>
      </div>

      {/* Fencer Scout Search */}
      <div className="bg-white/[0.02] rounded-2xl border border-white/5 p-4">
        <h2 className="text-white/40 text-[10px] uppercase tracking-wider font-bold mb-3">
          🎯 Scout Opponent
        </h2>
        <FencerSearch />
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-white/5" />
        <span className="text-white/15 text-xs">TOURNAMENTS</span>
        <div className="flex-1 h-px bg-white/5" />
      </div>

      {/* Tournament search bar */}
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search active tournaments..."
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-red-500/30 text-sm"
        />
        <button
          onClick={handleSearch}
          disabled={searching || !query.trim()}
          className="px-5 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-xl text-red-400 text-sm font-bold transition-colors disabled:opacity-30"
        >
          {searching ? "..." : "Search"}
        </button>
      </div>

      {/* Loading state */}
      {autoLoading && (
        <div className="text-center py-12">
          <div className="w-8 h-8 border-2 border-red-400/30 border-t-red-400 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/40 text-sm">Loading active tournaments...</p>
        </div>
      )}

      {/* Search results */}
      {searchResults.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-white/40 text-xs uppercase tracking-wider font-bold">
            🔍 Search Results
          </h2>
          {searchResults.map((t) => (
            <TournamentCard key={t.id} t={t} />
          ))}
        </div>
      )}

      {/* In Progress */}
      {!autoLoading && inProgress.length > 0 && !searchResults.length && (
        <div className="space-y-3">
          <h2 className="text-white/40 text-xs uppercase tracking-wider font-bold">
            🔴 In Progress
          </h2>
          {inProgress.map((t) => (
            <TournamentCard key={t.id} t={t} badge="LIVE" />
          ))}
        </div>
      )}

      {/* Upcoming */}
      {!autoLoading && upcoming.length > 0 && !searchResults.length && (
        <div className="space-y-3">
          <h2 className="text-white/40 text-xs uppercase tracking-wider font-bold">
            📅 Upcoming National & SYC
          </h2>
          {upcoming.map((t) => (
            <TournamentCard key={t.id} t={t} badge="UPCOMING" />
          ))}
        </div>
      )}

      {/* No tournaments found */}
      {!autoLoading && inProgress.length === 0 && upcoming.length === 0 && !searchResults.length && !error && (
        <div className="text-center py-12 bg-white/[0.02] rounded-2xl">
          <div className="text-3xl mb-3">🤺</div>
          <p className="text-white/40 text-sm">No active tournaments in the next 7 days</p>
          <p className="text-white/20 text-xs mt-1">Use search to find specific events</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-center py-4 text-red-400/60 text-sm">{error}</div>
      )}

      {/* Selected tournament events */}
      {selectedTournament && (
        <div className="space-y-3 border-t border-white/5 pt-6">
          <h2 className="text-white/40 text-xs uppercase tracking-wider font-bold">
            ⚔️ {selectedTournament.name} — Men&apos;s Saber Events
          </h2>

          {loadingEvents && (
            <div className="text-center py-8">
              <div className="w-6 h-6 border-2 border-white/20 border-t-white/50 rounded-full animate-spin mx-auto mb-3" />
              <p className="text-white/30 text-xs">Loading events...</p>
            </div>
          )}

          {!loadingEvents && events.length === 0 && (
            <div className="text-center py-8 bg-white/[0.02] rounded-xl">
              <p className="text-white/30 text-sm">No Men&apos;s Saber events found</p>
            </div>
          )}

          {events.map((evt) => (
            <button
              key={evt.id}
              onClick={() => onEventSelect(evt)}
              className="w-full text-left p-4 bg-white/[0.03] hover:bg-white/[0.06] rounded-xl transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white/80 font-bold text-sm">{evt.name}</h3>
                  <p className="text-white/30 text-xs mt-1">
                    {evt.date}
                    {evt.total ? ` • ${evt.total} fencers` : ""}
                  </p>
                </div>
                <svg className="w-5 h-5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
