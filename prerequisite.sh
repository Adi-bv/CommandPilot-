#!/bin/bash

# Path to your aibot.js file
AIBOT_PATH="/home/aditi-gupta/Documents/AIterminal/aibot.js"

# Add alias to .bashrc if it doesn't already exist
if ! grep -q "alias AIbot='node $AIBOT_PATH'" ~/.bashrc; then
    echo "Adding alias for AIbot to .bashrc"
    echo "alias AIbot='node $AIBOT_PATH'" >> ~/.bashrc
else
    echo "Alias for AIbot already exists in .bashrc"
fi

# Reload the .bashrc file to apply changes
echo "Reloading .bashrc to apply changes..."
source ~/.bashrc

echo "Setup completed successfully!"
