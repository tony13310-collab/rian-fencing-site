"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LiveNavbar from "@/components/live/LiveNavbar";
import TournamentSearch from "@/components/live/TournamentSearch";
import EventDashboard from "@/components/live/EventDashboard";

export interface TournamentEvent {
  id: string;
  name: string;
  date: string;
  category: string;
  weapon: string;
  gender: string;
  total?: number;
  source: "ftl" | "fie";
  sourceUrl: string;
}

export interface Tournament {
  id: string;
  name: string;
  location: string;
  dates: string;
  source: "ftl" | "fie";
  events: TournamentEvent[];
}

export interface PoolFencer {
  seed: number;
  name: string;
  club: string;
  country?: string;
  rating?: string;
  strength?: number;
  recentResults?: { event: string; place: string; date: string }[];
  birthYear?: number;
  // Pool scores
  scores?: { win: boolean; score: string }[];
  victories?: number;
  vm?: string;
  ts?: number;
  tr?: number;
  ind?: string;
}

export interface PoolData {
  poolNumber: number;
  strip?: string;
  rianSeed: number;
  fencers: PoolFencer[];
  bouts?: { opponent: string; score: string; win: boolean }[];
  lastRefreshed?: string;
}

export interface DEMatch {
  round: string;
  opponent: string;
  club: string;
  seed?: number;
  score?: string;
  win?: boolean;
  status: "completed" | "upcoming" | "projected";
  analysis?: PoolFencer;
}

export interface DEData {
  rianDESeed: number;
  matches: DEMatch[];
  lastRefreshed?: string;
}

type View = "search" | "event";

export default function LivePage() {
  const [view, setView] = useState<View>("search");
  const [tournament, setTournament] = useState<Tournament | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<TournamentEvent | null>(null);

  const handleTournamentFound = useCallback((t: Tournament) => {
    setTournament(t);
  }, []);

  const handleEventSelect = useCallback((event: TournamentEvent) => {
    setSelectedEvent(event);
    setView("event");
  }, []);

  const handleBack = useCallback(() => {
    setView("search");
    setSelectedEvent(null);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <LiveNavbar
        view={view}
        eventName={selectedEvent?.name}
        onBack={handleBack}
      />
      <main className="pt-20 pb-12 px-4 sm:px-6 max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {view === "search" && (
            <motion.div
              key="search"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <TournamentSearch
                onTournamentFound={handleTournamentFound}
                onEventSelect={handleEventSelect}
                tournament={tournament}
              />
            </motion.div>
          )}
          {view === "event" && selectedEvent && (
            <motion.div
              key="event"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <EventDashboard
                event={selectedEvent}
                tournamentName={tournament?.name || ""}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
