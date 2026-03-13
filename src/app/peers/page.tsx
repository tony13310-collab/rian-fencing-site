"use client";

import Navbar from "@/components/Navbar";
import OpponentsPreview from "@/components/OpponentsPreview";
import FencerSearch from "@/components/live/FencerSearch";

export default function PeersPage() {
  return (
    <main className="noise-overlay">
      <Navbar />
      <div className="pt-20" />
      <div id="opponents">
        <OpponentsPreview />
      </div>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <FencerSearch />
      </section>
    </main>
  );
}
