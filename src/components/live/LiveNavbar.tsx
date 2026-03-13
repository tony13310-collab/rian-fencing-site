"use client";

import Link from "next/link";

interface Props {
  view: "search" | "pool" | "de";
  eventName?: string;
  onBack: () => void;
}

export default function LiveNavbar({ view, eventName, onBack }: Props) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
          >
            <img src="/seal.png" alt="" className="h-8 w-auto rounded-sm" />
          </Link>
          <div className="h-6 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-red-400 text-xs font-bold uppercase tracking-wider animate-pulse">
              ● Live
            </span>
            {view !== "search" && eventName && (
              <>
                <span className="text-white/20">|</span>
                <span className="text-white/60 text-sm font-medium truncate max-w-[200px]">
                  {eventName}
                </span>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {view !== "search" && (
            <button
              onClick={onBack}
              className="text-white/40 hover:text-white/70 transition-colors text-sm flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          )}
          <Link
            href="/"
            className="text-white/30 hover:text-white/60 transition-colors text-xs"
          >
            Portfolio →
          </Link>
        </div>
      </div>
    </nav>
  );
}
