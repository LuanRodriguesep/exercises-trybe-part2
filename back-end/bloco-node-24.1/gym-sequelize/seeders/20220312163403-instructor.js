'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Instructors',
      [
        {
          name : 'Luan Rodrigues',
          instructorname: "Rodrigues",
          password: "123456",
          email:"luan@luan.com.br",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name : 'Eduardo Rodrigues',
          instructorname: "Dudu",
          password: "654321",
          email:"eduardo@dudu.com.br",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('instructors', null, {});
  }
};
