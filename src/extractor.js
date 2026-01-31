// extractor.js
// Reads raw text input and prepares it for regex extraction

const fs = require("fs");
const path = require("path");

// Path to the input text file
const inputFilePath = path.join(__dirname, "../samples/input.txt");

// Read the file as plain text
const rawText = fs.readFileSync(inputFilePath, "utf-8");

// Simple confirmation
console.log("Input file loaded successfully.\n");