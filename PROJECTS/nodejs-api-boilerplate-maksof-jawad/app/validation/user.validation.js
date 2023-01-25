const Joi = require("joi");

const userSchemaValidation = Joi.object({
    username: Joi.string().min(3).max(30).required(),
	email: Joi.string().email().required(),
    password: Joi.string().required(),
})

module.exports = userSchemaValidation;