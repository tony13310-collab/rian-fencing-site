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
  deSeed: number | null;
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
      deSeed: 26,
    },
    de: [
      { round: "T128", opponent: "TASIKAS Peter", club: "", score: "15-9", win: true },
      { round: "T64", opponent: "VO Blake", club: "", score: "15-9", win: true },
      { round: "T32", opponent: "YAN William", club: "", score: "15-13", win: true },
      { round: "T16", opponent: "CIEMINS Henry", club: "", score: "15-11", win: true },
      { round: "Quarterfinal", opponent: "WANG Andrew Chang", club: "", score: "15-11", win: true },
      { round: "Semifinal", opponent: "RADJABLI Maximillian", club: "", score: "15-10", win: true },
      { round: "Final", opponent: "CLARK Aram", club: "", score: "Medical Withdraw", win: false },
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
      deSeed: 11,
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
      deSeed: 38,
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
      deSeed: 82,
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
      deSeed: 107,
    },
    de: [
      { round: "T256", opponent: "SADHU Neiyam", club: "", score: "15-14", win: true },
      { round: "T128", opponent: "LI Yiwei", club: "", score: "11-15", win: false },
    ],
  },

  // ====== Cobra Challenge SYC/RCC 2025 (Secaucus, NJ) ======

  "2025-11-29_y-14-men-s-saber": {
    id: "2025-11-29_y-14-men-s-saber",
    date: "2025-11-29",
    tournament: "Cobra Challenge SYC/RCC",
    event: "Y-14 Men's Saber",
    location: "Secaucus, NJ",
    place: 1,
    total: 150,
    pool: {
      poolNumber: 0,
      seed: 1,
      bouts: [
        { opponent: "ROH Jaden", club: "GFA", score: "5-2", win: true },
        { opponent: "MARTIRE Francis", club: "MANHATTANFC", score: "5-1", win: true },
        { opponent: "LIU Jeremy", club: "AFC", score: "5-1", win: true },
        { opponent: "SHANKAR Rahm", club: "SABIO", score: "5-0", win: true },
        { opponent: "KRISHNARASA Aiyann", club: "INTEGRITY", score: "5-0", win: true },
        { opponent: "LEE Jeffrey", club: "TIMMOREHOUSE", score: "5-1", win: true },
      ],
      wins: 6,
      losses: 0,
      touchesScored: 30,
      touchesReceived: 5,
      indicator: 25,
      poolRank: null,
      poolSize: 7,
      deSeed: 1,
    },
    de: [
      { round: "T256", opponent: "BYE", club: "", score: "BYE", win: true },
      { round: "T128", opponent: "GAO Francis", club: "ZETAFENCING", score: "15-5", win: true },
      { round: "T64", opponent: "LLOYD Max", club: "TIMMOREHOUSE", score: "15-12", win: true },
      { round: "T32", opponent: "ROH Jaden", club: "GFA", score: "15-7", win: true },
      { round: "T16", opponent: "BROOKS Theo", club: "CAPITALFA", score: "15-9", win: true },
      { round: "T8", opponent: "DAI Zihou", club: "Z1FENCING", score: "15-12", win: true },
      { round: "Semi", opponent: "BAI Evan", club: "AURAFENCING", score: "15-9", win: true },
      { round: "Final", opponent: "URSU Marcel T.", club: "TIMMOREHOUSE", score: "15-8", win: true },
    ],
  },

  // ====== November NAC 2025 (Fort Worth, TX) ======

  "2025-11-17_y-14-men-s-saber": {
    id: "2025-11-17_y-14-men-s-saber",
    date: "2025-11-17",
    tournament: "November NAC",
    event: "Y-14 Men's Saber",
    location: "Fort Worth, TX",
    place: 7,
    total: 170,
    pool: {
      poolNumber: 0,
      seed: 2,
      bouts: [
        { opponent: "KONG Ethan", club: "SFC", score: "5-2", win: true },
        { opponent: "LEE Nathan Uju", club: "SCFA", score: "5-2", win: true },
        { opponent: "WANG Ryan", club: "AGFC (CA)", score: "5-0", win: true },
        { opponent: "BALAGOPAL Aditya", club: "FFA", score: "5-2", win: true },
        { opponent: "NGO Emerson", club: "EAGLE BLADE", score: "5-4", win: true },
        { opponent: "ROBINSON Ezra", club: "FAODENVER", score: "5-2", win: true },
      ],
      wins: 6,
      losses: 0,
      touchesScored: 30,
      touchesReceived: 12,
      indicator: 18,
      poolRank: null,
      poolSize: 7,
      deSeed: 7,
    },
    de: [
      { round: "T256", opponent: "BYE", club: "", score: "BYE", win: true },
      { round: "T128", opponent: "SRA Nawab", club: "SABIO", score: "15-13", win: true },
      { round: "T64", opponent: "KONDOGI Saivarun", club: "", score: "15-2", win: true },
      { round: "T32", opponent: "BOSITA Brennan", club: "", score: "15-9", win: true },
      { round: "T16", opponent: "GATTO Enzo", club: "", score: "15-8", win: true },
      { round: "T8", opponent: "LI Howard", club: "EAGLE BLADE", score: "9-15", win: false },
    ],
  },

  "2025-11-16_cadet-men-s-saber": {
    id: "2025-11-16_cadet-men-s-saber",
    date: "2025-11-16",
    tournament: "November NAC",
    event: "Cadet Men's Saber",
    location: "Fort Worth, TX",
    place: 11,
    total: 307,
    pool: {
      poolNumber: 0,
      seed: 4,
      bouts: [
        { opponent: "LEVIN Jacob", club: "Z1FENCING", score: "5-2", win: true },
        { opponent: "MCDONALD Finn", club: "DEVLYFC-PA", score: "5-1", win: true },
        { opponent: "KAMURA Kosei", club: "GFA", score: "5-3", win: true },
        { opponent: "LIU Ethan", club: "NELLYA", score: "5-4", win: true },
        { opponent: "TANJGA Luka", club: "MANHATTANFC", score: "5-0", win: true },
        { opponent: "TANI Tino", club: "SCFA", score: "5-4", win: true },
      ],
      wins: 6,
      losses: 0,
      touchesScored: 30,
      touchesReceived: 14,
      indicator: 16,
      poolRank: null,
      poolSize: 7,
      deSeed: 17,
    },
    de: [
      { round: "T256", opponent: "BYE", club: "", score: "BYE", win: true },
      { round: "T128", opponent: "ZHANG Kaixuan", club: "GFA", score: "15-7", win: true },
      { round: "T64", opponent: "YOOK Isaac", club: "TIM MOREHOUSE", score: "15-12", win: true },
      { round: "T32", opponent: "KIM ELIJAH", club: "", score: "15-13", win: true },
      { round: "T16", opponent: "KIM ELIJAH", club: "", score: "9-15", win: false },
    ],
  },

  "2025-11-14_div-i-men-s-saber": {
    id: "2025-11-14_div-i-men-s-saber",
    date: "2025-11-14",
    tournament: "November NAC",
    event: "Div I Men's Saber",
    location: "Fort Worth, TX",
    place: 94,
    total: 200,
    pool: {
      poolNumber: 0,
      seed: 6,
      bouts: [
        { opponent: "YANG Dylan", club: "PREMIERFA", score: "5-1", win: true },
        { opponent: "MICLAUS Justin", club: "NOTREDAME", score: "4-5", win: false },
        { opponent: "GREMILLION Obadiah", club: "CALI", score: "5-2", win: true },
        { opponent: "TIAGI George", club: "ALLEFENCING", score: "0-5", win: false },
        { opponent: "NAMBIAR Navin", club: "GFA", score: "5-1", win: true },
        { opponent: "CHEONG Heonjun", club: "SABIO", score: "4-5", win: false },
      ],
      wins: 3,
      losses: 3,
      touchesScored: 23,
      touchesReceived: 19,
      indicator: 4,
      poolRank: null,
      poolSize: 7,
      deSeed: 85,
    },
    de: [
      { round: "T256", opponent: "BYE", club: "", score: "BYE", win: true },
      { round: "T128", opponent: "HOLZ Lucas", club: "", score: "8-15", win: false },
    ],
  },

  // ====== October NAC 2025 (Salt Lake City, UT) ======

  "2025-10-03_junior-men-s-saber": {
    id: "2025-10-03_junior-men-s-saber",
    date: "2025-10-03",
    tournament: "October NAC",
    event: "Junior Men's Saber",
    location: "Salt Lake City, UT",
    place: 101,
    total: 296,
    pool: {
      poolNumber: 0,
      seed: 5,
      bouts: [
        { opponent: "LI Coby", club: "CAN", score: "5-4", win: true },
        { opponent: "ZHAO Zhiyu(Yogi)", club: "SCFA", score: "5-3", win: true },
        { opponent: "ONG Dylan", club: "INTLFENCECLB", score: "5-3", win: true },
        { opponent: "MATTOO Dhruv", club: "TIMMOREHOUSE", score: "5-2", win: true },
        { opponent: "WANG Nicolas", club: "FAODENVER", score: "3-5", win: false },
        { opponent: "VO Landon", club: "PREMIERFA", score: "2-5", win: false },
      ],
      wins: 4,
      losses: 2,
      touchesScored: 25,
      touchesReceived: 22,
      indicator: 3,
      poolRank: null,
      poolSize: 7,
      deSeed: 106,
    },
    de: [
      { round: "T512", opponent: "BYE", club: "", score: "BYE", win: true },
      { round: "T256", opponent: "KUSHKOV Daniel", club: "", score: "5-15", win: false },
    ],
  },

  "2025-10-04_cadet-men-s-saber": {
    id: "2025-10-04_cadet-men-s-saber",
    date: "2025-10-04",
    tournament: "October NAC",
    event: "Cadet Men's Saber",
    location: "Salt Lake City, UT",
    place: 59,
    total: 210,
    pool: {
      poolNumber: 0,
      seed: 1,
      bouts: [
        { opponent: "CARRINGTON IV William T.", club: "COBRAFC", score: "4-5", win: false },
        { opponent: "LAMTAN Christoffer", club: "MANHATTANFC", score: "4-5", win: false },
        { opponent: "KANG Evan R.", club: "DYNAMOFC", score: "3-5", win: false },
        { opponent: "LIU Daniel", club: "SOL FA", score: "5-2", win: true },
        { opponent: "GREENSTEIN Viktor", club: "LAIFC", score: "5-2", win: true },
        { opponent: "TANG Morgan", club: "HALBERSTADT", score: "5-2", win: true },
      ],
      wins: 3,
      losses: 3,
      touchesScored: 26,
      touchesReceived: 21,
      indicator: 5,
      poolRank: null,
      poolSize: 7,
      deSeed: 93,
    },
    de: [
      { round: "T256", opponent: "BYE", club: "", score: "BYE", win: true },
      { round: "T128", opponent: "BURKE Sam", club: "DENVERFC", score: "15-9", win: true },
      { round: "T64", opponent: "WONG Lucas", club: "PREMIERFA", score: "14-15", win: false },
    ],
  },

  "2025-10-05_div-i-men-s-saber": {
    id: "2025-10-05_div-i-men-s-saber",
    date: "2025-10-05",
    tournament: "October NAC",
    event: "Div I Men's Saber",
    location: "Salt Lake City, UT",
    place: 145,
    total: 216,
    pool: {
      poolNumber: 0,
      seed: 4,
      bouts: [
        { opponent: "CHAVES Matthew J.", club: "FORGE", score: "5-4", win: true },
        { opponent: "ZHU Yuchen (Kevin)", club: "CAN", score: "0-5", win: false },
        { opponent: "JEFFORDS Alexander", club: "SBFA", score: "3-5", win: false },
        { opponent: "FANG Eason", club: "SFA", score: "5-2", win: true },
        { opponent: "HONG Rubin", club: "GFA", score: "2-5", win: false },
        { opponent: "GHAYALOD ansh", club: "TIMMOREHOUSE", score: "5-4", win: true },
      ],
      wins: 3,
      losses: 3,
      touchesScored: 20,
      touchesReceived: 25,
      indicator: -5,
      poolRank: null,
      poolSize: 7,
      deSeed: 125,
    },
    de: [
      { round: "T256", opponent: "SKARBONKIEWICZ Maksymilian", club: "OREGONFA", score: "5-15", win: false },
    ],
  },

  // ====== Summer Nationals 2025 (Salt Lake City, UT) ======

  "2025-07-03_y-14-men-s-saber": {
    id: "2025-07-03_y-14-men-s-saber",
    date: "2025-07-03",
    tournament: "Summer Nationals",
    event: "Y-14 Men's Saber",
    location: "Salt Lake City, UT",
    place: 14,
    total: 308,
    pool: {
      poolNumber: 0,
      seed: 7,
      bouts: [
        { opponent: "FERRIS JR. Michael", club: "PDXFENCING", score: "5-2", win: true },
        { opponent: "WONG Ron", club: "LAFAP", score: "5-2", win: true },
        { opponent: "PEI Kent", club: "Northern California", score: "5-0", win: true },
        { opponent: "BARENBOYM Michael", club: "SHERIDANFA", score: "4-5", win: false },
        { opponent: "SINGH Swaran", club: "PHX", score: "5-2", win: true },
        { opponent: "KANIA Alexander", club: "MIDWESTFC", score: "5-2", win: true },
      ],
      wins: 5,
      losses: 1,
      touchesScored: 29,
      touchesReceived: 13,
      indicator: 16,
      poolRank: null,
      poolSize: 7,
      deSeed: 36,
    },
    de: [
      { round: "T512", opponent: "BYE", club: "", score: "BYE", win: true },
      { round: "T256", opponent: "LEVY Daniel", club: "", score: "15-4", win: true },
      { round: "T128", opponent: "YOOK Isaac", club: "TIM MOREHOUSE", score: "15-5", win: true },
      { round: "T64", opponent: "KIM Yusung", club: "", score: "15-11", win: true },
      { round: "T32", opponent: "CRICOL Damian", club: "", score: "11-15", win: false },
    ],
  },

  "2025-06-28_junior-men-s-saber": {
    id: "2025-06-28_junior-men-s-saber",
    date: "2025-06-28",
    tournament: "Summer Nationals",
    event: "Junior Men's Saber",
    location: "Salt Lake City, UT",
    place: 85,
    total: 346,
    pool: {
      poolNumber: 0,
      seed: 4,
      bouts: [
        { opponent: "ZENG Vito", club: "SPARTAK", score: "5-2", win: true },
        { opponent: "MANESCU Miron", club: "MANHATTANFC", score: "5-2", win: true },
        { opponent: "HJERPE Wade H.", club: "PHX", score: "5-1", win: true },
        { opponent: "CHI Everett", club: "WESTCOASTFA", score: "5-1", win: true },
        { opponent: "TIAGI Daniel", club: "ALLEFENCING", score: "3-5", win: false },
        { opponent: "KAMAL Aidan", club: "NFFC", score: "0-5", win: false },
      ],
      wins: 4,
      losses: 2,
      touchesScored: 23,
      touchesReceived: 16,
      indicator: 7,
      poolRank: null,
      poolSize: 7,
      deSeed: 68,
    },
    de: [
      { round: "T512", opponent: "BYE", club: "", score: "BYE", win: true },
      { round: "T256", opponent: "WANG ANDREW CHANG", club: "", score: "15-10", win: true },
      { round: "T128", opponent: "WONG Lucas", club: "PREMIERFA", score: "10-15", win: false },
    ],
  },

  "2025-06-30_cadet-men-s-saber": {
    id: "2025-06-30_cadet-men-s-saber",
    date: "2025-06-30",
    tournament: "Summer Nationals",
    event: "Cadet Men's Saber",
    location: "Salt Lake City, UT",
    place: 81,
    total: 282,
    pool: {
      poolNumber: 0,
      seed: 6,
      bouts: [
        { opponent: "WINTERSET Mason", club: "SBFA", score: "5-1", win: true },
        { opponent: "VAN ROY Ray", club: "HALBERSTADT", score: "5-4", win: true },
        { opponent: "NARDINI Nathanael P.", club: "COBRAFC", score: "5-2", win: true },
        { opponent: "NAMBIAR Navin", club: "GFA", score: "5-2", win: true },
        { opponent: "GUREVICH Benjamin", club: "ALLEFENCING", score: "3-5", win: false },
      ],
      wins: 4,
      losses: 1,
      touchesScored: 23,
      touchesReceived: 14,
      indicator: 9,
      poolRank: null,
      poolSize: 6,
      deSeed: 59,
    },
    de: [
      { round: "T512", opponent: "BYE", club: "", score: "BYE", win: true },
      { round: "T256", opponent: "KWON Kenneth", club: "", score: "2-15", win: false },
    ],
  },
  "2025-01-18_y-14-men-s-saber": {
    id: "2025-01-18_y-14-men-s-saber",
    date: "2025-01-18",
    tournament: "Capitol Clash SYC/RCC",
    event: "Y-14 Men's Saber",
    location: "Bethesda, MD",
    place: 1,
    total: 182,
    rating: "C25",
    pool: {
      poolNumber: 0,
      seed: 7,
      bouts: [
        { opponent: "LEVIN Jacob", club: "TIMMOREHOUSE", score: "5-2", win: true },
        { opponent: "EARLEY Jack", club: "ZETAFENCING", score: "5-1", win: true },
        { opponent: "TEPLESKY Sasha", club: "NOVAFC", score: "5-0", win: true },
        { opponent: "BENNETT Lachlan", club: "SHERIDANFA", score: "5-2", win: true },
        { opponent: "HU Jayden", club: "MANHATTANFC", score: "5-3", win: true },
        { opponent: "LI Michael", club: "PFC", score: "5-2", win: true },
      ],
      wins: 6,
      losses: 0,
      touchesScored: 30,
      touchesReceived: 10,
      indicator: 20,
      poolRank: null,
      poolSize: 7,
      deSeed: null,
    },
  },
  "2021-05-31_y-10-men-s-saber": {
    id: "2021-05-31_y-10-men-s-saber",
    date: "2021-05-31",
    tournament: "SYC",
    event: "Y-10 Men's Saber",
    location: "Virginia",
    place: 44,
    total: 44,
    rating: "",
    pool: {
      poolNumber: 0,
      seed: null,
      bouts: [
        { opponent: "YOOK Isaac", club: "TIMMOREHOUSE", score: "1-5", win: false },
        { opponent: "CHERNAEV Antonio", club: "LILOVFA", score: "4-5", win: false },
        { opponent: "MARTINSON Torm", club: "MANHATTANFC", score: "1-5", win: false },
        { opponent: "BIVIJI Adam", club: "COBRAFC", score: "1-5", win: false },
        { opponent: "CARRINGTON IV William T.", club: "COBRAFC", score: "0-5", win: false },
        { opponent: "MCDONALD Finn", club: "DEVLYFC-PA", score: "3-5", win: false },
      ],
      wins: 0,
      losses: 6,
      touchesScored: 10,
      touchesReceived: 30,
      indicator: -20,
      poolRank: null,
      poolSize: 7,
      deSeed: null,
    },
    de: [
      { round: "T64", opponent: "DAI Zihou", club: "", score: "2-10", win: false },
    ],
  },
};
