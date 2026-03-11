// Per-event detail data for Standard Reports

export interface PoolBout {
  opponent: string;
  club: string;
  score: string; // Full score: "5-3", "4-5"
  win: boolean;
}

export interface PoolResult {
  poolNumber: number;
  seed: number | null;
  bouts: PoolBout[];
  wins: number;
  losses: number;
  touchesScored: number;
  touchesReceived: number;
  indicator: number;
  poolRank: number | null;
  poolSize: number | null;
}

export interface DEBout {
  round: string;
  opponent: string;
  club: string;
  score: string;
  win: boolean;
}

export interface EventDetail {
  id: string;
  date: string;
  tournament: string;
  event: string;
  location: string;
  place: number;
  total: number;
  rating?: string;
  pool?: PoolResult;
  de?: DEBout[];
  ftlEventId?: string;
}

export function makeEventId(date: string, event: string): string {
  return `${date}_${event.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`;
}

export const eventDetails: Record<string, EventDetail> = {
  "2026-01-24_junior-men-s-saber": {
    id: "2026-01-24_junior-men-s-saber",
    date: "2026-01-24",
    tournament: "January SJCC",
    event: "Junior Men's Saber",
    location: "Portland, OR",
    place: 2,
    total: 117,
    rating: "A26",
    pool: {
      poolNumber: 6,
      seed: 6,
      bouts: [
        { opponent: "GERSTMANN Max T.", club: "OFC", score: "4-5", win: false },
        { opponent: "RAJMOHAN Arya", club: "COBRAFC", score: "5-3", win: true },
        { opponent: "BRUM Charles E.", club: "WESTCOAST FA", score: "5-1", win: true },
        { opponent: "LI Alex Y.", club: "SCFA", score: "5-1", win: true },
        { opponent: "KHOTLINE Daniel", club: "DYNAMO FC", score: "4-5", win: false },
        { opponent: "LEE Brady", club: "GFA", score: "5-3", win: true },
      ],
      wins: 4,
      losses: 2,
      touchesScored: 28,
      touchesReceived: 18,
      indicator: 10,
      poolRank: null,
      poolSize: null,
    },
    de: [
      { round: "T128", opponent: "TASIKAS Peter", club: "", score: "15-9", win: true },
      { round: "T64", opponent: "VO Blake", club: "", score: "15-9", win: true },
      { round: "T32", opponent: "YAN William", club: "", score: "15-13", win: true },
      { round: "T16", opponent: "CIEMINS Henry", club: "", score: "15-11", win: true },
      { round: "Quarterfinal", opponent: "WANG Andrew Chang", club: "", score: "15-11", win: true },
      { round: "Semifinal", opponent: "RADJABLI Maximillian", club: "", score: "15-10", win: true },
      { round: "Final", opponent: "CLARK Aram", club: "", score: "4-15", win: false },
    ],
  },

  "2026-01-12_junior-men-s-saber": {
    id: "2026-01-12_junior-men-s-saber",
    date: "2026-01-12",
    tournament: "Junior Olympics",
    event: "Junior Men's Saber",
    location: "Columbus, OH",
    place: 11,
    total: 297,
    rating: "B26",
    pool: {
      poolNumber: 14,
      seed: 73,
      bouts: [
        { opponent: "NARDINI Nathanael P.", club: "TIM MOREHOUSE", score: "5-3", win: true },
        { opponent: "KAMAL Aidan", club: "NFFC", score: "5-0", win: true },
        { opponent: "DOLEV Ido", club: "PDX FENCING", score: "5-2", win: true },
        { opponent: "KHANNA Adamantis", club: "BOSTON FC", score: "5-3", win: true },
        { opponent: "REN James", club: "GFA", score: "5-3", win: true },
        { opponent: "KULKARNI Shreyas", club: "Orange Coast", score: "5-1", win: true },
      ],
      wins: 6,
      losses: 0,
      touchesScored: 30,
      touchesReceived: 12,
      indicator: 18,
      poolRank: null,
      poolSize: null,
    },
    de: [
      { round: "T128", opponent: "KHANNA Adamantis", club: "", score: "15-11", win: true },
      { round: "T64", opponent: "LIU Kevin", club: "", score: "15-12", win: true },
      { round: "T32", opponent: "CHON Collin", club: "", score: "15-13", win: true },
      { round: "T16", opponent: "SU Landon", club: "", score: "14-15", win: false },
    ],
  },

  "2026-01-10_cadet-men-s-saber": {
    id: "2026-01-10_cadet-men-s-saber",
    date: "2026-01-10",
    tournament: "Junior Olympics",
    event: "Cadet Men's Saber",
    location: "Columbus, OH",
    place: 44,
    total: 277,
    pool: {
      poolNumber: 32,
      seed: 32,
      bouts: [
        { opponent: "WANG Justin", club: "ALPHA FA", score: "5-1", win: true },
        { opponent: "GORDON Samuel", club: "INTL FENCE CLB", score: "5-4", win: true },
        { opponent: "VU Mark", club: "BERGEN FC", score: "5-0", win: true },
        { opponent: "KEMP Austin", club: "SABIO", score: "4-5", win: false },
        { opponent: "STAMPER Wyatt", club: "OREGON FA", score: "5-1", win: true },
        { opponent: "WANG Alex", club: "GFA", score: "5-4", win: true },
      ],
      wins: 5,
      losses: 1,
      touchesScored: 29,
      touchesReceived: 15,
      indicator: 14,
      poolRank: null,
      poolSize: null,
    },
    de: [
      { round: "T256", opponent: "MARCELLINO Robert", club: "", score: "15-8", win: true },
      { round: "T128", opponent: "KWON Kenneth", club: "", score: "15-10", win: true },
      { round: "T64", opponent: "LI Ayden", club: "", score: "14-15", win: false },
    ],
  },

  "2026-02-15_junior-men-s-saber": {
    id: "2026-02-15_junior-men-s-saber",
    date: "2026-02-15",
    tournament: "February NAC",
    event: "Junior Men's Saber",
    location: "Minneapolis, MN",
    place: 31,
    total: 203,
    pool: {
      poolNumber: 17,
      seed: 44,
      bouts: [
        { opponent: "LIU Ethan", club: "NELLYA", score: "3-5", win: false },
        { opponent: "CAO Oliver", club: "WESTCOAST FA", score: "4-5", win: false },
        { opponent: "ATANASSOV Vasil V.", club: "North Carolina", score: "4-5", win: false },
        { opponent: "GHISLAIN-FERNANDEZ Alexandre", club: "🇨🇦 CAN", score: "5-1", win: true },
        { opponent: "ALAVE Kyle", club: "TIM MOREHOUSE", score: "5-1", win: true },
        { opponent: "LAUB William", club: "INTL FENCE CLB", score: "5-3", win: true },
      ],
      wins: 3,
      losses: 3,
      touchesScored: 26,
      touchesReceived: 20,
      indicator: 6,
      poolRank: null,
      poolSize: null,
    },
    de: [
      { round: "T128", opponent: "LI Howard", club: "", score: "15-9", win: true },
      { round: "T64", opponent: "HALL Noah", club: "", score: "15-13", win: true },
      { round: "T32", opponent: "WANG Daniel", club: "", score: "14-15", win: false },
    ],
  },

  "2026-02-13_div-i-men-s-saber": {
    id: "2026-02-13_div-i-men-s-saber",
    date: "2026-02-13",
    tournament: "February NAC",
    event: "Div I Men's Saber",
    location: "Minneapolis, MN",
    place: 105,
    total: 209,
    pool: {
      poolNumber: 26,
      seed: 88,
      bouts: [
        { opponent: "LAUB William", club: "INTL FENCE CLB", score: "5-3", win: true },
        { opponent: "WANG Theodore", club: "Z1 FENCING", score: "4-5", win: false },
        { opponent: "ZEWDA Kebron", club: "ROCHESTER FC", score: "5-3", win: true },
        { opponent: "YOOK Isaac", club: "TIM MOREHOUSE", score: "3-5", win: false },
        { opponent: "NG Jonathan", club: "DURKAN FA", score: "5-2", win: true },
        { opponent: "LIM William J.", club: "GFA", score: "0-5", win: false },
      ],
      wins: 3,
      losses: 3,
      touchesScored: 22,
      touchesReceived: 23,
      indicator: -1,
      poolRank: null,
      poolSize: null,
    },
    de: [
      { round: "T256", opponent: "SADHU Neiyam", club: "", score: "15-14", win: true },
      { round: "T128", opponent: "LI Yiwei", club: "", score: "11-15", win: false },
    ],
  },
};
