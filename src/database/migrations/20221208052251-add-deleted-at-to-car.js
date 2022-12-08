'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
  //   await queryInterface.createTable('add-deletedAt-to-cars', {
    return Promise.all([
      queryInterface.addColumn(
        'Cars', // table name
        'deletedAt', // new field name
        {
          type: Sequelize.DATE,
          allowNull: true,
        },
      ),
    ]);
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable('add-deletedAt-to-cars');
    return Promise.all([
      queryInterface.removeColumn('Cars', 'deletedAt')
    ]);
  }
};