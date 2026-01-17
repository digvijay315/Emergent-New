const express = require("express");
const { addFAQ, getAllFAQs, updateFAQ, deleteFAQ } = require("../controllers/Chatbot/chatbot");


const router = express.Router();




router.post("/Save-faq",  addFAQ);

router.get("/Get-faq",getAllFAQs)

router.put("/Update-faq/:id",updateFAQ)

router.delete("/Delete-faq/:id",deleteFAQ)



module.exports = router;
