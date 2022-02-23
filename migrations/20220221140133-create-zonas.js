'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('zonas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, //llave primaria
        type: DataTypes.INTEGER
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
  
      },
      numero: {
        type: DataTypes.STRING,
        allowNull: false
      },
      area: {
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