"use client";

import Navbar from "@/components/Navbar";
import OpponentsPreview from "@/components/OpponentsPreview";
import FencerSearch from "@/components/live/FencerSearch";
import Footer from "@/components/Footer";

export default function PeersPage() {
  return (
    <main className="noise-overlay">
      <Navbar />
      <div className="pt-24 pb-8 max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-white/90 mb-2">Peers</h1>
        <p className="text-white/40 text-sm">Opponent database & head-to-head records</p>
      </div>
      <div id="opponents">
        <OpponentsPreview />
      </div>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <FencerSearch />
      </section>
      <Footer />
    </main>
  );
}
