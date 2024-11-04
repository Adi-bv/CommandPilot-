const { GoogleGenerativeAI } = require("@google/generative-ai");
const { exec } = require("child_process");
const fs = require("fs");
const readline = require("readline");

let apiKey = null;
let model = null;

const CONFIG_FILE = "config.json";
const COMMAND_PROMPT_PREFIX = "Provide the Linux command for the following task without any explanation, just provide the command: ";

// Load API key from config file if it exists
function loadApiKey() {
  if (fs.existsSync(CONFIG_FILE)) {
    const config = JSON.parse(fs.readFileSync(CONFIG_FILE, "utf-8"));
    apiKey = config.apiKey || null;
  }
}

// Save API key to config file
function saveApiKey(key) {
  fs.writeFileSync(CONFIG_FILE, JSON.stringify({ apiKey: key }, null, 2));
}

// Initialize Google Generative AI client with the API key
function initializeModel() {
  model = new GoogleGenerativeAI(apiKey).getGenerativeModel({ model: "gemini-1.5-flash" });
}

// Prompt the user for the API key if it’s not set
async function promptForApiKey() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('Please enter your Google API key: ', (inputKey) => {
      apiKey = inputKey.trim();
      saveApiKey(apiKey); // Save the key to config file
      initializeModel();  // Initialize model with the new API key
      rl.close();
      resolve();
    });
  });
}

// Function to get the AI response
async function getGeminAiResponse(query) {
  if (!apiKey) {
    await promptForApiKey();  // Prompt for the API key if it’s not loaded
  }

  try {
    const modifiedQuery = `${COMMAND_PROMPT_PREFIX}${query}`;
    const result = await model.generateContent(modifiedQuery);
    let command = result.response.text().trim();

    // Clean up any unwanted characters
    command = command.replace(/`/g, '').replace(/"/g, '').replace(/'/g, '').trim();

    console.log(`Generated command: ${command}`); // Display the command

    // Ask for user confirmation to execute the command
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Press Enter to execute the command or Ctrl+C to cancel: ', () => {
      exec(command, (err, stdout, stderr) => {
        if (err) {
          console.error(`Error executing command: ${stderr}`);
        } else {
          console.log(stdout); // Output the result of the command execution
        }
        rl.close(); // Close the readline interface after execution
      });
    });

  } catch (error) {
    console.error("Error:", error);
  }
}

// Load the API key from config on startup
loadApiKey();
if (apiKey) {
  initializeModel(); // Initialize model if API key was loaded
}

// Combine command line arguments into a single query string
const query = process.argv.slice(2).join(" ");
console.log(query);
if (query) {
  getGeminAiResponse(query);
} else {
  console.log("Please enter a query after 'aibot'");
}
