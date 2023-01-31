#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
SCRIPT_FILE="$SCRIPT_DIR/storymapper.sh"
BIN_DIR="/usr/local/bin"
LINK_NAME="storymapper"

# Remove any existing symbolic link
sudo rm "$BIN_DIR/$LINK_NAME"

# Create a new symbolic link
sudo ln -s "$SCRIPT_FILE" "$BIN_DIR/$LINK_NAME"

# Make the script executable
sudo chmod +x "$BIN_DIR/$LINK_NAME"

echo "The script $SCRIPT_FILE has been added to $BIN_DIR as $LINK_NAME."
