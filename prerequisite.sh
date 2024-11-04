#!/bin/bash

# Prompt user to enter the path to aibot.js file
read -p "Please enter the full path to aibot.js (e.g., /path/to/CommandPilot/aibot.js): " AIBOT_PATH

# Check if the entered path actually exists
if [[ ! -f "$AIBOT_PATH" ]]; then
    echo "Error: The specified path does not exist or is incorrect. Please check the path and try again."
    exit 1
fi

# Add alias to .bashrc if it doesn't already exist
if ! grep -q "alias aibot='node $AIBOT_PATH'" ~/.bashrc; then
    echo "Adding alias for aibot to .bashrc"
    echo "alias aibot='node $AIBOT_PATH'" >> ~/.bashrc
else
    echo "Alias for aibot already exists in .bashrc"
fi

# Reload the .bashrc file to apply changes
echo "Reloading .bashrc to apply changes..."
source ~/.bashrc

echo "Setup completed successfully! You can now use the aibot alias in your terminal."
