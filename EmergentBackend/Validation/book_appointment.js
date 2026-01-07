const Joi = require("joi");
const mongoose = require("mongoose"); // ✅ Required if you use ObjectId somewhere

const bookappointment_ValidationSchema = Joi.object({

  name: Joi.string().required().messages({
    "string.empty": "Name is required",
  }),

  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    "string.empty": "Email is required",
    "string.email": "Please enter a valid email address",
  }),

  industry: Joi.string().required().messages({
    "string.empty": "Industry is required",
  }),

  country_code: Joi.string().required().messages({
    "number.empty": "Country code is required",
  }),

mobile_number: Joi.string()
  .pattern(/^[6-9]\d{9}$/)
  .optional()
  .messages({
    "string.empty": "Mobile number is required",
    "string.pattern.base": "Please enter a valid 10-digit mobile number",
    "any.required": "Mobile number is required",
  }),

date: Joi.date()
  .required()
  .messages({
    "any.required": "Date is required",
    "date.base": "Please enter a valid date",
  }),

time: Joi.string()
  .pattern(/^(0?[1-9]|1[0-2]):[0-5]\d\s?(AM|PM)$/i)
  .required()
  .messages({
    "string.empty": "Time is required",
    "string.pattern.base": "Time must be in hh:mm AM/PM format",
    "any.required": "Time is required",
  }),

notes: Joi.string()
  .required()
  .messages({
    "string.empty": "Notes is required",
    "any.required": "Notes is required",
  }),

  is_complete: Joi.boolean().default(false),


});

module.exports = bookappointment_ValidationSchema;
