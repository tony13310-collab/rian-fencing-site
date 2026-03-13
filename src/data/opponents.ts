// Auto-generated H2H opponent database - 405 opponents, 918 bouts
// Generated from FencingTracker history + FTL pool bouts
// Last fixed: 2026-03-13

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
  birthYear?: number | null;
}

export function getOpponentSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function findOpponentBySlug(slug: string): [string, OpponentData] | null {
  for (const [name, data] of Object.entries(opponents)) {
    if (getOpponentSlug(name) === slug) return [name, data];
  }
  return null;
}

export const opponents: Record<string, OpponentData> = {
  "ADEBANKE Micah": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": ["PWESTBROOK"],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-8 Men's Saber",
        "date": "November 24, 2018",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      }
    ],
    "birthYear": 2011
  },
  "ALAVE Kyle": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 0.33,
    "clubs": ["COBRAFC"],
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
    ],
    "birthYear": 2012
  },
  "ALUF Brendon": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["MANHATTANFC"],
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
    ],
    "birthYear": 2013
  },
  "ANDRES Michael": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Cadet Men's Saber",
        "date": "October 4, 2025",
        "type": "T128",
        "win": true,
        "score": "15-14"
      }
    ],
    "birthYear": 2010
  },
  "ANTHONY Devyn V.": {
    "wins": 2,
    "losses": 2,
    "total": 4,
    "winRate": 0.5,
    "clubs": ["COBRAFC", "PWESTBROOK"],
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
    ],
    "birthYear": 2011
  },
  "ARCHIBALD Zachary": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Mission SYC",
        "event": "Y-12 Men's Saber",
        "date": "May 5, 2024",
        "type": "T32",
        "win": true,
        "score": "15-7"
      }
    ],
    "birthYear": 2013
  },
  "ATANASSOV Vasil V.": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [],
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
    ],
    "birthYear": 2007
  },
  "AVERY Marcus": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["TIMMOREHOUSE"],
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
    ],
    "birthYear": 2012
  },
  "AYDOGDU Hakan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["DURKANFA"],
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
    ],
    "birthYear": 2012
  },
  "BADMUS Joshua": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["CAPITALFA"],
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
    ],
    "birthYear": 2011
  },
  "BAHK Caleb": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["SHERIDANFA"],
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
    ],
    "birthYear": 2013
  },
  "BAI Evan": {
    "wins": 3,
    "losses": 5,
    "total": 8,
    "winRate": 0.38,
    "clubs": ["AURAFA", "PFA"],
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
    ],
    "birthYear": 2011
  },
  "BALAGOPAL Aditya": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Y-14 Men's Saber",
        "date": "November 17, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ],
    "birthYear": 2012
  },
  "BALE ATMAN": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "T64",
        "win": true,
        "score": "15-8"
      }
    ],
    "birthYear": 2008
  },
  "BARENBOYM Michael": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": ["SHERIDANFA"],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ],
    "birthYear": 2012
  },
  "BARRY Dave": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["SFA"],
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
    ],
    "birthYear": 2011
  },
  "BEKDJANOV Arthur": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "T32",
        "win": true,
        "score": "15-11"
      }
    ],
    "birthYear": 2010
  },
  "BELL III Alfred (Tripp) R.": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 10, 2026",
        "type": "T64",
        "win": false,
        "score": "6-15"
      }
    ],
    "birthYear": 2010
  },
  "BENE Paul": {
    "wins": 2,
    "losses": 2,
    "total": 4,
    "winRate": 0.5,
    "clubs": ["MIRACLEFC"],
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
    ],
    "birthYear": 2011
  },
  "BENNETT Lachlan": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["SHERIDANFA"],
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
    ],
    "birthYear": 2012
  },
  "BHANDARE Niev": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["FAW"],
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
    ],
    "birthYear": 2011
  },
  "BITKOWER Edward": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["DCFENCERS"],
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
    ],
    "birthYear": 2013
  },
  "BIVIJI Adam": {
    "wins": 7,
    "losses": 1,
    "total": 8,
    "winRate": 0.88,
    "clubs": ["COBRAFC"],
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
    ],
    "birthYear": 2012
  },
  "BIVIJI Ali": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["COBRAFC"],
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
    ],
    "birthYear": 2010
  },
  "BLAIR Campbell": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["TIMMOREHOUSE"],
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
    ],
    "birthYear": 2013
  },
  "BOLLU Viren": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "September 24, 2023",
        "type": "T4",
        "win": true,
        "score": "15-9"
      }
    ],
    "birthYear": 2010
  },
  "BONGIORNO Wesley": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["DCFENCERS"],
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
    ],
    "birthYear": 2011
  },
  "BOSITA Brennan": {
    "wins": 4,
    "losses": 2,
    "total": 6,
    "winRate": 0.67,
    "clubs": ["GFA"],
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
    ],
    "birthYear": 2011
  },
  "BRAMLETT Myer": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["FORGE"],
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
    ],
    "birthYear": 2011
  },
  "BREUER Daniel": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "September 24, 2023",
        "type": "T16",
        "win": true,
        "score": "15-8"
      }
    ],
    "birthYear": 2010
  },
  "BRIMMER Robert (Trey)": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["LVFA"],
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
    ],
    "birthYear": 2011
  },
  "BROOKS Isaac": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["NAZLYMOVFF"],
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
    ],
    "birthYear": 2012
  },
  "BROOKS Theo": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["NAZLYMOVFF"],
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
    ],
    "birthYear": 2012
  },
  "BROWN Andrew": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 2, 2024",
        "type": "T256",
        "win": true,
        "score": "15-13"
      }
    ],
    "birthYear": 2011
  },
  "BRUM Charles E.": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ],
    "birthYear": 2007
  },
  "BUCKLEY Owen": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["CFAFLLC"],
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
    ],
    "birthYear": 2013
  },
  "BURENKOV Matthew": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["ZETAFENCING"],
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
    ],
    "birthYear": 2012
  },
  "BUSQUETS Diego": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["DCFENCERS"],
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
    ],
    "birthYear": 2013
  },
  "BUYUCCAN Jonah": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["UMBCFC"],
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
    ],
    "birthYear": 2012
  },
  "CAI fungyu": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["CAPITALFA"],
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
    ],
    "birthYear": 2012
  },
  "CAO Donald": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["LAGUNAFC"],
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
    ],
    "birthYear": 2011
  },
  "CAO Oliver": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Junior Men's Saber",
        "date": "February 15, 2026",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ],
    "birthYear": 2009
  },
  "CARRINGTON IV William T.": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["COBRAFC"],
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
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "May 31, 2021",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      }
    ],
    "birthYear": 2012
  },
  "CHAMBERS Miles": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-10 Men's Saber",
        "date": "May 14, 2022",
        "type": "T32",
        "win": false,
        "score": "5-10"
      }
    ],
    "birthYear": 2012
  },
  "CHAN Elliott": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["PHX"],
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
    ],
    "birthYear": 2008
  },
  "CHAN Ewan": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 0.33,
    "clubs": ["PFA"],
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
    ],
    "birthYear": 2012
  },
  "CHANG Ethan": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["NAZLYMOVFF"],
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
    ],
    "birthYear": 2012
  },
  "CHANG Timothy": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["TIMMOREHOUSE"],
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
    ],
    "birthYear": 2012
  },
  "CHATTABOINA Haveesh": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["FAODENVER"],
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
    ],
    "birthYear": 2009
  },
  "CHAVES Matthew J.": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Div I Men's Saber",
        "date": "October 5, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ],
    "birthYear": 0
  },
  "CHAWLA Abhishek": {
    "wins": 5,
    "losses": 0,
    "total": 5,
    "winRate": 1,
    "clubs": ["CAPITALFA"],
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
    ],
    "birthYear": 2011
  },
  "CHEN Anson": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 18, 2025",
        "type": "T128",
        "win": true,
        "score": "15-1"
      }
    ],
    "birthYear": 2012
  },
  "CHEN Jack": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 3, 2024",
        "type": "T64",
        "win": true,
        "score": "15-12"
      }
    ],
    "birthYear": 2011
  },
  "CHEN Jonathan": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [],
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
    ],
    "birthYear": 2008
  },
  "CHEN Shawn": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["OREGONFA"],
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
    ],
    "birthYear": 2011
  },
  "CHEN Xing Ji": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["CHN"],
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
    ],
    "birthYear": 2012
  },
  "CHEONG Heonjun": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Div I Men's Saber",
        "date": "November 14, 2025",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ],
    "birthYear": 2007
  },
  "CHERNAEV Antonio": {
    "wins": 2,
    "losses": 1,
    "total": 3,
    "winRate": 0.67,
    "clubs": ["LILOVFA"],
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
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "May 31, 2021",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ],
    "birthYear": 2012
  },
  "CHI Everett": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["WESTCOASTFA"],
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
        "tournament": "May NAC",
        "event": "Cadet Men's Saber",
        "date": "May 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ],
    "birthYear": 2009
  },
  "CHOI Clayton": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["GFA"],
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
    ],
    "birthYear": 2012
  },
  "CHON Collin": {
    "wins": 3,
    "losses": 2,
    "total": 5,
    "winRate": 0.6,
    "clubs": ["GFA"],
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
    ],
    "birthYear": 2009
  },
  "CHTERENTAL Alex": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["DYNAMOFC"],
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
    ],
    "birthYear": 2007
  },
  "CIECIEREGA MATTHEW": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "USA Fencing National Championships & July Challenge",
        "event": "Y-10 Men's Saber",
        "date": "July 11, 2022",
        "type": "T64",
        "win": true,
        "score": "10-7"
      }
    ],
    "birthYear": 2013
  },
  "CIEMINS Henry": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "T16",
        "win": true,
        "score": "15-11"
      }
    ],
    "birthYear": 2009
  },
  "CLARK Aram": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 0.33,
    "clubs": ["TIMMOREHOUSE"],
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
    ],
    "birthYear": 2010
  },
  "COBIAN Richard": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Junior Men's Saber",
        "date": "October 3, 2025",
        "type": "T256",
        "win": true,
        "score": "15-13"
      }
    ],
    "birthYear": 2006
  },
  "COGLIANO Max": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 4, 2024",
        "type": "T256",
        "win": true,
        "score": "15-8"
      }
    ],
    "birthYear": 2011
  },
  "CRAIN Bennett": {
    "wins": 2,
    "losses": 2,
    "total": 4,
    "winRate": 0.5,
    "clubs": ["FORGE"],
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
    ],
    "birthYear": 2013
  },
  "CRAWFORD William": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["ZETAFENCING"],
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
    ],
    "birthYear": 2010
  },
  "CRICOL Damian": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "T16",
        "win": false,
        "score": "9-15"
      }
    ],
    "birthYear": 2010
  },
  "D'AMELJ Edoardo": {
    "wins": 2,
    "losses": 2,
    "total": 4,
    "winRate": 0.5,
    "clubs": ["NAZLYMOVFF"],
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
    ],
    "birthYear": 2012
  },
  "DAI Zihou": {
    "wins": 2,
    "losses": 6,
    "total": 8,
    "winRate": 0.25,
    "clubs": ["TIMMOREHOUSE"],
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
    ],
    "birthYear": 2011
  },
  "DATTILIO Aidan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["TIMMOREHOUSE"],
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
    ],
    "birthYear": 2012
  },
  "DE PLANELL-LOTTI Pau": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["TIMMOREHOUSE"],
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
    ],
    "birthYear": 2013
  },
  "DE SIENA Salvatore": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["ESCRIMEURFC"],
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
    ],
    "birthYear": 2008
  },
  "DEL VECCHIO Nicolas": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["CAPITALFA"],
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
    ],
    "birthYear": 2012
  },
  "DOLEV Ido": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Junior Men's Saber",
        "date": "January 12, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ],
    "birthYear": 2007
  },
  "DONNELL Cillian": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["DCFENCERS"],
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
    ],
    "birthYear": 2011
  },
  "DUMOULIN Gabriel": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["CANDLEWOODFC"],
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
    ],
    "birthYear": 2012
  },
  "EARLEY Jack": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["ZETAFENCING"],
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
    ],
    "birthYear": 2012
  },
  "EYBELMAN Ariel": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["DYNAMOFC"],
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
    ],
    "birthYear": 2008
  },
  "EYSTER Edison": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "NoVA Knights RYC/RJCC& NON-REGIONAL VET",
        "event": "Cadet Men's Saber",
        "date": "April 21, 2024",
        "type": "T8",
        "win": true,
        "score": "15-9"
      }
    ],
    "birthYear": 2008
  },
  "FANG Eason": {
    "wins": 2,
    "losses": 2,
    "total": 4,
    "winRate": 0.5,
    "clubs": ["SFA"],
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
    ],
    "birthYear": 2011
  },
  "FARBER Jake": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["ZETAFENCING"],
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
    ],
    "birthYear": 2013
  },
  "FEI Danny": {
    "wins": 2,
    "losses": 3,
    "total": 5,
    "winRate": 0.4,
    "clubs": ["MIRACLEFC"],
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
    ],
    "birthYear": 2013
  },
  "FENG Brendan": {
    "wins": 6,
    "losses": 1,
    "total": 7,
    "winRate": 0.86,
    "clubs": ["MIRACLEFC"],
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
    ],
    "birthYear": 2010
  },
  "FERRARO Pietro": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["CAPITALFA"],
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
    ],
    "birthYear": 2012
  },
  "FERRIS JR. Michael": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["PDXFENCING"],
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
    ],
    "birthYear": 2013
  },
  "FIROOZI Alex": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["MANHATTANFC"],
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
    ],
    "birthYear": 2013
  },
  "FIROOZI Sam": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["MANHATTANFC"],
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
    ],
    "birthYear": 2009
  },
  "FIRSTMAN William B.": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["NELLYA"],
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
    ],
    "birthYear": 2008
  },
  "FORD Aaron": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["NATCAPITALFC"],
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
    ],
    "birthYear": 2011
  },
  "FOUX Jonathan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["COBRAFC"],
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
    ],
    "birthYear": 2011
  },
  "FOWLER Escher": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["NAZLYMOVFF"],
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
    ],
    "birthYear": 2013
  },
  "FU BRANDEN": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["SBFA"],
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
    ],
    "birthYear": 2014
  },
  "GAO Francis": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-14 Men's Saber",
        "date": "November 29, 2025",
        "type": "T128",
        "win": true,
        "score": "15-5"
      }
    ],
    "birthYear": 2012
  },
  "GARCIA RODRIGUEZ Juan Pablo": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["ALLEFENCING"],
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
    ],
    "birthYear": 2013
  },
  "GATTO Enzo P.": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["SPARTAK"],
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
    ],
    "birthYear": 2009
  },
  "GERSTMANN Max T.": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ],
    "birthYear": 2007
  },
  "GHAYALOD ansh": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Div I Men's Saber",
        "date": "October 5, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ],
    "birthYear": 0
  },
  "GHISLAIN-FERNANDEZ Alexandre": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Junior Men's Saber",
        "date": "February 15, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ],
    "birthYear": 2007
  },
  "GILSHTEYN Jacob": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["LAIFC"],
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
    ],
    "birthYear": 2008
  },
  "GOLART Dylan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["MIRACLEFC"],
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
    ],
    "birthYear": 2013
  },
  "GONG zihao": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 13, 2024",
        "type": "T16",
        "win": false,
        "score": "6-15"
      }
    ],
    "birthYear": 2011
  },
  "GONZALEZ Jake": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Junior Olympics & Div 1 NAC",
        "event": "Cadet Men's Saber",
        "date": "February 17, 2025",
        "type": "T128",
        "win": true,
        "score": "15-14"
      }
    ],
    "birthYear": 2009
  },
  "GONZALEZ Leo": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["NATCAPITALFC"],
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
    ],
    "birthYear": 2012
  },
  "GORDON Ezekiel": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 0.33,
    "clubs": ["NELLYA"],
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
    ],
    "birthYear": 2013
  },
  "GORDON Samuel": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["ZETAFENCING"],
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
    ],
    "birthYear": 2011
  },
  "GRABOWSKI Alexander": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 0.33,
    "clubs": ["CAPITALFA"],
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
    ],
    "birthYear": 2013
  },
  "GRABOWSKI Stanley": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["CAPITALFA"],
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
    ],
    "birthYear": 2012
  },
  "GREENSTEIN Viktor": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Cadet Men's Saber",
        "date": "October 4, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ],
    "birthYear": 2012
  },
  "GREMILLION Obadiah": {
    "wins": 1,
    "losses": 1,
    "total": 2,
    "winRate": 0.5,
    "clubs": [],
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
    ],
    "birthYear": 2009
  },
  "GRIGORIEV Roman": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["PREMIERFA"],
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
    ],
    "birthYear": 2012
  },
  "GU Andrew": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["LAFAP"],
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
    ],
    "birthYear": 2013
  },
  "GU Kevin": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["SPARTAK"],
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
    ],
    "birthYear": 2011
  },
  "GUFFEY Christopher": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["GFA"],
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
    ],
    "birthYear": 2008
  },
  "GUREVICH Benjamin": {
    "wins": 0,
    "losses": 4,
    "total": 4,
    "winRate": 0,
    "clubs": ["ALLEFENCING", "ALLE"],
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
    ],
    "birthYear": 2010
  },
  "HALL Noah": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "River City Regional Rumble RJCC / RYC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "September 24, 2023",
        "type": "T2",
        "win": false,
        "score": "10-15"
      }
    ],
    "birthYear": 2010
  },
  "HARDRICK Noah": {
    "wins": 2,
    "losses": 3,
    "total": 5,
    "winRate": 0.4,
    "clubs": ["NAZLYMOVFF"],
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
    ],
    "birthYear": 2012
  },
  "HAUSLER Jayden": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["H3"],
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
    ],
    "birthYear": 2009
  },
  "HE Jason": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["PFA"],
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
    ],
    "birthYear": 2012
  },
  "HEATH Isabella": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["DCFENCERS"],
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
    ],
    "birthYear": 2013
  },
  "HENDERSON Louis": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["Western New York"],
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
    ],
    "birthYear": 2013
  },
  "HENDERSON Lucas": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["AFC"],
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
    ],
    "birthYear": 2009
  },
  "HENRY Cadel": {
    "wins": 5,
    "losses": 1,
    "total": 6,
    "winRate": 0.83,
    "clubs": ["FORGE"],
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
    ],
    "birthYear": 2011
  },
  "HENRY Ethan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["SCFA"],
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
    ],
    "birthYear": 2009
  },
  "HJERPE Wade H.": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["PHX"],
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
        "tournament": "May NAC",
        "event": "Cadet Men's Saber",
        "date": "May 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ],
    "birthYear": 2009
  },
  "HO Alden": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["PREMIERFA"],
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
    ],
    "birthYear": 2013
  },
  "HOLZ Lucas": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["PREMIERFA"],
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
    ],
    "birthYear": 2009
  },
  "HONG Rubin": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Div I Men's Saber",
        "date": "October 5, 2025",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      }
    ],
    "birthYear": 0
  },
  "HOWERTON Beckett": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["MIRACLEFC"],
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
    ],
    "birthYear": 2013
  },
  "HU Chris": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["AFFA"],
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
    ],
    "birthYear": 2009
  },
  "HU Harry": {
    "wins": 2,
    "losses": 4,
    "total": 6,
    "winRate": 0.33,
    "clubs": ["NELLYA"],
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
    ],
    "birthYear": 2011
  },
  "HU Jayden": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["MANHATTANFC"],
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
    ],
    "birthYear": 2011
  },
  "HUANG Alex F.": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["LILOVFA"],
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
    ],
    "birthYear": 2012
  },
  "HUCHWAJDA Alex": {
    "wins": 3,
    "losses": 3,
    "total": 6,
    "winRate": 0.5,
    "clubs": ["RESEARCHTRI"],
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
    ],
    "birthYear": 2011
  },
  "HWANG Jayden": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["LAFAP"],
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
    ],
    "birthYear": 2010
  },
  "ISAYENKO Daniel": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 0.33,
    "clubs": ["MANHATTANFC"],
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
    ],
    "birthYear": 2013
  },
  "IYER Neil": {
    "wins": 5,
    "losses": 0,
    "total": 5,
    "winRate": 1,
    "clubs": ["HALBERSTADT", "BAFC"],
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
    ],
    "birthYear": 2010
  },
  "JAVIER Xavier": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["NOVAFC"],
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
    ],
    "birthYear": 2013
  },
  "JEFFORDS Alexander": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Div I Men's Saber",
        "date": "October 5, 2025",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      }
    ],
    "birthYear": 0
  },
  "JI Johnson": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 0.33,
    "clubs": ["AIFENCING"],
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
    ],
    "birthYear": 2010
  },
  "JIA Charles": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["TIMMOREHOUSE"],
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
    ],
    "birthYear": 2012
  },
  "JIANG Terence": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["AURAFA"],
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
    ],
    "birthYear": 2008
  },
  "JIN Adam": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["MD-TERRAPIN"],
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
    ],
    "birthYear": 2012
  },
  "JIN Liangxuan": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Cadet Men's Saber",
        "date": "October 4, 2025",
        "type": "T64",
        "win": false,
        "score": "5-15"
      }
    ],
    "birthYear": 2009
  },
  "JIN Louis": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-12 Men's Saber",
        "date": "November 25, 2022",
        "type": "T128",
        "win": true,
        "score": "15-10"
      }
    ],
    "birthYear": 2011
  },
  "JOHNSON Leland": {
    "wins": 2,
    "losses": 5,
    "total": 7,
    "winRate": 0.29,
    "clubs": ["DCFENCERS"],
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
    ],
    "birthYear": 2011
  },
  "JOHNSON Leyton": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["DCFENCERS"],
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
    ],
    "birthYear": 2013
  },
  "JOHNSON Waldron": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["NOVAFC"],
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
    ],
    "birthYear": 2012
  },
  "KAMAL Aidan": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": ["NFFC"],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Junior Men's Saber",
        "date": "January 12, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ],
    "birthYear": 2007
  },
  "KAMURA Kosei": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["GFA"],
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
    ],
    "birthYear": 2012
  },
  "KANE Kiran": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["NOVAFC"],
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
    ],
    "birthYear": 2012
  },
  "KANG Evan R.": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Cadet Men's Saber",
        "date": "October 4, 2025",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      }
    ],
    "birthYear": 2009
  },
  "KANG Jeremy": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [],
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
    ],
    "birthYear": 2012
  },
  "KANG Matthew": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Y-14 Men's Saber",
        "date": "November 17, 2025",
        "type": "T16",
        "win": true,
        "score": "15-9"
      }
    ],
    "birthYear": 2011
  },
  "KANIA Alexander": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": ["MIDWESTFC"],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ],
    "birthYear": 2011
  },
  "KARAVAS Nicholas": {
    "wins": 6,
    "losses": 0,
    "total": 6,
    "winRate": 1,
    "clubs": ["FAOBOSTON"],
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
    ],
    "birthYear": 2011
  },
  "KEMP Austin": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 10, 2026",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ],
    "birthYear": 2010
  },
  "KHANNA Adamantis": {
    "wins": 2,
    "losses": 1,
    "total": 3,
    "winRate": 0.67,
    "clubs": [],
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
    ],
    "birthYear": 2012
  },
  "KHOTLINE Daniel": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ],
    "birthYear": 2009
  },
  "KIM ELIJAH": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 16, 2025",
        "type": "T16",
        "win": false,
        "score": "9-15"
      }
    ],
    "birthYear": 2009
  },
  "KIM Eric": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["HALBERSTADT"],
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
    ],
    "birthYear": 2012
  },
  "KIM Ethan": {
    "wins": 0,
    "losses": 5,
    "total": 5,
    "winRate": 0,
    "clubs": ["TIMMOREHOUSE"],
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
    ],
    "birthYear": 2009
  },
  "KIM Yusung": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["GFA"],
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
    ],
    "birthYear": 2012
  },
  "KIM seoha": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Fairfax Challenge Fall RYC/RJCC & Y8 (Non-Regional)",
        "event": "Y-12 Men's Saber",
        "date": "September 11, 2022",
        "type": "T4",
        "win": false,
        "score": "14-15"
      }
    ],
    "birthYear": 2011
  },
  "KITSON Chase": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["GFA"],
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
    ],
    "birthYear": 2010
  },
  "KONDOGI Saivarun": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Y-14 Men's Saber",
        "date": "November 17, 2025",
        "type": "T64",
        "win": true,
        "score": "15-9"
      }
    ],
    "birthYear": 2011
  },
  "KONG Ethan": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Y-14 Men's Saber",
        "date": "November 17, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ],
    "birthYear": 2012
  },
  "KOTVALI Aneesh": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "December SJCC + Para NAC",
        "event": "Junior Men's Saber",
        "date": "December 7, 2024",
        "type": "T256",
        "win": true,
        "score": "15-12"
      }
    ],
    "birthYear": 2005
  },
  "KOVACHEV Martin": {
    "wins": 1,
    "losses": 1,
    "total": 2,
    "winRate": 0.5,
    "clubs": [],
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
    ],
    "birthYear": 2010
  },
  "KOVALEV Daniil N.": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["WESTCOASTFA"],
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
    ],
    "birthYear": 2009
  },
  "KOZLOV Lucas": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 0.33,
    "clubs": ["DURKANFA"],
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
    ],
    "birthYear": 2012
  },
  "KRISHNARASA Aiyann": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": ["INTEGRITY"],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-14 Men's Saber",
        "date": "November 29, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ],
    "birthYear": 2012
  },
  "KROON Landon": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["SBFA"],
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
    ],
    "birthYear": 2012
  },
  "KU Collin": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Junior Olympics & Div 1 NAC",
        "event": "Cadet Men's Saber",
        "date": "February 17, 2025",
        "type": "T256",
        "win": true,
        "score": "15-10"
      }
    ],
    "birthYear": 2009
  },
  "KULKARNI Shreyas": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Junior Men's Saber",
        "date": "January 12, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ],
    "birthYear": 2007
  },
  "KUMAR Arjun": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "T32",
        "win": true,
        "score": "15-14"
      }
    ],
    "birthYear": 2008
  },
  "KUMAR Avinash": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["DYNAMOFC"],
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
    ],
    "birthYear": 2012
  },
  "KUSHKOV Michael": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["DYNAMOFC"],
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
    ],
    "birthYear": 2011
  },
  "KWON Kenneth": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 10, 2026",
        "type": "T128",
        "win": true,
        "score": "15-10"
      }
    ],
    "birthYear": 2010
  },
  "LAM Austin": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["TTFA"],
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
    ],
    "birthYear": 2013
  },
  "LAMTAN Christoffer": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Cadet Men's Saber",
        "date": "October 4, 2025",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ],
    "birthYear": 2010
  },
  "LAUB William": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": [],
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
    ],
    "birthYear": 2008
  },
  "LEE Aiden": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-12 Men's Saber",
        "date": "January 15, 2024",
        "type": "T128",
        "win": true,
        "score": "15-1"
      }
    ],
    "birthYear": 2013
  },
  "LEE Andrew": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["MANHATTANFC"],
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
    ],
    "birthYear": 2009
  },
  "LEE Brady": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ],
    "birthYear": 2010
  },
  "LEE Brendan": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-12 Men's Saber",
        "date": "March 3, 2024",
        "type": "T128",
        "win": true,
        "score": "15-11"
      }
    ],
    "birthYear": 2013
  },
  "LEE Ezra": {
    "wins": 6,
    "losses": 0,
    "total": 6,
    "winRate": 1,
    "clubs": ["NOVAFC"],
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
    ],
    "birthYear": 2013
  },
  "LEE Gordon": {
    "wins": 7,
    "losses": 0,
    "total": 7,
    "winRate": 1,
    "clubs": ["CAPITALFA"],
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
    ],
    "birthYear": 2013
  },
  "LEE Jeffrey": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": ["TIMMOREHOUSE"],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-14 Men's Saber",
        "date": "November 29, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ],
    "birthYear": 2012
  },
  "LEE Nathan Uju": {
    "wins": 1,
    "losses": 1,
    "total": 2,
    "winRate": 0.5,
    "clubs": [],
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
    ],
    "birthYear": 2011
  },
  "LEE Shane Gunn": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-14 Men's Saber",
        "date": "December 1, 2024",
        "type": "T128",
        "win": true,
        "score": "15-2"
      }
    ],
    "birthYear": 2011
  },
  "LEVIN Jacob": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["TIMMOREHOUSE"],
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
    ],
    "birthYear": 2012
  },
  "LEVY Daniel": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "T128",
        "win": true,
        "score": "15-5"
      }
    ],
    "birthYear": 2013
  },
  "LI AYDEN": {
    "wins": 1,
    "losses": 1,
    "total": 2,
    "winRate": 0.5,
    "clubs": [],
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
    ],
    "birthYear": 2011
  },
  "LI Alex Y.": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ],
    "birthYear": 2007
  },
  "LI Coby": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Junior Men's Saber",
        "date": "October 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ],
    "birthYear": 2010
  },
  "LI Howard": {
    "wins": 1,
    "losses": 4,
    "total": 5,
    "winRate": 0.2,
    "clubs": ["LAFAP"],
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
    ],
    "birthYear": 2011
  },
  "LI Michael": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["PFC"],
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
    ],
    "birthYear": 2012
  },
  "LI Ryan": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["LAGUNAFC"],
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
    ],
    "birthYear": 2012
  },
  "LI Yidong A.": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["LAGUNAFC"],
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
    ],
    "birthYear": 2009
  },
  "LIANG Preston": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["SBFA"],
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
    ],
    "birthYear": 2011
  },
  "LIAO Sirui": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["MIRACLEFC"],
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
    ],
    "birthYear": 2011
  },
  "LIEBOWITZ Carson": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["MANHATTANFC"],
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
    ],
    "birthYear": 2008
  },
  "LIM JUWANA Maximilian": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["BERGENFC"],
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
    ],
    "birthYear": 2013
  },
  "LIM Kai": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "December SJCC + Para NAC",
        "event": "Cadet Men's Saber",
        "date": "December 6, 2024",
        "type": "T128",
        "win": true,
        "score": "15-8"
      }
    ],
    "birthYear": 2008
  },
  "LIM William J.": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Div I Men's Saber",
        "date": "February 13, 2026",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      }
    ],
    "birthYear": 0
  },
  "LIN Alex": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["LONESTARFC"],
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
    ],
    "birthYear": 2011
  },
  "LIN Brendan": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["COBRAFC"],
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
    ],
    "birthYear": 2011
  },
  "LIN Maxim": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "January NAC",
        "event": "Cadet Men's Saber",
        "date": "January 5, 2025",
        "type": "T128",
        "win": false,
        "score": "9-15"
      }
    ],
    "birthYear": 2009
  },
  "LIN Philip T.": {
    "wins": 2,
    "losses": 2,
    "total": 4,
    "winRate": 0.5,
    "clubs": ["STAMFORDFC", "SFC"],
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
    ],
    "birthYear": 2013
  },
  "LIU Aaron": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["NELLYA"],
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
    ],
    "birthYear": 2010
  },
  "LIU Daniel": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Cadet Men's Saber",
        "date": "October 4, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ],
    "birthYear": 2009
  },
  "LIU ERIC": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["BOSTONFC"],
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
    ],
    "birthYear": 2011
  },
  "LIU Ethan": {
    "wins": 3,
    "losses": 1,
    "total": 4,
    "winRate": 0.75,
    "clubs": ["NELLYA"],
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
    ],
    "birthYear": 2013
  },
  "LIU Jeremy": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": ["AFC"],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-14 Men's Saber",
        "date": "November 29, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ],
    "birthYear": 2012
  },
  "LIU Kevin": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Junior Men's Saber",
        "date": "January 12, 2026",
        "type": "T64",
        "win": true,
        "score": "15-12"
      }
    ],
    "birthYear": 2009
  },
  "LIU Ryan": {
    "wins": 0,
    "losses": 3,
    "total": 3,
    "winRate": 0,
    "clubs": ["NELLYA"],
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
    ],
    "birthYear": 2012
  },
  "LIU Victor": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["SFA"],
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
    ],
    "birthYear": 2011
  },
  "LIU Yijin": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "May SJCC",
        "event": "Cadet Men's Saber",
        "date": "May 18, 2025",
        "type": "T64",
        "win": true,
        "score": "15-9"
      }
    ],
    "birthYear": 2009
  },
  "LIUZHANG Ben": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["COBRAFC"],
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
    ],
    "birthYear": 2013
  },
  "LLOYD Max": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-14 Men's Saber",
        "date": "November 29, 2025",
        "type": "T64",
        "win": true,
        "score": "15-12"
      }
    ],
    "birthYear": 2013
  },
  "LO Lei": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["LAFAP"],
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
    ],
    "birthYear": 2012
  },
  "LOO Jason": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["MANHATTANFC"],
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
    ],
    "birthYear": 2011
  },
  "LU Simon": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["LONESTARFC"],
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
    ],
    "birthYear": 2013
  },
  "LUC Linkin": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["PREMIERFA"],
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
    ],
    "birthYear": 2011
  },
  "LVOFF Leo": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["INTEGRITY"],
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
    ],
    "birthYear": 2011
  },
  "MAGITSKY Isaac": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["DYNAMOFC"],
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
    ],
    "birthYear": 2012
  },
  "MAI Ryan": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["LONESTARFC"],
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
    ],
    "birthYear": 2013
  },
  "MAKLIN David": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 8, 2025",
        "type": "T256",
        "win": true,
        "score": "15-3"
      }
    ],
    "birthYear": 2012
  },
  "MALEK Zak": {
    "wins": 5,
    "losses": 0,
    "total": 5,
    "winRate": 1,
    "clubs": ["BOSTONFC"],
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
    ],
    "birthYear": 2012
  },
  "MANESCU Miron": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["MANHATTANFC"],
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
        "tournament": "May NAC",
        "event": "Cadet Men's Saber",
        "date": "May 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ],
    "birthYear": 2009
  },
  "MARCELLINO Robert": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 10, 2026",
        "type": "T256",
        "win": true,
        "score": "15-8"
      }
    ],
    "birthYear": 2010
  },
  "MARCISZ Maksym": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["MIDWESTFC"],
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
    ],
    "birthYear": 2013
  },
  "MARTINSON Torm": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": ["MANHATTANFC"],
    "bouts": [
      {
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "May 31, 2021",
        "type": "Pool",
        "win": false,
        "score": "1-5"
      }
    ],
    "birthYear": 2012
  },
  "MARTIRE Francis": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": ["MANHATTANFC"],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-14 Men's Saber",
        "date": "November 29, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ],
    "birthYear": 2012
  },
  "MATTOO Deven": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Junior Men's Saber",
        "date": "February 15, 2026",
        "type": "T64",
        "win": true,
        "score": "15-13"
      }
    ],
    "birthYear": 2009
  },
  "MATTOO Dhruv": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Junior Men's Saber",
        "date": "October 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ],
    "birthYear": 2011
  },
  "MAWLER malcolm": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 0.33,
    "clubs": ["DCFENCERS"],
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
    ],
    "birthYear": 2012
  },
  "MCDONALD Finn": {
    "wins": 1,
    "losses": 1,
    "total": 2,
    "winRate": 0.5,
    "clubs": ["DEVLYFC-PA"],
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
        "tournament": "SYC",
        "event": "Y-10 Men's Saber",
        "date": "May 31, 2021",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      }
    ],
    "birthYear": 2010
  },
  "MCDONALD Ryan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["TIMMOREHOUSE"],
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
    ],
    "birthYear": 2011
  },
  "MEHAN Nicholas": {
    "wins": 0,
    "losses": 5,
    "total": 5,
    "winRate": 0,
    "clubs": ["STAMFORDFC"],
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
    ],
    "birthYear": 2009
  },
  "MEHTA Yash": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["RESEARCHTRI"],
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
    ],
    "birthYear": 2011
  },
  "MELE Gianni": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["TIMMOREHOUSE"],
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
    ],
    "birthYear": 2011
  },
  "MELUL Jonathan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["ALLEFENCING"],
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
    ],
    "birthYear": 2012
  },
  "MERMEGAS Alexander": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["TIMMOREHOUSE"],
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
    ],
    "birthYear": 2011
  },
  "MHLEY Gavin": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["STAMFORDFC"],
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
    ],
    "birthYear": 2011
  },
  "MIAO Heqi": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["AFFA"],
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
    ],
    "birthYear": 2012
  },
  "MICLAUS Justin": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Div I Men's Saber",
        "date": "November 14, 2025",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ],
    "birthYear": 2007
  },
  "MILLER Joseph": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "North Texas Roundup SYC / RCC",
        "event": "Y-14 Men's Saber",
        "date": "September 3, 2023",
        "type": "T64",
        "win": true,
        "score": "15-5"
      }
    ],
    "birthYear": 2010
  },
  "MITHUN Prabal": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["EXCELFA"],
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
    ],
    "birthYear": 2012
  },
  "MUNOZ Jonas": {
    "wins": 5,
    "losses": 0,
    "total": 5,
    "winRate": 1,
    "clubs": ["CAPITALFA"],
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
    ],
    "birthYear": 2011
  },
  "NAMBIAR Navin": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["GFA"],
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
      }
    ],
    "birthYear": 2009
  },
  "NARDINI Nathanael P.": {
    "wins": 4,
    "losses": 1,
    "total": 5,
    "winRate": 0.8,
    "clubs": ["COBRAFC"],
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
    ],
    "birthYear": 2011
  },
  "NG Jonathan": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Div I Men's Saber",
        "date": "February 13, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ],
    "birthYear": 2010
  },
  "NGO Emerson": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["LAFAP"],
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
    ],
    "birthYear": 2011
  },
  "O'KEEFE Brody": {
    "wins": 5,
    "losses": 0,
    "total": 5,
    "winRate": 1,
    "clubs": ["NJFENCINGALL"],
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
    ],
    "birthYear": 2013
  },
  "OH Aster": {
    "wins": 4,
    "losses": 4,
    "total": 8,
    "winRate": 0.5,
    "clubs": ["TIMMOREHOUSE", "SFC"],
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
    ],
    "birthYear": 2010
  },
  "OLSON Kai": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["OREGONFA"],
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
    ],
    "birthYear": 2012
  },
  "ONG Dylan": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Junior Men's Saber",
        "date": "October 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ],
    "birthYear": 2006
  },
  "ORIE Sohan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["SHERIDANFA"],
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
    ],
    "birthYear": 2011
  },
  "OTT William": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["MIRACLEFC"],
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
        "tournament": "SYC",
        "event": "Y-12 Men's Saber",
        "date": "January 14, 2023",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ],
    "birthYear": 2012
  },
  "O'LOUGHLIN Jacob": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["ROCHESTERFC"],
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
    ],
    "birthYear": 2012
  },
  "PARK Layne": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["AURAFA"],
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
    ],
    "birthYear": 2011
  },
  "PARKILA Lukas": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Capitol Clash SYC/RCC & Y8",
        "event": "Y-14 Men's Saber",
        "date": "January 13, 2024",
        "type": "T128",
        "win": true,
        "score": "15-10"
      }
    ],
    "birthYear": 2011
  },
  "PAUL James": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Fairfax Challenge Spring RYC/RJCC/ROC",
        "event": "Y-12 Men's Saber",
        "date": "April 16, 2023",
        "type": "T32",
        "win": true,
        "score": "15-6"
      }
    ],
    "birthYear": 2012
  },
  "PAUL Jimmy": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["CAPITALFA"],
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
    ],
    "birthYear": 2012
  },
  "PEI Kent": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": ["Northern California"],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ],
    "birthYear": 2012
  },
  "PEREIRA Beckham": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["INTLFENCECLB"],
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
    ],
    "birthYear": 2009
  },
  "PERRIN Leo": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["NAZLYMOVFF"],
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
    ],
    "birthYear": 2011
  },
  "PINTO Marcus": {
    "wins": 2,
    "losses": 3,
    "total": 5,
    "winRate": 0.4,
    "clubs": ["TIMMOREHOUSE"],
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
    ],
    "birthYear": 2010
  },
  "PIPKE Garrett": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["NOVAFC"],
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
    ],
    "birthYear": 2013
  },
  "PORTER Dupree": {
    "wins": 1,
    "losses": 1,
    "total": 2,
    "winRate": 0.5,
    "clubs": [],
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
    ],
    "birthYear": 2009
  },
  "PRIMUS Nazir": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["PWESTBROOK"],
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
    ],
    "birthYear": 2008
  },
  "PROSPER Nathaniel": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "River City Regional Rumble RYC/RJCC",
        "event": "Y-12 Men's Saber",
        "date": "February 11, 2023",
        "type": "T32",
        "win": true,
        "score": "15-5"
      }
    ],
    "birthYear": 2012
  },
  "QI Zach": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["WESTCOASTFA"],
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
    ],
    "birthYear": 2013
  },
  "QIN toby": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["RESEARCHTRI"],
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
    ],
    "birthYear": 2013
  },
  "RADJABLI Maximillian": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": [],
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
    ],
    "birthYear": 2008
  },
  "RAJMOHAN Arya": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ],
    "birthYear": 2007
  },
  "RAMANAN Jaisimh": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["SFSS"],
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
    ],
    "birthYear": 2008
  },
  "RAVOOR Sahas": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["RENAISSANCE"],
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
    ],
    "birthYear": 2013
  },
  "REN James": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Junior Men's Saber",
        "date": "January 12, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ],
    "birthYear": 2007
  },
  "RINALDI Savio": {
    "wins": 5,
    "losses": 0,
    "total": 5,
    "winRate": 1,
    "clubs": ["CAPITALFA"],
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
    ],
    "birthYear": 2012
  },
  "ROBINSON Ezra": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Y-14 Men's Saber",
        "date": "November 17, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ],
    "birthYear": 2011
  },
  "ROH Jaden": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["GFA"],
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
    ],
    "birthYear": 2011
  },
  "ROORDA Easton": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["NOVAFC"],
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
    ],
    "birthYear": 2010
  },
  "SADHU Neiyam": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Div I Men's Saber",
        "date": "February 13, 2026",
        "type": "T256",
        "win": true,
        "score": "15-14"
      }
    ],
    "birthYear": 2010
  },
  "SALMAN Hamzah": {
    "wins": 0,
    "losses": 4,
    "total": 4,
    "winRate": 0,
    "clubs": ["GFA", "North Texas"],
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
    ],
    "birthYear": 2010
  },
  "SALMAN Ibrahim": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["GFA"],
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
    ],
    "birthYear": 2013
  },
  "SANGSTER Arden": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Cadet Men's Saber",
        "date": "March 7, 2025",
        "type": "T64",
        "win": false,
        "score": "12-15"
      }
    ],
    "birthYear": 2009
  },
  "SANTOS Theodore": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["COBRAFC"],
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
    ],
    "birthYear": 2011
  },
  "SAYAR Luke": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["AIFENCING"],
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
    ],
    "birthYear": 2012
  },
  "SCHIMEL Luke": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "T16",
        "win": true,
        "score": "15-13"
      }
    ],
    "birthYear": 2008
  },
  "SCHWARTZMAN Jakub": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["NAZLYMOVFF"],
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
    ],
    "birthYear": 2012
  },
  "SEELMAN Cole": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Cadet Men's Saber",
        "date": "June 30, 2025",
        "type": "T256",
        "win": true,
        "score": "15-7"
      }
    ],
    "birthYear": 2009
  },
  "SENTHIL Gatik": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["FIT"],
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
    ],
    "birthYear": 2012
  },
  "SETH Khalen": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["MIDWESTFC"],
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
    ],
    "birthYear": 2012
  },
  "SHANKAR Rahm": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": ["SABIO"],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC",
        "event": "Y-14 Men's Saber",
        "date": "November 29, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ],
    "birthYear": 2012
  },
  "SHAPIRO Simon": {
    "wins": 0,
    "losses": 4,
    "total": 4,
    "winRate": 0,
    "clubs": ["DYNAMOFC"],
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
    ],
    "birthYear": 2012
  },
  "SHARMA Ayaan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["REDSTARCHICG"],
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
    ],
    "birthYear": 2013
  },
  "SHICK Cedric": {
    "wins": 1,
    "losses": 3,
    "total": 4,
    "winRate": 0.25,
    "clubs": ["INTEGRITY"],
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
    ],
    "birthYear": 2012
  },
  "SHINCHUK Jacob": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": ["DYNAMO"],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Y-8 Men's Saber",
        "date": "November 24, 2018",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ],
    "birthYear": 2011
  },
  "SHIPITSIN Alexander": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 10, 2024",
        "type": "T256",
        "win": false,
        "score": "10-15"
      }
    ],
    "birthYear": 2008
  },
  "SIMS Elliot": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "March NAC and Parafencing National Championships",
        "event": "Y-12 Men's Saber",
        "date": "March 5, 2023",
        "type": "T128",
        "win": true,
        "score": "15-6"
      }
    ],
    "birthYear": 2012
  },
  "SINGH Swaran": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": ["PHX"],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ],
    "birthYear": 2012
  },
  "SKARBONKIEWICZ Maksymilian A.": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Div I Men's Saber",
        "date": "October 5, 2025",
        "type": "T256",
        "win": false,
        "score": "5-15"
      }
    ],
    "birthYear": 2009
  },
  "SLAVNOV Anton": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Ben Gutenberg SYC - RJCC",
        "event": "Y-14 Men's Saber",
        "date": "October 12, 2024",
        "type": "T16",
        "win": false,
        "score": "5-15"
      }
    ],
    "birthYear": 2012
  },
  "SMITH Etienne": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "May SJCC",
        "event": "Junior Men's Saber",
        "date": "May 16, 2025",
        "type": "T128",
        "win": true,
        "score": "15-8"
      }
    ],
    "birthYear": 2011
  },
  "SO Morgan": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["TIMMOREHOUSE"],
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
    ],
    "birthYear": 2011
  },
  "SONG Aidan": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["TIMMOREHOUSE"],
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
    ],
    "birthYear": 2012
  },
  "SONG Nicholas": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["BOSTONFC"],
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
    ],
    "birthYear": 2011
  },
  "SOWERS Samuel": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "December SJCC + Para NAC",
        "event": "Cadet Men's Saber",
        "date": "December 6, 2024",
        "type": "T64",
        "win": false,
        "score": "7-15"
      }
    ],
    "birthYear": 2008
  },
  "SRA Nawab": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Y-14 Men's Saber",
        "date": "November 17, 2025",
        "type": "T128",
        "win": true,
        "score": "15-2"
      }
    ],
    "birthYear": 2012
  },
  "SRIVATS Vedh": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Ben Gutenberg SYC - RJCC",
        "event": "Y-14 Men's Saber",
        "date": "October 12, 2024",
        "type": "T32",
        "win": true,
        "score": "15-11"
      }
    ],
    "birthYear": 2011
  },
  "STAMPER Wyatt": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 10, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ],
    "birthYear": 2011
  },
  "STENSON Silas": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["FIT"],
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
    ],
    "birthYear": 2012
  },
  "STEVENS Flynn": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["CAN"],
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
    ],
    "birthYear": 2011
  },
  "STURGEON Cole": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "March NAC",
        "event": "Y-14 Men's Saber",
        "date": "March 2, 2024",
        "type": "T128",
        "win": false,
        "score": "6-15"
      }
    ],
    "birthYear": 2009
  },
  "SU Kingston": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["LAFAP"],
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
    ],
    "birthYear": 2013
  },
  "SU Landon": {
    "wins": 0,
    "losses": 4,
    "total": 4,
    "winRate": 0,
    "clubs": ["MIRACLEFC"],
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
    ],
    "birthYear": 2008
  },
  "SUN Andrew": {
    "wins": 0,
    "losses": 3,
    "total": 3,
    "winRate": 0,
    "clubs": ["MANHATTANFC"],
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
    ],
    "birthYear": 2010
  },
  "SUN Stephen": {
    "wins": 2,
    "losses": 2,
    "total": 4,
    "winRate": 0.5,
    "clubs": ["MASTERSFA-NJ"],
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
    ],
    "birthYear": 2012
  },
  "SZULIM Lucjan": {
    "wins": 1,
    "losses": 3,
    "total": 4,
    "winRate": 0.25,
    "clubs": ["CAPITALFA"],
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
    ],
    "birthYear": 2010
  },
  "TA-ZHOU Sophia": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["NAZLYMOVFF"],
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
    ],
    "birthYear": 2013
  },
  "TAI Milton": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["DCFENCERS"],
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
    ],
    "birthYear": 2013
  },
  "TAKEBE Ren": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-14 Men's Saber",
        "date": "March 21, 2025",
        "type": "T64",
        "win": true,
        "score": "15-7"
      }
    ],
    "birthYear": 2012
  },
  "TAN Rui": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["CHN"],
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
    ],
    "birthYear": 2012
  },
  "TANG Morgan": {
    "wins": 3,
    "losses": 2,
    "total": 5,
    "winRate": 0.6,
    "clubs": ["HALBERSTADT"],
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
    ],
    "birthYear": 2012
  },
  "TANI Tino": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ],
    "birthYear": 2011
  },
  "TANJGA Luka": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 16, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ],
    "birthYear": 2009
  },
  "TASIKAS Peter": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "T128",
        "win": true,
        "score": "15-9"
      }
    ],
    "birthYear": 2007
  },
  "TEPLESKY Sasha": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["NOVAFC"],
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
    ],
    "birthYear": 2012
  },
  "THEUNISSE Oliver": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["TTFA"],
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
    ],
    "birthYear": 2013
  },
  "THOMAS Texas": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["FAODENVER"],
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
    ],
    "birthYear": 2012
  },
  "TIAGI Daniel": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["ALLEFENCING"],
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
        "tournament": "May NAC",
        "event": "Cadet Men's Saber",
        "date": "May 18, 2025",
        "type": "Pool",
        "win": false,
        "score": "3-5"
      }
    ],
    "birthYear": 2009
  },
  "TIAGI George": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Div I Men's Saber",
        "date": "November 14, 2025",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      }
    ],
    "birthYear": 0
  },
  "TSE Aiden J": {
    "wins": 0,
    "losses": 3,
    "total": 3,
    "winRate": 0,
    "clubs": ["HALBERSTADT"],
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
    ],
    "birthYear": 2010
  },
  "UEMOTO Ken": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["DURKANFA"],
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
    ],
    "birthYear": 2009
  },
  "URSU Marcel T.": {
    "wins": 1,
    "losses": 2,
    "total": 3,
    "winRate": 0.33,
    "clubs": [],
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
    ],
    "birthYear": 2013
  },
  "VALENCIA Jose": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["CAPITALFA"],
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
    ],
    "birthYear": 2012
  },
  "VAN ROY Ray": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": ["HALBERSTADT"],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Cadet Men's Saber",
        "date": "June 30, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-4"
      }
    ],
    "birthYear": 2009
  },
  "VASQUEZ Matteo": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["FSA INC"],
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
    ],
    "birthYear": 2011
  },
  "VISH Manyu": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Cobra Challenge SYC/RCC/Y8",
        "event": "Cadet Men's Saber",
        "date": "November 30, 2024",
        "type": "T128",
        "win": true,
        "score": "15-3"
      }
    ],
    "birthYear": 2011
  },
  "VO Blake": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "January SJCC",
        "event": "Junior Men's Saber",
        "date": "January 24, 2026",
        "type": "T64",
        "win": true,
        "score": "15-9"
      }
    ],
    "birthYear": 2012
  },
  "VO Landon": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Junior Men's Saber",
        "date": "October 3, 2025",
        "type": "Pool",
        "win": false,
        "score": "2-5"
      }
    ],
    "birthYear": 2006
  },
  "VOSPER James": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["SANDIEGOFC"],
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
    ],
    "birthYear": 2012
  },
  "VU Mark": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 10, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-0"
      }
    ],
    "birthYear": 2010
  },
  "WAGNER Joseph": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["TRIWEAPONFC"],
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
    ],
    "birthYear": 2013
  },
  "WANG ANDREW CHANG": {
    "wins": 1,
    "losses": 1,
    "total": 2,
    "winRate": 0.5,
    "clubs": [],
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
    ],
    "birthYear": 2007
  },
  "WANG Alex": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": [],
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
    ],
    "birthYear": 2011
  },
  "WANG Andrew": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["AFC"],
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
    ],
    "birthYear": 2011
  },
  "WANG Daniel": {
    "wins": 2,
    "losses": 2,
    "total": 4,
    "winRate": 0.5,
    "clubs": ["DYNAMOFC"],
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
        "tournament": "Cobra Challenge SYC",
        "event": "Y-14 Men's Saber",
        "date": "December 1, 2024",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ],
    "birthYear": 2009
  },
  "WANG David": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["AGFC (CA)"],
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
    ],
    "birthYear": 2013
  },
  "WANG Edward": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["DYNAMOFC"],
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
    ],
    "birthYear": 2011
  },
  "WANG HongXi": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Junior Men's Saber",
        "date": "June 28, 2025",
        "type": "T256",
        "win": true,
        "score": "15-10"
      }
    ],
    "birthYear": 2006
  },
  "WANG Justin": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Junior Olympics",
        "event": "Cadet Men's Saber",
        "date": "January 10, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ],
    "birthYear": 2009
  },
  "WANG Max": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["CAPITALFA"],
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
    ],
    "birthYear": 2009
  },
  "WANG Michael": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["MANHATTANFC"],
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
    ],
    "birthYear": 2009
  },
  "WANG Nicolas": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": [],
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
    ],
    "birthYear": 2007
  },
  "WANG Ryan": {
    "wins": 3,
    "losses": 0,
    "total": 3,
    "winRate": 1,
    "clubs": ["AGFC (CA)"],
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
    ],
    "birthYear": 2011
  },
  "WANG Theodore": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Div I Men's Saber",
        "date": "February 13, 2026",
        "type": "Pool",
        "win": false,
        "score": "4-5"
      }
    ],
    "birthYear": 2011
  },
  "WANG Tiger": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["LAFAP"],
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
    ],
    "birthYear": 2010
  },
  "WANG Will": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["BERGENFC"],
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
    ],
    "birthYear": 2013
  },
  "WAXLER Alex": {
    "wins": 5,
    "losses": 0,
    "total": 5,
    "winRate": 1,
    "clubs": ["TIMMOREHOUSE"],
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
    ],
    "birthYear": 2013
  },
  "WELSTEAD Nicholas": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["DYNAMOFC"],
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
    ],
    "birthYear": 2013
  },
  "WINTERSET Mason": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": ["SBFA"],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Cadet Men's Saber",
        "date": "June 30, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ],
    "birthYear": 2009
  },
  "WONG David": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "May SJCC",
        "event": "Junior Men's Saber",
        "date": "May 16, 2025",
        "type": "T32",
        "win": true,
        "score": "15-10"
      }
    ],
    "birthYear": 2010
  },
  "WONG Lucas": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Cadet Men's Saber",
        "date": "July 1, 2024",
        "type": "T64",
        "win": false,
        "score": "5-15"
      }
    ],
    "birthYear": 2009
  },
  "WONG Mac": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["MANHATTANFC"],
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
    ],
    "birthYear": 2010
  },
  "WONG Max": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Cadet Men's Saber",
        "date": "November 16, 2025",
        "type": "T64",
        "win": true,
        "score": "15-13"
      }
    ],
    "birthYear": 2010
  },
  "WONG Ron": {
    "wins": 4,
    "losses": 0,
    "total": 4,
    "winRate": 1,
    "clubs": ["LAFAP"],
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
    ],
    "birthYear": 2011
  },
  "XIA Matthew": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "NoVA Knights RYC/RJCC& NON-REGIONAL VET",
        "event": "Cadet Men's Saber",
        "date": "April 21, 2024",
        "type": "T2",
        "win": true,
        "score": "15-11"
      }
    ],
    "birthYear": 2008
  },
  "XIE Ethan": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["Maryland"],
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
    ],
    "birthYear": 2011
  },
  "XU Andrew": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["MIRACLEFC"],
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
    ],
    "birthYear": 2012
  },
  "XU Ethan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["BAFC"],
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
    ],
    "birthYear": 2013
  },
  "XU Ivan": {
    "wins": 2,
    "losses": 2,
    "total": 4,
    "winRate": 0.5,
    "clubs": ["MIRACLEFC"],
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
    ],
    "birthYear": 2012
  },
  "XU Princeton": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["TTFA"],
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
    ],
    "birthYear": 2012
  },
  "YAN Luke": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["PREMIERFC"],
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
    ],
    "birthYear": 2012
  },
  "YAN William": {
    "wins": 1,
    "losses": 1,
    "total": 2,
    "winRate": 0.5,
    "clubs": [],
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
    ],
    "birthYear": 2008
  },
  "YANG Dylan": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "November NAC",
        "event": "Div I Men's Saber",
        "date": "November 14, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-1"
      }
    ],
    "birthYear": 2008
  },
  "YANG Jake": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "National Championships and July Challenge (Summer Nationals)",
        "event": "Y-14 Men's Saber",
        "date": "July 3, 2025",
        "type": "T256",
        "win": true,
        "score": "15-4"
      }
    ],
    "birthYear": 2011
  },
  "YANG Justin": {
    "wins": 1,
    "losses": 1,
    "total": 2,
    "winRate": 0.5,
    "clubs": [],
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
    ],
    "birthYear": 2011
  },
  "YANG Phillip": {
    "wins": 1,
    "losses": 3,
    "total": 4,
    "winRate": 0.25,
    "clubs": ["SBFA"],
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
    ],
    "birthYear": 2011
  },
  "YAO Zachary": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": [],
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
    ],
    "birthYear": 2011
  },
  "YAP Kah Kai (Cayden)": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["HALBERSTADT"],
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
    ],
    "birthYear": 2008
  },
  "YE Eric": {
    "wins": 0,
    "losses": 2,
    "total": 2,
    "winRate": 0,
    "clubs": ["EFA"],
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
    ],
    "birthYear": 2008
  },
  "YOOK Isaac": {
    "wins": 6,
    "losses": 4,
    "total": 10,
    "winRate": 0.6,
    "clubs": ["TIMMOREHOUSE", "MANHATTANFC"],
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
    ],
    "birthYear": 2010
  },
  "YU Ian": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": [],
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
    ],
    "birthYear": 2013
  },
  "YUCEL Emine": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Capital Czajkowski Cup #3",
        "event": "Senior Mixed Saber",
        "date": "March 15, 2025",
        "type": "T8",
        "win": true,
        "score": "15-12"
      }
    ],
    "birthYear": 0
  },
  "ZENG Vito": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["SPARTAK"],
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
        "tournament": "May NAC",
        "event": "Cadet Men's Saber",
        "date": "May 18, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-2"
      }
    ],
    "birthYear": 2009
  },
  "ZEWDA Kebron": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "February NAC",
        "event": "Div I Men's Saber",
        "date": "February 13, 2026",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ],
    "birthYear": 0
  },
  "ZHANG Aiden": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["SFA"],
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
    ],
    "birthYear": 2012
  },
  "ZHANG Kaixuan": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "Fairfax Challenge SYC/RJCC",
        "event": "Y-14 Men's Saber",
        "date": "March 21, 2025",
        "type": "T4",
        "win": false,
        "score": "14-15"
      }
    ],
    "birthYear": 2010
  },
  "ZHANG Ray": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["MANHATTANFC"],
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
    ],
    "birthYear": 2011
  },
  "ZHANG Shaoxuan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["CAN"],
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
    ],
    "birthYear": 2011
  },
  "ZHAO David": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["MIRACLEFC"],
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
    ],
    "birthYear": 2013
  },
  "ZHAO Lucas": {
    "wins": 1,
    "losses": 1,
    "total": 2,
    "winRate": 0.5,
    "clubs": [],
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
    ],
    "birthYear": 2009
  },
  "ZHAO Royce": {
    "wins": 5,
    "losses": 2,
    "total": 7,
    "winRate": 0.71,
    "clubs": ["TIMMOREHOUSE"],
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
    ],
    "birthYear": 2011
  },
  "ZHAO Zhiyu(Yogi)": {
    "wins": 1,
    "losses": 0,
    "total": 1,
    "winRate": 1,
    "clubs": [],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Junior Men's Saber",
        "date": "October 3, 2025",
        "type": "Pool",
        "win": true,
        "score": "5-3"
      }
    ],
    "birthYear": 2006
  },
  "ZHENG LEON": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["BERGENFC"],
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
    ],
    "birthYear": 2013
  },
  "ZHU Yuchen (Kevin)": {
    "wins": 0,
    "losses": 1,
    "total": 1,
    "winRate": 0,
    "clubs": [],
    "bouts": [
      {
        "tournament": "October NAC",
        "event": "Div I Men's Saber",
        "date": "October 5, 2025",
        "type": "Pool",
        "win": false,
        "score": "0-5"
      }
    ],
    "birthYear": 0
  },
  "ZLATINSKI Jason": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["GFA"],
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
    ],
    "birthYear": 2009
  },
  "ZONG Shiyan": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["CHN"],
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
    ],
    "birthYear": 2012
  },
  "ZWAKA Jonas": {
    "wins": 2,
    "losses": 0,
    "total": 2,
    "winRate": 1,
    "clubs": ["SHERIDANFA"],
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
    ],
    "birthYear": 2009
  }
};
