#!/bin/sh
# Start a local dev server for wowref.
# ES modules require HTTP — you can't open index.html directly.
#
# Usage: ./serve.sh
# Then open: http://localhost:8080

cd "$(dirname "$0")"
python3 dev-server.py 8080
