import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ResultsTable from "@/components/ResultsTable";
import RatingChart from "@/components/RatingChart";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="noise-overlay">
      <Navbar />
      <Hero />
      <StatsBar />
      <ResultsTable />
      <div id="rating">
        <RatingChart />
      </div>
      <Achievements />
      <Footer />
    </main>
  );
}
