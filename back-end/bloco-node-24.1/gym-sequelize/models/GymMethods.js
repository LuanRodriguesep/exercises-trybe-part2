"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const GymMethods = sequelize.define("GymMethods", {}, { timestamps: false });

  GymMethods.associate = (models) => {
    models.Gym.belongsToMany(models.Method, {
      as: "methods",
      through: GymMethods,
      foreignKey: "gymId",
      otherId: "methodId",
    });

    models.Method.belongsToMany(models.Gym, {
      as: "gyms",
      through: GymMethods,
      foreignKey: "methodId",
      otherId: "gymId",
    });
  };

  return GymMethods;
};
