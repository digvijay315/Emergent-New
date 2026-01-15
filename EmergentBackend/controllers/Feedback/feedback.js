const Feedback = require("../../models/Feedback/feedback");
const feedbackValidationSchema = require("../../Validation/feedback");

// CREATE FEEDBACK
exports.createFeedback = async (req, res) => {
  try {
    // ✅ Validate request body
    const { error, value } = feedbackValidationSchema.validate(req.body, {
      abortEarly: false, // return all validation errors
    });

    if (error) {
      return res.status(400).json({
        status: "error",
        errors: error.details.map((err) => err.message),
      });
    }
    const { full_name, company_name, industry, rating, feedback,isApproved } = req.body;

    if (!full_name) {
      return res.status(400).json({ message: "Full name is required" });
    }

    const newFeedback = new Feedback({
      full_name,
      company_name,
      industry,
      rating,
      feedback,
      isApproved
    });

    await newFeedback.save();

    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      data: newFeedback,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// GET ALL FEEDBACK
exports.getAllFeedback = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Fetch total count for pagination
    const total = await Feedback.countDocuments();

    const feedbacks = await Feedback.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));
    
    const approved_feedback=await Feedback.find({isApproved:true})

    const pending_feedback=await Feedback.find({isApproved:false})

    res.status(200).json({
      success: true,
      feedback: feedbacks,
      approved:approved_feedback.length,
      pending:pending_feedback.length,
      page: parseInt(page),
      limit: parseInt(limit),
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// APPROVE / REJECT FEEDBACK (Admin)
exports.approveFeedback = async (req, res) => {
  try {
    const { id } = req.params;

    // 1️⃣ Find feedback first
    const feedback = await Feedback.findById(id);

    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: "Feedback not found",
      });
    }

    // 2️⃣ Toggle isApproved
    feedback.isApproved = !feedback.isApproved;
    await feedback.save();

    res.status(200).json({
      success: true,
      message: `Feedback ${
        feedback.isApproved ? "approved" : "unapproved"
      } successfully`,
      data: feedback,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Approval toggle failed",
      error: error.message,
    });
  }
};


// GET APPROVED FEEDBACK (User Panel)
exports.getApprovedFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find({ isApproved: true }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      data: feedback,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch approved feedback",
    });
  }
};
