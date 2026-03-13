"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Quotes from "@/components/Quotes";
import StatsBar from "@/components/StatsBar";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TournamentSearch from "@/components/live/TournamentSearch";
import FencerSearch from "@/components/live/FencerSearch";
import EventDashboard from "@/components/live/EventDashboard";
import type { Tournament, TournamentEvent } from "@/app/live/page";

export default function Home() {
  const [tournament, setTournament] = useState<Tournament | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<TournamentEvent | null>(null);

  const handleTournamentFound = useCallback((t: Tournament) => {
    setTournament(t);
  }, []);

  const handleEventSelect = useCallback((event: TournamentEvent) => {
    setSelectedEvent(event);
  }, []);

  const handleBackToSearch = useCallback(() => {
    setSelectedEvent(null);
    setTournament(null);
  }, []);

  return (
    <main className="noise-overlay">
      <Navbar />
      <Hero />
      <Quotes />
      <StatsBar />

      {/* Live Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-red-400 animate-pulse text-lg">●</span>
          <h2 className="text-2xl font-bold text-white/90">Live & Upcoming</h2>
        </div>

        {selectedEvent ? (
          <div>
            <button
              onClick={handleBackToSearch}
              className="text-white/40 hover:text-white/70 text-sm mb-4 flex items-center gap-1"
            >
              ← Back
            </button>
            <EventDashboard event={selectedEvent} tournamentName={tournament?.name || ""} />
          </div>
        ) : (
          <div className="space-y-8">
            <FencerSearch />
            <TournamentSearch
              onTournamentFound={handleTournamentFound}
              onEventSelect={handleEventSelect}
              tournament={tournament}
            />
          </div>
        )}
      </section>

      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
