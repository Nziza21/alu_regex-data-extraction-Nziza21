const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const inputFilePath = path.join(__dirname, "../samples/input.txt");
const rawText = fs.readFileSync(inputFilePath, "utf-8");

console.log(chalk.green.bold("Input file loaded successfully!\n"));

// Function to print each section neatly
function printSection(title, items) {
  console.log(chalk.cyan("=============================="));
  console.log(chalk.magenta(title));
  if (items.length === 0) {
    console.log(chalk.gray("No matches found."));
  } else {
    items.forEach(item => console.log(chalk.yellow(item)));
  }
  console.log();
}

// Emails
const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
const emails = rawText.match(emailRegex) || [];
printSection("Extracted Emails", emails);

// URLs
const urlRegex = /\bhttps?:\/\/[^\s"<>()]+\b/g;
const urls = rawText.match(urlRegex) || [];
printSection("Extracted URLs", urls);

// Phone numbers
const rwandaPhoneRegex = /\b(?:\+250\s?)?0\d{2}[-\s]?\d{3}[-\s]?\d{4}\b/g;
const phoneNumbers = rawText.match(rwandaPhoneRegex) || [];
printSection("Extracted Phone Numbers", phoneNumbers);

// Credit cards
const ccRegex = /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/g;
const creditCards = rawText.match(ccRegex) || [];
const maskedCards = creditCards.map(cc => {
  const digitsOnly = cc.replace(/[-\s]/g, "");
  return "**** **** **** " + digitsOnly.slice(-4);
});
printSection("Extracted Credit Cards (masked)", maskedCards);

// Times
const timeRegex = /\b(?:[01]?\d|2[0-3]):[0-5]\d(?:\s?[AP]M)?\b/gi;
const times = rawText.match(timeRegex) || [];
printSection("Extracted Times", times);

// HTML tags
const htmlTagRegex = /<[^>]+>/g;
const htmlTags = rawText.match(htmlTagRegex) || [];
printSection("Extracted HTML Tags", htmlTags);

// Hashtags
const hashtagRegex = /#\w+/g;
const hashtags = rawText.match(hashtagRegex) || [];
printSection("Extracted Hashtags", hashtags);