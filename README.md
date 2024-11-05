# CommandPilot

**CommandPilot** is a command-line tool with a twist—it brings Google’s Generative AI right to your terminal, translating your natural language queries into Linux commands. Think of it as your terminal's very own genie! Instead of memorizing complex Linux commands, just ask AIbot (our helpful built-in assistant) for what you need in plain English! For example, you could type, "AIbot how do I create a new directory?"—and AIbot will instantly provide the correct Linux command. No more switching to ChatGPT for command help; simply ask your terminal, the place you’re ready to execute it! Say goodbye to hunting down commands and hello to having a personal command wizard at your fingertips! ✨

## Features

- **Natural Language Processing**: Converts user queries into executable Linux commands seamlessly.
- **User-Friendly Interface**: Simply enter a question, and the pilot will provide the corresponding command.
- **One-Time API Key Input**: Users are prompted to input their Google Generative AI API key only once; subsequent uses will not require re-entry.
- **Alias Setup**: Users can set up a terminal alias to easily access the CommandPilot functionality.

## Installation

To set up CommandPilot on your machine, follow these steps:

### 1. Clone the Repository
   You can use either HTTPS or SSH to clone the repository. Here are the commands:

   - Using **HTTPS**:
     ```bash
     git clone https://github.com/Adi-bv/CommandPilot-.git
     ```
     ```bash
     cd CommandPilot-  # Move to the downloaded repository
     ```

   - Using **SSH**:
     ```bash
     git clone git@github.com:Adi-bv/CommandPilot-.git
     ```
     ```bash
     cd CommandPilot-  # Move to the downloaded repository
     ```

### 2. Run the Prerequisite Script
   The prerequisite script will set up an alias to use the CommandPilot feature from anywhere in the terminal.
   ```bash
   bash prerequisite.sh
   ```
   ```bash
   source ~/.bashrc
   ```

### 3. Run the Requirements Installation Script
   This step ensures that Node.js and all required dependencies, including @google/generative-ai, are installed on the new machine.
   ```bash
   bash install_requirements.sh
   ```
   ```bash
   source ~/.bashrc
   ```

### 4. Using the CommandPilot Feature
   Once setup is complete, you can use the CommandPilot feature by typing the following in the terminal:
   ```bash
   aibot How do I create a new directory?
   ```
   Note: You can ask any query, but it should start with the term 'aibot'.
