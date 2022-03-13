const express = require('express');

const { Instructor, Gym } = require('../models');

const router = express.Router();


router.post('/', async (req, res, next) => {
  const { name , instructorname, password, email } = req.body;
  
  try {
    const created = await Instructor.create({ name , instructorname, password, email });
  
    const { id } = created;

    return res.status(201).send({ id, name, instructorname, email });

  } catch (e) {
    console.log(e.message);
    return res.status(500).end();
  }
});

router.get('/', async(req, res, next) => {
  try {
    const allInstructors = await Instructor.findAll();
    return res.status(200).send(allInstructors);
  } catch (e) {
    console.log(e.message);
    return res.status(500).end();
  }
});

router.get('/:id', async(req, res, next) => {
  try {
    const { id } = req.params;

    const instructor = await Instructor.findByPk(id);

    if (!instructor) {
      return res.status(404).end();
    }

    if (!req.query.includeGyms) {
      return res.status(200).send(instructor);
    };

    const exercises = await instructor.getGyms();

    return res.status(200).send({ ...instructor.dataValues, exercises });

  } catch (e) {
    console.log(e.message);
    return res.status(500).end();
  };
});

  router.put('/:id', async(req, res, next) => {
    try {
      const { id } = req.params;
      const { name , instructorname, password, email } = req.body;

      const instructor = await Instructor.findByPk(id);

      if (!instructor) {
        return res.status(404).end();
      }

      await Instructor.update({ name , instructorname, password, email }, { where: {
        id: req.params.id
      }})

      return res.status(200).send({ ...instructor.dataValues, name, instructorname, email })

    } catch (e) {
      console.log(e.message);
      return res.status(500).end();
    }
  });

  router.delete('/:id', async(req, res, next) => {
    try {
      const instructor = await Instructor.destroy({ where: {
        id: req.params.id,
      } });

      if(!instructor){
        return res.status(404).end();
      }

      return res.status(204).end();
    } catch (e) {
      console.log(e.message);
      return res.status(500).end();
    }
  });

module.exports = router;