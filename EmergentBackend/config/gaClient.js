const { BetaAnalyticsDataClient } = require("@google-analytics/data");

const analyticsClient = new BetaAnalyticsDataClient({
  keyFilename: "ga-service-account.json",
});

module.exports = analyticsClient;
