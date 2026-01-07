const mongoose = require("mongoose");

const book_appointment = new mongoose.Schema(
  {
    name: {type: String},
    email: { type: String},
    industry: { type: String},
    country_code: { type: String},
    mobile_number: { type: String},
    date: { type: String},
    time: { type: String},
    notes: { type: String},
    is_complete: {type: Boolean,default: false,}

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("book-appointment", book_appointment);
