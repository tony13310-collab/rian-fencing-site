"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const ratingToNum: Record<string, number> = {
  U: 0, E23: 1, E24: 2, D23: 3, D24: 4, D25: 5,
  C24: 6, C25: 7, C26: 8, B24: 9, B25: 10, B26: 11,
  A24: 12, A25: 13, A26: 14,
};

export default function RatingChart() {
  const history = profile.ratingHistory;
  const maxVal = Math.max(...history.map((h) => ratingToNum[h.rating] || 0));
  const minVal = Math.min(...history.map((h) => ratingToNum[h.rating] || 0));
  const range = maxVal - minVal || 1;

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-3">
          <span className="gradient-text-gold">Rating Progression</span>
        </h2>
        <p className="text-white/40 text-lg">
          USA Fencing rating over time
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="gradient-border bg-[#12121a] rounded-2xl p-8"
      >
        {/* Chart */}
        <div className="relative h-64 flex items-end gap-2 md:gap-6">
          {history.map((point, i) => {
            const val = ratingToNum[point.rating] || 0;
            const height = ((val - minVal) / range) * 100;
            const isLatest = i === history.length - 1;

            return (
              <motion.div
                key={point.date}
                className="flex-1 flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                {/* Rating label */}
                <span
                  className={`text-sm font-bold ${isLatest ? "text-amber-400 glow-accent" : "text-white/60"}`}
                >
                  {point.rating}
                </span>

                {/* Bar */}
                <motion.div
                  className={`w-full rounded-t-xl ${isLatest ? "bg-gradient-to-t from-amber-600 to-amber-400" : "bg-gradient-to-t from-cyan-900 to-cyan-500"}`}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${Math.max(height, 10)}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: "easeOut",
                  }}
                  style={{ minHeight: "20px" }}
                />

                {/* Date label */}
                <span className="text-xs text-white/50">
                  {new Date(point.date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "2-digit",
                  })}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-8 flex items-center justify-center gap-8 text-sm text-white/40">
          <span>
            E23{" "}
            <span className="text-white/45">→</span>{" "}
            <span className="text-amber-400 font-bold">A26</span> in 3 seasons
          </span>
        </div>
      </motion.div>
    </section>
  );
}
