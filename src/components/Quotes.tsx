"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    text: "Fencing is life compressed into four minutes. Every touch is a choice, every bout a mirror — victory and defeat arriving in the same breath. The strip doesn't lie. It is the truest simulation of the world I know.",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    text: "The sword taught me something no trophy could: you don't become a fencer by learning how to win — you become one by learning how to lose, stand back up, and salute again.",
    accent: "from-purple-400 to-violet-500",
  },
];

export default function Quotes() {
  return (
    <section className="relative py-16 px-6 max-w-4xl mx-auto">
      <div className="space-y-12">
        {quotes.map((q, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="relative"
          >
            {/* Quotation mark */}
            <span
              className={`absolute -top-6 -left-2 text-6xl font-serif bg-gradient-to-r ${q.accent} bg-clip-text text-transparent opacity-30 select-none`}
            >
              &ldquo;
            </span>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed italic pl-8 border-l-2 border-white/10">
              {q.text}
            </p>
            <footer className="mt-3 pl-8 text-sm text-white/25 tracking-wider">
              — Rian Wei
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
