const express = require('express');

const router = express.Router();

const { Method, Gym } = require('../models');

router.post('/', async (req, res, next) => {
  const { name } = req.body;
  
  try {
    const created = await Method.create({ name });

    return res.status(201).send(created);

  } catch (e) {
    console.log(e.message);
    return res.status(500).end();
  }
});

router.get('/', async(req, res, next) => {
  try {
    const allMethods = await Method.findAll();
    return res.status(200).send(allMethods);
  } catch (e) {
    console.log(e.message);
    return res.status(500).end();
  }
});

router.get('/:id', async(req, res, next) => {
  try {
    const { id } = req.params;

    const method = await Method.findByPk(id, {
      include: {
        model: Gym,
        as: 'gyms',
      }
    });

    if (!method) {
      return res.status(404).end();
    }

    return res.status(200).send(method);

  } catch (e) {
    console.log(e.message);
    return res.status(500).end();
  };
});

  router.put('/:id', async(req, res, next) => {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const method = await Method.findByPk(id);

      if (!method) {
        return res.status(404).end();
      }

      await Method.update({ name }, { where: {
        id: req.params.id
      }})

      return res.status(200).send({ ...method.dataValues, name })

    } catch (e) {
      console.log(e.message);
      return res.status(500).end();
    }
  });

  router.delete('/:id', async(req, res, next) => {
    try {
      const method = await Method.destroy({ where: {
        id: req.params.id,
      } });

      if(!method){
        return res.status(404).end();
      }

      return res.status(204).end();
    } catch (e) {
      console.log(e.message);
      return res.status(500).end();
    }
  });

  router.post('/:id/gym', async(req, res, next) => {
    try {
      const method = await Method.findByPk(req.params.id);

      if (!method) {
        return res.status(404).end();
      }

      const gymIds = req.body;
      const gyms = await Gym.findAll({
        where: {
          id: gymIds,
        },
      })

      await method.addGyms(gyms)

      return res.status(200).send({ message: ` Exercicios de academia vinculados ao metodo ${method.name} com sucesso` })

    } catch (e) {
      console.log(e.message);
      return res.status(500).end();
    }
  });

module.exports = router;