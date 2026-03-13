"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { profile } from "@/data/profile";

export default function Achievements() {
  return (
    <section id="highlights" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">
          <span className="gradient-text">Highlights</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profile.achievements.map((achievement, i) => {
          // Extract rating from text like "• Earned C25" or "Earned D24 rating"
          const ratingMatch = achievement.text.match(/(?:Earned|Renewed)\s+([A-E]\d{2})/);
          const isRatingCard = achievement.emoji === "⬆️" || achievement.emoji === "🔄";
          const ratingLabel = isRatingCard ? ratingMatch?.[1] : null;

          const ratingColors: Record<string, string> = {
            'E': 'from-gray-400 to-gray-500',
            'D': 'from-green-400 to-emerald-500',
            'C': 'from-blue-400 to-cyan-500',
            'B': 'from-purple-400 to-violet-500',
            'A': 'from-yellow-400 to-amber-500',
          };

          const inner = (
            <>
              {ratingLabel ? (
                <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${ratingColors[ratingLabel[0]] || 'from-gray-400 to-gray-500'} flex items-center justify-center`}>
                  <span className="text-black font-black text-xs sm:text-sm">{ratingLabel}</span>
                </div>
              ) : (
                <div className="text-2xl sm:text-3xl">{achievement.emoji}</div>
              )}
              <p className="text-white/80 text-sm sm:text-lg font-medium leading-relaxed">
                {achievement.text.replace(/\s•\s(Earned|Renewed)\s+[A-E]\d{2}/, '')}
                {!isRatingCard && ratingMatch && (
                  <span className={`ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-xs sm:text-xs font-black text-black bg-gradient-to-r ${ratingColors[ratingMatch[1][0]] || 'from-gray-400 to-gray-500'}`}>
                    {ratingMatch[1]}
                  </span>
                )}
              </p>
              {achievement.eventId && (
                <span className="text-white/50 ml-auto text-lg shrink-0">›</span>
              )}
            </>
          );

          const cls = `stat-card gradient-border bg-[#12121a] rounded-2xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4 ${
            achievement.eventId ? "hover:bg-white/[0.03] transition-colors cursor-pointer" : ""
          }`;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {achievement.eventId ? (
                <Link href={`/event/${achievement.eventId}`} className={cls}>
                  {inner}
                </Link>
              ) : (
                <div className={cls}>{inner}</div>
              )}
            </motion.div>
          );
        })}
      </div>


    </section>
  );
}
