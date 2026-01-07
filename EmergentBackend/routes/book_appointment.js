const express = require("express");
const { booking_appointment, get_book_appointment_details } = require("../controllers/BookAppointment/book_appointment");

const router = express.Router();




router.post("/SaveBooking", booking_appointment);

router.get("/GetBookingAppointmentDetails",  get_book_appointment_details);





module.exports = router;
