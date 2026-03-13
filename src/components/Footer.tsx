"use client";

import { profile } from "@/data/profile";
import { allEvents } from "@/data/events";
import { opponents } from "@/data/opponents";
import pkg from "../../package.json";

const DATA_UPDATED = "2026-03-13";

export default function Footer() {
  const totalBouts = Object.values(opponents).reduce((sum, o) => sum + o.total, 0);

  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-white/45 text-sm">
          © {new Date().getFullYear()} {profile.name} • {profile.club} •{" "}
          {profile.division}
        </p>
        <p className="text-white/50 text-xs mt-2">
          Data sourced from USA Fencing, FencingTimeLive & FencingTracker
        </p>
        <p className="text-white/50 text-xs mt-1">
          v{pkg.version} • {allEvents.length} events • {Object.keys(opponents).length} opponents • {totalBouts} bouts • Data updated {DATA_UPDATED}
        </p>
      </div>
    </footer>
  );
}
