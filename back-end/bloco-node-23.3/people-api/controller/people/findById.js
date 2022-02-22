const model = require('../../models/people');
const rescue = require('express-rescue');

module.exports =  rescue(async(req, res, next) => {
  const { id } = req.params;

  const people = await model.findById(id);

  return res.status(200).json(people)
});