"use client";

import { useState, useEffect } from "react";
import type { Tournament, TournamentEvent } from "@/app/live/page";

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
  searchOnly?: boolean;
}

export default function TournamentSearch({ onTournamentFound, onEventSelect, tournament, searchOnly }: Props) {
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

  const TournamentCard = ({ t, badge }: { t: UpcomingTournament; badge?: string }) => {
    const isSelected = selectedTournament?.id === t.id;
    const isLive = badge === "LIVE";

    // Calculate days info
    const now = new Date();
    const startDate = new Date(t.start);
    const endDate = t.end ? new Date(t.end) : startDate;
    const daysUntil = Math.ceil((startDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    const dayOfEvent = isLive ? Math.ceil((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1 : 0;

    // Color palette based on index for variety
    const colors = [
      { bg: "from-blue-500/10 to-cyan-500/5", border: "border-blue-500/15", badge: "bg-blue-500/10 text-blue-400 border-blue-500/20", ring: "ring-blue-500/30" },
      { bg: "from-purple-500/10 to-pink-500/5", border: "border-purple-500/15", badge: "bg-purple-500/10 text-purple-400 border-purple-500/20", ring: "ring-purple-500/30" },
      { bg: "from-emerald-500/10 to-teal-500/5", border: "border-emerald-500/15", badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", ring: "ring-emerald-500/30" },
      { bg: "from-amber-500/10 to-yellow-500/5", border: "border-amber-500/15", badge: "bg-amber-500/10 text-amber-400 border-amber-500/20", ring: "ring-amber-500/30" },
      { bg: "from-rose-500/10 to-pink-500/5", border: "border-rose-500/15", badge: "bg-rose-500/10 text-rose-400 border-rose-500/20", ring: "ring-rose-500/30" },
      { bg: "from-indigo-500/10 to-violet-500/5", border: "border-indigo-500/15", badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20", ring: "ring-indigo-500/30" },
    ];

    // Hash tournament id to pick a consistent color
    const colorIdx = t.id.split("").reduce((sum, c) => sum + c.charCodeAt(0), 0) % colors.length;
    const liveColor = { bg: "from-red-900/40 to-red-800/20", border: "border-red-700/30", badge: "bg-red-500/20 text-red-400 border-red-500/30", ring: "ring-red-500/30" };
    const upcomingColor = { bg: "from-green-900/40 to-green-800/20", border: "border-green-700/30", badge: "bg-green-500/20 text-green-400 border-green-500/30", ring: "ring-green-500/30" };
    const color = isLive ? liveColor : badge === "UPCOMING" ? upcomingColor : colors[colorIdx];

    return (
      <button
        onClick={() => selectTournament(t)}
        className={`w-full text-left rounded-2xl transition-all overflow-hidden ${
          isSelected ? `ring-2 ${color.ring}` : "hover:scale-[1.01]"
        } bg-gradient-to-br ${color.bg} border ${color.border}`}
      >
        <div className="p-4 space-y-3">
          {/* Top row: badge + status */}
          <div className="flex items-center justify-between">
            {badge && (
              <span className={`text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider border ${color.badge} ${isLive ? "animate-pulse" : ""}`}>
                {isLive ? "LIVE" : `IN ${daysUntil} DAY${daysUntil !== 1 ? "S" : ""}`}
              </span>
            )}
            {isLive && totalDays > 1 && (
              <span className="text-white/50 text-xs">Day {dayOfEvent} of {totalDays}</span>
            )}
          </div>

          {/* Tournament name */}
          <h3 className="text-white font-bold text-base leading-tight">{t.name}</h3>

          {/* Info row */}
          <div className="text-sm text-white/70">
            <span>{t.location}</span>
            <span className="mx-2">·</span>
            <span>{t.dates}</span>
          </div>
        </div>

        {/* Selected indicator */}
        {isSelected && (
          <div className="px-4 py-2 text-xs uppercase tracking-wider font-bold text-center bg-red-500/10 text-red-400">
            Loading events...
          </div>
        )}
      </button>
    );
  };

  // searchOnly mode: just the search bar + results
  if (searchOnly) {
    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="±7 days from today"
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/70 focus:outline-none focus:border-white/30 text-sm"
          />
          <button
            onClick={handleSearch}
            disabled={searching || !query.trim()}
            className="px-6 py-3 bg-white text-black font-bold text-sm rounded-xl hover:bg-white/90 transition-colors disabled:opacity-30"
          >
            {searching ? "..." : "Search"}
          </button>
        </div>
        {error && <div className="text-red-400/80 text-sm">{error}</div>}
        {searchResults.length > 0 && (
          <div className="space-y-3">
            {searchResults.map((t) => (
              <TournamentCard key={t.id} t={t} />
            ))}
          </div>
        )}
        {selectedTournament && (
          <div className="space-y-3 border-t border-white/5 pt-4">
            <h3 className="text-white/80 text-sm font-bold">
              ⚔️ {selectedTournament.name} — Men&apos;s Saber
            </h3>
            {loadingEvents && (
              <div className="text-center py-6">
                <div className="w-6 h-6 border-2 border-white/20 border-t-white/60 rounded-full animate-spin mx-auto" />
              </div>
            )}
            {!loadingEvents && events.length === 0 && (
              <p className="text-white/60 text-sm">No Men&apos;s Saber events found</p>
            )}
            {events.map((evt) => (
              <button
                key={evt.id}
                onClick={() => onEventSelect(evt)}
                className="w-full text-left p-4 bg-white/[0.03] hover:bg-white/[0.06] rounded-xl transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white/90 font-bold text-sm">{evt.name}</span>
                    <span className="text-white/60 text-sm ml-2">{evt.date}{evt.total ? ` • ${evt.total}` : ""}</span>
                  </div>
                  <span className="text-white/70">→</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Default mode: In Progress + Upcoming cards
  return (
    <div className="space-y-6">
      {/* Loading state */}
      {autoLoading && (
        <div className="text-center py-12">
          <div className="w-8 h-8 border-2 border-red-400/30 border-t-red-400 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/70 text-sm">Loading active tournaments...</p>
        </div>
      )}

      {/* In Progress */}
      {!autoLoading && inProgress.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-white/80 text-sm uppercase tracking-wider font-bold">
            IN PROGRESS
          </h2>
          {inProgress.map((t) => (
            <TournamentCard key={t.id} t={t} badge="LIVE" />
          ))}
        </div>
      )}

      {/* Upcoming */}
      {!autoLoading && upcoming.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-white/80 text-sm uppercase tracking-wider font-bold">
            UPCOMING NATIONAL & SYC
          </h2>
          {upcoming.map((t) => (
            <TournamentCard key={t.id} t={t} badge="UPCOMING" />
          ))}
        </div>
      )}

      {/* No tournaments */}
      {!autoLoading && inProgress.length === 0 && upcoming.length === 0 && (
        <div className="text-center py-8 bg-white/[0.02] rounded-2xl">
          <div className="text-2xl mb-2"></div>
          <p className="text-white/60 text-sm">No active tournaments in the next 7 days</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-center py-4 text-red-400/80 text-sm">{error}</div>
      )}

      {/* Selected tournament events */}
      {selectedTournament && (
        <div className="space-y-3 border-t border-white/5 pt-6">
          <h2 className="text-white/70 text-sm uppercase tracking-wider font-bold">
            ⚔️ {selectedTournament.name} — Men&apos;s Saber Events
          </h2>

          {loadingEvents && (
            <div className="text-center py-8">
              <div className="w-6 h-6 border-2 border-white/20 border-t-white/50 rounded-full animate-spin mx-auto mb-3" />
              <p className="text-white/60 text-sm">Loading events...</p>
            </div>
          )}

          {!loadingEvents && events.length === 0 && (
            <div className="text-center py-8 bg-white/[0.02] rounded-xl">
              <p className="text-white/60 text-sm">No Men&apos;s Saber events found</p>
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
                  <p className="text-white/60 text-sm mt-1">
                    {evt.date}
                    {evt.total ? ` • ${evt.total} fencers` : ""}
                  </p>
                </div>
                <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
