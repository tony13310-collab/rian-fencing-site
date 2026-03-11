"use client";

import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-white/20 text-sm">
          © {new Date().getFullYear()} {profile.name} • {profile.club} •{" "}
          {profile.division}
        </p>
        <p className="text-white/10 text-xs mt-2">
          Data sourced from USA Fencing, FencingTimeLive & FencingTracker
        </p>
      </div>
    </footer>
  );
}
