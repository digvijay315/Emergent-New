const express=require('express');
const { getAnalyticsOverview, getUsersOverTime, getTrafficSources, getTopPages, getDevices, getLocations, getEvents, getRealtimeUsers } = require('../controllers/GA/analytics.controller');



const router = express.Router();

router.get("/overview", getAnalyticsOverview);
router.get("/users", getUsersOverTime);
router.get("/traffic", getTrafficSources);
router.get("/pages", getTopPages);
router.get("/devices", getDevices);
router.get("/locations", getLocations);
router.get("/events", getEvents);
router.get("/realtime", getRealtimeUsers);




module.exports= router;
