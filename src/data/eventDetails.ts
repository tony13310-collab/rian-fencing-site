// Per-event detail data for Standard Reports
// Pool results + DE bracket route + Final placement

export interface PoolBout {
  opponent: string;
  club: string;
  score: string; // e.g. "V5" or "D3"
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
  indicator: number; // TS - TR
  poolRank: number | null; // rank after pools
  poolSize: number | null; // total after pools
}

export interface DEBout {
  round: string; // e.g. "T64", "T32", "T16", "T8", "Semi", "Final"
  opponent: string;
  club: string;
  score: string; // e.g. "15-10"
  win: boolean;
}

export interface EventDetail {
  id: string; // unique key matching event
  date: string;
  tournament: string;
  event: string;
  place: number;
  total: number;
  rating?: string;
  pool?: PoolResult;
  de?: DEBout[];
  ftlEventId?: string; // for linking back to FTL
}

// Event details keyed by id (date + event slug)
export const eventDetails: Record<string, EventDetail> = {
  // Example: Feb NAC 2026 Junior - will be populated by scraping
};

// Generate event ID from date + event name
export function makeEventId(date: string, event: string): string {
  return `${date}_${event.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`;
}
