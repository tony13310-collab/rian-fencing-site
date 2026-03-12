"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Quotes from "@/components/Quotes";
import StatsBar from "@/components/StatsBar";
import FilterBar, { PlacementFilter } from "@/components/FilterBar";
import SeasonTimeline from "@/components/SeasonTimeline";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import OpponentsPreview from "@/components/OpponentsPreview";
import Contact from "@/components/Contact";
import { allEvents, TournamentLevel, AgeCategory } from "@/data/events";

export default function Home() {
  const [selectedLevels, setSelectedLevels] = useState<Set<TournamentLevel>>(
    new Set()
  );
  const [selectedCategories, setSelectedCategories] = useState<
    Set<AgeCategory>
  >(new Set());
  const [selectedPlacements, setSelectedPlacements] = useState<Set<PlacementFilter>>(
    new Set()
  );

  const toggleLevel = (level: TournamentLevel) => {
    setSelectedLevels((prev) => {
      const next = new Set(prev);
      if (next.has(level)) next.delete(level);
      else next.add(level);
      return next;
    });
  };

  const toggleCategory = (cat: AgeCategory) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const togglePlacement = (p: PlacementFilter) => {
    setSelectedPlacements((prev) => {
      const next = new Set(prev);
      if (next.has(p)) next.delete(p);
      else next.add(p);
      return next;
    });
  };

  const clearAll = () => {
    setSelectedLevels(new Set());
    setSelectedCategories(new Set());
    setSelectedPlacements(new Set());
  };

  return (
    <main className="noise-overlay">
      <Navbar />
      <Hero />
      <Quotes />
      <StatsBar />
      <FilterBar
        selectedLevels={selectedLevels}
        selectedCategories={selectedCategories}
        selectedPlacements={selectedPlacements}
        onToggleLevel={toggleLevel}
        onToggleCategory={toggleCategory}
        onTogglePlacement={togglePlacement}
        onClearAll={clearAll}
      />
      <SeasonTimeline
        events={allEvents}
        selectedLevels={selectedLevels}
        selectedCategories={selectedCategories}
        selectedPlacements={selectedPlacements}
      />
      <div id="opponents">
        <OpponentsPreview />
      </div>
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
