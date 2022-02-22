const service = require('../../service/people');
const rescue = require('express-rescue');
const joi = require('joi');

const peopleSchema = 
  joi.object({
    name: joi.string().min(3),
    age: joi.number().min(1),
});

module.exports = rescue(async (req, res) => {
  const { error } = await peopleSchema.validate(req.body);

  if (error) {
    throw error;
  }

  const { id } = req.params;

  const updatedPeople = await service.partialUpdate(id, req.body);

  res.status(200).json(updatedPeople);
});