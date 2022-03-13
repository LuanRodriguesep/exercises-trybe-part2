const express = require('express');

const router = express.Router();

const { Gym, Instructor } = require('../models');

router.post('/', async (req, res, next) => {
  const { name , description, series, instructorId } = req.body;
  
  try {
    const created = await Gym.create({ name, description, series, instructorId });

    return res.status(201).send(created);

  } catch (e) {
    console.log(e.message);
    return res.status(500).end();
  }
});

router.get('/', async(req, res, next) => {
  try {
    const allExercices = await Gym.findAll();
    return res.status(200).send(allExercices);
  } catch (e) {
    console.log(e.message);
    return res.status(500).end();
  }
});

router.get('/:id', async(req, res, next) => {
  try {
    const { id } = req.params;

    const exercise = await Gym.findByPk(id, {
      include: { model: Instructor, as: 'instructor', attributes: {
        exclude: ['password'],
      }}
    })

    if (!exercise) {
      return res.status(204).end();
    }

    return res.status(200).send(exercise);

  } catch (e) {
    console.log(e.message);
    return res.status(500).end();
  };
});

  router.put('/:id', async(req, res, next) => {
    try {
      const { id } = req.params;
      const { name, description, series, instructorId } = req.body;

      const exercise = await Gym.findByPk(id);

      if (!exercise) {
        return res.status(404).end();
      }

      await Gym.update({ name, description, series, instructorId }, { where: {
        id: req.params.id
      }})

      return res.status(200).send({ ...exercise.dataValues, name, description, series, instructorId })

    } catch (e) {
      console.log(e.message);
      return res.status(500).end();
    }
  });

  router.delete('/:id', async(req, res, next) => {
    try {
      const exercise = await Gym.destroy({ where: {
        id: req.params.id,
      } });

      if(!exercise){
        return res.status(404).end();
      }

      return res.status(204).end();
    } catch (e) {
      console.log(e.message);
      return res.status(500).end();
    }
  });

module.exports = router;