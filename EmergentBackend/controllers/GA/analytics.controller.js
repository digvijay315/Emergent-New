const analyticsClient = require("../../config/gaClient");

const PROPERTY_ID = process.env.GA_PROPERTY_ID;

exports.getAnalyticsOverview = async (req, res) => {
  try {
    const [report] = await analyticsClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
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
      ]
    });

    // 🔹 GA4 SUMMARY DATA IS ALWAYS IN ROWS[0]
    const values = report.rows?.[0]?.metricValues || [];

    const overview = {
      activeUsers: Number(values[0]?.value || 0),
      totalUsers: Number(values[1]?.value || 0),
      newUsers: Number(values[2]?.value || 0),
      sessions: Number(values[3]?.value || 0),
      engagedSessions: Number(values[4]?.value || 0),
      engagementRate: Number(values[5]?.value || 0), // 0–1
      avgSessionDuration: Number(values[6]?.value || 0), // seconds
      pageViews: Number(values[7]?.value || 0),
      eventCount: Number(values[8]?.value || 0),
      conversions: Number(values[9]?.value || 0),
    };

    res.json({
      success: true,
      data: overview
    });

  } catch (error) {
    console.error("GA Overview Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};



exports.getUsersOverTime = async (req, res) => {
  try {
    const [response] = await analyticsClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
      dimensions: [{ name: "date" }],
      metrics: [{ name: "activeUsers" }],
    });

    const formattedData = (response.rows || []).map(row => {
      const rawDate = row.dimensionValues[0].value; // YYYYMMDD

      return {
        date: `${rawDate.slice(0, 4)}-${rawDate.slice(4, 6)}-${rawDate.slice(6, 8)}`,
        users: Number(row.metricValues[0].value),
      };
    });

    res.json({
      success: true,
      data: formattedData
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
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
  try {
    const [report] = await analyticsClient.runRealtimeReport({
      property: `properties/${PROPERTY_ID}`,
      metrics: [{ name: "activeUsers" }],
      dimensions: [{ name: "country" }] // 👈 IMPORTANT
    });

    res.json({
      success: true,
      rows: report.rows || []
    });

  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

