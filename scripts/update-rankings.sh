#!/bin/bash
# Weekly ranking update script
# Called by OpenClaw cron - scrapes USA Fencing rankings and updates profile.ts
# Usage: ./scripts/update-rankings.sh

set -e
cd "$(dirname "$0")/.."

echo "🤺 Updating Rian Wei rankings..."
echo "Date: $(date)"

# Run the Node.js scraper
node scripts/scrape-rankings.mjs

# Check if anything changed
if git diff --quiet src/data/profile.ts; then
  echo "✅ No ranking changes detected."
  exit 0
fi

# Commit and push
git add src/data/profile.ts
git commit -m "Auto-update rankings $(date +%Y-%m-%d)"
git push

echo "🚀 Rankings updated and deployed!"
