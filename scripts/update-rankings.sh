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

# 2. Update H2H opponent database
echo "⚔️ Updating H2H opponent database..."
node scripts/fetch-h2h.mjs

# Check if anything changed
if git diff --quiet src/data/profile.ts src/data/opponents.ts; then
  echo "✅ No changes detected."
  exit 0
fi

# Commit and push
git add src/data/profile.ts src/data/opponents.ts
git commit -m "Auto-update rankings + H2H $(date +%Y-%m-%d)"
git push

echo "🚀 Data updated and deployed!"
