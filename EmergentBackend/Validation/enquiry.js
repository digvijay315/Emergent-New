const Joi = require("joi");
const mongoose = require("mongoose"); // ✅ Required if you use ObjectId somewhere

const enquiry_ValidationSchema = Joi.object({

  name: Joi.string().required().messages({
    "string.empty": "Name is required",
  }),

  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    "string.empty": "Email is required",
    "string.email": "Please enter a valid email address",
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

  industry: Joi.string().required().messages({
    "string.empty": "Industry is required",
  }),

  company: Joi.string().required().messages({
    "string.empty": "Company is required",
  }),


message: Joi.string()
  .required()
  .messages({
    "string.empty": "Notes is required",
    "any.required": "Notes is required",
  }),

  is_complete: Joi.boolean().default(false),


});

module.exports = enquiry_ValidationSchema;
