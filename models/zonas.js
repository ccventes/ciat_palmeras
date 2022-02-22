'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Zonas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON(){
      return{ ...this.get(), id: undefined }

    }
  }
  Zonas.init({
    numero: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    area: {
      type: DataTypes.STRING,
      allowNull: false,

    }
  }, 
  
  {
    sequelize,
    modelName: 'Zonas',
    tableName: 'zonas'
  });
  return Zonas;
};