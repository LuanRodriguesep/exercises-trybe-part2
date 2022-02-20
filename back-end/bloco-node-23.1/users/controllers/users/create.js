const rescue = require('express-rescue');
const joi = require('joi');

const service = require('../../services/users');
// const userSchema = require('./userSchema');

const userSchema = joi.object({
  first_Name: joi.string().min(3).required(),
  last_Name: joi.string().min(3).required(),
  email: joi.string().min(6).required(),
  password: joi.string().min(6).required(),
}).messages({
    'any.required': `Todos os campos são obrigatorios`,
    'string.min': `O campo senha deve ter 6 ou mais caracteres`,
    'string.email':`Informe um email válido no campo email`,
})

module.exports = rescue(async (req, res, _next) => {
  const { first_Name, last_Name, email, password } = req.body;

  const { error } = userSchema.validate(req.body);

  if (error) {
    throw error;
  }

  const newUse = await service.create({ first_Name, last_Name, email, password });

  return res.status(201).json(newUse);
});

