#!/usr/bin/env node
/**
 * Scrape Rian Wei's current national rankings from USA Fencing
 * and update profile.ts accordingly.
 *
 * Data sources:
 * - Y-14: member.usafencing.org/points/national/MS/Y14 (HTML table)
 * - Cadet: usfencingresults.org PDF (MS Cdt R *.pdf)
 * - Junior: usfencingresults.org PDF (MS Jr R *.pdf)
 * - Rating: from profile (manual update or FencingTracker)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROFILE_PATH = path.join(__dirname, "../src/data/profile.ts");
const PLAYER_ID = "100259666";

// Simple fetch with retries
async function fetchText(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.text();
    } catch (e) {
      if (i === retries - 1) throw e;
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
}

// Parse Y-14 ranking from member.usafencing.org HTML
async function getY14Ranking() {
  try {
    const html = await fetchText(
      "https://member.usafencing.org/points/national/MS/Y14"
    );
    // Look for Wei, Rian in the ranking table
    // Pattern: rank number followed by points, then "Wei, Rian"
    const match = html.match(
      /(\d+)\s+[\d.]+\s+[^<]*Wei,\s*Rian/i
    );
    if (match) {
      return parseInt(match[1]);
    }
    // Try alternate pattern from rendered HTML
    const match2 = html.match(
      /class="[^"]*rank[^"]*"[^>]*>\s*(\d+)\s*<[\s\S]*?Wei,?\s*Rian/i
    );
    if (match2) {
      return parseInt(match2[1]);
    }
    console.log("⚠️  Y-14: Could not find Rian Wei in HTML");
    return null;
  } catch (e) {
    console.log("⚠️  Y-14 fetch failed:", e.message);
    return null;
  }
}

// Find latest PDF URL from usfencingresults.org
async function findLatestPdf(prefix) {
  try {
    const html = await fetchText(
      "https://usfencingresults.org/rankings/?dir=Men%27s%20Saber"
    );
    // Find all PDF links matching prefix (e.g., "MS Cdt R")
    const regex = new RegExp(
      `href="([^"]*${prefix.replace(/ /g, "%20")}[^"]*\\.pdf)"`,
      "gi"
    );
    const matches = [...html.matchAll(regex)];
    if (matches.length === 0) return null;
    // Return the last match (most recent)
    let url = matches[matches.length - 1][1];
    if (!url.startsWith("http")) {
      url =
        "https://usfencingresults.org/rankings/Men%27s%20Saber/" +
        url.replace(/.*\//, "");
    }
    return url;
  } catch (e) {
    console.log(`⚠️  PDF listing failed for ${prefix}:`, e.message);
    return null;
  }
}

// Parse ranking from PDF text (simplified - works with pdf-parse or similar)
// For now, we'll download and grep for Wei
async function getRankingFromPdf(prefix, label) {
  try {
    const pdfUrl = await findLatestPdf(prefix);
    if (!pdfUrl) {
      console.log(`⚠️  ${label}: No PDF found`);
      return null;
    }
    console.log(`📄 ${label}: ${pdfUrl}`);

    // Download PDF and search for Wei using strings-like approach
    const res = await fetch(pdfUrl);
    const buffer = await res.arrayBuffer();
    const text = Buffer.from(buffer).toString("latin1");

    // Search for "Wei, Rian" preceded by a rank number
    // PDF text format varies, try multiple patterns
    const patterns = [
      /(\d+)\s+Wei,\s*Rian/i,
      /(\d+)\s+[#\d]+\s+Wei,\s*Rian/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match) {
        const rank = parseInt(match[1]);
        if (rank > 0 && rank < 1000) {
          return rank;
        }
      }
    }

    console.log(`⚠️  ${label}: Could not find Rian Wei in PDF`);
    return null;
  } catch (e) {
    console.log(`⚠️  ${label} failed:`, e.message);
    return null;
  }
}

// Update profile.ts with new rankings
function updateProfile(rankings) {
  let content = fs.readFileSync(PROFILE_PATH, "utf-8");

  // Build new currentRankings array
  const entries = [];
  const colorMap = { "Y-14": "green", Cadet: "blue", Junior: "purple", "Div I": "red" };

  for (const [cat, rank] of Object.entries(rankings)) {
    if (rank !== null) {
      entries.push(
        `    { category: "${cat}", rank: ${rank}, color: "${colorMap[cat] || "blue"}" }`
      );
    }
  }

  const newRankings = `currentRankings: [\n${entries.join(",\n")},\n  ]`;

  // Replace currentRankings block
  content = content.replace(
    /currentRankings:\s*\[[\s\S]*?\]/,
    newRankings
  );

  fs.writeFileSync(PROFILE_PATH, content);
  console.log("✅ profile.ts updated");
}

// Main
async function main() {
  console.log("🔍 Scraping rankings...\n");

  const y14 = await getY14Ranking();
  console.log(`Y-14: ${y14 ?? "not found"}`);

  const cadet = await getRankingFromPdf("MS Cdt R", "Cadet");
  console.log(`Cadet: ${cadet ?? "not found"}`);

  const junior = await getRankingFromPdf("MS Jr R", "Junior");
  console.log(`Junior: ${junior ?? "not found"}`);

  // Only update if we got at least one ranking
  const rankings = {};
  if (y14) rankings["Y-14"] = y14;
  if (cadet) rankings["Cadet"] = cadet;
  if (junior) rankings["Junior"] = junior;

  if (Object.keys(rankings).length === 0) {
    console.log("\n⚠️  No rankings found. Skipping update.");
    process.exit(0);
  }

  console.log("\n📝 Updating profile.ts...");
  updateProfile(rankings);
}

main().catch((e) => {
  console.error("❌ Error:", e);
  process.exit(1);
});
