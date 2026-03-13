"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import TournamentSearch from "@/components/live/TournamentSearch";
import FencerSearch from "@/components/live/FencerSearch";
import EventDashboard from "@/components/live/EventDashboard";
import Footer from "@/components/Footer";

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
    <main className="noise-overlay min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        <AnimatePresence mode="wait">
          {view === "search" && (
            <motion.div
              key="search"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Scout Section */}
              <section>
                <h2 className="text-lg font-bold text-white/90 uppercase tracking-wider mb-4">
                  🎯 Scout Opponent
                </h2>
                <FencerSearch />
              </section>

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* Tournaments Section */}
              <section>
                <h2 className="text-lg font-bold text-white/90 uppercase tracking-wider mb-4">
                  🏆 Tournaments
                </h2>
                <TournamentSearch
                  onTournamentFound={handleTournamentFound}
                  onEventSelect={handleEventSelect}
                  tournament={tournament}
                />
              </section>
            </motion.div>
          )}

          {view === "event" && selectedEvent && (
            <motion.div
              key="event"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <button
                onClick={handleBack}
                className="text-white/60 hover:text-white text-sm mb-6 flex items-center gap-1"
              >
                ← Back to tournaments
              </button>
              <EventDashboard
                event={selectedEvent}
                tournamentName={tournament?.name || ""}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </main>
  );
}
