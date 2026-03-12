#!/usr/bin/env node
/**
 * Master list of Rian's FTL event IDs to scrape.
 * Each entry: { eventId, label, date, eventName }
 * 
 * For use with browser-based scraping (navigate to each URL).
 * 
 * URL patterns:
 *   Results: /events/results/{eventId}
 *   Pools:   /pools/scores/{eventId}/{poolRoundId}  (get poolRoundId from results page)
 *   Tableau: /tableaus/scores/{eventId}/{tableauId}  (get tableauId from results page)
 */

export const RIAN_EVENTS = [
  // ========== 2025-26 Season ==========
  // May SJCC 2025
  { eventId: "E37BD77C14BB47DF8C00E4DA11579517", label: "may-sjcc-2025-cadet", date: "2025-05-18", eventName: "Cadet Men's Saber" },
  { eventId: "28A7662A90A84C509C5196637392B66E", label: "may-sjcc-2025-junior", date: "2025-05-16", eventName: "Junior Men's Saber" },
  // March NAC 2025
  { eventId: "AE11ECD239C44C63B7451CB116EA49F4", label: "march-nac-2025-y14", date: "2025-03-08", eventName: "Y-14 Men's Saber" },
  { eventId: "9B2C737DF50E4F88B706CB5E2BAA9E63", label: "march-nac-2025-cadet", date: "2025-03-07", eventName: "Cadet Men's Saber" },
  // Fairfax Challenge Mar 2025
  { eventId: "8538BA50DEBD471FBFDEA8EA2909CC41", label: "fairfax-2025-y14", date: "2025-03-22", eventName: "Y-14 Men's Saber" },
  // Capitol Clash Jan 2025
  { eventId: "19AFCFC4E88946699063FEEB4CBE844F", label: "capitol-clash-2025-y14", date: "2025-01-18", eventName: "Y-14 Men's Saber" },
  // JO & Div1 NAC Feb 2025
  { eventId: "29D0B3694EE34F57BE452D29E68CAC66", label: "jo-2025-cadet", date: "2025-02-17", eventName: "Cadet Men's Saber" },
  { eventId: "3B332D00D72A46E98BA31BB9932427D3", label: "jo-2025-junior", date: "2025-02-16", eventName: "Junior Men's Saber" },
  // Dec SJCC 2024
  { eventId: "DC067CF260654DA4B34A4DDA97173595", label: "dec-sjcc-2024-cadet", date: "2024-12-07", eventName: "Cadet Men's Saber" },
  { eventId: "798A037A1CE34DA691D0033B1DE774C5", label: "dec-sjcc-2024-junior", date: "2024-12-06", eventName: "Junior Men's Saber" },
  // Cobra Challenge Nov 2024
  { eventId: "057895A08F814BBA8C7446CBE83C50C0", label: "cobra-2024-y14", date: "2024-12-01", eventName: "Y-14 Men's Saber" },
  { eventId: "8E6962332DF848D9864BC4070CF5A41C", label: "cobra-2024-cadet", date: "2024-11-30", eventName: "Cadet Men's Saber" },
  // Nov NAC 2024 - Cadet (Y14 already scraped)
  { eventId: "9E46DD403B3447A99A46D5B358B002E9", label: "nov-nac-2024-cadet", date: "2024-11-15", eventName: "Cadet Men's Saber" },

  // ========== 2024-25 Season ==========
  // Summer Nationals 2024
  { eventId: "20317555F5564159A2340FF91FC99167", label: "sn-2024-y12", date: "2024-07-01", eventName: "Y-12 Men's Saber" },
  { eventId: "2DAF82A676B54F978935F850A9299E7E", label: "sn-2024-y14", date: "2024-07-01", eventName: "Y-14 Men's Saber" },
  { eventId: "BFF1B751607042CEA8D291997E1FAAFC", label: "sn-2024-cadet", date: "2024-07-01", eventName: "Cadet Men's Saber" },
  // March SJCC 2024
  { eventId: "7D72140EF44B4917A1463889166CB7F6", label: "march-sjcc-2024-cadet", date: "2024-03-15", eventName: "Cadet Men's Saber" },
  // March NAC 2024
  { eventId: "4409C222A752442D88257A1375AF9AE4", label: "march-nac-2024-y12", date: "2024-03-09", eventName: "Y-12 Men's Saber" },
  { eventId: "A2C6B962E7A84407B05DF6B67CCCD4E1", label: "march-nac-2024-y14", date: "2024-03-08", eventName: "Y-14 Men's Saber" },
  { eventId: "E238C2292D704D3B958D140B1E062C57", label: "march-nac-2024-cadet", date: "2024-03-07", eventName: "Cadet Men's Saber" },
  // Fairfax Challenge Jan 2024
  { eventId: "D6F6DEA334BB4EF8B46884EED2A3B547", label: "fairfax-2024-y14", date: "2024-01-20", eventName: "Y-14 Men's Saber" },
  // Capitol Clash Jan 2024
  { eventId: "0E3BC82880D6424C8ECF74CF9BECEB6F", label: "capitol-clash-2024-y14", date: "2024-01-13", eventName: "Y-14 Men's Saber" },
  { eventId: "644FBA3227B84C80B5B3DE9E164EC1D0", label: "capitol-clash-2024-y12", date: "2024-01-13", eventName: "Y-12 Men's Saber" },

  // ========== 2023-24 Season ==========
  // Summer Nationals 2023
  { eventId: "1FEEB9ECE7AB45D4B0A727EE4C05AC19", label: "sn-2023-y12", date: "2023-07-01", eventName: "Y-12 Men's Saber" },
  // March NAC 2023
  { eventId: "992AAC53069443FFBF2FCDF3289A1855", label: "march-nac-2023-y12", date: "2023-03-11", eventName: "Y-12 Men's Saber" },
  // Cobra Challenge Nov 2023
  { eventId: "01922DD215924853908501BAEBA09390", label: "cobra-2023-y14", date: "2023-12-02", eventName: "Y-14 Men's Saber" },
  { eventId: "BB56151C198C4C53B9E0E4DD87BA02EB", label: "cobra-2023-y12", date: "2023-12-02", eventName: "Y-12 Men's Saber" },
  // Nov NAC 2023
  { eventId: "C9C00E90E9AE4F64BC37A48B7C8C11E5", label: "nov-nac-2023-cadet", date: "2023-11-17", eventName: "Cadet Men's Saber" },
  // Oct NAC 2023
  { eventId: "D7BCC96F7A8B4A88BA5F4894A3CC1410", label: "oct-nac-2023-cadet", date: "2023-10-06", eventName: "Cadet Men's Saber" },

  // ========== 2022-23 Season ==========
  // Cobra Challenge Nov 2022
  { eventId: "8FAB048015534C599A09D88BABE1BDF0", label: "cobra-2022-y12", date: "2022-11-26", eventName: "Y-12 Men's Saber" },
  // Fairfax Challenge Sep 2022
  { eventId: "40F22F48BAC044338777BD4EBE0C4754", label: "fairfax-2022-y12", date: "2022-09-24", eventName: "Y-12 Men's Saber" },
  { eventId: "B9CE3B0E1145466E99D34730D1E0F1C4", label: "fairfax-2022-y14", date: "2022-09-24", eventName: "Y-14 Men's Saber" },
  // Fairfax May 2022
  { eventId: "481717804B454DCD8A0F7AB21AD44B16", label: "fairfax-2022-may-y12", date: "2022-05-21", eventName: "Y-12 Men's Saber" },
  { eventId: "C14125BFE6F04D59966C4A87F2F012D9", label: "fairfax-2022-may-y10", date: "2022-05-21", eventName: "Y-10 Men's Saber" },

  // ========== Early Events ==========
  { eventId: "DBBEB129B3214384B3F79B747E60ADA8", label: "cobra-2018-y8", date: "2018-11-24", eventName: "Y-8 Men's Saber" },
  { eventId: "789FD17BB4584040913F28C0F049A204", label: "cobra-2019-y8", date: "2019-11-30", eventName: "Y-8 Men's Saber" },
  { eventId: "78B98358BC5C466C8A8885BAE5AF1D4C", label: "cobra-2019-y10", date: "2019-11-30", eventName: "Y-10 Men's Saber" },
  { eventId: "CFC6B385D6E24432BD1C0653D0C044A0", label: "capitol-clash-2020-y8", date: "2020-01-18", eventName: "Y-8 Men's Saber" },
  { eventId: "42E9FDAA09124D7D92BBD8DDCC19248B", label: "capitol-clash-2020-y10", date: "2020-01-18", eventName: "Y-10 Men's Saber" },
  { eventId: "5D06080E68974031BBE4E81A6D108750", label: "cobra-2021-y10", date: "2021-05-29", eventName: "Y-10 Men's Saber" },
];

console.log(`Total events to scrape: ${RIAN_EVENTS.length}`);
