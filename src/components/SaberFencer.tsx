"use client";

import { motion } from "framer-motion";

// Animated saber fencer: advance + cut (fleche-like attack)
export default function SaberFencer() {
  const dur = 2.5;
  const rep = { duration: dur, repeat: Infinity, repeatDelay: 0.8, ease: "easeInOut" as const };

  return (
    <div className="w-40 h-40 mx-auto mb-6 relative">
      {/* Whole fencer advances forward */}
      <motion.svg
        viewBox="0 0 120 120"
        fill="none"
        className="w-full h-full"
        animate={{ x: [0, 20, 30, 0] }}
        transition={rep}
      >
        {/* Head (mask) */}
        <motion.circle
          cx="50" cy="22" r="10"
          fill="none"
          stroke="white"
          strokeWidth="2"
          opacity="0.8"
          animate={{ cx: [50, 55, 58, 50] }}
          transition={rep}
        />
        {/* Mask grille */}
        <motion.line
          x1="45" y1="18" x2="45" y2="26"
          stroke="white" strokeWidth="0.5" opacity="0.3"
          animate={{ x1: [45, 50, 53, 45], x2: [45, 50, 53, 45] }}
          transition={rep}
        />
        <motion.line
          x1="48" y1="18" x2="48" y2="26"
          stroke="white" strokeWidth="0.5" opacity="0.3"
          animate={{ x1: [48, 53, 56, 48], x2: [48, 53, 56, 48] }}
          transition={rep}
        />

        {/* Body (torso) */}
        <motion.line
          x1="50" y1="32" x2="50" y2="62"
          stroke="white" strokeWidth="3" opacity="0.8"
          animate={{
            x1: [50, 55, 58, 50],
            x2: [50, 52, 54, 50],
          }}
          transition={rep}
        />

        {/* Sword arm — extends forward with STRAIGHT saber */}
        <motion.g
          animate={{
            rotate: [10, -20, -40, 10],
          }}
          transition={rep}
          style={{ originX: "50px", originY: "38px" }}
        >
          {/* Upper arm */}
          <line x1="50" y1="38" x2="68" y2="32" stroke="white" strokeWidth="2.5" opacity="0.8" />
          {/* Forearm */}
          <motion.line
            x1="68" y1="32" x2="82" y2="26"
            stroke="white" strokeWidth="2" opacity="0.8"
            animate={{ x2: [82, 88, 92, 82], y2: [26, 22, 18, 26] }}
            transition={rep}
          />
          {/* Guard (bell guard) */}
          <motion.circle
            cx="82" cy="26" r="3"
            fill="none" stroke="cyan" strokeWidth="1.5" opacity="0.6"
            animate={{ cx: [82, 88, 92, 82], cy: [26, 22, 18, 26] }}
            transition={rep}
          />
          {/* STRAIGHT SABER BLADE */}
          <motion.line
            x1="82" y1="26" x2="110" y2="14"
            stroke="cyan" strokeWidth="2" opacity="0.9"
            animate={{
              x1: [82, 88, 92, 82],
              y1: [26, 22, 18, 26],
              x2: [110, 118, 120, 110],
              y2: [14, 6, 2, 14],
            }}
            transition={rep}
          />
          {/* Blade glow */}
          <motion.line
            x1="82" y1="26" x2="110" y2="14"
            stroke="white" strokeWidth="1" opacity="0.3"
            animate={{
              x1: [82, 88, 92, 82],
              y1: [26, 22, 18, 26],
              x2: [110, 118, 120, 110],
              y2: [14, 6, 2, 14],
            }}
            transition={rep}
          />
        </motion.g>

        {/* Back arm (trailing) */}
        <motion.line
          x1="50" y1="38" x2="35" y2="48"
          stroke="white" strokeWidth="2" opacity="0.4"
          animate={{
            x1: [50, 55, 58, 50],
            x2: [35, 38, 40, 35],
          }}
          transition={rep}
        />

        {/* Front leg (lunging forward) */}
        <motion.line
          x1="50" y1="62" x2="65" y2="95"
          stroke="white" strokeWidth="3" opacity="0.8"
          animate={{
            x1: [50, 52, 54, 50],
            x2: [65, 78, 85, 65],
            y2: [95, 95, 95, 95],
          }}
          transition={rep}
        />
        {/* Front foot */}
        <motion.line
          x1="65" y1="95" x2="72" y2="95"
          stroke="white" strokeWidth="2" opacity="0.6"
          animate={{
            x1: [65, 78, 85, 65],
            x2: [72, 85, 92, 72],
          }}
          transition={rep}
        />

        {/* Back leg (pushing off) */}
        <motion.line
          x1="50" y1="62" x2="30" y2="95"
          stroke="white" strokeWidth="3" opacity="0.8"
          animate={{
            x1: [50, 52, 54, 50],
            x2: [30, 25, 22, 30],
          }}
          transition={rep}
        />
        {/* Back foot */}
        <motion.line
          x1="30" y1="95" x2="24" y2="95"
          stroke="white" strokeWidth="2" opacity="0.6"
          animate={{
            x1: [30, 25, 22, 30],
            x2: [24, 19, 16, 24],
          }}
          transition={rep}
        />

        {/* Floor line */}
        <line x1="5" y1="98" x2="115" y2="98" stroke="white" strokeWidth="0.5" opacity="0.1" />

        {/* Attack slash effect at peak */}
        <motion.line
          x1="100" y1="2" x2="115" y2="12"
          stroke="cyan" strokeWidth="2" opacity="0"
          animate={{ opacity: [0, 0, 0.8, 0] }}
          transition={rep}
        />
        <motion.line
          x1="105" y1="0" x2="112" y2="15"
          stroke="white" strokeWidth="1" opacity="0"
          animate={{ opacity: [0, 0, 0.6, 0] }}
          transition={rep}
        />
      </motion.svg>

      {/* Impact flash at attack peak */}
      <motion.div
        className="absolute top-0 right-0 w-8 h-8 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.6), transparent 70%)" }}
        animate={{
          opacity: [0, 0, 1, 0],
          scale: [0.5, 0.5, 1.5, 0.5],
        }}
        transition={rep}
      />
    </div>
  );
}
