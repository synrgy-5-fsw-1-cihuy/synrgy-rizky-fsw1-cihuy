"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //   await queryInterface.createTable('add-createdBy-deletedBy-updateBy-to-cars', {
    return Promise.all([
      queryInterface.addColumn("Cars", "createdBy", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Cars", "updatedBy", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Cars", "deletedBy", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
    ]);
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable('add-createdBy-deletedBy-updateBy-to-cars');
    return Promise.all([
      queryInterface.removeColumn("Cars", "createdBy"),
      queryInterface.removeColumn("Cars", "updatedBy"),
      queryInterface.removeColumn("Cars", "deletedBy"),
    ]);
  },
};
