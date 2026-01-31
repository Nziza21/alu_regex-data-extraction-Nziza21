# alu_regex-data-extraction-Nziza21


This project is a simple tool that extracts useful information from raw text using JavaScript and regular expressions. It can pull emails, URLs, phone numbers, credit cards (masked), times, HTML tags, and hashtags from text files.


## How to Use


1. Make sure you have Node.js installed.
2. Clone this repo:
   ```bash
   git clone https://github.com/Nziza21/alu_regex-data-extraction-Nziza21.git

Install dependencies (for styling the terminal output):

npm install chalk

Place your text in samples/input.txt.

Run the extractor:

node src/extractor.js

What It Extracts

.Emails

.URLs

.Phone numbers

.Credit cards (masked for safety)

.Times (24-hour and 12-hour formats)

.HTML tags

.Hashtags

Notes

The project is meant for learning and practicing regex in JS.

All sensitive information like credit cards is masked.

The output in the terminal is styled for easy reading.