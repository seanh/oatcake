#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

git ls-files -cdmo --exclude-standard | grep -v site/test/index.html |  entr -n "${SCRIPT_DIR}/make_html.sh"
