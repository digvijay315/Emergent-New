
const enquiry = require("../../models/ContactUs/enquiry");
const enquiryValidationSchema = require("../../Validation/enquiry");

exports.enquriy = async (req, res) => {
  try {
    // ✅ Validate request body
    const { error, value } = enquiryValidationSchema.validate(req.body, {
      abortEarly: false, // return all validation errors
    });

    if (error) {
      return res.status(400).json({
        status: "error",
        errors: error.details.map(err => err.message),
      });
    }

    // ✅ Save appointment
    const resp = await enquiry.create(value);

    return res.status(201).json({
      status: "success",
      message: "Enquiry saved successfully",
      data: resp,
    });

  } catch (error) {
    console.error("Error enquriry:", error);

    return res.status(500).json({
      status: "error",
      message: "Error occurred while saving enquiry",
      error: error.message,
    });
  }
};


exports.get_enquiry_details = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Fetch total count for pagination
    const total = await enquiry.countDocuments();

    const exitingDetails = await enquiry
      .find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    res
      .status(200)
      .send({
        message: "Enquiry found successfully",
        enquiry: exitingDetails,
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        totalPages: Math.ceil(total / limit),
      });
  } catch (error) {
    console.error("Error getting enquiry details", error);
    res.status(500).send({
      message: "Error occurred while getting enquiry details",
      error: error.message,
    });
  }
};

















