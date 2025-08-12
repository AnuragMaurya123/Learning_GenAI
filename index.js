import { encoding_for_model } from "tiktoken";

const enc = encoding_for_model("gpt-3.5-turbo");

function tokenizePrompt(prompt, chunkSize = 5) {
  if (typeof prompt !== "string" || prompt.trim() === "") {
    throw new Error("Prompt must be a non-empty string");
  }

  const words = prompt.trim().split(/\s+/);
  const chunks = [];
  for (let i = 0; i < words.length; i += chunkSize) {
    chunks.push(words.slice(i, i + chunkSize).join(" "));
  }
  return chunks;
}

function encodeTokens(tokens) {
  return tokens.map(token => enc.encode(token));
}

function decodeTokens(encodedTokens) {
    return encodedTokens
      .map(tokens => new TextDecoder("utf-8").decode(enc.decode(tokens)))
      .join(" ");
  }

// Example
const prompt = "This is a simple example of breaking a sentence into chunks for processing";

const tokenized = tokenizePrompt(prompt, 1);
const encoded = encodeTokens(tokenized);
const decoded = decodeTokens(encoded);

console.log("Tokenized:", tokenized);
console.log("Encoded:", encoded);
console.log("Decoded:", decoded);

