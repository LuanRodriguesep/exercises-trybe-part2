const service = require('../../service/people');
const rescue = require('express-rescue');
const joi = require('joi');

const peopleSchema = joi
.object({
  name: joi.string().min(3).required(),
  age: joi.number().min(1)
});

module.exports = rescue(async (req, res) => {
  const { name , age } = req.body;

  const {error} = peopleSchema.validate(req.body);

  if (error) {
    throw error;
  }

  const newPeople = await service.create({ name, age });

  res.status(201).json(newPeople);
});