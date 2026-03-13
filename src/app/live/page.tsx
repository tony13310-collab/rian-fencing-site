"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LiveNavbar from "@/components/live/LiveNavbar";
import TournamentSearch from "@/components/live/TournamentSearch";
import PoolDashboard from "@/components/live/PoolDashboard";
import DEDashboard from "@/components/live/DEDashboard";
import { opponents } from "@/data/opponents";

export interface TournamentEvent {
  id: string;
  name: string;
  date: string;
  category: string; // Cadet, Junior, Div I, Y-14, etc.
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
  // From local DB
  h2h?: { wins: number; losses: number; bouts: { date: string; score: string; win: boolean; event: string }[] };
  // From FencingTracker / FIE
  rating?: string;
  strength?: number;
  recentResults?: { event: string; place: string; date: string }[];
  birthYear?: number;
}

export interface PoolData {
  eventId: string;
  eventName: string;
  poolNumber: number;
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
  // Opponent analysis
  analysis?: PoolFencer;
}

export interface DEData {
  eventId: string;
  eventName: string;
  rianDESeed: number;
  matches: DEMatch[];
  lastRefreshed?: string;
}

type View = "search" | "pool" | "de";

export default function LivePage() {
  const [view, setView] = useState<View>("search");
  const [tournament, setTournament] = useState<Tournament | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<TournamentEvent | null>(null);
  const [poolData, setPoolData] = useState<PoolData | null>(null);
  const [deData, setDEData] = useState<DEData | null>(null);

  const handleTournamentFound = useCallback((t: Tournament) => {
    setTournament(t);
  }, []);

  const handleEventSelect = useCallback((event: TournamentEvent, viewType: "pool" | "de") => {
    setSelectedEvent(event);
    setView(viewType);
  }, []);

  const handleBack = useCallback(() => {
    if (view === "pool" || view === "de") {
      setView("search");
      setPoolData(null);
      setDEData(null);
    }
  }, [view]);

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
          {view === "pool" && selectedEvent && (
            <motion.div
              key="pool"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <PoolDashboard
                event={selectedEvent}
                poolData={poolData}
                setPoolData={setPoolData}
              />
            </motion.div>
          )}
          {view === "de" && selectedEvent && (
            <motion.div
              key="de"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <DEDashboard
                event={selectedEvent}
                deData={deData}
                setDeData={setDEData}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
