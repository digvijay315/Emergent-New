const Joi = require("joi");

const blogValidationSchema = Joi.object({
  title: Joi.string()
    .trim()
    .min(3)
    .max(200)
    .messages({
      "string.base": "Title must be a text value",
      "string.empty": "Title is required",
      "string.min": "Title must be at least 3 characters",
      "string.max": "Title must be less than 200 characters",
    }),

  description: Joi.string()
    .trim()
    .min(3)
    .max(500)
    .messages({
      "string.base": "Description must be a text value",
      "string.empty": "Description is required",
      "string.min": "Description must be at least 3 characters",
      "string.max": "Description must be less than 500 characters",
    }),

  image: Joi.string()
    .uri()
    .allow("", null)
    .messages({
      "string.uri": "Image must be a valid URL",
    }),

  fullBlog: Joi.string()
    .trim()
    .min(3)
    .messages({
      "string.base": "Blog content must be text",
      "string.empty": "Blog content is required",
      "string.min": "Blog content must be at least 3 characters",
    }),

  isActive: Joi.boolean()
    .messages({
      "boolean.base": "Status must be true or false",
    }),
});

module.exports = blogValidationSchema;
