const express = require("express");
const {  enquriy, get_enquiry_details } = require("../controllers/ContactUs/enquiry");

const router = express.Router();




router.post("/Save-enquiry",  enquriy);

router.get("/Get-enquiry",get_enquiry_details)



module.exports = router;
