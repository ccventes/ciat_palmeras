'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('zonas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      numero: {
        type: DataTypes.STRING,
        allowNull: false
      },
      eHorizontal: {
        type: DataTypes.STRING,
        allowNull: false
      },
      eVertical: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Zonas');
  }
};