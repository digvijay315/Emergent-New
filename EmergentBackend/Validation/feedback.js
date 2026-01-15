const Joi = require("joi");

const feedbackValidationSchema = Joi.object({
  full_name: Joi.string()
    .min(2)
    .max(50)
    .required()
    .messages({
      "string.empty": "Full name is required",
      "string.min": "Full name must be at least 2 characters",
    }),

  company_name: Joi.string()
    .allow("")
    .max(100)
    .messages({
      "string.max": "Company name cannot exceed 100 characters",
    }),

  industry: Joi.string()
    .allow("")
    .max(50),

  rating: Joi.number()
    .min(0)
    .max(5)
    .required()
    .messages({
      "number.base": "Rating must be a number",
      "number.min": "Rating cannot be less than 0",
      "number.max": "Rating cannot be more than 5",
    }),

  feedback: Joi.string()
    .allow("")
    .max(500)
    .messages({
      "string.max": "Feedback cannot exceed 500 characters",
    }),

  isApproved: Joi.boolean()
    .default(false)
    .optional(),
});

module.exports=feedbackValidationSchema