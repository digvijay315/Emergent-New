const { BetaAnalyticsDataClient } = require("@google-analytics/data");
require("dotenv").config();

const credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);

const analyticsClient = new BetaAnalyticsDataClient({ credentials });

module.exports = analyticsClient;


// const { BetaAnalyticsDataClient } = require("@google-analytics/data");
// const path = require("path");
// const fs = require("fs");

// // File is in project root
// const keyPath = path.join(__dirname, "..", "ga-service-account.json");

// // Read JSON
// const keyFile = JSON.parse(fs.readFileSync(keyPath, "utf8"));

// // Fix line breaks (Linux/Windows)
// keyFile.private_key = keyFile.private_key.replace(/\\n/g, "\n");

// // Create GA client
// const analyticsClient = new BetaAnalyticsDataClient({
//   credentials: keyFile,
// });

// module.exports = analyticsClient;
