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
// Phone number extraction
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

// --------------------
// Credit card number extraction
// --------------------

// Matches 16-digit credit card numbers with spaces or dashes
const ccRegex = /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/g;

// Extract credit cards
const creditCards = rawText.match(ccRegex) || [];

// Mask all but last 4 digits for security
const maskedCards = creditCards.map(cc => {
  // Remove spaces/dashes, keep last 4 digits
  const digitsOnly = cc.replace(/[-\s]/g, "");
  const last4 = digitsOnly.slice(-4);
  return "**** **** **** " + last4;
});

// Log results
console.log("Extracted credit cards (masked):");
console.log(maskedCards, "\n");

// --------------------
// Time extraction
// --------------------

// Matches 24-hour (HH:MM) or 12-hour (H:MM AM/PM) formats
const timeRegex = /\b(?:[01]?\d|2[0-3]):[0-5]\d(?:\s?[AP]M)?\b/gi;

// Extract time strings
const times = rawText.match(timeRegex) || [];

// Log results
console.log("Extracted times:");
console.log(times, "\n");