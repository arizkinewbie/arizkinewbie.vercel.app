#!/bin/bash
set -e

# Deploy script for arizkinewbie.com on aaPanel VPS
# Builds Astro 7 and updates /www/wwwroot/arizkinewbie/current atomically

APP_DIR="/www/wwwroot/arizkinewbie-source"
WEB_ROOT="/www/wwwroot/arizkinewbie"
RELEASE_ID=$(date +%Y%m%d_%H%M%S)
TARGET_DIR="${WEB_ROOT}/releases/${RELEASE_ID}"

echo "==> Building Astro 7..."
cd "$APP_DIR"
npm run build

echo "==> Deploying to ${TARGET_DIR}..."
mkdir -p "$TARGET_DIR"
cp -r dist/* "$TARGET_DIR/"
chown -R www:www "$TARGET_DIR"

echo "==> Switching current symlink..."
ln -sfn "$TARGET_DIR" "${WEB_ROOT}/current"

echo "==> Cleaning old releases (keeping last 3)..."
cd "${WEB_ROOT}/releases"
ls -dt */ 2>/dev/null | tail -n +4 | xargs -r rm -rf

echo "==> Deploy complete! Site active at https://arizkinewbie.com"
