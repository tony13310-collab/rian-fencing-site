"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { eventDetails, EventDetail, makeEventId } from "@/data/eventDetails";
import { allEvents, categoryColors } from "@/data/events";

function PoolSection({ pool }: { pool: NonNullable<EventDetail["pool"]> }) {
  return (
    <section className="mb-8">
      <h3 className="text-lg font-bold text-white/80 mb-4 flex items-center gap-2">
        <span className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400 text-sm font-black">P</span>
        Pool #{pool.poolNumber}
        {pool.seed && (
          <span className="text-white/50 text-sm font-normal ml-2">
            Seeded #{pool.seed}
          </span>
        )}
      </h3>

      {/* Pool bouts */}
      <div className="space-y-2 mb-4">
        {pool.bouts.map((bout, i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-4 py-3 rounded-xl border ${
              bout.win
                ? "bg-green-500/5 border-green-500/15"
                : "bg-red-500/5 border-red-500/15"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black ${
                  bout.win
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {bout.win ? "W" : "L"}
              </span>
              <div>
                <div className="text-white/80 font-medium text-sm">
                  {bout.opponent}
                </div>
                <div className="text-white/50 text-xs">{bout.club}</div>
              </div>
            </div>
            <span
              className={`font-mono font-bold text-lg ${
                bout.win ? "text-green-400" : "text-red-400"
              }`}
            >
              {bout.score}
            </span>
          </div>
        ))}
      </div>

      {/* Pool summary */}
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="bg-white/5 rounded-xl py-3 px-2">
          <div className="text-xl font-black text-white/80">
            {pool.wins}-{pool.losses}
          </div>
          <div className="text-[10px] text-white/50 uppercase tracking-wider">
            Record
          </div>
        </div>
        <div className="bg-white/5 rounded-xl py-3 px-2">
          <div className="text-xl font-black text-white/80">
            {pool.touchesScored}
          </div>
          <div className="text-[10px] text-white/50 uppercase tracking-wider">
            Scored
          </div>
        </div>
        <div className="bg-white/5 rounded-xl py-3 px-2">
          <div className="text-xl font-black text-white/80">
            {pool.touchesReceived}
          </div>
          <div className="text-[10px] text-white/50 uppercase tracking-wider">
            Received
          </div>
        </div>
        <div className="bg-white/5 rounded-xl py-3 px-2">
          <div
            className={`text-xl font-black ${
              pool.indicator > 0
                ? "text-green-400"
                : pool.indicator < 0
                ? "text-red-400"
                : "text-white/50"
            }`}
          >
            {pool.indicator > 0 ? "+" : ""}
            {pool.indicator}
          </div>
          <div className="text-[10px] text-white/50 uppercase tracking-wider">
            Indicator
          </div>
        </div>
      </div>

      {/* Pool result now shown in header */}
    </section>
  );
}

function DESection({ bouts }: { bouts: NonNullable<EventDetail["de"]> }) {
  return (
    <section className="mb-8">
      <h3 className="text-lg font-bold text-white/80 mb-4 flex items-center gap-2">
        <span className="w-8 h-8 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-400 text-sm font-black">
          DE
        </span>
        Direct Elimination
      </h3>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
        <div className="space-y-3">
          {bouts.map((bout, i) => (
            <div key={i} className="relative pl-10">
              <div
                className={`absolute left-4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${
                  bout.win
                    ? "bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.4)]"
                    : "bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.4)]"
                }`}
              />
              <div
                className={`flex items-center justify-between px-4 py-3 rounded-xl border ${
                  bout.win
                    ? "bg-green-500/5 border-green-500/15"
                    : "bg-red-500/5 border-red-500/15"
                }`}
              >
                <div>
                  <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-0.5">
                    {bout.round}
                  </div>
                  <div className="text-white/80 font-medium text-sm">
                    {bout.opponent}
                  </div>
                  <div className="text-white/50 text-xs">{bout.club}</div>
                </div>
                <span
                  className={`font-mono font-bold text-xl ${
                    bout.win ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {bout.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function EventClient() {
  const { id } = useParams<{ id: string }>();
  const detail = eventDetails[id as string];

  const event = allEvents.find(
    (e) => makeEventId(e.date, e.event) === id
  );

  if (!detail && !event) {
    return (
      <main className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white/50 mb-4">
            Event not found
          </h1>
          <Link href="/" className="text-cyan-400 hover:text-cyan-300">
            ← Back to home
          </Link>
        </div>
      </main>
    );
  }

  const d = detail || {
    id: id as string,
    date: event!.date,
    tournament: event!.tournament,
    event: event!.event,
    place: event!.place!,
    total: event!.total!,
    rating: event!.rating,
  };

  const category = event?.category || "Junior";
  const catBg = categoryColors[category] || "bg-gray-600";
  const pct = d.place && d.total ? ((d.place / d.total) * 100).toFixed(1) : null;

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5 px-4 py-3"
      >
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <Link
            href="/"
            className="text-white/40 hover:text-white/70 transition-colors text-sm"
          >
            ← Back
          </Link>
          <span className="text-white/10">|</span>
          <span className="text-white/50 text-sm truncate">
            {d.tournament}
          </span>
        </div>
      </motion.div>

      <div className="max-w-lg mx-auto px-4 py-8">
        {/* Event header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span
              className={`${catBg} px-3 py-1 rounded-lg text-xs font-bold text-white uppercase tracking-wider`}
            >
              {category}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white/90 mb-1">
            {d.tournament}
          </h1>
          {"location" in d && (d as EventDetail).location && (
            <p className="text-white/50 text-xs mb-1">
              📍 {(d as EventDetail).location}
            </p>
          )}
          <p className="text-white/40 text-sm mb-1">{d.event}</p>
          <div className="text-white/45 text-xs mb-6">
            {new Date(d.date).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>

          {/* Final Result + Pool Result side by side */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {/* Final Result */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl py-4 px-3">
              <div className="text-[10px] text-white/50 uppercase tracking-widest mb-2 font-bold">
                Final Result
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-2xl sm:text-3xl font-black gradient-text">
                  {d.place}
                </span>
                <span className="text-white/45 text-lg font-light">
                  / {d.total}
                </span>
              </div>
              {pct && (
                <div className="text-white/50 text-xs mt-1">Top {pct}%</div>
              )}
            </div>

            {/* Pool Result */}
            {detail?.pool && (
              <div className="bg-white/[0.04] border border-cyan-500/15 rounded-2xl py-4 px-3">
                <div className="text-[10px] text-cyan-400/50 uppercase tracking-widest mb-2 font-bold">
                  Pool Result
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl sm:text-3xl font-black text-white/80">
                    {detail.pool.wins}-{detail.pool.losses}
                  </span>
                </div>
                <div className="text-white/50 text-xs mt-1">
                  Seed #{detail.pool.seed} → DE #{detail.pool.deSeed}
                </div>
              </div>
            )}
          </div>

          {d.rating && (
            <div className="inline-block px-4 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/20 mb-2">
              <span className="text-amber-400 font-bold text-sm">
                Rating earned: {d.rating}
              </span>
            </div>
          )}
        </motion.div>

        {/* Pool */}
        {detail?.pool && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <PoolSection pool={detail.pool} />
          </motion.div>
        )}

        {/* DE */}
        {detail?.de && detail.de.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <DESection bouts={detail.de} />
          </motion.div>
        )}

        {/* No detail data yet */}
        {!detail && (
          <div className="text-center py-16 text-white/45">
            <p className="text-4xl mb-4">🤺</p>
            <p className="text-sm">Detailed report coming soon</p>
          </div>
        )}
      </div>
    </main>
  );
}
