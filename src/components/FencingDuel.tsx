"use client";

import { motion } from "framer-motion";

// Two saber fencers dueling animation
export default function FencingDuel() {
  return (
    <div className="relative w-64 h-40 mx-auto mb-6">
      {/* Piste (strip) line */}
      <div className="absolute bottom-6 left-4 right-4 h-[1px] bg-white/10" />

      {/* Left fencer */}
      <motion.div
        className="absolute bottom-6 left-8"
        animate={{
          x: [0, 30, 10, 40, 0],
          scaleX: [1, 1, 1, 1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 0.5,
          ease: "easeInOut",
        }}
      >
        <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
          {/* Head */}
          <circle cx="30" cy="12" r="8" fill="white" opacity="0.7" />
          {/* Mask */}
          <path d="M24 8 L36 8 L36 16 L24 16 Z" fill="white" opacity="0.3" />
          {/* Body */}
          <line x1="30" y1="20" x2="30" y2="48" stroke="white" strokeWidth="3" opacity="0.7" />
          {/* Front arm + saber */}
          <motion.g
            animate={{
              rotate: [0, -30, 10, -45, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 0.5,
              ease: "easeInOut",
            }}
            style={{ originX: "30px", originY: "28px" }}
          >
            <line x1="30" y1="28" x2="55" y2="22" stroke="white" strokeWidth="2.5" opacity="0.7" />
            {/* Saber blade */}
            <line x1="55" y1="22" x2="58" y2="8" stroke="cyan" strokeWidth="1.5" opacity="0.8" />
            <line x1="58" y1="8" x2="55" y2="22" stroke="white" strokeWidth="1" opacity="0.4" />
          </motion.g>
          {/* Back arm */}
          <line x1="30" y1="28" x2="18" y2="38" stroke="white" strokeWidth="2" opacity="0.5" />
          {/* Front leg */}
          <motion.line
            x1="30" y1="48" x2="42" y2="72"
            stroke="white" strokeWidth="2.5" opacity="0.7"
            animate={{ x2: [42, 48, 40, 50, 42] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}
          />
          {/* Back leg */}
          <motion.line
            x1="30" y1="48" x2="16" y2="72"
            stroke="white" strokeWidth="2.5" opacity="0.7"
            animate={{ x2: [16, 20, 14, 22, 16] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}
          />
        </svg>
      </motion.div>

      {/* Right fencer (mirrored) */}
      <motion.div
        className="absolute bottom-6 right-8"
        style={{ transform: "scaleX(-1)" }}
        animate={{
          x: [0, -20, 5, -30, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 0.5,
          ease: "easeInOut",
        }}
      >
        <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
          {/* Head */}
          <circle cx="30" cy="12" r="8" fill="white" opacity="0.5" />
          {/* Mask */}
          <path d="M24 8 L36 8 L36 16 L24 16 Z" fill="white" opacity="0.2" />
          {/* Body */}
          <line x1="30" y1="20" x2="30" y2="48" stroke="white" strokeWidth="3" opacity="0.5" />
          {/* Front arm + saber */}
          <motion.g
            animate={{
              rotate: [0, 15, -20, 30, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 0.5,
              ease: "easeInOut",
            }}
            style={{ originX: "30px", originY: "28px" }}
          >
            <line x1="30" y1="28" x2="55" y2="22" stroke="white" strokeWidth="2.5" opacity="0.5" />
            <line x1="55" y1="22" x2="58" y2="8" stroke="purple" strokeWidth="1.5" opacity="0.6" />
          </motion.g>
          {/* Back arm */}
          <line x1="30" y1="28" x2="18" y2="38" stroke="white" strokeWidth="2" opacity="0.3" />
          {/* Front leg */}
          <motion.line
            x1="30" y1="48" x2="42" y2="72"
            stroke="white" strokeWidth="2.5" opacity="0.5"
            animate={{ x2: [42, 38, 44, 36, 42] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}
          />
          {/* Back leg */}
          <motion.line
            x1="30" y1="48" x2="16" y2="72"
            stroke="white" strokeWidth="2.5" opacity="0.5"
            animate={{ x2: [16, 12, 18, 10, 16] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}
          />
        </svg>
      </motion.div>

      {/* Clash sparks */}
      <motion.div
        className="absolute top-4 left-1/2 -translate-x-1/2"
        animate={{
          opacity: [0, 0, 1, 0, 0],
          scale: [0.5, 0.5, 1.5, 0.5, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className="text-2xl">⚡</div>
      </motion.div>

      {/* Ground glow on clash */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-2 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(0,212,255,0.3), transparent)" }}
        animate={{
          opacity: [0, 0, 0.6, 0, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      />
    </div>
  );
}
