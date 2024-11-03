#!/bin/bash

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Installing Node.js..."
    
    # Update the package index
    sudo apt update -y
    
    # Install Node.js (you can specify a version if needed)
    sudo apt install -y nodejs npm
    
    # Verify installation
    if command -v node &> /dev/null; then
        echo "Node.js installed successfully."
    else
        echo "Failed to install Node.js. Please check your internet connection or package manager settings."
        exit 1
    fi
else
    echo "Node.js is already installed."
fi

# Check Node.js version
echo "Node.js version: $(node -v)"

# Install @google/generative-ai package
echo "Installing @google/generative-ai package..."
npm install @google/generative-ai

echo "All requirements have been installed successfully!"
