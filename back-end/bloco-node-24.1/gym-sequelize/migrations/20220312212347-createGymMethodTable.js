'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'GymMethods',
      {
        gymId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Gyms',
            key: 'id',
          },
          primaryKey: true,
        },
        methodId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Methods',
            key: 'id',
          },
          primaryKey: true,
        },
      },
    );
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.dropTable('GymMethods');
  }
};
