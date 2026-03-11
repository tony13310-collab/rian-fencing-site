// Complete competition history from FencingTracker
// Rian Wei - 71 events from Nov 2018 to Feb 2026

export type TournamentLevel = "International" | "National" | "SYC" | "RYC" | "Local";
export type AgeCategory = "Y-8" | "Y-10" | "Y-12" | "Y-14" | "Cadet" | "Junior" | "Div I" | "Senior";

export interface CompEvent {
  date: string; // ISO date
  tournament: string;
  event: string;
  category: AgeCategory;
  level: TournamentLevel;
  place: number | null;
  total: number | null;
  rating: string;
  season: string; // e.g. "2025-2026"
  medal?: string;
}

function s(season: string, events: Omit<CompEvent, "season">[]): CompEvent[] {
  return events.map(e => ({ ...e, season }));
}

export const allEvents: CompEvent[] = [
  // === 2025-2026 Season ===
  ...s("2025-2026", [
    { date: "2026-02-15", tournament: "February NAC", event: "Junior Men's Saber", category: "Junior", level: "National", place: 31, total: 203, rating: "" },
    { date: "2026-02-13", tournament: "February NAC", event: "Div I Men's Saber", category: "Div I", level: "National", place: 105, total: 209, rating: "" },
    { date: "2026-01-24", tournament: "January SJCC", event: "Junior Men's Saber", category: "Junior", level: "National", place: 2, total: 117, rating: "A26", medal: "🥈" },
    { date: "2026-01-12", tournament: "Junior Olympics", event: "Junior Men's Saber", category: "Junior", level: "National", place: 11, total: 297, rating: "B26" },
    { date: "2026-01-10", tournament: "Junior Olympics", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 44, total: 277, rating: "" },
    { date: "2025-11-29", tournament: "Cobra Challenge SYC/RCC", event: "Y-14 Men's Saber", category: "Y-14", level: "SYC", place: 1, total: 150, rating: "", medal: "🥇" },
    { date: "2025-11-17", tournament: "November NAC", event: "Y-14 Men's Saber", category: "Y-14", level: "National", place: 7, total: 170, rating: "" },
    { date: "2025-11-16", tournament: "November NAC", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 11, total: 307, rating: "" },
    { date: "2025-11-14", tournament: "November NAC", event: "Div I Men's Saber", category: "Div I", level: "National", place: 94, total: 200, rating: "" },
    { date: "2025-10-05", tournament: "October NAC", event: "Div I Men's Saber", category: "Div I", level: "National", place: 145, total: 216, rating: "" },
    { date: "2025-10-04", tournament: "October NAC", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 59, total: 210, rating: "" },
    { date: "2025-10-03", tournament: "October NAC", event: "Junior Men's Saber", category: "Junior", level: "National", place: 101, total: 296, rating: "" },
    { date: "2025-07-03", tournament: "Summer Nationals", event: "Y-14 Men's Saber", category: "Y-14", level: "National", place: 14, total: 308, rating: "" },
    { date: "2025-06-30", tournament: "Summer Nationals", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 81, total: 282, rating: "" },
    { date: "2025-06-28", tournament: "Summer Nationals", event: "Junior Men's Saber", category: "Junior", level: "National", place: 85, total: 346, rating: "" },
  ]),

  // === 2024-2025 Season ===
  ...s("2024-2025", [
    { date: "2025-05-18", tournament: "May SJCC", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 19, total: 91, rating: "" },
    { date: "2025-05-16", tournament: "May SJCC", event: "Junior Men's Saber", category: "Junior", level: "National", place: 16, total: 114, rating: "" },
    { date: "2025-03-21", tournament: "Fairfax Challenge SYC/RJCC", event: "Y-14 Men's Saber", category: "Y-14", level: "SYC", place: 3, total: 96, rating: "" },
    { date: "2025-03-15", tournament: "Capital Czajkowski Cup #3", event: "Senior Mixed Saber", category: "Senior", level: "Local", place: 3, total: 27, rating: "B25" },
    { date: "2025-03-08", tournament: "March NAC", event: "Y-14 Men's Saber", category: "Y-14", level: "National", place: 66, total: 273, rating: "" },
    { date: "2025-03-07", tournament: "March NAC", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 44, total: 225, rating: "" },
    { date: "2025-02-17", tournament: "Junior Olympics", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 55, total: 286, rating: "" },
    { date: "2025-02-16", tournament: "Junior Olympics", event: "Junior Men's Saber", category: "Junior", level: "National", place: 188, total: 342, rating: "" },
    { date: "2025-01-18", tournament: "Capitol Clash SYC/RCC", event: "Y-14 Men's Saber", category: "Y-14", level: "SYC", place: 1, total: 182, rating: "C25", medal: "🥇" },
    { date: "2025-01-05", tournament: "January NAC", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 93, total: 131, rating: "" },
    { date: "2024-12-07", tournament: "December SJCC", event: "Junior Men's Saber", category: "Junior", level: "National", place: 63, total: 205, rating: "" },
    { date: "2024-12-06", tournament: "December SJCC", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 35, total: 170, rating: "" },
    { date: "2024-12-01", tournament: "Cobra Challenge SYC/RCC/Y8", event: "Y-14 Men's Saber", category: "Y-14", level: "SYC", place: 60, total: 142, rating: "" },
    { date: "2024-11-30", tournament: "Cobra Challenge SYC/RCC/Y8", event: "Cadet Men's Saber", category: "Cadet", level: "SYC", place: 8, total: 104, rating: "" },
    { date: "2024-11-10", tournament: "November NAC", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 149, total: 271, rating: "" },
    { date: "2024-10-12", tournament: "Ben Gutenberg SYC", event: "Y-14 Men's Saber", category: "Y-14", level: "SYC", place: 10, total: 93, rating: "" },
    { date: "2024-09-21", tournament: "River City Regional Rumble", event: "Cadet Men's Saber", category: "Cadet", level: "RYC", place: 17, total: 39, rating: "" },
  ]),

  // === 2023-2024 Season ===
  ...s("2023-2024", [
    { date: "2024-07-05", tournament: "Summer Nationals", event: "Y-12 Men's Saber", category: "Y-12", level: "National", place: 5, total: 230, rating: "" },
    { date: "2024-07-04", tournament: "Summer Nationals", event: "Y-14 Men's Saber", category: "Y-14", level: "National", place: 40, total: 299, rating: "" },
    { date: "2024-07-01", tournament: "Summer Nationals", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 34, total: 266, rating: "" },
    { date: "2024-05-05", tournament: "Mission SYC", event: "Y-12 Men's Saber", category: "Y-12", level: "SYC", place: 3, total: 75, rating: "" },
    { date: "2024-05-04", tournament: "Mission SYC", event: "Y-14 Men's Saber", category: "Y-14", level: "SYC", place: 8, total: 103, rating: "" },
    { date: "2024-04-21", tournament: "NoVA Knights RYC/RJCC", event: "Cadet Men's Saber", category: "Cadet", level: "RYC", place: 1, total: 23, rating: "D24", medal: "🥇" },
    { date: "2024-04-20", tournament: "NoVA Knights RYC/RJCC", event: "Y-14 Men's Saber", category: "Y-14", level: "RYC", place: 17, total: 41, rating: "" },
    { date: "2024-03-16", tournament: "March SJCC", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 90, total: 117, rating: "" },
    { date: "2024-03-03", tournament: "March NAC", event: "Y-12 Men's Saber", category: "Y-12", level: "National", place: 17, total: 192, rating: "" },
    { date: "2024-03-02", tournament: "March NAC", event: "Y-14 Men's Saber", category: "Y-14", level: "National", place: 91, total: 248, rating: "" },
    { date: "2024-01-15", tournament: "Capitol Clash SYC/RCC", event: "Y-12 Men's Saber", category: "Y-12", level: "SYC", place: 3, total: 148, rating: "" },
    { date: "2024-01-13", tournament: "Capitol Clash SYC/RCC", event: "Y-14 Men's Saber", category: "Y-14", level: "SYC", place: 16, total: 185, rating: "E24" },
    { date: "2023-11-24", tournament: "Cobra Challenge SYC/RCC/Y8", event: "Y-12 Men's Saber", category: "Y-12", level: "SYC", place: 5, total: 119, rating: "" },
    { date: "2023-09-24", tournament: "River City Regional Rumble", event: "Y-14 Men's Saber", category: "Y-14", level: "RYC", place: 2, total: 31, rating: "" },
    { date: "2023-09-23", tournament: "River City Regional Rumble", event: "Cadet Men's Saber", category: "Cadet", level: "RYC", place: 16, total: 33, rating: "" },
    { date: "2023-09-03", tournament: "North Texas Roundup SYC/RCC", event: "Y-14 Men's Saber", category: "Y-14", level: "SYC", place: 8, total: 67, rating: "E23" },
    { date: "2023-09-02", tournament: "North Texas Roundup SYC/RCC", event: "Y-12 Men's Saber", category: "Y-12", level: "SYC", place: 11, total: 47, rating: "" },
  ]),

  // === 2022-2023 Season ===
  ...s("2022-2023", [
    { date: "2023-07-08", tournament: "Summer Nationals", event: "Y-12 Men's Saber", category: "Y-12", level: "National", place: 53, total: 215, rating: "" },
    { date: "2023-04-16", tournament: "Fairfax Challenge Spring RYC/RJCC", event: "Y-12 Men's Saber", category: "Y-12", level: "RYC", place: 10, total: 38, rating: "" },
    { date: "2023-03-11", tournament: "Ben Gutenberg Memorial SYC/RCC", event: "Y-12 Men's Saber", category: "Y-12", level: "SYC", place: 10, total: 54, rating: "" },
    { date: "2023-03-05", tournament: "March NAC", event: "Y-12 Men's Saber", category: "Y-12", level: "National", place: 35, total: 172, rating: "" },
    { date: "2023-02-11", tournament: "River City Regional Rumble", event: "Y-12 Men's Saber", category: "Y-12", level: "RYC", place: 7, total: 28, rating: "" },
    { date: "2023-01-14", tournament: "Capitol Clash SYC/RCC", event: "Y-12 Men's Saber", category: "Y-12", level: "SYC", place: 71, total: 122, rating: "" },
    { date: "2022-11-25", tournament: "Cobra Challenge SYC/RCC/Y8", event: "Y-12 Men's Saber", category: "Y-12", level: "SYC", place: 36, total: 118, rating: "" },
    { date: "2022-10-02", tournament: "NoVA Knights RYC/RJCC", event: "Y-12 Men's Saber", category: "Y-12", level: "RYC", place: 3, total: 30, rating: "" },
    { date: "2022-10-01", tournament: "NoVA Knights RYC/RJCC", event: "Y-14 Men's Saber", category: "Y-14", level: "RYC", place: 10, total: 17, rating: "" },
    { date: "2022-09-11", tournament: "Fairfax Challenge Fall RYC/RJCC", event: "Y-12 Men's Saber", category: "Y-12", level: "RYC", place: 3, total: 21, rating: "" },
    { date: "2022-09-03", tournament: "North Texas Roundup SYC/RCC", event: "Y-12 Men's Saber", category: "Y-12", level: "SYC", place: 37, total: 53, rating: "" },
  ]),

  // === 2021-2022 Season ===
  ...s("2021-2022", [
    { date: "2022-07-11", tournament: "Summer Nationals", event: "Y-10 Men's Saber", category: "Y-10", level: "National", place: 12, total: 96, rating: "" },
    { date: "2022-06-12", tournament: "DCFC Youth Challenge", event: "Y-10 Mixed Saber", category: "Y-10", level: "Local", place: 1, total: 10, rating: "", medal: "🥇" },
    { date: "2022-05-15", tournament: "Fairfax Challenge SYC/RJCC", event: "Y-12 Men's Saber", category: "Y-12", level: "SYC", place: 46, total: 61, rating: "" },
    { date: "2022-05-14", tournament: "Fairfax Challenge SYC/RJCC", event: "Y-10 Men's Saber", category: "Y-10", level: "SYC", place: 30, total: 39, rating: "" },
    { date: "2021-06-19", tournament: "Fairfax Challenge Summer", event: "Y-10 Men's Saber", category: "Y-10", level: "RYC", place: 6, total: 13, rating: "" },
    { date: "2021-05-31", tournament: "Cobra Challenge SYC/RCC", event: "Y-10 Men's Saber", category: "Y-10", level: "SYC", place: 44, total: 44, rating: "" },
  ]),

  // === 2019-2020 Season (pre-COVID) ===
  ...s("2019-2020", [
    { date: "2020-01-19", tournament: "Capitol Clash SYC/RCC", event: "Y-8 Men's Saber", category: "Y-8", level: "SYC", place: 3, total: 18, rating: "" },
    { date: "2020-01-18", tournament: "Capitol Clash SYC/RCC", event: "Y-10 Men's Saber", category: "Y-10", level: "SYC", place: 57, total: 76, rating: "" },
    { date: "2019-11-30", tournament: "Cobra Challenge SYC/RCC/Y8", event: "Y-8 Men's Saber", category: "Y-8", level: "SYC", place: 8, total: 22, rating: "" },
    { date: "2019-11-29", tournament: "Cobra Challenge SYC/RCC/Y8", event: "Y-10 Men's Saber", category: "Y-10", level: "SYC", place: 44, total: 65, rating: "" },
  ]),

  // === 2018-2019 Season (first competition!) ===
  ...s("2018-2019", [
    { date: "2018-11-24", tournament: "Cobra Challenge SYC/RCC/Y8", event: "Y-8 Men's Saber", category: "Y-8", level: "SYC", place: 14, total: 18, rating: "" },
  ]),
];

// Season-level metadata (rankings, rating, etc.)
export interface SeasonMeta {
  season: string;
  rating?: string; // Highest rating earned this season
  rankings?: Record<string, number>; // Category → national rank
}

export const seasonMeta: SeasonMeta[] = [
  {
    season: "2025-2026",
    rating: "A26",
    rankings: { "Y-14": 2, "Cadet": 6, "Junior": 50 },
  },
  {
    season: "2024-2025",
    rating: "C25",
    rankings: { "Y-14": 29 },
  },
  {
    season: "2023-2024",
    rating: "E24",
  },
  {
    season: "2022-2023",
    rankings: { "Y-12": 11 },
  },
];

// Season order (newest first)
export const seasonOrder = [
  "2025-2026",
  "2024-2025",
  "2023-2024",
  "2022-2023",
  "2021-2022",
  "2019-2020",
  "2018-2019",
];

// Color schemes
export const levelColors: Record<TournamentLevel, { bg: string; border: string; text: string }> = {
  International: { bg: "from-yellow-500/20 to-amber-600/20", border: "border-yellow-500/30", text: "text-yellow-400" },
  National: { bg: "from-purple-500/15 to-indigo-600/15", border: "border-purple-500/30", text: "text-purple-400" },
  SYC: { bg: "from-cyan-500/15 to-blue-600/15", border: "border-cyan-500/30", text: "text-cyan-400" },
  RYC: { bg: "from-emerald-500/15 to-green-600/15", border: "border-emerald-500/30", text: "text-emerald-400" },
  Local: { bg: "from-gray-500/10 to-slate-600/10", border: "border-gray-500/20", text: "text-gray-400" },
};

export const categoryColors: Record<string, string> = {
  "Y-8": "bg-gray-500",
  "Y-10": "bg-slate-500",
  "Y-12": "bg-emerald-600",
  "Y-14": "bg-green-500",
  "Cadet": "bg-blue-600",
  "Junior": "bg-purple-600",
  "Div I": "bg-red-600",
  "Senior": "bg-amber-600",
};
