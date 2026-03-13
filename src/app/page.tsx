"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Quotes from "@/components/Quotes";
import StatsBar from "@/components/StatsBar";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="noise-overlay">
      <Navbar />
      <Hero />
      <Quotes />
      <StatsBar />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
