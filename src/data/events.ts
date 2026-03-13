// Complete competition history from FencingTracker
// Rian Wei - 71 events from Nov 2018 to Feb 2026

export type TournamentLevel = "International" | "National" | "SYC" | "RYC" | "Local";
export type AgeCategory = "Y-8" | "Y-10" | "Y-12" | "Y-14" | "Cadet" | "Junior" | "Div I" | "Senior";

export interface PoolBout {
  opponent: string;
  club: string;
  score: string; // "V5", "D3", etc.
  win: boolean;
}

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
  poolSeed?: number;
  poolBouts?: PoolBout[];
  deSeed?: number;
  ftlEventId?: string;
}

function s(season: string, events: Omit<CompEvent, "season">[]): CompEvent[] {
  return events.map(e => ({ ...e, season }));
}

export const allEvents: CompEvent[] = [
  // === 2025-2026 Season ===
  ...s("2025-2026", [
    { poolBouts: [
          { opponent: "LIU Ethan", club: "NELLYA", score: "D3", win: false },
          { opponent: "CAO Oliver", club: "WESTCOASTFA", score: "D4", win: false },
          { opponent: "ATANASSOV Vasil V.", club: "North Carolina", score: "D4", win: false },
          { opponent: "GHISLAIN-FERNANDEZ Alexandre", club: "CAN", score: "V5", win: true },
          { opponent: "ALAVE Kyle", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "LAUB William", club: "INTLFENCECLB", score: "V5", win: true }
        ], ftlEventId: "8903CD145CB742FEB7F55BB3B30D9133",
    date: "2026-02-15", tournament: "February NAC", event: "Junior Men's Saber", category: "Junior", level: "National", place: 31, total: 203, rating: "" },
    { poolBouts: [
          { opponent: "LAUB William", club: "INTLFENCECLB", score: "V5", win: true },
          { opponent: "WANG Theodore", club: "Z1FENCING", score: "D4", win: false },
          { opponent: "ZEWDA Kebron", club: "ROCHESTERFC", score: "V5", win: true },
          { opponent: "YOOK Isaac", club: "TIMMOREHOUSE", score: "D3", win: false },
          { opponent: "NG Jonathan", club: "DURKANFA", score: "V5", win: true },
          { opponent: "LIM William J.", club: "GFA", score: "D0", win: false }
        ], ftlEventId: "9A3B491C717747A0A2E6D33B276D3561",
    date: "2026-02-13", tournament: "February NAC", event: "Div I Men's Saber", category: "Div I", level: "National", place: 105, total: 209, rating: "" },
    { poolBouts: [
          { opponent: "GERSTMANN Max T.", club: "OFC", score: "D4", win: false },
          { opponent: "RAJMOHAN Arya", club: "COBRAFC", score: "V5", win: true },
          { opponent: "BRUM Charles E.", club: "WESTCOASTFA", score: "V5", win: true },
          { opponent: "LI Alex Y.", club: "SCFA", score: "V5", win: true },
          { opponent: "KHOTLINE Daniel", club: "DYNAMOFC", score: "D4", win: false },
          { opponent: "LEE Brady", club: "GFA", score: "V5", win: true }
        ], ftlEventId: "6A4791BBA9D74B25ACECDEDCF10E2E76",
    date: "2026-01-24", tournament: "January SJCC", event: "Junior Men's Saber", category: "Junior", level: "National", place: 2, total: 117, rating: "A26", medal: "🥈" },
    { poolBouts: [
          { opponent: "NARDINI Nathanael P.", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "KAMAL Aidan", club: "NFFC", score: "V5", win: true },
          { opponent: "DOLEV Ido", club: "PDXFENCING", score: "V5", win: true },
          { opponent: "KHANNA Adamantis", club: "BOSTONFC", score: "V5", win: true },
          { opponent: "REN James", club: "GFA", score: "V5", win: true },
          { opponent: "KULKARNI Shreyas", club: "Orange Coast", score: "V5", win: true }
        ], ftlEventId: "19C84E7752D54731B323D0D33D5C12CF",
    date: "2026-01-12", tournament: "Junior Olympics", event: "Junior Men's Saber", category: "Junior", level: "National", place: 11, total: 297, rating: "B26" },
    { poolBouts: [
          { opponent: "WANG Justin", club: "ALPHAFA", score: "V5", win: true },
          { opponent: "GORDON Samuel", club: "INTLFENCECLB", score: "V5", win: true },
          { opponent: "VU Mark", club: "BERGENFC", score: "V5", win: true },
          { opponent: "KEMP Austin", club: "SABIO", score: "D4", win: false },
          { opponent: "STAMPER Wyatt", club: "OREGONFA", score: "V5", win: true },
          { opponent: "WANG Alex", club: "GFA", score: "V5", win: true }
        ], ftlEventId: "FE6A7D19C5E6482A9B84771A2724C257",
    date: "2026-01-10", tournament: "Junior Olympics", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 44, total: 277, rating: "" },
    { date: "2025-11-29", tournament: "Cobra Challenge SYC/RCC", event: "Y-14 Men's Saber", category: "Y-14", level: "SYC", place: 1, total: 150, rating: "", medal: "🥇", poolSeed: 1, poolBouts: [
          { opponent: "ROH Jaden", club: "GFA", score: "V5", win: true },
          { opponent: "MARTIRE Francis", club: "MANHATTANFC", score: "V5", win: true },
          { opponent: "LIU Jeremy", club: "AFC", score: "V5", win: true },
          { opponent: "SHANKAR Rahm", club: "SABIO", score: "V5", win: true },
          { opponent: "KRISHNARASA Aiyann", club: "INTEGRITY", score: "V5", win: true },
          { opponent: "LEE Jeffrey", club: "TIMMOREHOUSE", score: "V5", win: true }
        ], ftlEventId: "5BE2AA8B8F094C02BA783BC934730629" },
    { poolBouts: [
          { opponent: "KONG Ethan", club: "SFC", score: "V5", win: true },
          { opponent: "LEE Nathan Uju", club: "SCFA", score: "V5", win: true },
          { opponent: "WANG Ryan", club: "AGFC (CA)", score: "V5", win: true },
          { opponent: "BALAGOPAL Aditya", club: "FFA", score: "V5", win: true },
          { opponent: "NGO Emerson", club: "EAGLE BLADE", score: "V5", win: true },
          { opponent: "ROBINSON Ezra", club: "FAODENVER", score: "V5", win: true }
        ], ftlEventId: "08EC2FD5A3AE4D918695EC3936ACF986", date: "2025-11-17", tournament: "November NAC", event: "Y-14 Men's Saber", category: "Y-14", level: "National", place: 7, total: 170, rating: "" },
    { poolBouts: [
          { opponent: "LEVIN Jacob", club: "Z1FENCING", score: "V5", win: true },
          { opponent: "MCDONALD Finn", club: "DEVLYFC-PA", score: "V5", win: true },
          { opponent: "KAMURA Kosei", club: "GFA", score: "V5", win: true },
          { opponent: "LIU Ethan", club: "NELLYA", score: "V5", win: true },
          { opponent: "TANJGA Luka", club: "MANHATTANFC", score: "V5", win: true },
          { opponent: "TANI Tino", club: "SCFA", score: "V5", win: true }
        ], ftlEventId: "A09DCCCD39004FF4B1F7841673FF87BC",
    date: "2025-11-16", tournament: "November NAC", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 11, total: 307, rating: "" },
    { poolBouts: [
          { opponent: "YANG Dylan", club: "PREMIERFA", score: "V5", win: true },
          { opponent: "MICLAUS Justin", club: "NOTREDAME", score: "D4", win: false },
          { opponent: "GREMILLION Obadiah", club: "CALI", score: "V5", win: true },
          { opponent: "TIAGI George", club: "ALLEFENCING", score: "D0", win: false },
          { opponent: "NAMBIAR Navin", club: "GFA", score: "V5", win: true },
          { opponent: "CHEONG Heonjun", club: "SABIO", score: "D4", win: false }
        ], ftlEventId: "D62040E630394A92B216ABD3D04DDBB1",
    date: "2025-11-14", tournament: "November NAC", event: "Div I Men's Saber", category: "Div I", level: "National", place: 94, total: 200, rating: "" },
    { poolBouts: [
          { opponent: "CHAVES Matthew J.", club: "FORGE", score: "V5", win: true },
          { opponent: "ZHU Yuchen (Kevin)", club: "CAN", score: "D0", win: false },
          { opponent: "JEFFORDS Alexander", club: "SBFA", score: "D3", win: false },
          { opponent: "FANG Eason", club: "SFA", score: "V5", win: true },
          { opponent: "HONG Rubin", club: "GFA", score: "D2", win: false },
          { opponent: "GHAYALOD ansh", club: "TIMMOREHOUSE", score: "V5", win: true }
        ], ftlEventId: "692F1BFED9B7465CA25168DAF4408B77",
    date: "2025-10-05", tournament: "October NAC", event: "Div I Men's Saber", category: "Div I", level: "National", place: 145, total: 216, rating: "" },
    { poolBouts: [
          { opponent: "CARRINGTON IV William T.", club: "COBRAFC", score: "D4", win: false },
          { opponent: "LAMTAN Christoffer", club: "MANHATTANFC", score: "D4", win: false },
          { opponent: "KANG Evan R.", club: "DYNAMOFC", score: "D3", win: false },
          { opponent: "LIU Daniel", club: "SOL FA", score: "V5", win: true },
          { opponent: "GREENSTEIN Viktor", club: "LAIFC", score: "V5", win: true },
          { opponent: "TANG Morgan", club: "HALBERSTADT", score: "V5", win: true }
        ], ftlEventId: "6AC2F4789A7B4F74A54D37505F57B7FC",
    date: "2025-10-04", tournament: "October NAC", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 59, total: 210, rating: "" },
    { poolBouts: [
          { opponent: "LI Coby", club: "CAN", score: "V5", win: true },
          { opponent: "ZHAO Zhiyu(Yogi)", club: "SCFA", score: "V5", win: true },
          { opponent: "ONG Dylan", club: "INTLFENCECLB", score: "V5", win: true },
          { opponent: "MATTOO Dhruv", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "WANG Nicolas", club: "FAODENVER", score: "D3", win: false },
          { opponent: "VO Landon", club: "PREMIERFA", score: "D2", win: false }
        ], ftlEventId: "756DF2598D6942EFB60AE2D70D712523",
    date: "2025-10-03", tournament: "October NAC", event: "Junior Men's Saber", category: "Junior", level: "National", place: 101, total: 296, rating: "" },
    { poolBouts: [
          { opponent: "FERRIS JR. Michael", club: "PDXFENCING", score: "V5", win: true },
          { opponent: "WONG Ron", club: "LAFAP", score: "V5", win: true },
          { opponent: "PEI Kent", club: "Northern California", score: "V5", win: true },
          { opponent: "BARENBOYM Michael", club: "SHERIDANFA", score: "D4", win: false },
          { opponent: "SINGH Swaran", club: "PHX", score: "V5", win: true },
          { opponent: "KANIA Alexander", club: "MIDWESTFC", score: "V5", win: true }
        ], ftlEventId: "2BB968AA89754F1FBDEA1763F841AA0F",
    date: "2025-07-03", tournament: "Summer Nationals", event: "Y-14 Men's Saber", category: "Y-14", level: "National", place: 14, total: 308, rating: "" },
    { poolBouts: [
          { opponent: "WINTERSET Mason", club: "SBFA", score: "V5", win: true },
          { opponent: "VAN ROY Ray", club: "HALBERSTADT", score: "V5", win: true },
          { opponent: "NARDINI Nathanael P.", club: "COBRAFC", score: "V5", win: true },
          { opponent: "NAMBIAR Navin", club: "GFA", score: "V5", win: true },
          { opponent: "GUREVICH Benjamin", club: "ALLEFENCING", score: "D3", win: false }
        ], ftlEventId: "FA417D7708444A1CAF39EA2D8DF6C2BC",
    date: "2025-06-30", tournament: "Summer Nationals", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 81, total: 282, rating: "" },
    { poolBouts: [
          { opponent: "ZENG Vito", club: "SPARTAK", score: "V5", win: true },
          { opponent: "MANESCU Miron", club: "MANHATTANFC", score: "V5", win: true },
          { opponent: "HJERPE Wade H.", club: "PHX", score: "V5", win: true },
          { opponent: "CHI Everett", club: "WESTCOASTFA", score: "V5", win: true },
          { opponent: "TIAGI Daniel", club: "ALLEFENCING", score: "D3", win: false }
        ], ftlEventId: "C9FF989C6AA54810961E8E086FF96D65",
    date: "2025-06-28", tournament: "Summer Nationals", event: "Junior Men's Saber", category: "Junior", level: "National", place: 85, total: 346, rating: "" },
  ]),

  // === 2024-2025 Season ===
  ...s("2024-2025", [
    { date: "2025-05-18", tournament: "May SJCC", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 19, total: 91, rating: "" , poolSeed: 4, poolBouts: [
          { opponent: "KOVALEV Daniil N.", club: "WESTCOASTFA", score: "D1", win: false },
          { opponent: "PEREIRA Beckham", club: "INTLFENCECLB", score: "V5", win: true },
          { opponent: "GRIGORIEV Roman", club: "PREMIERFA", score: "V5", win: true },
          { opponent: "GATTO Enzo P.", club: "SPARTAK", score: "V5", win: true },
          { opponent: "YOOK Isaac", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "WONG Ron", club: "LAFAP", score: "V5", win: true }
        ], ftlEventId: "E37BD77C14BB47DF8C00E4DA11579517"},
    { date: "2025-05-16", tournament: "May SJCC", event: "Junior Men's Saber", category: "Junior", level: "National", place: 16, total: 114, rating: "" , poolSeed: 3, poolBouts: [
          { opponent: "HOLZ Lucas", club: "PREMIERFA", score: "V5", win: true },
          { opponent: "BRIMMER Robert (Trey)", club: "LVFA", score: "V5", win: true },
          { opponent: "KITSON Chase", club: "GFA", score: "V5", win: true },
          { opponent: "HWANG Jayden", club: "LAFAP", score: "D3", win: false },
          { opponent: "LIU Aaron", club: "NELLYA", score: "V5", win: true }
        ], ftlEventId: "28A7662A90A84C509C5196637392B66E"},
    { date: "2025-03-21", tournament: "Fairfax Challenge SYC/RJCC", event: "Y-14 Men's Saber", category: "Y-14", level: "SYC", place: 3, total: 96, rating: "" , poolSeed: 7, poolBouts: [
          { opponent: "TAN Rui", club: "CHN", score: "D3", win: false },
          { opponent: "CHANG Timothy", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "SCHWARTZMAN Jakub", club: "NAZLYMOVFF", score: "V5", win: true },
          { opponent: "MIAO Heqi", club: "AFFA", score: "V5", win: true },
          { opponent: "XU Andrew", club: "MIRACLEFC", score: "V5", win: true },
          { opponent: "CHOI Clayton", club: "GFA", score: "V5", win: true }
        ], ftlEventId: "8538BA50DEBD471FBFDEA8EA2909CC41"},
    { date: "2025-03-15", tournament: "Capital Czajkowski Cup #3", event: "Senior Mixed Saber", category: "Senior", level: "Local", place: 3, total: 27, rating: "B25", poolBouts: [
          { opponent: "DEL VECCHIO Nicolas", club: "CAPITALFA", score: "D1", win: false },
          { opponent: "FERRARO Pietro", club: "CAPITALFA", score: "V5", win: true },
          { opponent: "PAUL Jimmy", club: "CAPITALFA", score: "V5", win: true },
          { opponent: "JIN Adam", club: "MD-TERRAPIN", score: "V5", win: true },
          { opponent: "BUYUCCAN Jonah", club: "UMBCFC", score: "V5", win: true },
          { opponent: "JOHNSON Waldron", club: "NOVAFC", score: "V5", win: true }
        ], ftlEventId: "759D718E5B0149278533708A882F85CC" },
    { date: "2025-03-08", tournament: "March NAC", event: "Y-14 Men's Saber", category: "Y-14", level: "National", place: 66, total: 273, rating: "" , poolSeed: 1, poolBouts: [
          { opponent: "OLSON Kai", club: "OREGONFA", score: "V5", win: true },
          { opponent: "LI Michael", club: "PFC", score: "V5", win: true },
          { opponent: "BURENKOV Matthew", club: "ZETAFENCING", score: "V5", win: true },
          { opponent: "O'LOUGHLIN Jacob", club: "ROCHESTERFC", score: "V5", win: true },
          { opponent: "GU Andrew", club: "LAFAP", score: "V5", win: true },
          { opponent: "ZONG Shiyan", club: "CHN", score: "V5", win: true }
        ], ftlEventId: "AE11ECD239C44C63B7451CB116EA49F4"},
    { date: "2025-03-07", tournament: "March NAC", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 44, total: 225, rating: "" , poolSeed: 7, poolBouts: [
          { opponent: "LI Yidong A.", club: "LAGUNAFC", score: "V5", win: true },
          { opponent: "SUN Stephen", club: "MASTERSFA-NJ", score: "V5", win: true },
          { opponent: "FIROOZI Sam", club: "MANHATTANFC", score: "V5", win: true },
          { opponent: "ZWAKA Jonas", club: "SHERIDANFA", score: "V5", win: true },
          { opponent: "MEHAN Nicholas", club: "STAMFORDFC", score: "D4", win: false },
          { opponent: "ZLATINSKI Jason", club: "GFA", score: "V5", win: true }
        ], ftlEventId: "9B2C737DF50E4F88B706CB5E2BAA9E63"},
    { date: "2025-02-17", tournament: "Junior Olympics", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 55, total: 286, rating: "" , poolSeed: 3, poolBouts: [
          { opponent: "HENRY Ethan", club: "SCFA", score: "V5", win: true },
          { opponent: "HAUSLER Jayden", club: "H3", score: "V5", win: true },
          { opponent: "UEMOTO Ken", club: "DURKANFA", score: "D2", win: false },
          { opponent: "HU Chris", club: "AFFA", score: "D4", win: false },
          { opponent: "HENRY Cadel", club: "FORGE", score: "V5", win: true },
          { opponent: "CHATTABOINA Haveesh", club: "FAODENVER", score: "V5", win: true }
        ], ftlEventId: "29D0B3694EE34F57BE452D29E68CAC66"},
    { date: "2025-02-16", tournament: "Junior Olympics", event: "Junior Men's Saber", category: "Junior", level: "National", place: 188, total: 342, rating: "" , poolSeed: 2, poolBouts: [
          { opponent: "CHTERENTAL Alex", club: "DYNAMOFC", score: "D1", win: false },
          { opponent: "DUMOULIN Gabriel", club: "CANDLEWOODFC", score: "V5", win: true },
          { opponent: "RAMANAN Jaisimh", club: "SFSS", score: "D2", win: false },
          { opponent: "VOSPER James", club: "SANDIEGOFC", score: "V5", win: true },
          { opponent: "THOMAS Texas", club: "FAODENVER", score: "D2", win: false },
          { opponent: "AYDOGDU Hakan", club: "DURKANFA", score: "V5", win: true }
        ], ftlEventId: "3B332D00D72A46E98BA31BB9932427D3"},
    { date: "2025-01-18", tournament: "Capitol Clash SYC/RCC", event: "Y-14 Men's Saber", category: "Y-14", level: "SYC", place: 1, total: 182, rating: "C25", medal: "🥇" , poolSeed: 7, poolBouts: [
          { opponent: "LEVIN Jacob", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "EARLEY Jack", club: "ZETAFENCING", score: "V5", win: true },
          { opponent: "TEPLESKY Sasha", club: "NOVAFC", score: "V5", win: true },
          { opponent: "BENNETT Lachlan", club: "SHERIDANFA", score: "V5", win: true },
          { opponent: "HU Jayden", club: "MANHATTANFC", score: "V5", win: true },
          { opponent: "LI Michael", club: "PFC", score: "V5", win: true }
        ], ftlEventId: "19AFCFC4E88946699063FEEB4CBE844F"},
    { date: "2025-01-05", tournament: "January NAC", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 93, total: 131, rating: "", poolBouts: [
          { opponent: "WANG Michael", club: "MANHATTANFC", score: "V5", win: true },
          { opponent: "LI Howard", club: "LAFAP", score: "D4", win: false },
          { opponent: "EYBELMAN Ariel", club: "DYNAMOFC", score: "D4", win: false },
          { opponent: "OH Aster", club: "SFC", score: "V5", win: true },
          { opponent: "DAI Zihou", club: "TIMMOREHOUSE", score: "D3", win: false },
          { opponent: "FANG Eason", club: "SFA", score: "D4", win: false }
        ], ftlEventId: "30DC03F1471444FFB8B16F849A8FC115" },
    { date: "2024-12-07", tournament: "December SJCC", event: "Junior Men's Saber", category: "Junior", level: "National", place: 63, total: 205, rating: "" , poolSeed: 6, poolBouts: [
          { opponent: "GILSHTEYN Jacob", club: "LAIFC", score: "D2", win: false },
          { opponent: "WANG Daniel", club: "DYNAMOFC", score: "D3", win: false },
          { opponent: "KIM Ethan", club: "TIMMOREHOUSE", score: "D3", win: false },
          { opponent: "YAP Kah Kai (Cayden)", club: "HALBERSTADT", score: "V5", win: true },
          { opponent: "FIRSTMAN William B.", club: "NELLYA", score: "D3", win: false }
        ], ftlEventId: "798A037A1CE34DA691D0033B1DE774C5"},
    { date: "2024-12-06", tournament: "December SJCC", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 35, total: 170, rating: "" , poolSeed: 6, poolBouts: [
          { opponent: "IYER Neil", club: "HALBERSTADT", score: "V5", win: true },
          { opponent: "WANG Daniel", club: "DYNAMOFC", score: "V5", win: true },
          { opponent: "NGO Emerson", club: "LAFAP", score: "V5", win: true },
          { opponent: "BARRY Dave", club: "SFA", score: "V5", win: true },
          { opponent: "CHAN Elliott", club: "PHX", score: "V5", win: true }
        ], ftlEventId: "DC067CF260654DA4B34A4DDA97173595"},
    { date: "2024-12-01", tournament: "Cobra Challenge SYC/RCC/Y8", event: "Y-14 Men's Saber", category: "Y-14", level: "SYC", place: 60, total: 142, rating: "" , poolSeed: 7, poolBouts: [
          { opponent: "ISAYENKO Daniel", club: "MANHATTANFC", score: "D4", win: false },
          { opponent: "WAXLER Alex", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "SHAPIRO Simon", club: "DYNAMOFC", score: "D3", win: false },
          { opponent: "JI Johnson", club: "AIFENCING", score: "D2", win: false },
          { opponent: "LIAO Sirui", club: "MIRACLEFC", score: "V5", win: true },
          { opponent: "FOUX Jonathan", club: "COBRAFC", score: "V5", win: true }
        ], ftlEventId: "057895A08F814BBA8C7446CBE83C50C0"},
    { date: "2024-11-30", tournament: "Cobra Challenge SYC/RCC/Y8", event: "Cadet Men's Saber", category: "Cadet", level: "SYC", place: 8, total: 104, rating: "" , poolSeed: 7, poolBouts: [
          { opponent: "WAXLER Alex", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "LIEBOWITZ Carson", club: "MANHATTANFC", score: "D0", win: false },
          { opponent: "JIANG Terence", club: "AURAFA", score: "V5", win: true },
          { opponent: "CHANG Timothy", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "KARAVAS Nicholas", club: "FAOBOSTON", score: "V5", win: true },
          { opponent: "DE SIENA Salvatore", club: "ESCRIMEURFC", score: "D4", win: false }
        ], ftlEventId: "8E6962332DF848D9864BC4070CF5A41C"},
    { date: "2024-11-10", tournament: "November NAC", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 149, total: 271, rating: "" , poolSeed: 3, poolBouts: [
          { opponent: "PRIMUS Nazir", club: "PWESTBROOK", score: "D1", win: false },
          { opponent: "IYER Neil", club: "HALBERSTADT", score: "V5", win: true },
          { opponent: "BAI Evan", club: "AURAFA", score: "D3", win: false },
          { opponent: "KARAVAS Nicholas", club: "FAOBOSTON", score: "V5", win: true },
          { opponent: "SONG Aidan", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "SUN Andrew", club: "MANHATTANFC", score: "D3", win: false }
        ], ftlEventId: "9E46DD403B3447A99A46D5B358B002E9"},
    { date: "2024-10-12", tournament: "Ben Gutenberg SYC", event: "Y-14 Men's Saber", category: "Y-14", level: "SYC", place: 10, total: 93, rating: "", poolBouts: [
          { opponent: "WANG Edward", club: "DYNAMOFC", score: "V5", win: true },
          { opponent: "MELE Gianni", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "HENDERSON Louis", club: "Western New York", score: "V5", win: true },
          { opponent: "LOO Jason", club: "MANHATTANFC", score: "V5", win: true },
          { opponent: "GORDON Samuel", club: "ZETAFENCING", score: "V5", win: true },
          { opponent: "PARK Layne", club: "AURAFA", score: "V5", win: true }
        ], ftlEventId: "650757ADB12E47BABD7410CD1089770A" },
    { date: "2024-09-21", tournament: "River City Regional Rumble", event: "Cadet Men's Saber", category: "Cadet", level: "RYC", place: 17, total: 39, rating: "", poolBouts: [
          { opponent: "HOWERTON Beckett", club: "MIRACLEFC", score: "V5", win: true },
          { opponent: "GARCIA RODRIGUEZ Juan Pablo", club: "ALLEFENCING", score: "V5", win: true },
          { opponent: "WANG Max", club: "CAPITALFA", score: "V5", win: true },
          { opponent: "GOLART Dylan", club: "MIRACLEFC", score: "V5", win: true },
          { opponent: "CRAIN Bennett", club: "FORGE", score: "V5", win: true },
          { opponent: "QIN toby", club: "RESEARCHTRI", score: "V5", win: true }
        ], ftlEventId: "BC402D1D74C04870B43366C799EA97F5" },
  ]),

  // === 2023-2024 Season ===
  ...s("2023-2024", [
    { date: "2024-07-05", tournament: "Summer Nationals", event: "Y-12 Men's Saber", category: "Y-12", level: "National", place: 5, total: 230, rating: "" , poolSeed: 2, poolBouts: [
          { opponent: "BUCKLEY Owen", club: "CFAFLLC", score: "V5", win: true },
          { opponent: "LAM Austin", club: "TTFA", score: "V5", win: true },
          { opponent: "LUC Linkin", club: "PREMIERFA", score: "V5", win: true },
          { opponent: "WANG Ryan", club: "AGFC (CA)", score: "V5", win: true },
          { opponent: "LI Ryan", club: "LAGUNAFC", score: "V5", win: true },
          { opponent: "ALUF Brendon", club: "MANHATTANFC", score: "V5", win: true }
        ], ftlEventId: "20317555F5564159A2340FF91FC99167"},
    { date: "2024-07-04", tournament: "Summer Nationals", event: "Y-14 Men's Saber", category: "Y-14", level: "National", place: 40, total: 299, rating: "" , poolSeed: 3, poolBouts: [
          { opponent: "LIANG Preston", club: "SBFA", score: "V5", win: true },
          { opponent: "ZHANG Ray", club: "MANHATTANFC", score: "V5", win: true },
          { opponent: "ANTHONY Devyn V.", club: "PWESTBROOK", score: "V5", win: true },
          { opponent: "LUC Linkin", club: "PREMIERFA", score: "V5", win: true },
          { opponent: "GU Kevin", club: "SPARTAK", score: "V5", win: true },
          { opponent: "SONG Aidan", club: "TIMMOREHOUSE", score: "V5", win: true }
        ], ftlEventId: "2DAF82A676B54F978935F850A9299E7E"},
    { date: "2024-07-01", tournament: "Summer Nationals", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 34, total: 266, rating: "" , poolSeed: 3, poolBouts: [
          { opponent: "ZHENG LEON", club: "BERGENFC", score: "V5", win: true },
          { opponent: "SU Kingston", club: "LAFAP", score: "V5", win: true },
          { opponent: "WELSTEAD Nicholas", club: "DYNAMOFC", score: "V5", win: true },
          { opponent: "LIU Ethan", club: "NELLYA", score: "V5", win: true },
          { opponent: "CHON Collin", club: "GFA", score: "V5", win: true },
          { opponent: "RAVOOR Sahas", club: "RENAISSANCE", score: "V5", win: true }
        ], ftlEventId: "BFF1B751607042CEA8D291997E1FAAFC"},
    { date: "2024-05-05", tournament: "Mission SYC", event: "Y-12 Men's Saber", category: "Y-12", level: "SYC", place: 3, total: 75, rating: "", poolBouts: [
          { opponent: "BENNETT Lachlan", club: "SHERIDANFA", score: "V5", win: true },
          { opponent: "D'AMELJ Edoardo", club: "NAZLYMOVFF", score: "V5", win: true },
          { opponent: "LIUZHANG Ben", club: "COBRAFC", score: "V5", win: true },
          { opponent: "MALEK Zak", club: "BOSTONFC", score: "V5", win: true },
          { opponent: "BLAIR Campbell", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "FIROOZI Alex", club: "MANHATTANFC", score: "V5", win: true }
        ], ftlEventId: "3D287685D105411D9A4851D5B515D1E1" },
    { date: "2024-05-04", tournament: "Mission SYC", event: "Y-14 Men's Saber", category: "Y-14", level: "SYC", place: 8, total: 103, rating: "", poolBouts: [
          { opponent: "SO Morgan", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "MERMEGAS Alexander", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "LIU ERIC", club: "BOSTONFC", score: "D3", win: false },
          { opponent: "MHLEY Gavin", club: "STAMFORDFC", score: "V5", win: true },
          { opponent: "BIVIJI Adam", club: "COBRAFC", score: "V5", win: true }
        ], ftlEventId: "FF85124947E44714B4820FCE033882BA" },
    { date: "2024-04-21", tournament: "NoVA Knights RYC/RJCC", event: "Cadet Men's Saber", category: "Cadet", level: "RYC", place: 1, total: 23, rating: "D24", medal: "🥇", poolBouts: [
          { opponent: "GARCIA RODRIGUEZ Juan Pablo", club: "ALLEFENCING", score: "V5", win: true },
          { opponent: "HUCHWAJDA Alex", club: "RESEARCHTRI", score: "V5", win: true },
          { opponent: "BENE Paul", club: "MIRACLEFC", score: "V5", win: true },
          { opponent: "FORD Aaron", club: "NATCAPITALFC", score: "V5", win: true },
          { opponent: "BRAMLETT Myer", club: "FORGE", score: "V5", win: true }
        ], ftlEventId: "F0C46479E1694153A55910EF61F1FD94" },
    { date: "2024-04-20", tournament: "NoVA Knights RYC/RJCC", event: "Y-14 Men's Saber", category: "Y-14", level: "RYC", place: 17, total: 41, rating: "", poolBouts: [
          { opponent: "MUNOZ Jonas", club: "CAPITALFA", score: "V5", win: true },
          { opponent: "CHAWLA Abhishek", club: "CAPITALFA", score: "V5", win: true },
          { opponent: "OTT William", club: "MIRACLEFC", score: "V5", win: true },
          { opponent: "BARRY Dave", club: "SFA", score: "V5", win: true },
          { opponent: "CHANG Ethan", club: "NAZLYMOVFF", score: "V5", win: true },
          { opponent: "VASQUEZ Matteo", club: "FSA INC", score: "V5", win: true }
        ], ftlEventId: "751EF4090EB8438CB23D3B8E21724C93" },
    { date: "2024-03-16", tournament: "March SJCC", event: "Cadet Men's Saber", category: "Cadet", level: "National", place: 90, total: 117, rating: "" , poolSeed: 4, poolBouts: [
          { opponent: "LIN Philip T.", club: "SFC", score: "V5", win: true },
          { opponent: "LEE Andrew", club: "MANHATTANFC", score: "D2", win: false },
          { opponent: "GUFFEY Christopher", club: "GFA", score: "D0", win: false },
          { opponent: "FARBER Jake", club: "ZETAFENCING", score: "V5", win: true },
          { opponent: "BAHK Caleb", club: "SHERIDANFA", score: "D1", win: false },
          { opponent: "WANG Will", club: "BERGENFC", score: "D4", win: false }
        ], ftlEventId: "7D72140EF44B4917A1463889166CB7F6"},
    { date: "2024-03-03", tournament: "March NAC", event: "Y-12 Men's Saber", category: "Y-12", level: "National", place: 17, total: 192, rating: "" , poolSeed: 3, poolBouts: [
          { opponent: "QI Zach", club: "WESTCOASTFA", score: "V5", win: true },
          { opponent: "O'KEEFE Brody", club: "NJFENCINGALL", score: "V5", win: true },
          { opponent: "ZHANG Shaoxuan", club: "CAN", score: "V5", win: true },
          { opponent: "HO Alden", club: "PREMIERFA", score: "V5", win: true },
          { opponent: "CHEN Shawn", club: "OREGONFA", score: "V5", win: true },
          { opponent: "KARAVAS Nicholas", club: "FAOBOSTON", score: "V5", win: true }
        ], ftlEventId: "4409C222A752442D88257A1375AF9AE4"},
    { date: "2024-03-02", tournament: "March NAC", event: "Y-14 Men's Saber", category: "Y-14", level: "National", place: 91, total: 248, rating: "" , poolSeed: 6, poolBouts: [
          { opponent: "XU Ethan", club: "BAFC", score: "V5", win: true },
          { opponent: "YOOK Isaac", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "FERRIS JR. Michael", club: "PDXFENCING", score: "V5", win: true },
          { opponent: "CHON Collin", club: "GFA", score: "D3", win: false },
          { opponent: "MARCISZ Maksym", club: "MIDWESTFC", score: "V5", win: true },
          { opponent: "KOZLOV Lucas", club: "DURKANFA", score: "D0", win: false }
        ], ftlEventId: "A2C6B962E7A84407B05DF6B67CCCD4E1"},
    { date: "2024-01-15", tournament: "Capitol Clash SYC/RCC", event: "Y-12 Men's Saber", category: "Y-12", level: "SYC", place: 3, total: 148, rating: "" , poolSeed: 7, poolBouts: [
          { opponent: "SHARMA Ayaan", club: "REDSTARCHICG", score: "V5", win: true },
          { opponent: "FU BRANDEN", club: "SBFA", score: "V5", win: true },
          { opponent: "LIM JUWANA Maximilian", club: "BERGENFC", score: "D3", win: false },
          { opponent: "LU Simon", club: "LONESTARFC", score: "V5", win: true },
          { opponent: "JAVIER Xavier", club: "NOVAFC", score: "V5", win: true },
          { opponent: "MALEK Zak", club: "BOSTONFC", score: "V5", win: true }
        ], ftlEventId: "644FBA3227B84C80B5B3DE9E164EC1D0"},
    { date: "2024-01-13", tournament: "Capitol Clash SYC/RCC", event: "Y-14 Men's Saber", category: "Y-14", level: "SYC", place: 16, total: 185, rating: "E24" , poolSeed: 6, poolBouts: [
          { opponent: "SUN Stephen", club: "MASTERSFA-NJ", score: "D4", win: false },
          { opponent: "KIM Yusung", club: "GFA", score: "V5", win: true },
          { opponent: "WONG Mac", club: "MANHATTANFC", score: "D1", win: false },
          { opponent: "YANG Phillip", club: "SBFA", score: "D2", win: false },
          { opponent: "CRAWFORD William", club: "ZETAFENCING", score: "V5", win: true }
        ], ftlEventId: "0E3BC82880D6424C8ECF74CF9BECEB6F"},
    { date: "2023-11-24", tournament: "Cobra Challenge SYC/RCC/Y8", event: "Y-12 Men's Saber", category: "Y-12", level: "SYC", place: 5, total: 119, rating: "" , poolSeed: 3, poolBouts: [
          { opponent: "ORIE Sohan", club: "SHERIDANFA", score: "V5", win: true },
          { opponent: "DATTILIO Aidan", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "MITHUN Prabal", club: "EXCELFA", score: "V5", win: true },
          { opponent: "KIM Eric", club: "HALBERSTADT", score: "V5", win: true },
          { opponent: "O'KEEFE Brody", club: "NJFENCINGALL", score: "V5", win: true },
          { opponent: "CHERNAEV Antonio", club: "LILOVFA", score: "V5", win: true }
        ], ftlEventId: "BB56151C198C4C53B9E0E4DD87BA02EB"},
    { date: "2023-09-24", tournament: "River City Regional Rumble", event: "Y-14 Men's Saber", category: "Y-14", level: "RYC", place: 2, total: 31, rating: "", poolBouts: [
          { opponent: "BONGIORNO Wesley", club: "DCFENCERS", score: "V5", win: true },
          { opponent: "HARDRICK Noah", club: "NAZLYMOVFF", score: "D4", win: false },
          { opponent: "RINALDI Savio", club: "CAPITALFA", score: "V5", win: true },
          { opponent: "BENE Paul", club: "MIRACLEFC", score: "D2", win: false },
          { opponent: "HENRY Cadel", club: "FORGE", score: "V5", win: true },
          { opponent: "LEE Ezra", club: "NOVAFC", score: "V5", win: true }
        ], ftlEventId: "513197BC5DA14131A59268E3CDE10504" },
    { date: "2023-09-23", tournament: "River City Regional Rumble", event: "Cadet Men's Saber", category: "Cadet", level: "RYC", place: 16, total: 33, rating: "", poolBouts: [
          { opponent: "FENG Brendan", club: "MIRACLEFC", score: "V5", win: true },
          { opponent: "CRAIN Bennett", club: "FORGE", score: "D4", win: false },
          { opponent: "SZULIM Lucjan", club: "CAPITALFA", score: "D4", win: false },
          { opponent: "SU Landon", club: "MIRACLEFC", score: "D3", win: false },
          { opponent: "ROORDA Easton", club: "NOVAFC", score: "V5", win: true },
          { opponent: "SALMAN Hamzah", club: "GFA", score: "D1", win: false }
        ], ftlEventId: "BA9D77BCC1B747D89A94E1F4B0B9F04C" },
    { date: "2023-09-03", tournament: "North Texas Roundup SYC/RCC", event: "Y-14 Men's Saber", category: "Y-14", level: "SYC", place: 8, total: 67, rating: "E23", poolBouts: [
          { opponent: "LIN Alex", club: "LONESTARFC", score: "V5", win: true },
          { opponent: "ZHAO Royce", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "KAMURA Kosei", club: "GFA", score: "V5", win: true },
          { opponent: "HENDERSON Lucas", club: "AFC", score: "D3", win: false },
          { opponent: "SENTHIL Gatik", club: "FIT", score: "V5", win: true }
        ], ftlEventId: "28D3EFA607444D388240F8D12C2E2EA0" },
    { date: "2023-09-02", tournament: "North Texas Roundup SYC/RCC", event: "Y-12 Men's Saber", category: "Y-12", level: "SYC", place: 11, total: 47, rating: "", poolBouts: [
          { opponent: "LI Ryan", club: "LAGUNAFC", score: "V5", win: true },
          { opponent: "SALMAN Ibrahim", club: "GFA", score: "V5", win: true },
          { opponent: "STENSON Silas", club: "FIT", score: "V5", win: true },
          { opponent: "MAI Ryan", club: "LONESTARFC", score: "V5", win: true },
          { opponent: "TANG Morgan", club: "HALBERSTADT", score: "D3", win: false }
        ], ftlEventId: "AA6633133971432A9B424BE223837826" },
  ]),

  // === 2022-2023 Season ===
  ...s("2022-2023", [
    { date: "2023-07-08", tournament: "Summer Nationals", event: "Y-12 Men's Saber", category: "Y-12", level: "National", place: 53, total: 215, rating: "" , poolSeed: 4, poolBouts: [
          { opponent: "LIN Brendan", club: "COBRAFC", score: "V5", win: true },
          { opponent: "LO Lei", club: "LAFAP", score: "V5", win: true },
          { opponent: "TSE Aiden J", club: "HALBERSTADT", score: "D0", win: false },
          { opponent: "SETH Khalen", club: "MIDWESTFC", score: "V5", win: true },
          { opponent: "DAI Zihou", club: "TIMMOREHOUSE", score: "D4", win: false },
          { opponent: "KUMAR Avinash", club: "DYNAMOFC", score: "V5", win: true }
        ], ftlEventId: "1FEEB9ECE7AB45D4B0A727EE4C05AC19"},
    { date: "2023-04-16", tournament: "Fairfax Challenge Spring RYC/RJCC", event: "Y-12 Men's Saber", category: "Y-12", level: "RYC", place: 10, total: 38, rating: "", poolBouts: [
          { opponent: "GORDON Ezekiel", club: "NELLYA", score: "D4", win: false },
          { opponent: "GONZALEZ Leo", club: "NATCAPITALFC", score: "V5", win: true },
          { opponent: "VALENCIA Jose", club: "CAPITALFA", score: "D4", win: false },
          { opponent: "PERRIN Leo", club: "NAZLYMOVFF", score: "V5", win: true },
          { opponent: "KANE Kiran", club: "NOVAFC", score: "V5", win: true },
          { opponent: "FEI Danny", club: "MIRACLEFC", score: "V5", win: true }
        ], ftlEventId: "2C1F0C8FB16A42918B5875320179EE79" },
    { date: "2023-03-11", tournament: "Ben Gutenberg Memorial SYC/RCC", event: "Y-12 Men's Saber", category: "Y-12", level: "SYC", place: 10, total: 54, rating: "", poolBouts: [
          { opponent: "AVERY Marcus", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "SAYAR Luke", club: "AIFENCING", score: "V5", win: true },
          { opponent: "HE Jason", club: "PFA", score: "V5", win: true },
          { opponent: "PINTO Marcus", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "SHAPIRO Simon", club: "DYNAMOFC", score: "D3", win: false },
          { opponent: "O'LOUGHLIN Jacob", club: "ROCHESTERFC", score: "V5", win: true }
        ], ftlEventId: "535EAF44411B4BF0BAD08856CCEE6247" },
    { date: "2023-03-05", tournament: "March NAC", event: "Y-12 Men's Saber", category: "Y-12", level: "National", place: 35, total: 172, rating: "" , poolSeed: 1, poolBouts: [
          { opponent: "MAGITSKY Isaac", club: "DYNAMOFC", score: "V5", win: true },
          { opponent: "OH Aster", club: "SFC", score: "V5", win: true },
          { opponent: "BIVIJI Ali", club: "COBRAFC", score: "V5", win: true },
          { opponent: "ZHANG Aiden", club: "SFA", score: "V5", win: true },
          { opponent: "CHEN Xing Ji", club: "CHN", score: "V5", win: true },
          { opponent: "KROON Landon", club: "SBFA", score: "V5", win: true }
        ], ftlEventId: "992AAC53069443FFBF2FCDF3289A1855"},
    { date: "2023-02-11", tournament: "River City Regional Rumble", event: "Y-12 Men's Saber", category: "Y-12", level: "RYC", place: 7, total: 28, rating: "", poolBouts: [
          { opponent: "CAI fungyu", club: "CAPITALFA", score: "V5", win: true },
          { opponent: "GRABOWSKI Alexander", club: "CAPITALFA", score: "D1", win: false },
          { opponent: "PIPKE Garrett", club: "NOVAFC", score: "V5", win: true },
          { opponent: "D'AMELJ Edoardo", club: "NAZLYMOVFF", score: "D4", win: false },
          { opponent: "OTT William", club: "MIRACLEFC", score: "V5", win: true },
          { opponent: "XU Princeton", club: "TTFA", score: "V5", win: true }
        ], ftlEventId: "A2BB3645EEF24D6F9E0533E4464132A0" },
    { date: "2023-01-14", tournament: "Capitol Clash SYC/RCC", event: "Y-12 Men's Saber", category: "Y-12", level: "SYC", place: 71, total: 122, rating: "", poolBouts: [
          { opponent: "MALEK Zak", club: "BOSTONFC", score: "V5", win: true },
          { opponent: "HU Harry", club: "NELLYA", score: "D3", win: false },
          { opponent: "OTT William", club: "MIRACLEFC", score: "V5", win: true },
          { opponent: "BAI Evan", club: "PFA", score: "D0", win: false },
          { opponent: "JIA Charles", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "HUANG Alex F.", club: "LILOVFA", score: "D1", win: false }
        ], ftlEventId: "061892C0F5834FD48B1BD379322F2D11" },
    { date: "2022-11-25", tournament: "Cobra Challenge SYC/RCC/Y8", event: "Y-12 Men's Saber", category: "Y-12", level: "SYC", place: 36, total: 118, rating: "" , poolSeed: 3, poolBouts: [
          { opponent: "DAI Zihou", club: "TIMMOREHOUSE", score: "D4", win: false },
          { opponent: "BIVIJI Adam", club: "COBRAFC", score: "V5", win: true },
          { opponent: "MERMEGAS Alexander", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "STEVENS Flynn", club: "CAN", score: "V5", win: true },
          { opponent: "LVOFF Leo", club: "INTEGRITY", score: "D4", win: false },
          { opponent: "SONG Nicholas", club: "BOSTONFC", score: "V5", win: true }
        ], ftlEventId: "8FAB048015534C599A09D88BABE1BDF0"},
    { date: "2022-10-02", tournament: "NoVA Knights RYC/RJCC", event: "Y-12 Men's Saber", category: "Y-12", level: "RYC", place: 3, total: 30, rating: "", poolBouts: [
          { opponent: "BADMUS Joshua", club: "CAPITALFA", score: "V5", win: true },
          { opponent: "LEE Gordon", club: "CAPITALFA", score: "V5", win: true },
          { opponent: "CHANG Ethan", club: "NAZLYMOVFF", score: "V5", win: true },
          { opponent: "LEE Ezra", club: "NOVAFC", score: "V5", win: true },
          { opponent: "MEHTA Yash", club: "RESEARCHTRI", score: "D4", win: false }
        ], ftlEventId: "84464C88567B49909C1D00E39F44BC37" },
    { date: "2022-10-01", tournament: "NoVA Knights RYC/RJCC", event: "Y-14 Men's Saber", category: "Y-14", level: "RYC", place: 10, total: 17, rating: "", poolBouts: [
          { opponent: "GRABOWSKI Stanley", club: "CAPITALFA", score: "V5", win: true },
          { opponent: "HARDRICK Noah", club: "NAZLYMOVFF", score: "V5", win: true },
          { opponent: "XU Ivan", club: "MIRACLEFC", score: "V5", win: true },
          { opponent: "YE Eric", club: "EFA", score: "D1", win: false },
          { opponent: "XIE Ethan", club: "Maryland", score: "D2", win: false }
        ], ftlEventId: "AFFFCF9751284E6B94657B16A2B73726" },
    { date: "2022-09-11", tournament: "Fairfax Challenge Fall RYC/RJCC", event: "Y-12 Men's Saber", category: "Y-12", level: "RYC", place: 3, total: 21, rating: "" , poolSeed: 3, poolBouts: [
          { opponent: "CHAWLA Abhishek", club: "CAPITALFA", score: "V5", win: true },
          { opponent: "MUNOZ Jonas", club: "CAPITALFA", score: "V5", win: true },
          { opponent: "FENG Brendan", club: "MIRACLEFC", score: "V5", win: true },
          { opponent: "HUCHWAJDA Alex", club: "RESEARCHTRI", score: "D4", win: false },
          { opponent: "LEE Gordon", club: "CAPITALFA", score: "V5", win: true },
          { opponent: "BHANDARE Niev", club: "FAW", score: "V5", win: true }
        ], ftlEventId: "40F22F48BAC044338777BD4EBE0C4754"},
    { date: "2022-09-03", tournament: "North Texas Roundup SYC/RCC", event: "Y-12 Men's Saber", category: "Y-12", level: "SYC", place: 37, total: 53, rating: "", poolBouts: [
          { opponent: "SALMAN Hamzah", club: "North Texas", score: "D4", win: false },
          { opponent: "IYER Neil", club: "BAFC", score: "V5", win: true },
          { opponent: "CAO Donald", club: "LAGUNAFC", score: "D3", win: false },
          { opponent: "WANG Tiger", club: "LAFAP", score: "D3", win: false },
          { opponent: "CLARK Aram", club: "TIMMOREHOUSE", score: "D3", win: false },
          { opponent: "MAI Ryan", club: "LONESTARFC", score: "V5", win: true }
        ], ftlEventId: "9C6992F58C324E00BCC1B8DB862CBEDC" },
  ]),

  // === 2021-2022 Season ===
  ...s("2021-2022", [
    { date: "2022-07-11", tournament: "Summer Nationals", event: "Y-10 Men's Saber", category: "Y-10", level: "National", place: 12, total: 96, rating: "", poolBouts: [
          { opponent: "BAI Evan", club: "PFA", score: "V5", win: true },
          { opponent: "TANG Morgan", club: "HALBERSTADT", score: "V5", win: true },
          { opponent: "ZHAO Royce", club: "TIMMOREHOUSE", score: "D1", win: false },
          { opponent: "KUSHKOV Michael", club: "DYNAMOFC", score: "V5", win: true },
          { opponent: "WANG David", club: "AGFC (CA)", score: "V5", win: true },
          { opponent: "SALMAN Ibrahim", club: "GFA", score: "V5", win: true }
        ], ftlEventId: "8670A43A92974A23A32FEFA63B2B1E94" },
    { date: "2022-06-12", tournament: "DCFC Youth Challenge", event: "Y-10 Mixed Saber", category: "Y-10", level: "Local", place: 1, total: 10, rating: "", medal: "🥇", poolBouts: [
          { opponent: "BUSQUETS Diego", club: "DCFENCERS", score: "V5", win: true },
          { opponent: "TAI Milton", club: "DCFENCERS", score: "V5", win: true },
          { opponent: "JOHNSON Leyton", club: "DCFENCERS", score: "V5", win: true },
          { opponent: "HEATH Isabella", club: "DCFENCERS", score: "V5", win: true },
          { opponent: "DONNELL Cillian", club: "DCFENCERS", score: "V5", win: true },
          { opponent: "BROOKS Isaac", club: "NAZLYMOVFF", score: "V5", win: true },
          { opponent: "TA-ZHOU Sophia", club: "NAZLYMOVFF", score: "V5", win: true },
          { opponent: "BROOKS Theo", club: "NAZLYMOVFF", score: "V5", win: true },
          { opponent: "PIPKE Garrett", club: "NOVAFC", score: "V5", win: true }
        ], ftlEventId: "A09BE9EE91C047D2A7554D0A3F0A9493" },
    { date: "2022-05-15", tournament: "Fairfax Challenge SYC/RJCC", event: "Y-12 Men's Saber", category: "Y-12", level: "SYC", place: 46, total: 61, rating: "" , poolSeed: 7, poolBouts: [
          { opponent: "KIM Ethan", club: "TIMMOREHOUSE", score: "D0", win: false },
          { opponent: "LIU Victor", club: "SFA", score: "D0", win: false },
          { opponent: "LEE Ezra", club: "NOVAFC", score: "V5", win: true },
          { opponent: "PINTO Marcus", club: "TIMMOREHOUSE", score: "D0", win: false },
          { opponent: "THEUNISSE Oliver", club: "TTFA", score: "V5", win: true },
          { opponent: "WAGNER Joseph", club: "TRIWEAPONFC", score: "D1", win: false }
        ], ftlEventId: "481717804B454DCD8A0F7AB21AD44B16"},
    { date: "2022-05-14", tournament: "Fairfax Challenge SYC/RJCC", event: "Y-10 Men's Saber", category: "Y-10", level: "SYC", place: 30, total: 39, rating: "" , poolSeed: 1, poolBouts: [
          { opponent: "BOSITA Brennan", club: "GFA", score: "D3", win: false },
          { opponent: "CHAN Ewan", club: "PFA", score: "D1", win: false },
          { opponent: "AVERY Marcus", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "JOHNSON Leland", club: "DCFENCERS", score: "D4", win: false },
          { opponent: "HU Harry", club: "NELLYA", score: "D2", win: false }
        ], ftlEventId: "C14125BFE6F04D59966C4A87F2F012D9"},
    { date: "2021-06-19", tournament: "Fairfax Challenge Summer", event: "Y-10 Men's Saber", category: "Y-10", level: "RYC", place: 6, total: 13, rating: "", poolBouts: [
          { opponent: "ZHAO David", club: "MIRACLEFC", score: "V5", win: true },
          { opponent: "LEE Gordon", club: "CAPITALFA", score: "V5", win: true },
          { opponent: "JOHNSON Leland", club: "DCFENCERS", score: "D0", win: false },
          { opponent: "FEI Danny", club: "MIRACLEFC", score: "D2", win: false },
          { opponent: "LIU Aaron", club: "NELLYA", score: "V5", win: true },
          { opponent: "GUREVICH Benjamin", club: "ALLEFENCING", score: "D0", win: false }
        ], ftlEventId: "0DE9BF8AF97B4FA291397D8AEE36498C" },
    { date: "2021-05-31", tournament: "Cobra Challenge SYC/RCC", event: "Y-10 Men's Saber", category: "Y-10", level: "SYC", place: 44, total: 44, rating: "" , poolSeed: 6, poolBouts: [
          { opponent: "CARRINGTON IV William T.", club: "COBRAFC", score: "D0", win: false },
          { opponent: "MARTINSON Torm", club: "MANHATTANFC", score: "D1", win: false },
          { opponent: "YOOK Isaac", club: "TIMMOREHOUSE", score: "D1", win: false },
          { opponent: "BIVIJI Adam", club: "COBRAFC", score: "D1", win: false },
          { opponent: "MCDONALD Finn", club: "DEVLYFC-PA", score: "D3", win: false },
          { opponent: "CHERNAEV Antonio", club: "LILOVFA", score: "D4", win: false }
        ], ftlEventId: "5D06080E68974031BBE4E81A6D108750"},
  ]),

  // === 2019-2020 Season (pre-COVID) ===
  ...s("2019-2020", [
    { date: "2020-01-19", tournament: "Capitol Clash SYC/RCC", event: "Y-8 Men's Saber", category: "Y-8", level: "SYC", place: 3, total: 18, rating: "" , poolSeed: 6, poolBouts: [
          { opponent: "WAXLER Alex", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "DE PLANELL-LOTTI Pau", club: "TIMMOREHOUSE", score: "V5", win: true },
          { opponent: "FOWLER Escher", club: "NAZLYMOVFF", score: "V5", win: true },
          { opponent: "BITKOWER Edward", club: "DCFENCERS", score: "V5", win: true },
          { opponent: "HU Harry", club: "NELLYA", score: "V5", win: true }
        ], ftlEventId: "CFC6B385D6E24432BD1C0653D0C044A0"},
    { date: "2020-01-18", tournament: "Capitol Clash SYC/RCC", event: "Y-10 Men's Saber", category: "Y-10", level: "SYC", place: 57, total: 76, rating: "" , poolSeed: 1, poolBouts: [
          { opponent: "LIU Ryan", club: "NELLYA", score: "D2", win: false },
          { opponent: "LIN Philip T.", club: "STAMFORDFC", score: "D2", win: false },
          { opponent: "XU Ivan", club: "MIRACLEFC", score: "D4", win: false },
          { opponent: "ALAVE Kyle", club: "COBRAFC", score: "D1", win: false },
          { opponent: "MELUL Jonathan", club: "ALLEFENCING", score: "V5", win: true }
        ], ftlEventId: "42E9FDAA09124D7D92BBD8DDCC19248B"},
    { date: "2019-11-30", tournament: "Cobra Challenge SYC/RCC/Y8", event: "Y-8 Men's Saber", category: "Y-8", level: "SYC", place: 8, total: 22, rating: "" , poolSeed: 2, poolBouts: [
          { opponent: "BIVIJI Adam", club: "COBRAFC", score: "V5", win: true },
          { opponent: "SHICK Cedric", club: "INTEGRITY", score: "D2", win: false },
          { opponent: "MAWLER malcolm", club: "DCFENCERS", score: "D1", win: false },
          { opponent: "YAN Luke", club: "PREMIERFC", score: "V5", win: true },
          { opponent: "DE PLANELL-LOTTI Pau", club: "TIMMOREHOUSE", score: "V5", win: true }
        ], ftlEventId: "789FD17BB4584040913F28C0F049A204"},
    { date: "2019-11-29", tournament: "Cobra Challenge SYC/RCC/Y8", event: "Y-10 Men's Saber", category: "Y-10", level: "SYC", place: 44, total: 65, rating: "" , poolSeed: 6, poolBouts: [
          { opponent: "ANTHONY Devyn V.", club: "COBRAFC", score: "D1", win: false },
          { opponent: "WANG Andrew", club: "AFC", score: "D1", win: false },
          { opponent: "SAYAR Luke", club: "AIFENCING", score: "V5", win: true },
          { opponent: "SANTOS Theodore", club: "COBRAFC", score: "D3", win: false },
          { opponent: "YOOK Isaac", club: "MANHATTANFC", score: "D2", win: false },
          { opponent: "MCDONALD Ryan", club: "TIMMOREHOUSE", score: "V5", win: true }
        ], ftlEventId: "78B98358BC5C466C8A8885BAE5AF1D4C"},
  ]),

  // === 2018-2019 Season (first competition!) ===
  ...s("2018-2019", [
    { date: "2018-11-24", tournament: "Cobra Challenge SYC/RCC/Y8", event: "Y-8 Men's Saber", category: "Y-8", level: "SYC", place: 14, total: 18, rating: "" , poolSeed: 2, poolBouts: [
          { opponent: "GUREVICH Benjamin", club: "ALLE", score: "D0", win: false },
          { opponent: "OH Aster", club: "TIMMOREHOUSE", score: "D0", win: false },
          { opponent: "ADEBANKE Micah", club: "PWESTBROOK", score: "D2", win: false },
          { opponent: "SHICK Cedric", club: "INTEGRITY", score: "V5", win: true },
          { opponent: "SHINCHUK Jacob", club: "DYNAMO", score: "D4", win: false }
        ], ftlEventId: "DBBEB129B3214384B3F79B747E60ADA8"},
  ]),
];

// Season-level metadata (rankings, rating, etc.)
export interface SeasonMeta {
  season: string;
  rating?: string; // Highest rating earned this season
  rankings?: Record<string, number>; // Category → national rank
}

// Rankings must be manually updated (from USA Fencing, not computable)
const manualRankings: Record<string, Record<string, number>> = {
  "2025-2026": { "Y-14": 2, "Cadet": 6, "Junior": 50 },
  "2024-2025": { "Y-14": 29 },
  "2022-2023": { "Y-12": 11 },
};

// Compute season ratings from events, combine with manual rankings
function computeSeasonMeta(): SeasonMeta[] {
  const ratingOrder = ['A', 'B', 'C', 'D', 'E', 'U'];
  const bySeason: Record<string, CompEvent[]> = {};
  for (const e of allEvents) {
    if (!bySeason[e.season]) bySeason[e.season] = [];
    bySeason[e.season].push(e);
  }

  return Object.entries(bySeason).map(([season, events]) => {
    // Find highest rating in this season
    const ratings = events.filter(e => e.rating).map(e => e.rating);
    const bestRating = ratings.sort((a, b) => {
      const ai = ratingOrder.indexOf(a[0]);
      const bi = ratingOrder.indexOf(b[0]);
      if (ai !== bi) return ai - bi;
      return a.localeCompare(b); // same letter, compare year
    })[0] || undefined;

    const meta: SeasonMeta = { season };
    if (bestRating) meta.rating = bestRating;
    if (manualRankings[season]) meta.rankings = manualRankings[season];
    return meta;
  });
}

export const seasonMeta: SeasonMeta[] = computeSeasonMeta();

// Season order (newest first) — computed from allEvents
export const seasonOrder = [...new Set(allEvents.map((e) => e.season))].sort(
  (a, b) => b.localeCompare(a)
);

// Color schemes
export const levelColors: Record<TournamentLevel, { bg: string; cardBg: string; border: string; text: string }> = {
  International: { bg: "bg-amber-600", cardBg: "from-amber-500/10 to-amber-600/10", border: "border-amber-600/30", text: "text-white" },
  National: { bg: "bg-purple-600", cardBg: "from-purple-500/10 to-indigo-600/10", border: "border-purple-600/30", text: "text-white" },
  SYC: { bg: "bg-cyan-600", cardBg: "from-cyan-500/10 to-blue-600/10", border: "border-cyan-600/30", text: "text-white" },
  RYC: { bg: "bg-emerald-600", cardBg: "from-emerald-500/10 to-green-600/10", border: "border-emerald-600/30", text: "text-white" },
  Local: { bg: "bg-gray-600", cardBg: "from-gray-500/5 to-slate-600/5", border: "border-gray-600/20", text: "text-white" },
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
