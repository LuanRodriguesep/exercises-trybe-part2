'use strict';

const { sequelize } = require("../models");

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Gyms', 'series', {
      type: Sequelize.FLOAT,
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Gyms', 'series')
  }
};
