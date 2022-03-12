'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Gym = sequelize.define('Gym', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    series: DataTypes.FLOAT,
  });

  return Gym;
};