/**
 * Scrape a single FTL event (pool + DE) for Rian Wei
 * Designed to be called from browser evaluate()
 * 
 * Results saved to window.__scraped for retrieval
 */

// This file documents the scraping approach:
// 1. Navigate to event results page to find Pool and Tableau links
// 2. Navigate to Pool scores page → find Rian's pool → extract bout scores
// 3. Navigate to Tableau scores page → trace Rian's path through bracket
// 4. Combine into EventDetail format

export const EVENTS_TO_SCRAPE = [
  // November NAC 2025 (Fort Worth, TX)
  { id: '2025-11-17_y-14-men-s-saber', label: 'Nov_Y14', eid: '08EC2FD5A3AE4D918695EC3936ACF986', place: 7, total: 170, loc: 'Fort Worth, TX', event: "Y-14 Men's Saber" },
  { id: '2025-11-16_cadet-men-s-saber', label: 'Nov_Cadet', eid: 'A09DCCCD39004FF4B1F7841673FF87BC', place: 11, total: 307, loc: 'Fort Worth, TX', event: "Cadet Men's Saber" },
  { id: '2025-11-14_div-i-men-s-saber', label: 'Nov_DivI', eid: 'D62040E630394A92B216ABD3D04DDBB1', place: 94, total: 200, loc: 'Fort Worth, TX', event: "Div I Men's Saber" },
  // October NAC 2025 (Salt Lake City, UT)
  { id: '2025-10-03_junior-men-s-saber', label: 'Oct_Junior', eid: '756DF2598D6942EFB60AE2D70D712523', place: 101, total: 296, loc: 'Salt Lake City, UT', event: "Junior Men's Saber" },
  { id: '2025-10-04_cadet-men-s-saber', label: 'Oct_Cadet', eid: '6AC2F4789A7B4F74A54D37505F57B7FC', place: 59, total: 210, loc: 'Salt Lake City, UT', event: "Cadet Men's Saber" },
  { id: '2025-10-05_div-i-men-s-saber', label: 'Oct_DivI', eid: '692F1BFED9B7465CA25168DAF4408B77', place: 145, total: 216, loc: 'Salt Lake City, UT', event: "Div I Men's Saber" },
  // Summer Nationals 2025 (Salt Lake City, UT)
  { id: '2025-07-03_y-14-men-s-saber', label: 'SN_Y14', eid: '2BB968AA89754F1FBDEA1763F841AA0F', place: 14, total: 308, loc: 'Salt Lake City, UT', event: "Y-14 Men's Saber" },
  { id: '2025-06-28_junior-men-s-saber', label: 'SN_Junior', eid: 'C9FF989C6AA54810961E8E086FF96D65', place: 85, total: 346, loc: 'Salt Lake City, UT', event: "Junior Men's Saber" },
  { id: '2025-06-30_cadet-men-s-saber', label: 'SN_Cadet', eid: 'FA417D7708444A1CAF39EA2D8DF6C2BC', place: 81, total: 282, loc: 'Salt Lake City, UT', event: "Cadet Men's Saber" },
  { id: '2025-05-18_div-i-men-s-saber', label: 'SN_DivI', eid: '500FFA795C514F0AA447A871902F2937', place: 105, total: 209, loc: 'Salt Lake City, UT', event: "Div I Men's Saber" },
];
