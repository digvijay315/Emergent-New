const Joi = require("joi");

const chatbotValidationSchema = Joi.object({
  question: Joi.string()
    .trim()
    .min(5)
    .max(200)
    .required()
    .messages({
      "string.empty": "Question is required",
      "string.min": "Question must be at least 5 characters",
      "string.max": "Question must not exceed 200 characters",
    }),

  answer: Joi.string()
    .trim()
    .min(5)
    .max(1000)
    .required()
    .messages({
      "string.empty": "Answer is required",
      "string.min": "Answer must be at least 5 characters",
      "string.max": "Answer must not exceed 1000 characters",
    }),

    isActive: Joi.boolean().optional(),
});

module.exports = chatbotValidationSchema;