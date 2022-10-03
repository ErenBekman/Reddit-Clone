const Joi = require("joi");

const createValidation = Joi.object({
  username: Joi.string().required().min(3),
  password: Joi.string().required().min(3),
  email: Joi.string().email().required(),
});

const loginValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(3),
});

const updateValidation = Joi.object({
  username: Joi.string().min(2),
  email: Joi.string().email().min(2),
  password: Joi.string().min(2),
});

const resetPasswordValidation = Joi.object({
  email: Joi.string().email().required(),
});

const changePasswordValidation = Joi.object({
  password: Joi.string().required().min(2),
});

module.exports = {
  createValidation,
  loginValidation,
  resetPasswordValidation,
  updateValidation,
  changePasswordValidation,
};
