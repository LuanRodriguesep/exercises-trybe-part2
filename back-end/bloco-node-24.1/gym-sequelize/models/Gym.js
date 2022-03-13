'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Gym = sequelize.define('Gym', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    series: DataTypes.FLOAT,
  }, {});

  Gym.associate = (models) => {
    Gym.belongsTo(models.Instructor, { as: 'instructor', foreignKey: 'instructorId' });
  };

  return Gym;
};