const fs = require("fs");

const src = fs.readFileSync("frontend/src/pages/Home.jsx", "utf8");
const start = src.indexOf("atob(");
const firstQuote = src.indexOf('"', start);
const endQuote = src.indexOf('",', firstQuote);
const base64 = src.slice(firstQuote + 1, endQuote).replace(/\s+/g, "");
const html = Buffer.from(base64, "base64").toString("utf8");

const normalizedHtml = html.replace(/\s+/g, " ");
const checks = [
  "Smart Air Cargo Services",
  "Bangladesh's best international freight forwarder - connecting businesses in Dhaka and Chattogram to 140+ airports worldwide through air, sea, land, and customs expertise.",
  "Sea Freight",
  "Powered by <a href='https://apktechbd.com' target='_blank'>APK TECH BD</a>",
];

for (const check of checks) {
  if (normalizedHtml.indexOf(check) === -1) {
    throw new Error(`missing: ${check}`);
  }
}

if (normalizedHtml.indexOf("Trucking & Last-Mile") !== -1) {
  throw new Error("still has trucking link");
}

if (normalizedHtml.indexOf("SACS · Bangladesh") !== -1) {
  throw new Error("subtitle still present");
}

console.log("decoded footer checks passed");
