const service = require('../../service/people');
const rescue = require('express-rescue');
const joi = require('joi');

const peopleSchema = joi
.object({
  name: joi.string().min(3).required(),
  age: joi.number().min(1)
});

const validatePeopleSchema = (body) => {
  const { error } = peopleSchema.validate(body);

  if (error) {
    throw error;
  }
};

module.exports = rescue(async (req, res) => {
  validatePeopleSchema(req.body);
  const { id } = req.params;
  const { name , age } = req.body;

  const updatePeople = await service.update({id, name, age})

  res.status(200).json(updatePeople);
  
});