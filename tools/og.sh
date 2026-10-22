#!/bin/sh
# Refait les images de partage (img/og-*.jpg) à partir de tools/og-card.html, avec Chrome sans écran.
# Usage : sh tools/og.sh   (macOS, Google Chrome installé)
set -e
cd "$(dirname "$0")/.."
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
TMP=$(mktemp -d)
for lang in en fr; do
  for page in home about; do
    name="og-$lang"; [ "$page" = about ] && name="og-about-$lang"
    "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 \
      --virtual-time-budget=4000 --screenshot="$TMP/$name.png" "file://$PWD/tools/og-card.html?lang=$lang&page=$page" >/dev/null 2>&1
    sips -s format jpeg -s formatOptions 85 "$TMP/$name.png" --out "img/$name.jpg" >/dev/null
    echo "img/$name.jpg"
  done
done
rm -rf "$TMP"
