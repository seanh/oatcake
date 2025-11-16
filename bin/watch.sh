#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

git ls-files -cdmo --exclude-standard | grep -v oatcake.min.css |  entr -n "${SCRIPT_DIR}/minify.sh"
