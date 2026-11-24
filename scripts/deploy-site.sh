#!/usr/bin/env bash
# 构建 carljoy.cn 个人站（Next.js 静态导出）并发布到 1Panel 站点目录。
# 用法：./scripts/deploy-site.sh [--skip-build] [--dry-run]
set -euo pipefail

KEY="${SSH_KEY:-$HOME/.ssh/1panel_114}"
HOST="${DEPLOY_HOST:-root@114.66.54.114}"
DEST="/opt/1panel/www/sites/carljoy.cn/index/"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

SKIP_BUILD=""
DRY=""
for arg in "$@"; do
  case "$arg" in
    --skip-build) SKIP_BUILD=1 ;;
    --dry-run) DRY="--dry-run" ;;
    *) echo "未知参数：$arg" >&2; exit 1 ;;
  esac
done

if [[ -z "$SKIP_BUILD" ]]; then
  echo "==> next build"
  if [[ -x node_modules/.bin/next ]]; then
    node_modules/.bin/next build
  else
    pnpm build
  fi
fi

if [[ ! -f out/index.html ]]; then
  echo "找不到 out/index.html，先构建" >&2
  exit 1
fi

echo "==> out/  ->  $HOST:$DEST"
rsync -az --delete $DRY -e "ssh -i \"$KEY\" -o StrictHostKeyChecking=no" out/ "$HOST:$DEST"

if [[ -z "$DRY" ]]; then
  ssh -i "$KEY" -o StrictHostKeyChecking=no "$HOST" \
    "chown -R root:root '$DEST' && find '$DEST' -type d -exec chmod 755 {} + && find '$DEST' -type f -exec chmod 644 {} +"
  echo "==> 已发布：https://carljoy.cn/"
fi
