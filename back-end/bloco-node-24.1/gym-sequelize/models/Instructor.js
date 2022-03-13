'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Instructor = sequelize.define('Instructor', {
    name: DataTypes.STRING,
    instructorname: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {});

  Instructor.associate = (models) => {
    Instructor.hasMany(models.Gym, { as: 'gyms', foreignKey: 'instructorId' });
  };

  return Instructor;
};