#!/bin/bash
# Weekly auto-update script
# Called by OpenClaw cron - updates rankings + H2H opponent database
# Usage: ./scripts/update-rankings.sh

set -e
cd "$(dirname "$0")/.."

echo "🤺 Updating Rian Wei data..."
echo "Date: $(date)"

# 1. Update rankings
echo "📊 Scraping rankings..."
node scripts/scrape-rankings.mjs

# NOTE: Do NOT call fetch-h2h.mjs here. It regenerates opponents.ts from scratch
# and wipes manually-curated birthYear data + FTL pool bouts. Use auto-update.mjs
# which adds new opponents incrementally without destroying existing entries.

# Check if anything changed
if git diff --quiet src/data/profile.ts; then
  echo "✅ No changes detected."
  exit 0
fi

# Commit and push
git add src/data/profile.ts
git commit -m "Auto-update rankings $(date +%Y-%m-%d)"
git push

echo "🚀 Data updated and deployed!"
