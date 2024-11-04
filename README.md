# CommandPilot

**CommandPilot** is a command-line tool that harnesses the power of Google's Generative AI to provide users with Linux commands based on their natural language queries. It acts as a virtual assistant, generating commands that can be executed directly in the terminal, simplifying tasks for users.

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
     cd CommandPilot-  # Move to the downloaded repository
     ```

   - Using **SSH**:
     ```bash
     git clone git@github.com:Adi-bv/CommandPilot-.git
     cd CommandPilot-  # Move to the downloaded repository
     ```

### 2. Run the Prerequisite Script
   The prerequisite script will set up an alias to use the CommandPilot feature from anywhere in the terminal.
   ```bash
   bash prerequisite.sh
