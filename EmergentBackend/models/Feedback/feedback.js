const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
      trim: true,
    },
    company_name: {
      type: String,
      trim: true,
    },
    industry: {
      type: String,
      trim: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    feedback: {
      type: String,
      trim: true,
    },
     isApproved: {
      type: Boolean,
      default: false, // Admin approval required
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", feedbackSchema);
