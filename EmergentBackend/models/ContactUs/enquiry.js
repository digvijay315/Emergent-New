const mongoose = require("mongoose");

const enquiry = new mongoose.Schema(
  {
    name: {type: String},
    email: { type: String},
    country_code: { type: String},
    mobile_number: { type: String},
    company: { type: String},
    industry: { type: String},
    message: { type: String},
    is_complete: {type: Boolean,default: false,}

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("enquiry", enquiry);
