#!/bin/sh
# Refait l'icône d'onglet (favicon.png, photo ronde) et l'icône d'écran d'accueil (apple-touch-icon.png) à partir de photo.jpg.
# Usage : sh tools/favicon.sh   (macOS, Google Chrome installé)
set -e
cd "$(dirname "$0")/.."
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
shot() { "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --default-background-color=00000000 \
  --window-size="$1,$1" --virtual-time-budget=2000 --screenshot="$2" "file://$PWD/tools/favicon.html?size=$1&round=$3" >/dev/null 2>&1; }
shot 64 favicon.png 1
shot 180 apple-touch-icon.png 0
echo favicon.png apple-touch-icon.png
