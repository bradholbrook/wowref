#!/bin/sh
# Start a local dev server for wowref and open it in the default browser.
# Double-click this file from Finder, or run ./serve.command from a shell.

cd "$(dirname "$0")"
( sleep 1 && open "http://localhost:8080" ) &
python3 dev-server.py 8080
