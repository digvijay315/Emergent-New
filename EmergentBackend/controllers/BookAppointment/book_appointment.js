
const book_appointment = require("../../models/BookAppointment/book_appointment");
const bookappoint_validationschema = require("../../Validation/book_appointment");

exports.booking_appointment = async (req, res) => {
  try {
    // ✅ Validate request body
    const { error, value } = bookappoint_validationschema.validate(req.body, {
      abortEarly: false, // return all validation errors
    });

    if (error) {
      return res.status(400).json({
        status: "error",
        errors: error.details.map(err => err.message),
      });
    }

    // ✅ Save appointment
    const resp = await book_appointment.create(value);

    return res.status(201).json({
      status: "success",
      message: "Appointment booked successfully",
      data: resp,
    });

  } catch (error) {
    console.error("Error booking appointment:", error);

    return res.status(500).json({
      status: "error",
      message: "Error occurred while booking appointment",
      error: error.message,
    });
  }
};


exports.get_book_appointment_details = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Fetch total count for pagination
    const total = await book_appointment.countDocuments();

    const exitingDetails = await book_appointment
      .find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    res
      .status(200)
      .send({
        message: "Booking Appointment details found successfully",
        bookingDetails: exitingDetails,
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        totalPages: Math.ceil(total / limit),
      });
  } catch (error) {
    console.error("Error getting booking details:", error);
    res.status(500).send({
      message: "Error occurred while getting booking details",
      error: error.message,
    });
  }
};
