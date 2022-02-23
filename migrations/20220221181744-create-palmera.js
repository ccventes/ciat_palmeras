'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('palmera', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      enfermo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      zonaID: {
        type: DataTypes.INTEGER,
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
    await queryInterface.dropTable('palmera');
  }
};