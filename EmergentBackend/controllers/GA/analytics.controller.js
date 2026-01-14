const analyticsClient = require("../../config/gaClient");

const PROPERTY_ID = process.env.GA_PROPERTY_ID;

exports.getAnalyticsOverview = async (req, res) => {
  try {
    const [response] = await analyticsClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],

      // 🔹 MAX USEFUL METRICS (10)
      metrics: [
        { name: "activeUsers" },
        { name: "totalUsers" },
        { name: "newUsers" },
        { name: "sessions" },
        { name: "engagedSessions" },
        { name: "engagementRate" },
        { name: "averageSessionDuration" },
        { name: "screenPageViews" },
        { name: "eventCount" },
        { name: "conversions" }
      ],

      // 🔹 OPTIONAL DIMENSIONS (keep empty for summary cards)
      dimensions: []
    });

    res.json({
      success: true,
      data: response,
    });

  } catch (error) {
    console.error("GA Overview Error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};


exports.getUsersOverTime = async (req, res) => {
  const [response] = await analyticsClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
    dimensions: [{ name: "date" }],
    metrics: [{ name: "activeUsers" }],
  });

  res.json(response);
};


exports.getTrafficSources = async (req, res) => {
  const [response] = await analyticsClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
    dimensions: [
      { name: "sessionSource" },
      { name: "sessionMedium" }
    ],
    metrics: [
      { name: "sessions" },
      { name: "activeUsers" }
    ],
  });

  res.json(response);
};



exports.getTopPages = async (req, res) => {
  const [response] = await analyticsClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
    dimensions: [{ name: "pagePath" }],
    metrics: [
      { name: "screenPageViews" },
      { name: "activeUsers" }
    ],
    orderBys: [{
      metric: { metricName: "screenPageViews" },
      desc: true
    }],
    limit: 10
  });

  res.json(response);
};


exports.getDevices = async (req, res) => {
  const [response] = await analyticsClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
    dimensions: [{ name: "deviceCategory" }],
    metrics: [{ name: "activeUsers" }],
  });

  res.json(response);
};


exports.getLocations = async (req, res) => {
  const [response] = await analyticsClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
    dimensions: [{ name: "country" }],
    metrics: [{ name: "activeUsers" }],
    limit: 10
  });

  res.json(response);
};


exports.getEvents = async (req, res) => {
  const [response] = await analyticsClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
    dimensions: [{ name: "eventName" }],
    metrics: [{ name: "eventCount" }],
    orderBys: [{
      metric: { metricName: "eventCount" },
      desc: true
    }],
    limit: 10
  });

  res.json(response);
};


exports.getRealtimeUsers = async (req, res) => {
  const [response] = await analyticsClient.runRealtimeReport({
    property: `properties/${PROPERTY_ID}`,
    metrics: [{ name: "activeUsers" }],
  });

  res.json(response);
};
