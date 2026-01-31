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

// --------------------
// Email extraction
// --------------------

// This regex matches common email formats like:
// john.doe@example.com
// admin.support@company.co.uk
const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;

// Extract all matching emails from the raw text
const emails = rawText.match(emailRegex) || [];

// Log the results
console.log("Extracted emails:");
console.log(emails, "\n");

// --------------------
// URL extraction
// --------------------

// This regex matches URLs that start with http or https
// It avoids javascript: and other unsafe protocols
const urlRegex = /\bhttps?:\/\/[^\s"<>()]+\b/g;

// Extract URLs from the raw text
const urls = rawText.match(urlRegex) || [];

// Log the results
console.log("Extracted URLs:");
console.log(urls, "\n");

// --------------------
// Rwandan phone number extraction
// --------------------

// Matches:
// 078 123 4567
// 078-765-4321
// +250 78 987 6543
const rwandaPhoneRegex = /\b(?:\+250\s?)?0\d{2}[-\s]?\d{3}[-\s]?\d{4}\b/g;

// Extract phone numbers from raw text
const phoneNumbers = rawText.match(rwandaPhoneRegex) || [];

// Log results
console.log("Extracted phone numbers:");
console.log(phoneNumbers, "\n");