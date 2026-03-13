"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import FilterBar, { PlacementFilter } from "@/components/FilterBar";
import SeasonTimeline from "@/components/SeasonTimeline";
import { allEvents, TournamentLevel, AgeCategory } from "@/data/events";

export default function EventsPage() {
  const [selectedLevels, setSelectedLevels] = useState<Set<TournamentLevel>>(new Set());
  const [selectedCategories, setSelectedCategories] = useState<Set<AgeCategory>>(new Set());
  const [selectedPlacements, setSelectedPlacements] = useState<Set<PlacementFilter>>(new Set());

  const toggleLevel = (level: TournamentLevel) => {
    setSelectedLevels((prev) => {
      const next = new Set(prev);
      next.has(level) ? next.delete(level) : next.add(level);
      return next;
    });
  };

  const toggleCategory = (cat: AgeCategory) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });
  };

  const togglePlacement = (p: PlacementFilter) => {
    setSelectedPlacements((prev) => {
      const next = new Set(prev);
      next.has(p) ? next.delete(p) : next.add(p);
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
      <div className="pt-20" />
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
    </main>
  );
}
