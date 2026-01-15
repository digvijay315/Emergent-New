const express = require("express");
const { createFeedback, getAllFeedback, approveFeedback, getApprovedFeedback } = require("../controllers/Feedback/feedback");


const router = express.Router();




router.post("/Save-feedback",  createFeedback);

router.patch(`/Approved-feedback/:id`,approveFeedback)

router.get("/Get-feedback",getAllFeedback)

router.get("/Get-approved-feedback",getApprovedFeedback)



module.exports = router;
