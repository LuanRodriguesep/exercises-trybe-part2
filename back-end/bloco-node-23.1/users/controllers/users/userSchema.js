const joi = require('joi');

module.exports = () => {
  joi.object({
    first_Name: joi.string().min(3).required(),
    last: joi.string().min(6).required(),
    email: joi.string().min(6).required(),
    senha: joi.string().min(6).required(),
  });
};