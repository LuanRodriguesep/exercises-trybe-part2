'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Gyms',
      [
        {
          name : 'supino',
          description: "exercicio peito",
          series: 4.12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name : 'leg press',
          description: "exercicio quadriceps",
          series: 4.15,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Gyms', null, {});
  }
};
