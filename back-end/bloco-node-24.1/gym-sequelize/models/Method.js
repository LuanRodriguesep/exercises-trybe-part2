'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
const Method = sequelize.define('Method', {
  name: DataTypes.STRING,
}, {});
  return Method;
};