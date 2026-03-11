"use client";

import { motion } from "framer-motion";
import { TournamentLevel, AgeCategory, levelColors, categoryColors } from "@/data/events";

interface FilterBarProps {
  selectedLevels: Set<TournamentLevel>;
  selectedCategories: Set<AgeCategory>;
  onToggleLevel: (level: TournamentLevel) => void;
  onToggleCategory: (cat: AgeCategory) => void;
  onClearAll: () => void;
}

const levels: TournamentLevel[] = ["International", "National", "SYC", "RYC", "Local"];
const categories: AgeCategory[] = ["Y-8", "Y-10", "Y-12", "Y-14", "Cadet", "Junior", "Div I"];

export default function FilterBar({
  selectedLevels,
  selectedCategories,
  onToggleLevel,
  onToggleCategory,
  onClearAll,
}: FilterBarProps) {
  const hasFilters = selectedLevels.size > 0 || selectedCategories.size > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-30 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5 py-3 sm:py-4 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Category filters */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-white/50 text-xs font-medium uppercase tracking-wider mr-2 min-w-[60px]">
            Age
          </span>
          {categories.map((cat) => {
            const active = selectedCategories.has(cat);
            const bgClass = categoryColors[cat] || "bg-gray-600";
            return (
              <button
                key={cat}
                onClick={() => onToggleCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  active
                    ? `${bgClass} text-white shadow-lg`
                    : "bg-white/5 text-white/50 hover:text-white/50 border border-white/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
          {hasFilters && (
            <button
              onClick={onClearAll}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-red-400/60 hover:text-red-400 transition-colors ml-2"
            >
              ✕ Clear
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
