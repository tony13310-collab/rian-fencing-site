// Auto-generated H2H opponent database - 405 opponents, 944 bouts
// Generated from FencingTracker history + FTL pool bouts

export interface OpponentBout {
  tournament: string;
  event: string;
  date: string;
  type: string;
  win: boolean;
  score: string;
}

export interface OpponentData {
  wins: number;
  losses: number;
  total: number;
  winRate: number;
  clubs: string[];
  bouts: OpponentBout[];
}

export function getOpponentSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const opponents: Record<string, OpponentData> = {
  "ADEBANKE Micah": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "2"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-8 Men's Saber",
        "date": "November 24, 2018",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      }
    ]
  },
  "ALAVE Kyle": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 33,
    "clubs": [
      "106",
      "17",
      "COBRAFC"
    ],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Junior Men's Saber",
        "date": "February 15, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Capitol Clash SYC, RCC, Veteran ROC & Y8",
        "event": "Y-10 Men's Saber",
        "date": "January 18, 2020",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-8 Men's Saber",
        "date": "November 30, 2019",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      }
    ]
  },
  "ALUF Brendon": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "84",
      "MANHATTANFC"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-12 Men's Saber",
        "date": "July 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-14 Men's Saber",
        "date": "July 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "ANDRES Michael": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "71"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Cadet Men's Saber",
        "date": "October 4, 2025",
        "type": "T128",
        "win": true,
        "score": "15-14"
      }
    ]
  },
  "ANTHONY Devyn V.": {
    "wins": 2,
    "losses": 2,
    "total": 4,
    "winRate": 50,
    "clubs": [
      "3",
      "1",
      "COBRAFC"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Cadet Men's Saber",
        "date": "July 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-10 Men's Saber",
        "date": "November 29, 2019",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-8 Men's Saber",
        "date": "November 24, 2018",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      }
    ]
  },
  "ARCHIBALD Zachary": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "28"
    ],
    "bouts": [
      {
        "tournament": "Mission SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 5, 2024",
        "type": "T32",
        "win": true,
        "score": "15-7"
      }
    ]
  },
  "ATANASSOV Vasil V.": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "9",
      "43"
    ],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Junior Men's Saber",
        "date": "February 15, 2026",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "November NAC",
        "event": "Div I Men's Saber",
        "date": "November 14, 2025",
        "type": "T128",
        "win": false,
        "score": "9-15"
      }
    ]
  },
  "AVERY Marcus": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 100,
    "clubs": [
      "47",
      "34",
      "TIMMOREHOUSE"
    ],
    "bouts": [
      {
        "tournament": "Ben Gutenberg Memorial SYC / RCC",
        "event": "Y-12 Men's Saber",
        "date": "March 11, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 5, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 15, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-10 Men's Saber",
        "date": "May 14, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "AYDOGDU Hakan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "60",
      "DURKANFA"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics & Div 1 NAC",
        "event": "Junior Men's Saber",
        "date": "February 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "Capitol Clash SYC",
        "event": "Y-14 Men's Saber",
        "date": "January 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "BADMUS Joshua": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 100,
    "clubs": [
      "166",
      "21",
      "12"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Cadet Men's Saber",
        "date": "October 4, 2025",
        "type": "T256",
        "win": true,
        "score": "15-9"
      },
      {
        "tournament": "NoVA Knights RYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "October 2, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "RYC",
        "event": "Y-14 Men's Saber",
        "date": "October 1, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Fairfax Challenge Fall RYC/RJCC & Y8 (Non-Regional)",
        "event": "Y-12 Men's Saber",
        "date": "September 11, 2022",
        "type": "T16",
        "win": true,
        "score": "15-8"
      }
    ]
  },
  "BAHK Caleb": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "74",
      "SHERIDANFA"
    ],
    "bouts": [
      {
        "tournament": "March SJCC",
        "event": "Cadet Men's Saber",
        "date": "March 16, 2024",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 3, 2024",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      }
    ]
  },
  "BAI Evan": {
    "wins": 3,
    "losses": 5,
    "total": 8,
    "winRate": 38,
    "clubs": [
      "3",
      "95",
      "16",
      "8",
      "AURAFA"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-14 Men's Saber",
        "date": "November 29, 2025",
        "type": "T4",
        "win": true,
        "score": "15-9"
      },
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 10, 2024",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "Cobra Challenge SYC",
        "event": "Y-14 Men's Saber",
        "date": "October 12, 2024",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-12 Men's Saber",
        "date": "July 5, 2024",
        "type": "T8",
        "win": false,
        "score": "9-15"
      },
      {
        "tournament": "Capitol Clash SYC/RCC",
        "event": "Y-12 Men's Saber",
        "date": "January 14, 2023",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "November 25, 2022",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      },
      {
        "tournament": "USA Fencing National Championships & July Challenge",
        "event": "Y-10 Men's Saber",
        "date": "July 11, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "RYC",
        "event": "Y-10 Men's Saber",
        "date": "June 19, 2021",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "BALAGOPAL Aditya": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "151"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Y-14 Men's Saber",
        "date": "November 17, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "BALE ATMAN": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "42"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "T64",
        "win": true,
        "score": "15-8"
      }
    ]
  },
  "BARENBOYM Michael": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "44",
      "SHERIDANFA"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "BARRY Dave": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 100,
    "clubs": [
      "170",
      "20",
      "SFA"
    ],
    "bouts": [
      {
        "tournament": "December SJCC + Para NAC",
        "event": "Cadet Men's Saber",
        "date": "December 6, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "Cobra Challenge SYC",
        "event": "Y-14 Men's Saber",
        "date": "December 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "NoVA Knights RYC/RJCC& NON-REGIONAL VET",
        "event": "Y-14 Men's Saber",
        "date": "April 20, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 16, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "BEKDJANOV Arthur": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "30"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "T32",
        "win": true,
        "score": "15-11"
      }
    ]
  },
  "BELL III Alfred (Tripp) R.": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "7"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 10, 2026",
        "type": "T64",
        "win": false,
        "score": "6-15"
      }
    ]
  },
  "BENE Paul": {
    "wins": 2,
    "losses": 2,
    "total": 4,
    "winRate": 50,
    "clubs": [
      "17",
      "22"
    ],
    "bouts": [
      {
        "tournament": "NoVA Knights RYC/RJCC& NON-REGIONAL VET",
        "event": "Cadet Men's Saber",
        "date": "April 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "RYC",
        "event": "Y-14 Men's Saber",
        "date": "April 20, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "September 24, 2023",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      },
      {
        "tournament": "RYC",
        "event": "Cadet Men's Saber",
        "date": "September 23, 2023",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      }
    ]
  },
  "BENNETT Lachlan": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 100,
    "clubs": [
      "100",
      "35",
      "SHERIDANFA"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 5, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Mission SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "May 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "BHANDARE Niev": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "12",
      "FAW"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge Fall RYC/RJCC & Y8 (Non-Regional)",
        "event": "Y-12 Men's Saber",
        "date": "September 11, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "September 3, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "BITKOWER Edward": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "14",
      "DCFENCERS"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC, RCC, Veteran ROC & Y8",
        "event": "Y-8 Men's Saber",
        "date": "January 19, 2020",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "January 18, 2020",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "BIVIJI Adam": {
    "wins": 7,
    "losses": 2,
    "total": 9,
    "winRate": 78,
    "clubs": [
      "16",
      "70",
      "29",
      "97",
      "24",
      "21",
      "COBRAFC"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 18, 2025",
        "type": "T16",
        "win": true,
        "score": "15-8"
      },
      {
        "tournament": "Mission SYC",
        "event": "Y-14 Men's Saber",
        "date": "May 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "RYC",
        "event": "Cadet Men's Saber",
        "date": "April 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-12 Men's Saber",
        "date": "January 15, 2024",
        "type": "T32",
        "win": true,
        "score": "15-4"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-12 Men's Saber",
        "date": "November 25, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "October 2, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-10 Men's Saber",
        "date": "May 31, 2021",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "May 31, 2021",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-8 Men's Saber",
        "date": "November 30, 2019",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "BIVIJI Ali": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "3",
      "61",
      "COBRAFC"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 18, 2025",
        "type": "T4",
        "win": true,
        "score": "15-14"
      },
      {
        "tournament": "March NAC and Parafencing National Championships",
        "event": "Y-12 Men's Saber",
        "date": "March 5, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "February 11, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "BLAIR Campbell": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "71"
    ],
    "bouts": [
      {
        "tournament": "Mission SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "May 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "BOLLU Viren": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "3"
    ],
    "bouts": [
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "September 24, 2023",
        "type": "T4",
        "win": true,
        "score": "15-9"
      }
    ]
  },
  "BONGIORNO Wesley": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "27",
      "16"
    ],
    "bouts": [
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "September 24, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "RYC",
        "event": "Cadet Men's Saber",
        "date": "September 23, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "NoVA Knights RYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "October 2, 2022",
        "type": "T16",
        "win": true,
        "score": "15-8"
      }
    ]
  },
  "BOSITA Brennan": {
    "wins": 4,
    "losses": 2,
    "total": 6,
    "winRate": 67,
    "clubs": [
      "26",
      "19",
      "31",
      "12",
      "73",
      "GFA"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Y-14 Men's Saber",
        "date": "November 17, 2025",
        "type": "T32",
        "win": true,
        "score": "15-8"
      },
      {
        "tournament": "North Texas Roundup SYC / RCC",
        "event": "Y-14 Men's Saber",
        "date": "September 3, 2023",
        "type": "T32",
        "win": true,
        "score": "15-12"
      },
      {
        "tournament": "USA Fencing National Championships & July Challenge",
        "event": "Y-10 Men's Saber",
        "date": "July 11, 2022",
        "type": "T32",
        "win": true,
        "score": "10-2"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 15, 2022",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-10 Men's Saber",
        "date": "May 14, 2022",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "Capitol Clash SYC, RCC, Veteran ROC & Y8",
        "event": "Y-10 Men's Saber",
        "date": "January 18, 2020",
        "type": "T128",
        "win": true,
        "score": "10-3"
      }
    ]
  },
  "BRAMLETT Myer": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "16"
    ],
    "bouts": [
      {
        "tournament": "NoVA Knights RYC/RJCC& NON-REGIONAL VET",
        "event": "Cadet Men's Saber",
        "date": "April 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "RYC",
        "event": "Y-14 Men's Saber",
        "date": "April 20, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "BREUER Daniel": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "10"
    ],
    "bouts": [
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "September 24, 2023",
        "type": "T16",
        "win": true,
        "score": "15-8"
      }
    ]
  },
  "BRIMMER Robert (Trey)": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "109",
      "LVFA"
    ],
    "bouts": [
      {
        "tournament": "May SJCC",
        "event": "Junior Men's Saber",
        "date": "May 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Capitol Clash SYC",
        "event": "Y-14 Men's Saber",
        "date": "March 21, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "BROOKS Isaac": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "6"
    ],
    "bouts": [
      {
        "tournament": "DCFC Youth Challenge #4",
        "event": "Y-10 Mixed Saber",
        "date": "June 12, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "May 14, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "BROOKS Theo": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "12",
      "9"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-14 Men's Saber",
        "date": "November 29, 2025",
        "type": "T16",
        "win": true,
        "score": "15-9"
      },
      {
        "tournament": "DCFC Youth Challenge #4",
        "event": "Y-10 Mixed Saber",
        "date": "June 12, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "May 14, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "BROWN Andrew": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "170"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 2, 2024",
        "type": "T256",
        "win": true,
        "score": "15-13"
      }
    ]
  },
  "BRUM Charles E.": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "107"
    ],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "BUCKLEY Owen": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "200",
      "CFAFLLC"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-12 Men's Saber",
        "date": "July 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-14 Men's Saber",
        "date": "July 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "BURENKOV Matthew": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "250",
      "ZETAFENCING"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 8, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 7, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "BUSQUETS Diego": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "5"
    ],
    "bouts": [
      {
        "tournament": "DCFC Youth Challenge #4",
        "event": "Y-10 Mixed Saber",
        "date": "June 12, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "May 14, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "BUYUCCAN Jonah": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "27"
    ],
    "bouts": [
      {
        "tournament": "Capital Czajkowski Cup #3",
        "event": "Senior Mixed Saber",
        "date": "March 15, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "Capital Czajkowski Cup #3",
        "event": "Senior Mixed Saber",
        "date": "March 15, 2025",
        "type": "T32",
        "win": true,
        "score": "15-2"
      },
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 8, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "CAI fungyu": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "5",
      "8"
    ],
    "bouts": [
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "September 24, 2023",
        "type": "T8",
        "win": true,
        "score": "15-13"
      },
      {
        "tournament": "River City Regional Rumble RYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "February 11, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "January 14, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "CAO Donald": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "25"
    ],
    "bouts": [
      {
        "tournament": "North Texas Roundup SYC/RCC",
        "event": "Y-12 Men's Saber",
        "date": "September 3, 2022",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-10 Men's Saber",
        "date": "July 11, 2022",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      }
    ]
  },
  "CAO Oliver": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "29"
    ],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Junior Men's Saber",
        "date": "February 15, 2026",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "CARRINGTON IV William T.": {
    "wins": 0,
    "losses": 3,
    "total": 3,
    "winRate": 0,
    "clubs": [
      "41",
      "2",
      "COBRAFC"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Cadet Men's Saber",
        "date": "October 4, 2025",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-10 Men's Saber",
        "date": "May 31, 2021",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "May 31, 2021",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      }
    ]
  },
  "CHAMBERS Miles": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "5"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-10 Men's Saber",
        "date": "May 14, 2022",
        "type": "T32",
        "win": false,
        "score": "5-10"
      }
    ]
  },
  "CHAN Elliott": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "45",
      "16",
      "PHX"
    ],
    "bouts": [
      {
        "tournament": "May SJCC",
        "event": "Junior Men's Saber",
        "date": "May 16, 2025",
        "type": "T64",
        "win": true,
        "score": "15-4"
      },
      {
        "tournament": "December SJCC + Para NAC",
        "event": "Cadet Men's Saber",
        "date": "December 6, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Cobra Challenge SYC",
        "event": "Y-14 Men's Saber",
        "date": "December 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "CHAN Ewan": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 33,
    "clubs": [
      "60",
      "25",
      "PFA"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-12 Men's Saber",
        "date": "November 24, 2023",
        "type": "T64",
        "win": true,
        "score": "15-8"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 15, 2022",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-10 Men's Saber",
        "date": "May 14, 2022",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      }
    ]
  },
  "CHANG Ethan": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 100,
    "clubs": [
      "33",
      "17"
    ],
    "bouts": [
      {
        "tournament": "NoVA Knights RYC/RJCC& NON-REGIONAL VET",
        "event": "Y-14 Men's Saber",
        "date": "April 20, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 16, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "NoVA Knights RYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "October 2, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "RYC",
        "event": "Y-14 Men's Saber",
        "date": "October 1, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "CHANG Timothy": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 100,
    "clubs": [
      "49",
      "81",
      "TIMMOREHOUSE"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-14 Men's Saber",
        "date": "March 21, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Local",
        "event": "Senior Mixed Saber",
        "date": "March 15, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 10, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "CHATTABOINA Haveesh": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "234",
      "FAODENVER"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics & Div 1 NAC",
        "event": "Cadet Men's Saber",
        "date": "February 17, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "February NAC",
        "event": "Junior Men's Saber",
        "date": "February 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "CHAVES Matthew J.": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "26"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Div I Men's Saber",
        "date": "October 5, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "CHAWLA Abhishek": {
    "wins": 5,
    "losses": 0,
    "total": 5,
    "winRate": 100,
    "clubs": [
      "3",
      "23",
      "15",
      "CAPITALFA"
    ],
    "bouts": [
      {
        "tournament": "NoVA Knights RYC/RJCC& NON-REGIONAL VET",
        "event": "Y-14 Men's Saber",
        "date": "April 20, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 16, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "September 24, 2023",
        "type": "T32",
        "win": true,
        "score": "15-12"
      },
      {
        "tournament": "Fairfax Challenge Fall RYC/RJCC & Y8 (Non-Regional)",
        "event": "Y-12 Men's Saber",
        "date": "September 11, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "September 3, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "CHEN Anson": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "114"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 18, 2025",
        "type": "T128",
        "win": true,
        "score": "15-1"
      }
    ]
  },
  "CHEN Jack": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "62"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 3, 2024",
        "type": "T64",
        "win": true,
        "score": "15-12"
      }
    ]
  },
  "CHEN Jonathan": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "1",
      "15"
    ],
    "bouts": [
      {
        "tournament": "Capital Czajkowski Cup #3",
        "event": "Senior Mixed Saber",
        "date": "March 15, 2025",
        "type": "T4",
        "win": false,
        "score": "13-15"
      },
      {
        "tournament": "Junior Olympics & Div 1 NAC",
        "event": "Cadet Men's Saber",
        "date": "February 17, 2025",
        "type": "T64",
        "win": false,
        "score": "9-15"
      }
    ]
  },
  "CHEN Shawn": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "147",
      "OREGONFA"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 3, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 2, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "CHEN Xing Ji": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "121",
      "CHN"
    ],
    "bouts": [
      {
        "tournament": "March NAC and Parafencing National Championships",
        "event": "Y-12 Men's Saber",
        "date": "March 5, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "February 11, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "CHEONG Heonjun": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "7"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Div I Men's Saber",
        "date": "November 14, 2025",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "CHERNAEV Antonio": {
    "wins": 2,
    "losses": 2,
    "total": 4,
    "winRate": 50,
    "clubs": [
      "66",
      "38",
      "LILOVFA"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-12 Men's Saber",
        "date": "November 24, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "September 24, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-10 Men's Saber",
        "date": "May 31, 2021",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "May 31, 2021",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "CHI Everett": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "278",
      "WESTCOASTFA"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Junior Men's Saber",
        "date": "June 28, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Junior Men's Saber",
        "date": "June 28, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "May NAC",
        "event": "Cadet Men's Saber",
        "date": "May 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "CHOI Clayton": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "86",
      "GFA"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-14 Men's Saber",
        "date": "March 21, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "Local",
        "event": "Senior Mixed Saber",
        "date": "March 15, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "CHON Collin": {
    "wins": 3,
    "losses": 2,
    "total": 5,
    "winRate": 60,
    "clubs": [
      "22",
      "12",
      "65",
      "2",
      "GFA"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Junior Men's Saber",
        "date": "January 12, 2026",
        "type": "T32",
        "win": true,
        "score": "15-13"
      },
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Cadet Men's Saber",
        "date": "July 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 2, 2024",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "North Texas Roundup SYC / RCC",
        "event": "Y-14 Men's Saber",
        "date": "September 3, 2023",
        "type": "T8",
        "win": false,
        "score": "4-15"
      }
    ]
  },
  "CHTERENTAL Alex": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "65",
      "DYNAMOFC"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics & Div 1 NAC",
        "event": "Junior Men's Saber",
        "date": "February 16, 2025",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "Capitol Clash SYC",
        "event": "Y-14 Men's Saber",
        "date": "January 18, 2025",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      }
    ]
  },
  "CIECIEREGA MATTHEW": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "63"
    ],
    "bouts": [
      {
        "tournament": "USA Fencing National Championships & July Challenge",
        "event": "Y-10 Men's Saber",
        "date": "July 11, 2022",
        "type": "T64",
        "win": true,
        "score": "10-7"
      }
    ]
  },
  "CIEMINS Henry": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "14"
    ],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "T16",
        "win": true,
        "score": "15-11"
      }
    ]
  },
  "CLARK Aram": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 33,
    "clubs": [
      "41",
      "3"
    ],
    "bouts": [
      {
        "tournament": "Mission SYC",
        "event": "Y-14 Men's Saber",
        "date": "May 4, 2024",
        "type": "T64",
        "win": true,
        "score": "15-14"
      },
      {
        "tournament": "North Texas Roundup SYC/RCC",
        "event": "Y-12 Men's Saber",
        "date": "September 3, 2022",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-10 Men's Saber",
        "date": "July 11, 2022",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      }
    ]
  },
  "COBIAN Richard": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "168"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Junior Men's Saber",
        "date": "October 3, 2025",
        "type": "T256",
        "win": true,
        "score": "15-13"
      }
    ]
  },
  "COGLIANO Max": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "236"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 4, 2024",
        "type": "T256",
        "win": true,
        "score": "15-8"
      }
    ]
  },
  "CRAIN Bennett": {
    "wins": 2,
    "losses": 2,
    "total": 4,
    "winRate": 50,
    "clubs": [
      "19",
      "10"
    ],
    "bouts": [
      {
        "tournament": "River City Regional Rumble - RYC/RJCC and Y8",
        "event": "Cadet Men's Saber",
        "date": "September 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-12 Men's Saber",
        "date": "July 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Cadet Men's Saber",
        "date": "September 23, 2023",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "September 3, 2023",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "CRAWFORD William": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "55",
      "ZETAFENCING"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 13, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "November 24, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "CRICOL Damian": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "2"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "T16",
        "win": false,
        "score": "9-15"
      }
    ]
  },
  "D'AMELJ Edoardo": {
    "wins": 2,
    "losses": 2,
    "total": 4,
    "winRate": 50,
    "clubs": [
      "10",
      "16"
    ],
    "bouts": [
      {
        "tournament": "Mission SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "May 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "River City Regional Rumble RYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "February 11, 2023",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "January 14, 2023",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "DAI Zihou": {
    "wins": 2,
    "losses": 6,
    "total": 8,
    "winRate": 25,
    "clubs": [
      "6",
      "83",
      "69",
      "34",
      "21",
      "8",
      "TIMMOREHOUSE"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-14 Men's Saber",
        "date": "November 29, 2025",
        "type": "T8",
        "win": true,
        "score": "15-12"
      },
      {
        "tournament": "January NAC",
        "event": "Cadet Men's Saber",
        "date": "January 5, 2025",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "December NAC",
        "event": "Junior Men's Saber",
        "date": "December 7, 2024",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "National Championships & July Challenge (Summer Nationals)",
        "event": "Y-12 Men's Saber",
        "date": "July 8, 2023",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "April 16, 2023",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-12 Men's Saber",
        "date": "November 25, 2022",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-10 Men's Saber",
        "date": "May 31, 2021",
        "type": "T64",
        "win": false,
        "score": "2-10"
      },
      {
        "tournament": "Capitol Clash SYC, RCC, Veteran ROC & Y8",
        "event": "Y-8 Men's Saber",
        "date": "January 19, 2020",
        "type": "T8",
        "win": true,
        "score": "10-4"
      }
    ]
  },
  "DATTILIO Aidan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "73",
      "TIMMOREHOUSE"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-12 Men's Saber",
        "date": "November 24, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "September 24, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "DE PLANELL-LOTTI Pau": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "9",
      "3",
      "TIMMOREHOUSE"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC, RCC, Veteran ROC & Y8",
        "event": "Y-8 Men's Saber",
        "date": "January 19, 2020",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "January 18, 2020",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-8 Men's Saber",
        "date": "November 30, 2019",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "DE SIENA Salvatore": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "35",
      "ESCRIMEURFC"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 10, 2024",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "DEL VECCHIO Nicolas": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "2"
    ],
    "bouts": [
      {
        "tournament": "Capital Czajkowski Cup #3",
        "event": "Senior Mixed Saber",
        "date": "March 15, 2025",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 8, 2025",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      }
    ]
  },
  "DOLEV Ido": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "259"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Junior Men's Saber",
        "date": "January 12, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "DONNELL Cillian": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "3"
    ],
    "bouts": [
      {
        "tournament": "DCFC Youth Challenge #4",
        "event": "Y-10 Mixed Saber",
        "date": "June 12, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "DCFC Youth Challenge #4",
        "event": "Y-10 Mixed Saber",
        "date": "June 12, 2022",
        "type": "T4",
        "win": true,
        "score": "10-2"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "May 14, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "DUMOULIN Gabriel": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "214",
      "CANDLEWOODFC"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics & Div 1 NAC",
        "event": "Junior Men's Saber",
        "date": "February 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "Capitol Clash SYC",
        "event": "Y-14 Men's Saber",
        "date": "January 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "EARLEY Jack": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "147",
      "ZETAFENCING"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 5, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "EYBELMAN Ariel": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "82"
    ],
    "bouts": [
      {
        "tournament": "January NAC",
        "event": "Cadet Men's Saber",
        "date": "January 5, 2025",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "December NAC",
        "event": "Junior Men's Saber",
        "date": "December 7, 2024",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "EYSTER Edison": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "7"
    ],
    "bouts": [
      {
        "tournament": "NoVA Knights RYC/RJCC& NON-REGIONAL VET",
        "event": "Cadet Men's Saber",
        "date": "April 21, 2024",
        "type": "T8",
        "win": true,
        "score": "15-9"
      }
    ]
  },
  "FANG Eason": {
    "wins": 2,
    "losses": 2,
    "total": 4,
    "winRate": 50,
    "clubs": [
      "172",
      "102",
      "117"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Div I Men's Saber",
        "date": "October 5, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "January NAC",
        "event": "Cadet Men's Saber",
        "date": "January 5, 2025",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "December NAC",
        "event": "Junior Men's Saber",
        "date": "December 7, 2024",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 4, 2024",
        "type": "T128",
        "win": true,
        "score": "15-4"
      }
    ]
  },
  "FARBER Jake": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "114",
      "ZETAFENCING"
    ],
    "bouts": [
      {
        "tournament": "March SJCC",
        "event": "Cadet Men's Saber",
        "date": "March 16, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 3, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "FEI Danny": {
    "wins": 2,
    "losses": 3,
    "total": 5,
    "winRate": 40,
    "clubs": [
      "33",
      "58",
      "8"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge Spring RYC/RJCC/ROC",
        "event": "Y-12 Men's Saber",
        "date": "April 16, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "March 11, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "Capitol Clash SYC/RCC",
        "event": "Y-12 Men's Saber",
        "date": "January 14, 2023",
        "type": "T128",
        "win": false,
        "score": "11-15"
      },
      {
        "tournament": "Fairfax Challenge Summer ROC/RJCC/RYC/VET - Reg Re-Opens 12/28",
        "event": "Y-10 Men's Saber",
        "date": "June 19, 2021",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-8 Men's Saber",
        "date": "January 19, 2020",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      }
    ]
  },
  "FENG Brendan": {
    "wins": 6,
    "losses": 1,
    "total": 7,
    "winRate": 86,
    "clubs": [
      "8",
      "46",
      "25",
      "3",
      "7",
      "MIRACLEFC"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 18, 2025",
        "type": "T8",
        "win": true,
        "score": "15-3"
      },
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 13, 2024",
        "type": "T64",
        "win": true,
        "score": "15-11"
      },
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Cadet Men's Saber",
        "date": "September 23, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "September 3, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "River City Regional Rumble RYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "February 11, 2023",
        "type": "T8",
        "win": false,
        "score": "11-15"
      },
      {
        "tournament": "Fairfax Challenge Fall RYC/RJCC & Y8 (Non-Regional)",
        "event": "Y-12 Men's Saber",
        "date": "September 11, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "September 3, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "FERRARO Pietro": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "3"
    ],
    "bouts": [
      {
        "tournament": "Capital Czajkowski Cup #3",
        "event": "Senior Mixed Saber",
        "date": "March 15, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 8, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "FERRIS JR. Michael": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 100,
    "clubs": [
      "198",
      "177",
      "PDXFENCING"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 2, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "January 15, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "FIROOZI Alex": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "63"
    ],
    "bouts": [
      {
        "tournament": "Mission SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "May 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "FIROOZI Sam": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "160",
      "MANHATTANFC"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 7, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "February NAC",
        "event": "Cadet Men's Saber",
        "date": "February 17, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "FIRSTMAN William B.": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "111",
      "NELLYA"
    ],
    "bouts": [
      {
        "tournament": "December SJCC + Para NAC",
        "event": "Junior Men's Saber",
        "date": "December 7, 2024",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "December NAC",
        "event": "Cadet Men's Saber",
        "date": "December 6, 2024",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      }
    ]
  },
  "FORD Aaron": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "14"
    ],
    "bouts": [
      {
        "tournament": "NoVA Knights RYC/RJCC& NON-REGIONAL VET",
        "event": "Cadet Men's Saber",
        "date": "April 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "RYC",
        "event": "Y-14 Men's Saber",
        "date": "April 20, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "FOUX Jonathan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "113",
      "COBRAFC"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-14 Men's Saber",
        "date": "December 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "Cobra Challenge SYC",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "FOWLER Escher": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "17",
      "NAZLYMOVFF"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC, RCC, Veteran ROC & Y8",
        "event": "Y-8 Men's Saber",
        "date": "January 19, 2020",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "January 18, 2020",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "FU BRANDEN": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "46",
      "SBFA"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-12 Men's Saber",
        "date": "January 15, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "January 13, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "GAO Francis": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "123"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-14 Men's Saber",
        "date": "November 29, 2025",
        "type": "T128",
        "win": true,
        "score": "15-5"
      }
    ]
  },
  "GARCIA RODRIGUEZ Juan Pablo": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 100,
    "clubs": [
      "30",
      "19"
    ],
    "bouts": [
      {
        "tournament": "River City Regional Rumble - RYC/RJCC and Y8",
        "event": "Cadet Men's Saber",
        "date": "September 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-12 Men's Saber",
        "date": "July 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "NoVA Knights RYC/RJCC& NON-REGIONAL VET",
        "event": "Cadet Men's Saber",
        "date": "April 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "RYC",
        "event": "Y-14 Men's Saber",
        "date": "April 20, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "GATTO Enzo P.": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "52",
      "SPARTAK"
    ],
    "bouts": [
      {
        "tournament": "May SJCC",
        "event": "Cadet Men's Saber",
        "date": "May 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "May NAC",
        "event": "Junior Men's Saber",
        "date": "May 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "GERSTMANN Max T.": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "54"
    ],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "GHAYALOD ansh": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "185"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Div I Men's Saber",
        "date": "October 5, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "GHISLAIN-FERNANDEZ Alexandre": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "162"
    ],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Junior Men's Saber",
        "date": "February 15, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "GILSHTEYN Jacob": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "20",
      "LAIFC"
    ],
    "bouts": [
      {
        "tournament": "December SJCC + Para NAC",
        "event": "Junior Men's Saber",
        "date": "December 7, 2024",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      },
      {
        "tournament": "December NAC",
        "event": "Cadet Men's Saber",
        "date": "December 6, 2024",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      }
    ]
  },
  "GOLART Dylan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "34"
    ],
    "bouts": [
      {
        "tournament": "River City Regional Rumble - RYC/RJCC and Y8",
        "event": "Cadet Men's Saber",
        "date": "September 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-12 Men's Saber",
        "date": "July 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "GONG zihao": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "6"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 13, 2024",
        "type": "T16",
        "win": false,
        "score": "6-15"
      }
    ]
  },
  "GONZALEZ Jake": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "70"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics & Div 1 NAC",
        "event": "Cadet Men's Saber",
        "date": "February 17, 2025",
        "type": "T128",
        "win": true,
        "score": "15-14"
      }
    ]
  },
  "GONZALEZ Leo": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "34"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge Spring RYC/RJCC/ROC",
        "event": "Y-12 Men's Saber",
        "date": "April 16, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "March 11, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "GORDON Ezekiel": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 33,
    "clubs": [
      "22",
      "35"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge Spring RYC/RJCC/ROC",
        "event": "Y-12 Men's Saber",
        "date": "April 16, 2023",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "March 11, 2023",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-10 Men's Saber",
        "date": "May 14, 2022",
        "type": "T64",
        "win": true,
        "score": "10-3"
      }
    ]
  },
  "GORDON Samuel": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "175",
      "11"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 10, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "Ben Gutenberg SYC - RJCC",
        "event": "Y-14 Men's Saber",
        "date": "October 12, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "RYC",
        "event": "Cadet Men's Saber",
        "date": "September 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "GRABOWSKI Alexander": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 33,
    "clubs": [
      "47",
      "3"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-12 Men's Saber",
        "date": "January 15, 2024",
        "type": "T64",
        "win": true,
        "score": "15-9"
      },
      {
        "tournament": "River City Regional Rumble RYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "February 11, 2023",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "January 14, 2023",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      }
    ]
  },
  "GRABOWSKI Stanley": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "10",
      "15"
    ],
    "bouts": [
      {
        "tournament": "River City Regional Rumble RYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "February 11, 2023",
        "type": "T16",
        "win": true,
        "score": "15-8"
      },
      {
        "tournament": "NoVA Knights RYC/RJCC",
        "event": "Y-14 Men's Saber",
        "date": "October 1, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "September 11, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "GREENSTEIN Viktor": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "64"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Cadet Men's Saber",
        "date": "October 4, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "GREMILLION Obadiah": {
    "wins": 1,
    "losses": 1,
    "total": 2,
    "winRate": 50,
    "clubs": [
      "81",
      "8"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Div I Men's Saber",
        "date": "November 14, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "May SJCC",
        "event": "Junior Men's Saber",
        "date": "May 16, 2025",
        "type": "T16",
        "win": false,
        "score": "7-15"
      }
    ]
  },
  "GRIGORIEV Roman": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "78",
      "PREMIERFA"
    ],
    "bouts": [
      {
        "tournament": "May SJCC",
        "event": "Cadet Men's Saber",
        "date": "May 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "May NAC",
        "event": "Junior Men's Saber",
        "date": "May 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "GU Andrew": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "82",
      "LAFAP"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 8, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 7, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "GU Kevin": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "197",
      "SPARTAK"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Cadet Men's Saber",
        "date": "July 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "GUFFEY Christopher": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "3",
      "GFA"
    ],
    "bouts": [
      {
        "tournament": "March SJCC",
        "event": "Cadet Men's Saber",
        "date": "March 16, 2024",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      },
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 3, 2024",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      }
    ]
  },
  "GUREVICH Benjamin": {
    "wins": 0,
    "losses": 5,
    "total": 5,
    "winRate": 0,
    "clubs": [
      "83",
      "1",
      "7",
      "ALLEFENCING",
      "ALLE"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Cadet Men's Saber",
        "date": "June 30, 2025",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Cadet Men's Saber",
        "date": "June 30, 2025",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "Fairfax Challenge Summer ROC/RJCC/RYC/VET - Reg Re-Opens 12/28",
        "event": "Y-10 Men's Saber",
        "date": "June 19, 2021",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-8 Men's Saber",
        "date": "January 19, 2020",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-8 Men's Saber",
        "date": "November 24, 2018",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      }
    ]
  },
  "HALL Noah": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "1"
    ],
    "bouts": [
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "September 24, 2023",
        "type": "T2",
        "win": false,
        "score": "10-15"
      }
    ]
  },
  "HARDRICK Noah": {
    "wins": 2,
    "losses": 3,
    "total": 5,
    "winRate": 40,
    "clubs": [
      "6",
      "3",
      "13"
    ],
    "bouts": [
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "September 24, 2023",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "RYC",
        "event": "Cadet Men's Saber",
        "date": "September 23, 2023",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "Fairfax Challenge Spring RYC/RJCC/ROC",
        "event": "Y-12 Men's Saber",
        "date": "April 16, 2023",
        "type": "T16",
        "win": false,
        "score": "11-15"
      },
      {
        "tournament": "NoVA Knights RYC/RJCC",
        "event": "Y-14 Men's Saber",
        "date": "October 1, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "September 11, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "HAUSLER Jayden": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "215",
      "H3"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics & Div 1 NAC",
        "event": "Cadet Men's Saber",
        "date": "February 17, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "February NAC",
        "event": "Junior Men's Saber",
        "date": "February 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "HE Jason": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "44"
    ],
    "bouts": [
      {
        "tournament": "Ben Gutenberg Memorial SYC / RCC",
        "event": "Y-12 Men's Saber",
        "date": "March 11, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 5, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "HEATH Isabella": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "3"
    ],
    "bouts": [
      {
        "tournament": "DCFC Youth Challenge #4",
        "event": "Y-10 Mixed Saber",
        "date": "June 12, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "May 14, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "HENDERSON Louis": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "60"
    ],
    "bouts": [
      {
        "tournament": "Ben Gutenberg SYC - RJCC",
        "event": "Y-14 Men's Saber",
        "date": "October 12, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "RYC",
        "event": "Cadet Men's Saber",
        "date": "September 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "HENDERSON Lucas": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "5"
    ],
    "bouts": [
      {
        "tournament": "North Texas Roundup SYC / RCC",
        "event": "Y-14 Men's Saber",
        "date": "September 3, 2023",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "September 2, 2023",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      }
    ]
  },
  "HENRY Cadel": {
    "wins": 5,
    "losses": 1,
    "total": 6,
    "winRate": 83,
    "clubs": [
      "16",
      "212",
      "8",
      "19",
      "FORGE"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-14 Men's Saber",
        "date": "March 21, 2025",
        "type": "T16",
        "win": true,
        "score": "15-5"
      },
      {
        "tournament": "Junior Olympics & Div 1 NAC",
        "event": "Cadet Men's Saber",
        "date": "February 17, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "February NAC",
        "event": "Junior Men's Saber",
        "date": "February 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "River City Regional Rumble - RYC/RJCC and Y8",
        "event": "Cadet Men's Saber",
        "date": "September 21, 2024",
        "type": "T32",
        "win": false,
        "score": "13-15"
      },
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "September 24, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "RYC",
        "event": "Cadet Men's Saber",
        "date": "September 23, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "HENRY Ethan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "198",
      "SCFA"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics & Div 1 NAC",
        "event": "Cadet Men's Saber",
        "date": "February 17, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "February NAC",
        "event": "Junior Men's Saber",
        "date": "February 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "HJERPE Wade H.": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "7",
      "PHX"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Junior Men's Saber",
        "date": "June 28, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Junior Men's Saber",
        "date": "June 28, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "May NAC",
        "event": "Cadet Men's Saber",
        "date": "May 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "HO Alden": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "59",
      "PREMIERFA"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 3, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 2, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "HOLZ Lucas": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "69",
      "PREMIERFA"
    ],
    "bouts": [
      {
        "tournament": "May SJCC",
        "event": "Junior Men's Saber",
        "date": "May 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Capitol Clash SYC",
        "event": "Y-14 Men's Saber",
        "date": "March 21, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "HONG Rubin": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "37"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Div I Men's Saber",
        "date": "October 5, 2025",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      }
    ]
  },
  "HOWERTON Beckett": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "31"
    ],
    "bouts": [
      {
        "tournament": "River City Regional Rumble - RYC/RJCC and Y8",
        "event": "Cadet Men's Saber",
        "date": "September 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-12 Men's Saber",
        "date": "July 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "HU Chris": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "71",
      "AFFA"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics & Div 1 NAC",
        "event": "Cadet Men's Saber",
        "date": "February 17, 2025",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "February NAC",
        "event": "Junior Men's Saber",
        "date": "February 16, 2025",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "HU Harry": {
    "wins": 2,
    "losses": 4,
    "total": 6,
    "winRate": 33,
    "clubs": [
      "34",
      "9",
      "2",
      "NELLYA"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC",
        "event": "Y-12 Men's Saber",
        "date": "January 14, 2023",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "November 25, 2022",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-10 Men's Saber",
        "date": "May 14, 2022",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      },
      {
        "tournament": "Capitol Clash SYC, RCC, Veteran ROC & Y8",
        "event": "Y-8 Men's Saber",
        "date": "January 19, 2020",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "Capitol Clash SYC, RCC, Veteran ROC & Y8",
        "event": "Y-8 Men's Saber",
        "date": "January 19, 2020",
        "type": "T4",
        "win": false,
        "score": "9-10"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "January 18, 2020",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "HU Jayden": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "25",
      "MANHATTANFC"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 5, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "HUANG Alex F.": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "1"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC",
        "event": "Y-12 Men's Saber",
        "date": "January 14, 2023",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "November 25, 2022",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      }
    ]
  },
  "HUCHWAJDA Alex": {
    "wins": 3,
    "losses": 3,
    "total": 6,
    "winRate": 50,
    "clubs": [
      "3",
      "1",
      "2",
      "RESEARCHTRI"
    ],
    "bouts": [
      {
        "tournament": "NoVA Knights RYC/RJCC& NON-REGIONAL VET",
        "event": "Cadet Men's Saber",
        "date": "April 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "NoVA Knights RYC/RJCC& NON-REGIONAL VET",
        "event": "Cadet Men's Saber",
        "date": "April 21, 2024",
        "type": "T4",
        "win": true,
        "score": "15-13"
      },
      {
        "tournament": "RYC",
        "event": "Y-14 Men's Saber",
        "date": "April 20, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "NoVA Knights RYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "October 2, 2022",
        "type": "T4",
        "win": false,
        "score": "10-15"
      },
      {
        "tournament": "Fairfax Challenge Fall RYC/RJCC & Y8 (Non-Regional)",
        "event": "Y-12 Men's Saber",
        "date": "September 11, 2022",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "September 3, 2022",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "HWANG Jayden": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "20",
      "LAFAP"
    ],
    "bouts": [
      {
        "tournament": "May SJCC",
        "event": "Junior Men's Saber",
        "date": "May 16, 2025",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "Capitol Clash SYC",
        "event": "Y-14 Men's Saber",
        "date": "March 21, 2025",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      }
    ]
  },
  "ISAYENKO Daniel": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 33,
    "clubs": [
      "34",
      "56",
      "MANHATTANFC"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-14 Men's Saber",
        "date": "December 1, 2024",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "Cobra Challenge SYC",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "Ben Gutenberg SYC - RJCC",
        "event": "Y-14 Men's Saber",
        "date": "October 12, 2024",
        "type": "T64",
        "win": true,
        "score": "15-12"
      }
    ]
  },
  "IYER Neil": {
    "wins": 5,
    "losses": 0,
    "total": 5,
    "winRate": 100,
    "clubs": [
      "59",
      "125",
      "26",
      "HALBERSTADT"
    ],
    "bouts": [
      {
        "tournament": "December SJCC + Para NAC",
        "event": "Cadet Men's Saber",
        "date": "December 6, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Cobra Challenge SYC",
        "event": "Y-14 Men's Saber",
        "date": "December 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 10, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "North Texas Roundup SYC/RCC",
        "event": "Y-12 Men's Saber",
        "date": "September 3, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-10 Men's Saber",
        "date": "July 11, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "JAVIER Xavier": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "82",
      "NOVAFC"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-12 Men's Saber",
        "date": "January 15, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "January 13, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "JEFFORDS Alexander": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "83"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Div I Men's Saber",
        "date": "October 5, 2025",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      }
    ]
  },
  "JI Johnson": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 33,
    "clubs": [
      "5",
      "14",
      "AIFENCING"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-14 Men's Saber",
        "date": "March 21, 2025",
        "type": "T8",
        "win": true,
        "score": "15-8"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-14 Men's Saber",
        "date": "December 1, 2024",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      },
      {
        "tournament": "Cobra Challenge SYC",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      }
    ]
  },
  "JIA Charles": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "106"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC",
        "event": "Y-12 Men's Saber",
        "date": "January 14, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "November 25, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "JIANG Terence": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "73",
      "AURAFA"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 10, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "JIN Adam": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "21"
    ],
    "bouts": [
      {
        "tournament": "Capital Czajkowski Cup #3",
        "event": "Senior Mixed Saber",
        "date": "March 15, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 8, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "JIN Liangxuan": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "13"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Cadet Men's Saber",
        "date": "October 4, 2025",
        "type": "T64",
        "win": false,
        "score": "5-15"
      }
    ]
  },
  "JIN Louis": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "100"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-12 Men's Saber",
        "date": "November 25, 2022",
        "type": "T128",
        "win": true,
        "score": "15-10"
      }
    ]
  },
  "JOHNSON Leland": {
    "wins": 2,
    "losses": 5,
    "total": 7,
    "winRate": 29,
    "clubs": [
      "58",
      "5",
      "2",
      "DCFENCERS"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 18, 2025",
        "type": "T64",
        "win": true,
        "score": "15-7"
      },
      {
        "tournament": "NoVA Knights RYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "October 2, 2022",
        "type": "T8",
        "win": true,
        "score": "15-12"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 15, 2022",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-10 Men's Saber",
        "date": "May 14, 2022",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "Fairfax Challenge Summer ROC/RJCC/RYC/VET - Reg Re-Opens 12/28",
        "event": "Y-10 Men's Saber",
        "date": "June 19, 2021",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      },
      {
        "tournament": "Fairfax Challenge Summer ROC/RJCC/RYC/VET - Reg Re-Opens 12/28",
        "event": "Y-10 Men's Saber",
        "date": "June 19, 2021",
        "type": "T8",
        "win": false,
        "score": "8-10"
      },
      {
        "tournament": "SYC",
        "event": "Y-8 Men's Saber",
        "date": "January 19, 2020",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      }
    ]
  },
  "JOHNSON Leyton": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "10"
    ],
    "bouts": [
      {
        "tournament": "DCFC Youth Challenge #4",
        "event": "Y-10 Mixed Saber",
        "date": "June 12, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "May 14, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "JOHNSON Waldron": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "14"
    ],
    "bouts": [
      {
        "tournament": "Capital Czajkowski Cup #3",
        "event": "Senior Mixed Saber",
        "date": "March 15, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 8, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "KAMAL Aidan": {
    "wins": 1,
    "losses": 1,
    "total": 2,
    "winRate": 50,
    "clubs": [
      "292",
      "NFFC"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Junior Men's Saber",
        "date": "January 12, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Junior Men's Saber",
        "date": "June 28, 2025",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      }
    ]
  },
  "KAMURA Kosei": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "204",
      "53"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "North Texas Roundup SYC / RCC",
        "event": "Y-14 Men's Saber",
        "date": "September 3, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "September 2, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "KANE Kiran": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "17"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge Spring RYC/RJCC/ROC",
        "event": "Y-12 Men's Saber",
        "date": "April 16, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "March 11, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "KANG Evan R.": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "3"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Cadet Men's Saber",
        "date": "October 4, 2025",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      }
    ]
  },
  "KANG Jeremy": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "7",
      "28"
    ],
    "bouts": [
      {
        "tournament": "North Texas Roundup SYC / RCC",
        "event": "Y-12 Men's Saber",
        "date": "September 2, 2023",
        "type": "T16",
        "win": false,
        "score": "12-15"
      },
      {
        "tournament": "March NAC and Parafencing National Championships",
        "event": "Y-12 Men's Saber",
        "date": "March 5, 2023",
        "type": "T64",
        "win": false,
        "score": "6-15"
      }
    ]
  },
  "KANG Matthew": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "10"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Y-14 Men's Saber",
        "date": "November 17, 2025",
        "type": "T16",
        "win": true,
        "score": "15-9"
      }
    ]
  },
  "KANIA Alexander": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "59",
      "MIDWESTFC"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "KARAVAS Nicholas": {
    "wins": 6,
    "losses": 0,
    "total": 6,
    "winRate": 100,
    "clubs": [
      "60",
      "243",
      "38",
      "15",
      "FAOBOSTON"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 10, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "Cobra Challenge SYC",
        "event": "Y-14 Men's Saber",
        "date": "October 12, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 3, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 2, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "Capitol Clash SYC, RCC, Veteran ROC & Y8",
        "event": "Y-8 Men's Saber",
        "date": "January 19, 2020",
        "type": "T16",
        "win": true,
        "score": "10-3"
      }
    ]
  },
  "KEMP Austin": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "73"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 10, 2026",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "KHANNA Adamantis": {
    "wins": 2,
    "losses": 1,
    "total": 3,
    "winRate": 67,
    "clubs": [
      "109",
      "10"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Junior Men's Saber",
        "date": "January 12, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "Junior Olympics",
        "event": "Junior Men's Saber",
        "date": "January 12, 2026",
        "type": "T128",
        "win": true,
        "score": "15-11"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-14 Men's Saber",
        "date": "December 1, 2024",
        "type": "T64",
        "win": false,
        "score": "14-15"
      }
    ]
  },
  "KHOTLINE Daniel": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "25"
    ],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "KIM ELIJAH": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "8"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 16, 2025",
        "type": "T16",
        "win": false,
        "score": "9-15"
      }
    ]
  },
  "KIM Eric": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "32",
      "HALBERSTADT"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-12 Men's Saber",
        "date": "November 24, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "September 24, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "KIM Ethan": {
    "wins": 0,
    "losses": 5,
    "total": 5,
    "winRate": 0,
    "clubs": [
      "8",
      "2",
      "6",
      "TIMMOREHOUSE"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Cadet Men's Saber",
        "date": "June 30, 2025",
        "type": "T128",
        "win": false,
        "score": "11-15"
      },
      {
        "tournament": "December SJCC + Para NAC",
        "event": "Junior Men's Saber",
        "date": "December 7, 2024",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "December NAC",
        "event": "Cadet Men's Saber",
        "date": "December 6, 2024",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "Local",
        "event": "Y-10 Mixed Saber",
        "date": "June 12, 2022",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      },
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "May 15, 2022",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      }
    ]
  },
  "KIM Yusung": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "109",
      "GFA"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 13, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "November 24, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "KIM seoha": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "1"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge Fall RYC/RJCC & Y8 (Non-Regional)",
        "event": "Y-12 Men's Saber",
        "date": "September 11, 2022",
        "type": "T4",
        "win": false,
        "score": "14-15"
      }
    ]
  },
  "KITSON Chase": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "81",
      "2",
      "GFA"
    ],
    "bouts": [
      {
        "tournament": "May SJCC",
        "event": "Junior Men's Saber",
        "date": "May 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "Capitol Clash SYC",
        "event": "Y-14 Men's Saber",
        "date": "March 21, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 18, 2025",
        "type": "T2",
        "win": true,
        "score": "15-9"
      }
    ]
  },
  "KONDOGI Saivarun": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "52"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Y-14 Men's Saber",
        "date": "November 17, 2025",
        "type": "T64",
        "win": true,
        "score": "15-9"
      }
    ]
  },
  "KONG Ethan": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "163"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Y-14 Men's Saber",
        "date": "November 17, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "KOTVALI Aneesh": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "134"
    ],
    "bouts": [
      {
        "tournament": "December SJCC + Para NAC",
        "event": "Junior Men's Saber",
        "date": "December 7, 2024",
        "type": "T256",
        "win": true,
        "score": "15-12"
      }
    ]
  },
  "KOVACHEV Martin": {
    "wins": 1,
    "losses": 1,
    "total": 2,
    "winRate": 50,
    "clubs": [
      "16",
      "79"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 8, 2025",
        "type": "T128",
        "win": false,
        "score": "12-15"
      },
      {
        "tournament": "National Championships & July Challenge (Summer Nationals)",
        "event": "Y-12 Men's Saber",
        "date": "July 8, 2023",
        "type": "T128",
        "win": true,
        "score": "15-7"
      }
    ]
  },
  "KOVALEV Daniil N.": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "11",
      "WESTCOASTFA"
    ],
    "bouts": [
      {
        "tournament": "May SJCC",
        "event": "Cadet Men's Saber",
        "date": "May 18, 2025",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "May NAC",
        "event": "Junior Men's Saber",
        "date": "May 16, 2025",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      }
    ]
  },
  "KOZLOV Lucas": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 33,
    "clubs": [
      "7",
      "95",
      "DURKANFA"
    ],
    "bouts": [
      {
        "tournament": "Mission SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 5, 2024",
        "type": "T8",
        "win": true,
        "score": "15-12"
      },
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 2, 2024",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "January 15, 2024",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      }
    ]
  },
  "KRISHNARASA Aiyann": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "139"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-14 Men's Saber",
        "date": "November 29, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "KROON Landon": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "57",
      "SBFA"
    ],
    "bouts": [
      {
        "tournament": "March NAC and Parafencing National Championships",
        "event": "Y-12 Men's Saber",
        "date": "March 5, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "February 11, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "KU Collin": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "173"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics & Div 1 NAC",
        "event": "Cadet Men's Saber",
        "date": "February 17, 2025",
        "type": "T256",
        "win": true,
        "score": "15-10"
      }
    ]
  },
  "KULKARNI Shreyas": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "229"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Junior Men's Saber",
        "date": "January 12, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "KUMAR Arjun": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "17"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "T32",
        "win": true,
        "score": "15-14"
      }
    ]
  },
  "KUMAR Avinash": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "209",
      "25",
      "DYNAMOFC"
    ],
    "bouts": [
      {
        "tournament": "National Championships & July Challenge (Summer Nationals)",
        "event": "Y-12 Men's Saber",
        "date": "July 8, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "April 16, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Ben Gutenberg Memorial SYC / RCC",
        "event": "Y-12 Men's Saber",
        "date": "March 11, 2023",
        "type": "T32",
        "win": true,
        "score": "15-5"
      }
    ]
  },
  "KUSHKOV Michael": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "51"
    ],
    "bouts": [
      {
        "tournament": "USA Fencing National Championships & July Challenge",
        "event": "Y-10 Men's Saber",
        "date": "July 11, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "RYC",
        "event": "Y-10 Men's Saber",
        "date": "June 19, 2021",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "KWON Kenneth": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "93"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 10, 2026",
        "type": "T128",
        "win": true,
        "score": "15-10"
      }
    ]
  },
  "LAM Austin": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "187",
      "TTFA"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-12 Men's Saber",
        "date": "July 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-14 Men's Saber",
        "date": "July 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "LAMTAN Christoffer": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "125"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Cadet Men's Saber",
        "date": "October 4, 2025",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "LAUB William": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "147",
      "61"
    ],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Junior Men's Saber",
        "date": "February 15, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "February NAC",
        "event": "Div I Men's Saber",
        "date": "February 13, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "LEE Aiden": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "128"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-12 Men's Saber",
        "date": "January 15, 2024",
        "type": "T128",
        "win": true,
        "score": "15-1"
      }
    ]
  },
  "LEE Andrew": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "45",
      "MANHATTANFC"
    ],
    "bouts": [
      {
        "tournament": "March SJCC",
        "event": "Cadet Men's Saber",
        "date": "March 16, 2024",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      },
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 3, 2024",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      }
    ]
  },
  "LEE Brady": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "61"
    ],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "LEE Brendan": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "109"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 3, 2024",
        "type": "T128",
        "win": true,
        "score": "15-11"
      }
    ]
  },
  "LEE Ezra": {
    "wins": 6,
    "losses": 0,
    "total": 6,
    "winRate": 100,
    "clubs": [
      "26",
      "25",
      "59",
      "NOVAFC"
    ],
    "bouts": [
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "September 24, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "RYC",
        "event": "Cadet Men's Saber",
        "date": "September 23, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "NoVA Knights RYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "October 2, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "RYC",
        "event": "Y-14 Men's Saber",
        "date": "October 1, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Local",
        "event": "Y-10 Mixed Saber",
        "date": "June 12, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "May 15, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "LEE Gordon": {
    "wins": 7,
    "losses": 0,
    "total": 7,
    "winRate": 100,
    "clubs": [
      "14",
      "17",
      "12",
      "CAPITALFA"
    ],
    "bouts": [
      {
        "tournament": "NoVA Knights RYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "October 2, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "RYC",
        "event": "Y-14 Men's Saber",
        "date": "October 1, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Fairfax Challenge Fall RYC/RJCC & Y8 (Non-Regional)",
        "event": "Y-12 Men's Saber",
        "date": "September 11, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "September 3, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Fairfax Challenge Summer ROC/RJCC/RYC/VET - Reg Re-Opens 12/28",
        "event": "Y-10 Men's Saber",
        "date": "June 19, 2021",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "Fairfax Challenge Summer ROC/RJCC/RYC/VET - Reg Re-Opens 12/28",
        "event": "Y-10 Men's Saber",
        "date": "June 19, 2021",
        "type": "T16",
        "win": true,
        "score": "10-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-8 Men's Saber",
        "date": "January 19, 2020",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "LEE Jeffrey": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "131"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-14 Men's Saber",
        "date": "November 29, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "LEE Nathan Uju": {
    "wins": 1,
    "losses": 1,
    "total": 2,
    "winRate": 50,
    "clubs": [
      "22",
      "7"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Y-14 Men's Saber",
        "date": "November 17, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 3, 2024",
        "type": "T32",
        "win": false,
        "score": "11-15"
      }
    ]
  },
  "LEE Shane Gunn": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "71"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-14 Men's Saber",
        "date": "December 1, 2024",
        "type": "T128",
        "win": true,
        "score": "15-2"
      }
    ]
  },
  "LEVIN Jacob": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "250",
      "48",
      "TIMMOREHOUSE"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 5, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "LEVY Daniel": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "97"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "T128",
        "win": true,
        "score": "15-5"
      }
    ]
  },
  "LI AYDEN": {
    "wins": 1,
    "losses": 1,
    "total": 2,
    "winRate": 50,
    "clubs": [
      "16",
      "28"
    ],
    "bouts": [
      {
        "tournament": "North Texas Roundup SYC / RCC",
        "event": "Y-14 Men's Saber",
        "date": "September 3, 2023",
        "type": "T16",
        "win": true,
        "score": "15-14"
      },
      {
        "tournament": "North Texas Roundup SYC/RCC",
        "event": "Y-12 Men's Saber",
        "date": "September 3, 2022",
        "type": "T64",
        "win": false,
        "score": "8-15"
      }
    ]
  },
  "LI Alex Y.": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "48"
    ],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "LI Coby": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "265"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Junior Men's Saber",
        "date": "October 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "LI Howard": {
    "wins": 1,
    "losses": 4,
    "total": 5,
    "winRate": 20,
    "clubs": [
      "71",
      "1",
      "38",
      "3"
    ],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Junior Men's Saber",
        "date": "February 15, 2026",
        "type": "T128",
        "win": true,
        "score": "15-9"
      },
      {
        "tournament": "November NAC",
        "event": "Y-14 Men's Saber",
        "date": "November 17, 2025",
        "type": "T8",
        "win": false,
        "score": "6-15"
      },
      {
        "tournament": "January NAC",
        "event": "Cadet Men's Saber",
        "date": "January 5, 2025",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "December NAC",
        "event": "Junior Men's Saber",
        "date": "December 7, 2024",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "USA Fencing National Championships & July Challenge",
        "event": "Y-10 Men's Saber",
        "date": "July 11, 2022",
        "type": "T16",
        "win": false,
        "score": "4-10"
      }
    ]
  },
  "LI Michael": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 100,
    "clubs": [
      "161",
      "122",
      "PFC"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 8, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 7, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 5, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "LI Ryan": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 100,
    "clubs": [
      "52",
      "26",
      "LAGUNAFC"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-12 Men's Saber",
        "date": "July 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-14 Men's Saber",
        "date": "July 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "North Texas Roundup SYC / RCC",
        "event": "Y-12 Men's Saber",
        "date": "September 2, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-12 Men's Saber",
        "date": "July 8, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "LI Yidong A.": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "51",
      "LAGUNAFC"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 7, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "February NAC",
        "event": "Cadet Men's Saber",
        "date": "February 17, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "LIANG Preston": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "110",
      "263",
      "SBFA"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-12 Men's Saber",
        "date": "July 5, 2024",
        "type": "T128",
        "win": true,
        "score": "15-10"
      },
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Cadet Men's Saber",
        "date": "July 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "LIAO Sirui": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "115",
      "MIRACLEFC"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-14 Men's Saber",
        "date": "December 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "Cobra Challenge SYC",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "LIEBOWITZ Carson": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "34",
      "MANHATTANFC"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      },
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 10, 2024",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      }
    ]
  },
  "LIM JUWANA Maximilian": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "66",
      "BERGENFC"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-12 Men's Saber",
        "date": "January 15, 2024",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "January 13, 2024",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      }
    ]
  },
  "LIM Kai": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "118"
    ],
    "bouts": [
      {
        "tournament": "December SJCC + Para NAC",
        "event": "Cadet Men's Saber",
        "date": "December 6, 2024",
        "type": "T128",
        "win": true,
        "score": "15-8"
      }
    ]
  },
  "LIM William J.": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "34"
    ],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Div I Men's Saber",
        "date": "February 13, 2026",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      }
    ]
  },
  "LIN Alex": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "42"
    ],
    "bouts": [
      {
        "tournament": "North Texas Roundup SYC / RCC",
        "event": "Y-14 Men's Saber",
        "date": "September 3, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "September 2, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "LIN Brendan": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "14",
      "102",
      "COBRAFC"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-12 Men's Saber",
        "date": "January 15, 2024",
        "type": "T16",
        "win": true,
        "score": "15-9"
      },
      {
        "tournament": "National Championships & July Challenge (Summer Nationals)",
        "event": "Y-12 Men's Saber",
        "date": "July 8, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "April 16, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "LIN Maxim": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "22"
    ],
    "bouts": [
      {
        "tournament": "January NAC",
        "event": "Cadet Men's Saber",
        "date": "January 5, 2025",
        "type": "T128",
        "win": false,
        "score": "9-15"
      }
    ]
  },
  "LIN Philip T.": {
    "wins": 2,
    "losses": 2,
    "total": 4,
    "winRate": 50,
    "clubs": [
      "59",
      "28",
      "STAMFORDFC"
    ],
    "bouts": [
      {
        "tournament": "March SJCC",
        "event": "Cadet Men's Saber",
        "date": "March 16, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 3, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Capitol Clash SYC, RCC, Veteran ROC & Y8",
        "event": "Y-10 Men's Saber",
        "date": "January 18, 2020",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-8 Men's Saber",
        "date": "November 30, 2019",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      }
    ]
  },
  "LIU Aaron": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 100,
    "clubs": [
      "89",
      "5",
      "NELLYA"
    ],
    "bouts": [
      {
        "tournament": "May SJCC",
        "event": "Junior Men's Saber",
        "date": "May 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "Capitol Clash SYC",
        "event": "Y-14 Men's Saber",
        "date": "March 21, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "Fairfax Challenge Summer ROC/RJCC/RYC/VET - Reg Re-Opens 12/28",
        "event": "Y-10 Men's Saber",
        "date": "June 19, 2021",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "SYC",
        "event": "Y-8 Men's Saber",
        "date": "January 19, 2020",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "LIU Daniel": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "124"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Cadet Men's Saber",
        "date": "October 4, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "LIU ERIC": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "24"
    ],
    "bouts": [
      {
        "tournament": "Mission SYC",
        "event": "Y-14 Men's Saber",
        "date": "May 4, 2024",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "RYC",
        "event": "Cadet Men's Saber",
        "date": "April 21, 2024",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      }
    ]
  },
  "LIU Ethan": {
    "wins": 3,
    "losses": 1,
    "total": 4,
    "winRate": 75,
    "clubs": [
      "179",
      "121",
      "175",
      "NELLYA"
    ],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Junior Men's Saber",
        "date": "February 15, 2026",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Cadet Men's Saber",
        "date": "July 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "LIU Jeremy": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "92"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-14 Men's Saber",
        "date": "November 29, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "LIU Kevin": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "51"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Junior Men's Saber",
        "date": "January 12, 2026",
        "type": "T64",
        "win": true,
        "score": "15-12"
      }
    ]
  },
  "LIU Ryan": {
    "wins": 0,
    "losses": 3,
    "total": 3,
    "winRate": 0,
    "clubs": [
      "29",
      "22",
      "NELLYA"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-12 Men's Saber",
        "date": "November 25, 2022",
        "type": "T64",
        "win": false,
        "score": "4-15"
      },
      {
        "tournament": "Capitol Clash SYC, RCC, Veteran ROC & Y8",
        "event": "Y-10 Men's Saber",
        "date": "January 18, 2020",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-8 Men's Saber",
        "date": "November 30, 2019",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      }
    ]
  },
  "LIU Victor": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "3",
      "SFA"
    ],
    "bouts": [
      {
        "tournament": "Local",
        "event": "Y-10 Mixed Saber",
        "date": "June 12, 2022",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      },
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "May 15, 2022",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      }
    ]
  },
  "LIU Yijin": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "53"
    ],
    "bouts": [
      {
        "tournament": "May SJCC",
        "event": "Cadet Men's Saber",
        "date": "May 18, 2025",
        "type": "T64",
        "win": true,
        "score": "15-9"
      }
    ]
  },
  "LIUZHANG Ben": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "45"
    ],
    "bouts": [
      {
        "tournament": "Mission SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "May 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "LLOYD Max": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "57"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-14 Men's Saber",
        "date": "November 29, 2025",
        "type": "T64",
        "win": true,
        "score": "15-12"
      }
    ]
  },
  "LO Lei": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "177",
      "LAFAP"
    ],
    "bouts": [
      {
        "tournament": "National Championships & July Challenge (Summer Nationals)",
        "event": "Y-12 Men's Saber",
        "date": "July 8, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "April 16, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "LOO Jason": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "57"
    ],
    "bouts": [
      {
        "tournament": "Ben Gutenberg SYC - RJCC",
        "event": "Y-14 Men's Saber",
        "date": "October 12, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "RYC",
        "event": "Cadet Men's Saber",
        "date": "September 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "LU Simon": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "107",
      "LONESTARFC"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-12 Men's Saber",
        "date": "January 15, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "January 13, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "LUC Linkin": {
    "wins": 5,
    "losses": 0,
    "total": 5,
    "winRate": 100,
    "clubs": [
      "57",
      "111",
      "PREMIERFA"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-12 Men's Saber",
        "date": "July 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-12 Men's Saber",
        "date": "July 5, 2024",
        "type": "T64",
        "win": true,
        "score": "15-8"
      },
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-14 Men's Saber",
        "date": "July 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Cadet Men's Saber",
        "date": "July 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "LVOFF Leo": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "102",
      "INTEGRITY"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-12 Men's Saber",
        "date": "November 25, 2022",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "October 2, 2022",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "MAGITSKY Isaac": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "105",
      "DYNAMOFC"
    ],
    "bouts": [
      {
        "tournament": "March NAC and Parafencing National Championships",
        "event": "Y-12 Men's Saber",
        "date": "March 5, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "February 11, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "MAI Ryan": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 100,
    "clubs": [
      "20",
      "51"
    ],
    "bouts": [
      {
        "tournament": "North Texas Roundup SYC / RCC",
        "event": "Y-12 Men's Saber",
        "date": "September 2, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-12 Men's Saber",
        "date": "July 8, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "North Texas Roundup SYC/RCC",
        "event": "Y-12 Men's Saber",
        "date": "September 3, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-10 Men's Saber",
        "date": "July 11, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "MAKLIN David": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "243"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 8, 2025",
        "type": "T256",
        "win": true,
        "score": "15-3"
      }
    ]
  },
  "MALEK Zak": {
    "wins": 5,
    "losses": 0,
    "total": 5,
    "winRate": 100,
    "clubs": [
      "65",
      "105",
      "88",
      "BOSTONFC"
    ],
    "bouts": [
      {
        "tournament": "Mission SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "May 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-12 Men's Saber",
        "date": "January 15, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "Capitol Clash SYC/RCC",
        "event": "Y-12 Men's Saber",
        "date": "January 14, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "November 25, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "MANESCU Miron": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "216",
      "MANHATTANFC"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Junior Men's Saber",
        "date": "June 28, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Junior Men's Saber",
        "date": "June 28, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "May NAC",
        "event": "Cadet Men's Saber",
        "date": "May 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "MARCELLINO Robert": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "218"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 10, 2026",
        "type": "T256",
        "win": true,
        "score": "15-8"
      }
    ]
  },
  "MARCISZ Maksym": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "239",
      "MIDWESTFC"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 2, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "January 15, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "MARTINSON Torm": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "13",
      "MANHATTANFC"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-10 Men's Saber",
        "date": "May 31, 2021",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "May 31, 2021",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      }
    ]
  },
  "MARTIRE Francis": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "129"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-14 Men's Saber",
        "date": "November 29, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "MATTOO Deven": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "36"
    ],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Junior Men's Saber",
        "date": "February 15, 2026",
        "type": "T64",
        "win": true,
        "score": "15-13"
      }
    ]
  },
  "MATTOO Dhruv": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "187"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Junior Men's Saber",
        "date": "October 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "MAWLER malcolm": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 33,
    "clubs": [
      "10",
      "DCFENCERS"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-8 Men's Saber",
        "date": "November 30, 2019",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-8 Men's Saber",
        "date": "November 30, 2019",
        "type": "T16",
        "win": true,
        "score": "10-7"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "November 29, 2019",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      }
    ]
  },
  "MCDONALD Finn": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 33,
    "clubs": [
      "159",
      "23",
      "DEVLYFC-PA"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-10 Men's Saber",
        "date": "May 31, 2021",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "May 31, 2021",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      }
    ]
  },
  "MCDONALD Ryan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "54",
      "TIMMOREHOUSE"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-10 Men's Saber",
        "date": "November 29, 2019",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "SYC",
        "event": "Y-8 Men's Saber",
        "date": "November 24, 2018",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "MEHAN Nicholas": {
    "wins": 0,
    "losses": 5,
    "total": 5,
    "winRate": 0,
    "clubs": [
      "3",
      "69",
      "1",
      "7",
      "STAMFORDFC"
    ],
    "bouts": [
      {
        "tournament": "May SJCC",
        "event": "Cadet Men's Saber",
        "date": "May 18, 2025",
        "type": "T32",
        "win": false,
        "score": "9-15"
      },
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 7, 2025",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "February NAC",
        "event": "Cadet Men's Saber",
        "date": "February 17, 2025",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "Mission SYC",
        "event": "Y-14 Men's Saber",
        "date": "May 4, 2024",
        "type": "T8",
        "win": false,
        "score": "2-15"
      },
      {
        "tournament": "Capitol Clash SYC, RCC, Veteran ROC & Y8",
        "event": "Y-10 Men's Saber",
        "date": "January 18, 2020",
        "type": "T64",
        "win": false,
        "score": "2-10"
      }
    ]
  },
  "MEHTA Yash": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "19"
    ],
    "bouts": [
      {
        "tournament": "NoVA Knights RYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "October 2, 2022",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "RYC",
        "event": "Y-14 Men's Saber",
        "date": "October 1, 2022",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "MELE Gianni": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "51"
    ],
    "bouts": [
      {
        "tournament": "Ben Gutenberg SYC - RJCC",
        "event": "Y-14 Men's Saber",
        "date": "October 12, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "RYC",
        "event": "Cadet Men's Saber",
        "date": "September 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "MELUL Jonathan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "56",
      "ALLEFENCING"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC, RCC, Veteran ROC & Y8",
        "event": "Y-10 Men's Saber",
        "date": "January 18, 2020",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "SYC",
        "event": "Y-8 Men's Saber",
        "date": "November 30, 2019",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "MERMEGAS Alexander": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 100,
    "clubs": [
      "32",
      "19",
      "TIMMOREHOUSE"
    ],
    "bouts": [
      {
        "tournament": "Mission SYC",
        "event": "Y-14 Men's Saber",
        "date": "May 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "RYC",
        "event": "Cadet Men's Saber",
        "date": "April 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-12 Men's Saber",
        "date": "November 25, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "October 2, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "MHLEY Gavin": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "98"
    ],
    "bouts": [
      {
        "tournament": "Mission SYC",
        "event": "Y-14 Men's Saber",
        "date": "May 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "RYC",
        "event": "Cadet Men's Saber",
        "date": "April 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "MIAO Heqi": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "21",
      "AFFA"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-14 Men's Saber",
        "date": "March 21, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Local",
        "event": "Senior Mixed Saber",
        "date": "March 15, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "MICLAUS Justin": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "23"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Div I Men's Saber",
        "date": "November 14, 2025",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "MILLER Joseph": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "48"
    ],
    "bouts": [
      {
        "tournament": "North Texas Roundup SYC / RCC",
        "event": "Y-14 Men's Saber",
        "date": "September 3, 2023",
        "type": "T64",
        "win": true,
        "score": "15-5"
      }
    ]
  },
  "MITHUN Prabal": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "109",
      "EXCELFA"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-12 Men's Saber",
        "date": "November 24, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "September 24, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "MUNOZ Jonas": {
    "wins": 5,
    "losses": 0,
    "total": 5,
    "winRate": 100,
    "clubs": [
      "14",
      "27",
      "20",
      "CAPITALFA"
    ],
    "bouts": [
      {
        "tournament": "NoVA Knights RYC/RJCC& NON-REGIONAL VET",
        "event": "Y-14 Men's Saber",
        "date": "April 20, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 16, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "NoVA Knights RYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "October 2, 2022",
        "type": "T32",
        "win": true,
        "score": "15-2"
      },
      {
        "tournament": "Fairfax Challenge Fall RYC/RJCC & Y8 (Non-Regional)",
        "event": "Y-12 Men's Saber",
        "date": "September 11, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "September 3, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "NAMBIAR Navin": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "200",
      "220",
      "GFA"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Div I Men's Saber",
        "date": "November 14, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Cadet Men's Saber",
        "date": "June 30, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Cadet Men's Saber",
        "date": "June 30, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "NARDINI Nathanael P.": {
    "wins": 5,
    "losses": 1,
    "total": 6,
    "winRate": 83,
    "clubs": [
      "80",
      "48",
      "10",
      "24",
      "19",
      "COBRAFC"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Junior Men's Saber",
        "date": "January 12, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Cadet Men's Saber",
        "date": "June 30, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Cadet Men's Saber",
        "date": "June 30, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Mission SYC",
        "event": "Y-14 Men's Saber",
        "date": "May 4, 2024",
        "type": "T16",
        "win": true,
        "score": "15-10"
      },
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 13, 2024",
        "type": "T32",
        "win": true,
        "score": "15-14"
      },
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "May 15, 2022",
        "type": "T64",
        "win": false,
        "score": "4-15"
      }
    ]
  },
  "NG Jonathan": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "97"
    ],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Div I Men's Saber",
        "date": "February 13, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "NGO Emerson": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 100,
    "clubs": [
      "45",
      "240",
      "102",
      "LAFAP"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Y-14 Men's Saber",
        "date": "November 17, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 16, 2025",
        "type": "T256",
        "win": true,
        "score": "15-7"
      },
      {
        "tournament": "December SJCC + Para NAC",
        "event": "Cadet Men's Saber",
        "date": "December 6, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Cobra Challenge SYC",
        "event": "Y-14 Men's Saber",
        "date": "December 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "O'KEEFE Brody": {
    "wins": 5,
    "losses": 0,
    "total": 5,
    "winRate": 100,
    "clubs": [
      "60",
      "176",
      "104",
      "NJFENCINGALL"
    ],
    "bouts": [
      {
        "tournament": "Mission SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 5, 2024",
        "type": "T64",
        "win": true,
        "score": "15-2"
      },
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 3, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 2, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-12 Men's Saber",
        "date": "November 24, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "September 24, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "OH Aster": {
    "wins": 4,
    "losses": 4,
    "total": 8,
    "winRate": 50,
    "clubs": [
      "15",
      "14",
      "3",
      "47",
      "5",
      "TIMMOREHOUSE"
    ],
    "bouts": [
      {
        "tournament": "January NAC",
        "event": "Cadet Men's Saber",
        "date": "January 5, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "December SJCC + Para NAC",
        "event": "Junior Men's Saber",
        "date": "December 7, 2024",
        "type": "T64",
        "win": false,
        "score": "11-15"
      },
      {
        "tournament": "December NAC",
        "event": "Junior Men's Saber",
        "date": "December 7, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Ben Gutenberg Memorial SYC / RCC",
        "event": "Y-12 Men's Saber",
        "date": "March 11, 2023",
        "type": "T16",
        "win": false,
        "score": "9-15"
      },
      {
        "tournament": "March NAC and Parafencing National Championships",
        "event": "Y-12 Men's Saber",
        "date": "March 5, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "February 11, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-8 Men's Saber",
        "date": "November 24, 2018",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-8 Men's Saber",
        "date": "November 24, 2018",
        "type": "T16",
        "win": false,
        "score": "3-10"
      }
    ]
  },
  "OLSON Kai": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "132",
      "OREGONFA"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 8, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 7, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "ONG Dylan": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "278"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Junior Men's Saber",
        "date": "October 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "ORIE Sohan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "17",
      "SHERIDANFA"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-12 Men's Saber",
        "date": "November 24, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "September 24, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "OTT William": {
    "wins": 5,
    "losses": 0,
    "total": 5,
    "winRate": 100,
    "clubs": [
      "30",
      "23",
      "119"
    ],
    "bouts": [
      {
        "tournament": "NoVA Knights RYC/RJCC& NON-REGIONAL VET",
        "event": "Y-14 Men's Saber",
        "date": "April 20, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 16, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "River City Regional Rumble RYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "February 11, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Capitol Clash SYC/RCC",
        "event": "Y-12 Men's Saber",
        "date": "January 14, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "January 14, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "O’LOUGHLIN Jacob": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 100,
    "clubs": [
      "235",
      "51"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 8, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 7, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Ben Gutenberg Memorial SYC / RCC",
        "event": "Y-12 Men's Saber",
        "date": "March 11, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 5, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "PARK Layne": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "90"
    ],
    "bouts": [
      {
        "tournament": "Ben Gutenberg SYC - RJCC",
        "event": "Y-14 Men's Saber",
        "date": "October 12, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "RYC",
        "event": "Cadet Men's Saber",
        "date": "September 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "PARKILA Lukas": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "65"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 13, 2024",
        "type": "T128",
        "win": true,
        "score": "15-10"
      }
    ]
  },
  "PAUL James": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "23"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge Spring RYC/RJCC/ROC",
        "event": "Y-12 Men's Saber",
        "date": "April 16, 2023",
        "type": "T32",
        "win": true,
        "score": "15-6"
      }
    ]
  },
  "PAUL Jimmy": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "19"
    ],
    "bouts": [
      {
        "tournament": "Capital Czajkowski Cup #3",
        "event": "Senior Mixed Saber",
        "date": "March 15, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 8, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "PEI Kent": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "303",
      "Northern California"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "PEREIRA Beckham": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "60",
      "INTLFENCECLB"
    ],
    "bouts": [
      {
        "tournament": "May SJCC",
        "event": "Cadet Men's Saber",
        "date": "May 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "May NAC",
        "event": "Junior Men's Saber",
        "date": "May 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "PERRIN Leo": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "27"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge Spring RYC/RJCC/ROC",
        "event": "Y-12 Men's Saber",
        "date": "April 16, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "March 11, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "PINTO Marcus": {
    "wins": 2,
    "losses": 3,
    "total": 5,
    "winRate": 40,
    "clubs": [
      "3",
      "22",
      "TIMMOREHOUSE"
    ],
    "bouts": [
      {
        "tournament": "National Championships & July Challenge (Summer Nationals)",
        "event": "Y-12 Men's Saber",
        "date": "July 8, 2023",
        "type": "T64",
        "win": false,
        "score": "4-15"
      },
      {
        "tournament": "Ben Gutenberg Memorial SYC / RCC",
        "event": "Y-12 Men's Saber",
        "date": "March 11, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 5, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "Local",
        "event": "Y-10 Mixed Saber",
        "date": "June 12, 2022",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      },
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "May 15, 2022",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      }
    ]
  },
  "PIPKE Garrett": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 100,
    "clubs": [
      "20",
      "7"
    ],
    "bouts": [
      {
        "tournament": "River City Regional Rumble RYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "February 11, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "January 14, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "DCFC Youth Challenge #4",
        "event": "Y-10 Mixed Saber",
        "date": "June 12, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "May 14, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "PORTER Dupree": {
    "wins": 1,
    "losses": 1,
    "total": 2,
    "winRate": 50,
    "clubs": [
      "122",
      "3"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 16, 2025",
        "type": "T128",
        "win": true,
        "score": "15-12"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "T8",
        "win": false,
        "score": "11-15"
      }
    ]
  },
  "PRIMUS Nazir": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "9",
      "PWESTBROOK"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 10, 2024",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "Cobra Challenge SYC",
        "event": "Y-14 Men's Saber",
        "date": "October 12, 2024",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      }
    ]
  },
  "PROSPER Nathaniel": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "24"
    ],
    "bouts": [
      {
        "tournament": "River City Regional Rumble RYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "February 11, 2023",
        "type": "T32",
        "win": true,
        "score": "15-5"
      }
    ]
  },
  "QI Zach": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "121",
      "WESTCOASTFA"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 3, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 2, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "QIN toby": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "18"
    ],
    "bouts": [
      {
        "tournament": "River City Regional Rumble - RYC/RJCC and Y8",
        "event": "Cadet Men's Saber",
        "date": "September 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-12 Men's Saber",
        "date": "July 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "RADJABLI Maximillian": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "3",
      "68"
    ],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "T4",
        "win": true,
        "score": "15-4"
      },
      {
        "tournament": "December SJCC + Para NAC",
        "event": "Junior Men's Saber",
        "date": "December 7, 2024",
        "type": "T128",
        "win": true,
        "score": "15-11"
      }
    ]
  },
  "RAJMOHAN Arya": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "72"
    ],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "RAMANAN Jaisimh": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "165",
      "SFSS"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics & Div 1 NAC",
        "event": "Junior Men's Saber",
        "date": "February 16, 2025",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      },
      {
        "tournament": "Capitol Clash SYC",
        "event": "Y-14 Men's Saber",
        "date": "January 18, 2025",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      }
    ]
  },
  "RAVOOR Sahas": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "251",
      "RENAISSANCE"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Cadet Men's Saber",
        "date": "July 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "REN James": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "8"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Junior Men's Saber",
        "date": "January 12, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "RINALDI Savio": {
    "wins": 5,
    "losses": 0,
    "total": 5,
    "winRate": 100,
    "clubs": [
      "13",
      "22",
      "12",
      "8"
    ],
    "bouts": [
      {
        "tournament": "Capital Czajkowski Cup #3",
        "event": "Senior Mixed Saber",
        "date": "March 15, 2025",
        "type": "T16",
        "win": true,
        "score": "15-7"
      },
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 18, 2025",
        "type": "T32",
        "win": true,
        "score": "15-8"
      },
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "September 24, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "RYC",
        "event": "Cadet Men's Saber",
        "date": "September 23, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Fairfax Challenge Fall RYC/RJCC & Y8 (Non-Regional)",
        "event": "Y-12 Men's Saber",
        "date": "September 11, 2022",
        "type": "T8",
        "win": true,
        "score": "15-11"
      }
    ]
  },
  "ROBINSON Ezra": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "60"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Y-14 Men's Saber",
        "date": "November 17, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "ROH Jaden": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "28"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-14 Men's Saber",
        "date": "November 29, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-14 Men's Saber",
        "date": "November 29, 2025",
        "type": "T32",
        "win": true,
        "score": "15-7"
      }
    ]
  },
  "ROORDA Easton": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "32"
    ],
    "bouts": [
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Cadet Men's Saber",
        "date": "September 23, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "September 3, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "SADHU Neiyam": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "153"
    ],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Div I Men's Saber",
        "date": "February 13, 2026",
        "type": "T256",
        "win": true,
        "score": "15-14"
      }
    ]
  },
  "SALMAN Hamzah": {
    "wins": 0,
    "losses": 4,
    "total": 4,
    "winRate": 0,
    "clubs": [
      "18",
      "16"
    ],
    "bouts": [
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Cadet Men's Saber",
        "date": "September 23, 2023",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "September 3, 2023",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "North Texas Roundup SYC/RCC",
        "event": "Y-12 Men's Saber",
        "date": "September 3, 2022",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-10 Men's Saber",
        "date": "July 11, 2022",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "SALMAN Ibrahim": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 100,
    "clubs": [
      "43",
      "91"
    ],
    "bouts": [
      {
        "tournament": "North Texas Roundup SYC / RCC",
        "event": "Y-12 Men's Saber",
        "date": "September 2, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-12 Men's Saber",
        "date": "July 8, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "USA Fencing National Championships & July Challenge",
        "event": "Y-10 Men's Saber",
        "date": "July 11, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "RYC",
        "event": "Y-10 Men's Saber",
        "date": "June 19, 2021",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "SANGSTER Arden": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "32"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 7, 2025",
        "type": "T64",
        "win": false,
        "score": "12-15"
      }
    ]
  },
  "SANTOS Theodore": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "43",
      "COBRAFC"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-10 Men's Saber",
        "date": "November 29, 2019",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-8 Men's Saber",
        "date": "November 24, 2018",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      }
    ]
  },
  "SAYAR Luke": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 100,
    "clubs": [
      "33",
      "32",
      "AIFENCING"
    ],
    "bouts": [
      {
        "tournament": "Ben Gutenberg Memorial SYC / RCC",
        "event": "Y-12 Men's Saber",
        "date": "March 11, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 5, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-10 Men's Saber",
        "date": "November 29, 2019",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "SYC",
        "event": "Y-8 Men's Saber",
        "date": "November 24, 2018",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "SCHIMEL Luke": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "16"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "T16",
        "win": true,
        "score": "15-13"
      }
    ]
  },
  "SCHWARTZMAN Jakub": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "74",
      "NAZLYMOVFF"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-14 Men's Saber",
        "date": "March 21, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Local",
        "event": "Senior Mixed Saber",
        "date": "March 15, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "SEELMAN Cole": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "198"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Cadet Men's Saber",
        "date": "June 30, 2025",
        "type": "T256",
        "win": true,
        "score": "15-7"
      }
    ]
  },
  "SENTHIL Gatik": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "63"
    ],
    "bouts": [
      {
        "tournament": "North Texas Roundup SYC / RCC",
        "event": "Y-14 Men's Saber",
        "date": "September 3, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "September 2, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "SETH Khalen": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "163",
      "MIDWESTFC"
    ],
    "bouts": [
      {
        "tournament": "National Championships & July Challenge (Summer Nationals)",
        "event": "Y-12 Men's Saber",
        "date": "July 8, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "April 16, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "SHANKAR Rahm": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "54"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-14 Men's Saber",
        "date": "November 29, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "SHAPIRO Simon": {
    "wins": 0,
    "losses": 4,
    "total": 4,
    "winRate": 0,
    "clubs": [
      "65",
      "11",
      "DYNAMOFC"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-14 Men's Saber",
        "date": "December 1, 2024",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "Cobra Challenge SYC",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "Ben Gutenberg Memorial SYC / RCC",
        "event": "Y-12 Men's Saber",
        "date": "March 11, 2023",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 5, 2023",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      }
    ]
  },
  "SHARMA Ayaan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "141",
      "REDSTARCHICG"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-12 Men's Saber",
        "date": "January 15, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "January 13, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "SHICK Cedric": {
    "wins": 1,
    "losses": 3,
    "total": 4,
    "winRate": 25,
    "clubs": [
      "2",
      "16",
      "INTEGRITY"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-8 Men's Saber",
        "date": "November 30, 2019",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-8 Men's Saber",
        "date": "November 30, 2019",
        "type": "T8",
        "win": false,
        "score": "6-10"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "November 29, 2019",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-8 Men's Saber",
        "date": "November 24, 2018",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "SHINCHUK Jacob": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "12"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-8 Men's Saber",
        "date": "November 24, 2018",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "SHIPITSIN Alexander": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "110"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 10, 2024",
        "type": "T256",
        "win": false,
        "score": "10-15"
      }
    ]
  },
  "SIMS Elliot": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "124"
    ],
    "bouts": [
      {
        "tournament": "March NAC and Parafencing National Championships",
        "event": "Y-12 Men's Saber",
        "date": "March 5, 2023",
        "type": "T128",
        "win": true,
        "score": "15-6"
      }
    ]
  },
  "SINGH Swaran": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "219",
      "PHX"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "SKARBONKIEWICZ Maksymilian A.": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "32"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Div I Men's Saber",
        "date": "October 5, 2025",
        "type": "T256",
        "win": false,
        "score": "5-15"
      }
    ]
  },
  "SLAVNOV Anton": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "8"
    ],
    "bouts": [
      {
        "tournament": "Ben Gutenberg SYC - RJCC",
        "event": "Y-14 Men's Saber",
        "date": "October 12, 2024",
        "type": "T16",
        "win": false,
        "score": "5-15"
      }
    ]
  },
  "SMITH Etienne": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "105"
    ],
    "bouts": [
      {
        "tournament": "May SJCC",
        "event": "Junior Men's Saber",
        "date": "May 16, 2025",
        "type": "T128",
        "win": true,
        "score": "15-8"
      }
    ]
  },
  "SO Morgan": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "12",
      "54"
    ],
    "bouts": [
      {
        "tournament": "Mission SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 5, 2024",
        "type": "T16",
        "win": true,
        "score": "15-5"
      },
      {
        "tournament": "Mission SYC",
        "event": "Y-14 Men's Saber",
        "date": "May 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "RYC",
        "event": "Cadet Men's Saber",
        "date": "April 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "SONG Aidan": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 100,
    "clubs": [
      "263",
      "266",
      "TIMMOREHOUSE"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 10, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Cobra Challenge SYC",
        "event": "Y-14 Men's Saber",
        "date": "October 12, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Cadet Men's Saber",
        "date": "July 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "SONG Nicholas": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "82",
      "BOSTONFC"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-12 Men's Saber",
        "date": "November 25, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "October 2, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "SOWERS Samuel": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "28"
    ],
    "bouts": [
      {
        "tournament": "December SJCC + Para NAC",
        "event": "Cadet Men's Saber",
        "date": "December 6, 2024",
        "type": "T64",
        "win": false,
        "score": "7-15"
      }
    ]
  },
  "SRA Nawab": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "124"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Y-14 Men's Saber",
        "date": "November 17, 2025",
        "type": "T128",
        "win": true,
        "score": "15-2"
      }
    ]
  },
  "SRIVATS Vedh": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "30"
    ],
    "bouts": [
      {
        "tournament": "Ben Gutenberg SYC - RJCC",
        "event": "Y-14 Men's Saber",
        "date": "October 12, 2024",
        "type": "T32",
        "win": true,
        "score": "15-11"
      }
    ]
  },
  "STAMPER Wyatt": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "260"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 10, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "STENSON Silas": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "40"
    ],
    "bouts": [
      {
        "tournament": "North Texas Roundup SYC / RCC",
        "event": "Y-12 Men's Saber",
        "date": "September 2, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-12 Men's Saber",
        "date": "July 8, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "STEVENS Flynn": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "49",
      "CAN"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-12 Men's Saber",
        "date": "November 25, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "October 2, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "STURGEON Cole": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "46"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 2, 2024",
        "type": "T128",
        "win": false,
        "score": "6-15"
      }
    ]
  },
  "SU Kingston": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "241",
      "LAFAP"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Cadet Men's Saber",
        "date": "July 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "SU Landon": {
    "wins": 0,
    "losses": 4,
    "total": 4,
    "winRate": 0,
    "clubs": [
      "6",
      "1"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Junior Men's Saber",
        "date": "January 12, 2026",
        "type": "T16",
        "win": false,
        "score": "14-15"
      },
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Cadet Men's Saber",
        "date": "September 23, 2023",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Cadet Men's Saber",
        "date": "September 23, 2023",
        "type": "T16",
        "win": false,
        "score": "4-15"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "September 3, 2023",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      }
    ]
  },
  "SUN Andrew": {
    "wins": 0,
    "losses": 3,
    "total": 3,
    "winRate": 0,
    "clubs": [
      "13",
      "24",
      "MANHATTANFC"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 10, 2024",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "Cobra Challenge SYC",
        "event": "Y-14 Men's Saber",
        "date": "October 12, 2024",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-10 Men's Saber",
        "date": "November 29, 2019",
        "type": "T64",
        "win": false,
        "score": "3-10"
      }
    ]
  },
  "SUN Stephen": {
    "wins": 2,
    "losses": 2,
    "total": 4,
    "winRate": 50,
    "clubs": [
      "224",
      "129",
      "MASTERSFA-NJ"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 7, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "February NAC",
        "event": "Cadet Men's Saber",
        "date": "February 17, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 13, 2024",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "November 24, 2023",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "SZULIM Lucjan": {
    "wins": 1,
    "losses": 3,
    "total": 4,
    "winRate": 25,
    "clubs": [
      "17",
      "7"
    ],
    "bouts": [
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Cadet Men's Saber",
        "date": "September 23, 2023",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Cadet Men's Saber",
        "date": "September 23, 2023",
        "type": "T32",
        "win": true,
        "score": "15-10"
      },
      {
        "tournament": "SYC",
        "event": "Y-14 Men's Saber",
        "date": "September 3, 2023",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "NoVA Knights RYC/RJCC",
        "event": "Y-14 Men's Saber",
        "date": "October 1, 2022",
        "type": "T16",
        "win": false,
        "score": "10-15"
      }
    ]
  },
  "TA-ZHOU Sophia": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "2"
    ],
    "bouts": [
      {
        "tournament": "DCFC Youth Challenge #4",
        "event": "Y-10 Mixed Saber",
        "date": "June 12, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "DCFC Youth Challenge #4",
        "event": "Y-10 Mixed Saber",
        "date": "June 12, 2022",
        "type": "T2",
        "win": true,
        "score": "10-2"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "May 14, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "TAI Milton": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "8"
    ],
    "bouts": [
      {
        "tournament": "DCFC Youth Challenge #4",
        "event": "Y-10 Mixed Saber",
        "date": "June 12, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "DCFC Youth Challenge #4",
        "event": "Y-10 Mixed Saber",
        "date": "June 12, 2022",
        "type": "T8",
        "win": true,
        "score": "10-1"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "May 14, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "TAKEBE Ren": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "62"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-14 Men's Saber",
        "date": "March 21, 2025",
        "type": "T64",
        "win": true,
        "score": "15-7"
      }
    ]
  },
  "TAN Rui": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "12",
      "CHN"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-14 Men's Saber",
        "date": "March 21, 2025",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "Local",
        "event": "Senior Mixed Saber",
        "date": "March 15, 2025",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      }
    ]
  },
  "TANG Morgan": {
    "wins": 3,
    "losses": 2,
    "total": 5,
    "winRate": 60,
    "clubs": [
      "177",
      "3",
      "39"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Cadet Men's Saber",
        "date": "October 4, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "North Texas Roundup SYC / RCC",
        "event": "Y-12 Men's Saber",
        "date": "September 2, 2023",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-12 Men's Saber",
        "date": "July 8, 2023",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "USA Fencing National Championships & July Challenge",
        "event": "Y-10 Men's Saber",
        "date": "July 11, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "RYC",
        "event": "Y-10 Men's Saber",
        "date": "June 19, 2021",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "TANI Tino": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "16"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "TANJGA Luka": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "277"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "TASIKAS Peter": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "103"
    ],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "T128",
        "win": true,
        "score": "15-9"
      }
    ]
  },
  "TEPLESKY Sasha": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "176",
      "NOVAFC"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 5, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "THEUNISSE Oliver": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "53",
      "TTFA"
    ],
    "bouts": [
      {
        "tournament": "Local",
        "event": "Y-10 Mixed Saber",
        "date": "June 12, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "May 15, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "THOMAS Texas": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "218",
      "FAODENVER"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics & Div 1 NAC",
        "event": "Junior Men's Saber",
        "date": "February 16, 2025",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      },
      {
        "tournament": "Capitol Clash SYC",
        "event": "Y-14 Men's Saber",
        "date": "January 18, 2025",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      }
    ]
  },
  "TIAGI Daniel": {
    "wins": 0,
    "losses": 3,
    "total": 3,
    "winRate": 0,
    "clubs": [
      "140",
      "ALLEFENCING"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Junior Men's Saber",
        "date": "June 28, 2025",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Junior Men's Saber",
        "date": "June 28, 2025",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "May NAC",
        "event": "Cadet Men's Saber",
        "date": "May 18, 2025",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      }
    ]
  },
  "TIAGI George": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "104"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Div I Men's Saber",
        "date": "November 14, 2025",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      }
    ]
  },
  "TSE Aiden J": {
    "wins": 0,
    "losses": 3,
    "total": 3,
    "winRate": 0,
    "clubs": [
      "19",
      "9",
      "HALBERSTADT"
    ],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Div I Men's Saber",
        "date": "February 13, 2026",
        "type": "T128",
        "win": false,
        "score": "13-15"
      },
      {
        "tournament": "National Championships & July Challenge (Summer Nationals)",
        "event": "Y-12 Men's Saber",
        "date": "July 8, 2023",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "April 16, 2023",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      }
    ]
  },
  "UEMOTO Ken": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "76",
      "DURKANFA"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics & Div 1 NAC",
        "event": "Cadet Men's Saber",
        "date": "February 17, 2025",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      },
      {
        "tournament": "February NAC",
        "event": "Junior Men's Saber",
        "date": "February 16, 2025",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      }
    ]
  },
  "URSU Marcel T.": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 33,
    "clubs": [
      "2",
      "1"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-14 Men's Saber",
        "date": "November 29, 2025",
        "type": "T2",
        "win": true,
        "score": "15-8"
      },
      {
        "tournament": "Mission SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 5, 2024",
        "type": "T4",
        "win": false,
        "score": "9-15"
      },
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-12 Men's Saber",
        "date": "January 15, 2024",
        "type": "T4",
        "win": false,
        "score": "5-15"
      }
    ]
  },
  "VALENCIA Jose": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "3"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge Spring RYC/RJCC/ROC",
        "event": "Y-12 Men's Saber",
        "date": "April 16, 2023",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "March 11, 2023",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "VAN ROY Ray": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "220",
      "HALBERSTADT"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Cadet Men's Saber",
        "date": "June 30, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Cadet Men's Saber",
        "date": "June 30, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "VASQUEZ Matteo": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "41"
    ],
    "bouts": [
      {
        "tournament": "NoVA Knights RYC/RJCC& NON-REGIONAL VET",
        "event": "Y-14 Men's Saber",
        "date": "April 20, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 16, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "VISH Manyu": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "100"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "T128",
        "win": true,
        "score": "15-3"
      }
    ]
  },
  "VO Blake": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "47"
    ],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "T64",
        "win": true,
        "score": "15-9"
      }
    ]
  },
  "VO Landon": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "173"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Junior Men's Saber",
        "date": "October 3, 2025",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      }
    ]
  },
  "VOSPER James": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "309",
      "SANDIEGOFC"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics & Div 1 NAC",
        "event": "Junior Men's Saber",
        "date": "February 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Capitol Clash SYC",
        "event": "Y-14 Men's Saber",
        "date": "January 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "VU Mark": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "224"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 10, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "WAGNER Joseph": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "26",
      "TRIWEAPONFC"
    ],
    "bouts": [
      {
        "tournament": "Local",
        "event": "Y-10 Mixed Saber",
        "date": "June 12, 2022",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "May 15, 2022",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      }
    ]
  },
  "WANG ANDREW CHANG": {
    "wins": 1,
    "losses": 1,
    "total": 2,
    "winRate": 50,
    "clubs": [
      "5",
      "45"
    ],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "T8",
        "win": true,
        "score": "15-10"
      },
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Junior Men's Saber",
        "date": "June 28, 2025",
        "type": "T128",
        "win": false,
        "score": "9-15"
      }
    ]
  },
  "WANG Alex": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "98",
      "25"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 10, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-14 Men's Saber",
        "date": "March 21, 2025",
        "type": "T32",
        "win": true,
        "score": "15-10"
      }
    ]
  },
  "WANG Andrew": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "11",
      "AFC"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-10 Men's Saber",
        "date": "November 29, 2019",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-8 Men's Saber",
        "date": "November 24, 2018",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      }
    ]
  },
  "WANG Daniel": {
    "wins": 2,
    "losses": 3,
    "total": 5,
    "winRate": 40,
    "clubs": [
      "6",
      "3",
      "27",
      "DYNAMOFC"
    ],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Junior Men's Saber",
        "date": "February 15, 2026",
        "type": "T32",
        "win": false,
        "score": "14-15"
      },
      {
        "tournament": "December SJCC + Para NAC",
        "event": "Junior Men's Saber",
        "date": "December 7, 2024",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "December SJCC + Para NAC",
        "event": "Cadet Men's Saber",
        "date": "December 6, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "December NAC",
        "event": "Cadet Men's Saber",
        "date": "December 6, 2024",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "Cobra Challenge SYC",
        "event": "Y-14 Men's Saber",
        "date": "December 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "WANG David": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "72"
    ],
    "bouts": [
      {
        "tournament": "USA Fencing National Championships & July Challenge",
        "event": "Y-10 Men's Saber",
        "date": "July 11, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "RYC",
        "event": "Y-10 Men's Saber",
        "date": "June 19, 2021",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "WANG Edward": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "53"
    ],
    "bouts": [
      {
        "tournament": "Ben Gutenberg SYC - RJCC",
        "event": "Y-14 Men's Saber",
        "date": "October 12, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "RYC",
        "event": "Cadet Men's Saber",
        "date": "September 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "WANG HongXi": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "199"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Junior Men's Saber",
        "date": "June 28, 2025",
        "type": "T256",
        "win": true,
        "score": "15-10"
      }
    ]
  },
  "WANG Justin": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "106"
    ],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 10, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "WANG Max": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "3"
    ],
    "bouts": [
      {
        "tournament": "River City Regional Rumble - RYC/RJCC and Y8",
        "event": "Cadet Men's Saber",
        "date": "September 21, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-12 Men's Saber",
        "date": "July 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "WANG Michael": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "80"
    ],
    "bouts": [
      {
        "tournament": "January NAC",
        "event": "Cadet Men's Saber",
        "date": "January 5, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "December NAC",
        "event": "Junior Men's Saber",
        "date": "December 7, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "WANG Nicolas": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "13"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Junior Men's Saber",
        "date": "October 3, 2025",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "October NAC",
        "event": "Junior Men's Saber",
        "date": "October 3, 2025",
        "type": "T128",
        "win": false,
        "score": "13-15"
      }
    ]
  },
  "WANG Ryan": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "119",
      "188",
      "AGFC (CA)"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Y-14 Men's Saber",
        "date": "November 17, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-12 Men's Saber",
        "date": "July 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-14 Men's Saber",
        "date": "July 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "WANG Theodore": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "132"
    ],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Div I Men's Saber",
        "date": "February 13, 2026",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "WANG Tiger": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "27"
    ],
    "bouts": [
      {
        "tournament": "North Texas Roundup SYC/RCC",
        "event": "Y-12 Men's Saber",
        "date": "September 3, 2022",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-10 Men's Saber",
        "date": "July 11, 2022",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      }
    ]
  },
  "WANG Will": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "36",
      "BERGENFC"
    ],
    "bouts": [
      {
        "tournament": "March SJCC",
        "event": "Cadet Men's Saber",
        "date": "March 16, 2024",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 3, 2024",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "WAXLER Alex": {
    "wins": 6,
    "losses": 0,
    "total": 6,
    "winRate": 100,
    "clubs": [
      "102",
      "89",
      "12",
      "TIMMOREHOUSE"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-14 Men's Saber",
        "date": "December 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "Cobra Challenge SYC",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 10, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "Capitol Clash SYC, RCC, Veteran ROC & Y8",
        "event": "Y-8 Men's Saber",
        "date": "January 19, 2020",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "January 18, 2020",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "WELSTEAD Nicholas": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "167",
      "DYNAMOFC"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Cadet Men's Saber",
        "date": "July 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "WINTERSET Mason": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "224",
      "SBFA"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Cadet Men's Saber",
        "date": "June 30, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Cadet Men's Saber",
        "date": "June 30, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "WONG David": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "29"
    ],
    "bouts": [
      {
        "tournament": "May SJCC",
        "event": "Junior Men's Saber",
        "date": "May 16, 2025",
        "type": "T32",
        "win": true,
        "score": "15-10"
      }
    ]
  },
  "WONG Lucas": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "14"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Cadet Men's Saber",
        "date": "July 1, 2024",
        "type": "T64",
        "win": false,
        "score": "5-15"
      }
    ]
  },
  "WONG Mac": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "149",
      "MANHATTANFC"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 13, 2024",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "November 24, 2023",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      }
    ]
  },
  "WONG Max": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "53"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 16, 2025",
        "type": "T64",
        "win": true,
        "score": "15-13"
      }
    ]
  },
  "WONG Ron": {
    "wins": 5,
    "losses": 0,
    "total": 5,
    "winRate": 100,
    "clubs": [
      "110",
      "60",
      "25",
      "LAFAP"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "May SJCC",
        "event": "Cadet Men's Saber",
        "date": "May 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "May NAC",
        "event": "Junior Men's Saber",
        "date": "May 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-12 Men's Saber",
        "date": "November 24, 2023",
        "type": "T32",
        "win": true,
        "score": "15-13"
      }
    ]
  },
  "XIA Matthew": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "2"
    ],
    "bouts": [
      {
        "tournament": "NoVA Knights RYC/RJCC& NON-REGIONAL VET",
        "event": "Cadet Men's Saber",
        "date": "April 21, 2024",
        "type": "T2",
        "win": true,
        "score": "15-11"
      }
    ]
  },
  "XIE Ethan": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "5"
    ],
    "bouts": [
      {
        "tournament": "NoVA Knights RYC/RJCC",
        "event": "Y-14 Men's Saber",
        "date": "October 1, 2022",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "September 11, 2022",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      }
    ]
  },
  "XU Andrew": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "93",
      "MIRACLEFC"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-14 Men's Saber",
        "date": "March 21, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "Local",
        "event": "Senior Mixed Saber",
        "date": "March 15, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "XU Ethan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "206",
      "BAFC"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 2, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "January 15, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "XU Ivan": {
    "wins": 2,
    "losses": 2,
    "total": 4,
    "winRate": 50,
    "clubs": [
      "8",
      "58",
      "MIRACLEFC"
    ],
    "bouts": [
      {
        "tournament": "NoVA Knights RYC/RJCC",
        "event": "Y-14 Men's Saber",
        "date": "October 1, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "September 11, 2022",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "Capitol Clash SYC, RCC, Veteran ROC & Y8",
        "event": "Y-10 Men's Saber",
        "date": "January 18, 2020",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-8 Men's Saber",
        "date": "November 30, 2019",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ]
  },
  "XU Princeton": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "22"
    ],
    "bouts": [
      {
        "tournament": "River City Regional Rumble RYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "February 11, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "January 14, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "YAN Luke": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "14",
      "PREMIERFC"
    ],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-8 Men's Saber",
        "date": "November 30, 2019",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "November 29, 2019",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "YAN William": {
    "wins": 1,
    "losses": 1,
    "total": 2,
    "winRate": 50,
    "clubs": [
      "18",
      "28"
    ],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "T32",
        "win": true,
        "score": "15-13"
      },
      {
        "tournament": "March SJCC",
        "event": "Cadet Men's Saber",
        "date": "March 16, 2024",
        "type": "T128",
        "win": false,
        "score": "8-15"
      }
    ]
  },
  "YANG Dylan": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "146"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Div I Men's Saber",
        "date": "November 14, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "YANG Jake": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "223"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "T256",
        "win": true,
        "score": "15-4"
      }
    ]
  },
  "YANG Justin": {
    "wins": 1,
    "losses": 1,
    "total": 2,
    "winRate": 50,
    "clubs": [
      "32",
      "15"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-12 Men's Saber",
        "date": "July 5, 2024",
        "type": "T32",
        "win": true,
        "score": "15-7"
      },
      {
        "tournament": "NoVA Knights RYC/RJCC& NON-REGIONAL VET",
        "event": "Y-14 Men's Saber",
        "date": "April 20, 2024",
        "type": "T32",
        "win": false,
        "score": "13-15"
      }
    ]
  },
  "YANG Phillip": {
    "wins": 1,
    "losses": 3,
    "total": 4,
    "winRate": 25,
    "clubs": [
      "14",
      "16",
      "29",
      "SBFA"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-12 Men's Saber",
        "date": "July 5, 2024",
        "type": "T16",
        "win": true,
        "score": "15-13"
      },
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 4, 2024",
        "type": "T64",
        "win": false,
        "score": "14-15"
      },
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 13, 2024",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "November 24, 2023",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      }
    ]
  },
  "YAO Zachary": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "13",
      "146"
    ],
    "bouts": [
      {
        "tournament": "NoVA Knights RYC/RJCC& NON-REGIONAL VET",
        "event": "Cadet Men's Saber",
        "date": "April 21, 2024",
        "type": "T16",
        "win": true,
        "score": "15-6"
      },
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 13, 2024",
        "type": "T256",
        "win": true,
        "score": "15-10"
      }
    ]
  },
  "YAP Kah Kai (Cayden)": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "64",
      "HALBERSTADT"
    ],
    "bouts": [
      {
        "tournament": "December SJCC + Para NAC",
        "event": "Junior Men's Saber",
        "date": "December 7, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "December NAC",
        "event": "Cadet Men's Saber",
        "date": "December 6, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "YE Eric": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [
      "1"
    ],
    "bouts": [
      {
        "tournament": "NoVA Knights RYC/RJCC",
        "event": "Y-14 Men's Saber",
        "date": "October 1, 2022",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "September 11, 2022",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      }
    ]
  },
  "YOOK Isaac": {
    "wins": 6,
    "losses": 5,
    "total": 11,
    "winRate": 55,
    "clubs": [
      "162",
      "38",
      "59",
      "96",
      "74",
      "8",
      "25",
      "TIMMOREHOUSE"
    ],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Div I Men's Saber",
        "date": "February 13, 2026",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      },
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "T64",
        "win": true,
        "score": "15-11"
      },
      {
        "tournament": "May SJCC",
        "event": "Cadet Men's Saber",
        "date": "May 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "May NAC",
        "event": "Junior Men's Saber",
        "date": "May 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 7, 2025",
        "type": "T128",
        "win": true,
        "score": "15-4"
      },
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 2, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "January 15, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-10 Men's Saber",
        "date": "May 31, 2021",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "May 31, 2021",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-10 Men's Saber",
        "date": "November 29, 2019",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      },
      {
        "tournament": "SYC",
        "event": "Y-8 Men's Saber",
        "date": "November 24, 2018",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      }
    ]
  },
  "YU Ian": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "5",
      "24"
    ],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-12 Men's Saber",
        "date": "January 15, 2024",
        "type": "T8",
        "win": true,
        "score": "15-12"
      },
      {
        "tournament": "North Texas Roundup SYC / RCC",
        "event": "Y-12 Men's Saber",
        "date": "September 2, 2023",
        "type": "T32",
        "win": true,
        "score": "15-7"
      }
    ]
  },
  "YUCEL Emine": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "5"
    ],
    "bouts": [
      {
        "tournament": "Capital Czajkowski Cup #3",
        "event": "Senior Mixed Saber",
        "date": "March 15, 2025",
        "type": "T8",
        "win": true,
        "score": "15-12"
      }
    ]
  },
  "ZENG Vito": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 100,
    "clubs": [
      "269",
      "SPARTAK"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Junior Men's Saber",
        "date": "June 28, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Junior Men's Saber",
        "date": "June 28, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "May NAC",
        "event": "Cadet Men's Saber",
        "date": "May 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "ZEWDA Kebron": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "186"
    ],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Div I Men's Saber",
        "date": "February 13, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "ZHANG Aiden": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "168",
      "SFA"
    ],
    "bouts": [
      {
        "tournament": "March NAC and Parafencing National Championships",
        "event": "Y-12 Men's Saber",
        "date": "March 5, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "RYC",
        "event": "Y-12 Men's Saber",
        "date": "February 11, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "ZHANG Kaixuan": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "2"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-14 Men's Saber",
        "date": "March 21, 2025",
        "type": "T4",
        "win": false,
        "score": "14-15"
      }
    ]
  },
  "ZHANG Ray": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "170",
      "MANHATTANFC"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 4, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      },
      {
        "tournament": "Summer Nationals",
        "event": "Cadet Men's Saber",
        "date": "July 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ]
  },
  "ZHANG Shaoxuan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "112",
      "CAN"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 3, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 2, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "ZHAO David": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "3"
    ],
    "bouts": [
      {
        "tournament": "Fairfax Challenge Summer ROC/RJCC/RYC/VET - Reg Re-Opens 12/28",
        "event": "Y-10 Men's Saber",
        "date": "June 19, 2021",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "SYC",
        "event": "Y-8 Men's Saber",
        "date": "January 19, 2020",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ]
  },
  "ZHAO Lucas": {
    "wins": 1,
    "losses": 1,
    "total": 2,
    "winRate": 50,
    "clubs": [
      "21",
      "57"
    ],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 16, 2025",
        "type": "T32",
        "win": true,
        "score": "15-9"
      },
      {
        "tournament": "Junior Olympics & Div 1 NAC",
        "event": "Junior Men's Saber",
        "date": "February 16, 2025",
        "type": "T256",
        "win": false,
        "score": "14-15"
      }
    ]
  },
  "ZHAO Royce": {
    "wins": 5,
    "losses": 2,
    "total": 7,
    "winRate": 71,
    "clubs": [
      "116",
      "17",
      "11",
      "26",
      "44"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Cadet Men's Saber",
        "date": "July 1, 2024",
        "type": "T128",
        "win": true,
        "score": "15-10"
      },
      {
        "tournament": "Mission SYC",
        "event": "Y-14 Men's Saber",
        "date": "May 4, 2024",
        "type": "T32",
        "win": true,
        "score": "15-10"
      },
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-12 Men's Saber",
        "date": "November 24, 2023",
        "type": "T16",
        "win": true,
        "score": "15-14"
      },
      {
        "tournament": "North Texas Roundup SYC / RCC",
        "event": "Y-14 Men's Saber",
        "date": "September 3, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "September 2, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      },
      {
        "tournament": "USA Fencing National Championships & July Challenge",
        "event": "Y-10 Men's Saber",
        "date": "July 11, 2022",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      },
      {
        "tournament": "RYC",
        "event": "Y-10 Men's Saber",
        "date": "June 19, 2021",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      }
    ]
  },
  "ZHAO Zhiyu(Yogi)": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 100,
    "clubs": [
      "130"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Junior Men's Saber",
        "date": "October 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  },
  "ZHENG LEON": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "49",
      "BERGENFC"
    ],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Cadet Men's Saber",
        "date": "July 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 5, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "ZHU Yuchen (Kevin)": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [
      "157"
    ],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Div I Men's Saber",
        "date": "October 5, 2025",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      }
    ]
  },
  "ZLATINSKI Jason": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "155",
      "GFA"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 7, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      },
      {
        "tournament": "February NAC",
        "event": "Cadet Men's Saber",
        "date": "February 17, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ]
  },
  "ZONG Shiyan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "200",
      "CHN"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 8, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      },
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 7, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ]
  },
  "ZWAKA Jonas": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 100,
    "clubs": [
      "153",
      "SHERIDANFA"
    ],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 7, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      },
      {
        "tournament": "February NAC",
        "event": "Cadet Men's Saber",
        "date": "February 17, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ]
  }
};

export function findOpponentBySlug(slug: string): [string, OpponentData] | null {
  for (const [name, data] of Object.entries(opponents)) {
    if (getOpponentSlug(name) === slug) return [name, data];
  }
  return null;
}
