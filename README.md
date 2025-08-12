# Tokenizer Example with Tiktoken

This project demonstrates how to split text into chunks, encode them into token IDs using tiktoken, and decode the tokens back into a readable sentence with spaces preserved.

------------------------------------------------------------
📋 Prerequisites
------------------------------------------------------------
- Node.js version 18 or higher
- npm (comes bundled with Node.js)
- Git (for cloning the repository)

------------------------------------------------------------
🚀 Getting Started
------------------------------------------------------------
Follow these steps to clone the repository, install dependencies, and run the project.

1️⃣ Clone the Repository
    git clone <your-repo-url>
    (Replace <your-repo-url> with the actual GitHub repository URL.)

2️⃣ Navigate into the Project Directory
    cd <project-folder-name>

3️⃣ Install Dependencies
    npm install
    (Installs tiktoken and any other required packages.)

4️⃣ Run the Project
    npm run start

    NOTE: Ensure package.json has:
    "scripts": {
      "start": "node index.js"
    }
    If not, you can run:
    node index.js

------------------------------------------------------------
🔄 How It Works (Diagram)
------------------------------------------------------------
Prompt
  │
  ▼
Chunks (split by words or groups of words)
  │
  ▼
Token IDs (encoded with tiktoken)
  │
  ▼
Decoded Text (tokens decoded back into a string with spaces preserved)

------------------------------------------------------------
📜 Example Output
------------------------------------------------------------
Tokenized: [
  'This', 'is', 'a', 'simple', 'example', 'of', 'breaking',
  'a', 'sentence', 'into', 'chunks', 'for', 'processing'
]

Encoded: [
  Uint32Array(1) [ 2028 ],
  Uint32Array(1) [ 285 ],
  ...
]

Decoded: This is a simple example of breaking a sentence into chunks for processing

------------------------------------------------------------
🛠 Project Structure
------------------------------------------------------------
.
├── index.js        # Main JavaScript file containing encode/decode logic
├── package.json    # npm project metadata + dependencies
└── README.md       # This documentation file

------------------------------------------------------------
💡 Notes
------------------------------------------------------------
- The example uses chunkSize = 1 for simplicity, encoding each word separately.
- decodeTokens ensures spaces are preserved between chunks.
- You can increase chunkSize in tokenizePrompt to group more words per chunk.
