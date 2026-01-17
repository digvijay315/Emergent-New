const FAQ = require("../../models/Chatbot/chatbot");
const chatbotValidationSchema=require('../../Validation/chatbot')

/**
 * ➕ Add Question & Answer (Admin)
 */
exports.addFAQ = async (req, res) => {
  try {

             // ✅ Validate request body
        const { error, value } = chatbotValidationSchema.validate(req.body, {
          abortEarly: false, // return all validation errors
        });
    
        if (error) {
          return res.status(400).json({
            status: "error",
            errors: error.details.map(err => err.message),
          });
        }

    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({
        success: false,
        message: "Question and Answer are required",
      });
    }

    const faq = await FAQ.create({ question, answer });

    res.status(201).json({
      success: true,
      message: "FAQ added successfully",
      data: faq,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add FAQ",
      error: error.message,
    });
  }
};

/**
 * 📄 Get All FAQs (For Chatbot)
 */
exports.getAllFAQs = async (req, res) => {
  try {

     const { page = 1, limit = 10,search="" } = req.query;
    
        const skip = (parseInt(page) - 1) * parseInt(limit);
    
        // Fetch total count for pagination
        const total = await FAQ.countDocuments();

    const faqs = await FAQ.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));;

    res.status(200).json({
      success: true,
      data: faqs,
      page: parseInt(page),
    limit: parseInt(limit),
    total,
    totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch FAQs",
      error: error.message,
    });
  }
};

/**
 * ✏️ Update FAQ (Admin)
 */
exports.updateFAQ = async (req, res) => {
  try {
    const { id } = req.params;

                 // ✅ Validate request body
        const { error, value } = chatbotValidationSchema.validate(req.body, {
          abortEarly: false, // return all validation errors
        });
    
        if (error) {
          return res.status(400).json({
            status: "error",
            errors: error.details.map(err => err.message),
          });
        }
        
    const { question, answer, isActive } = req.body;

    const faq = await FAQ.findByIdAndUpdate(
      id,
      { question, answer, isActive },
      { new: true }
    );

    if (!faq) {
      return res.status(404).json({
        success: false,
        message: "FAQ not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "FAQ updated successfully",
      data: faq,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update FAQ",
      error: error.message,
    });
  }
};

/**
 * 🗑 Delete FAQ (Admin)
 */
exports.deleteFAQ = async (req, res) => {
  try {
    const { id } = req.params;

    const faq = await FAQ.findByIdAndDelete(id);

    if (!faq) {
      return res.status(404).json({
        success: false,
        message: "FAQ not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "FAQ deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete FAQ",
      error: error.message,
    });
  }
};
