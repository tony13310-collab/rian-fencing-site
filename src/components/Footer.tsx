"use client";

import pkg from "../../package.json";

const DATA_UPDATED = new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center text-white/50 text-sm space-y-1">
        <p>© {new Date().getFullYear()} Rian Wei</p>
        <p>v{pkg.version} · Updated {DATA_UPDATED}</p>
      </div>
    </footer>
  );
}
