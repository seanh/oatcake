#!/bin/bash
set -euo pipefail

python3 -m http.server --directory site 8001
