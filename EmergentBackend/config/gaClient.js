// const { BetaAnalyticsDataClient } = require("@google-analytics/data");

// const analyticsClient = new BetaAnalyticsDataClient({
//   keyFilename: "ga-service-account.json",
// });

// module.exports = analyticsClient;

const { BetaAnalyticsDataClient } = require("@google-analytics/data");
const path = require("path");
const fs = require("fs");

// Absolute path to your JSON
const keyPath = path.join(__dirname, "..", "ga-service-account.json"); 

// Read JSON
const keyFile = JSON.parse(fs.readFileSync(keyPath, "utf8"));

// Fix line breaks (critical for Linux/AWS)
keyFile.private_key = keyFile.private_key.replace(/\\n/g, "\n");

// Create GA client
const analyticsClient = new BetaAnalyticsDataClient({
  credentials: keyFile,
});

module.exports = analyticsClient;

