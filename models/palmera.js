'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Palmera extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Zonas}) {
      // define association here
      this.belongsTo(Zonas,{foreignKey:'zonaID', as: 'zonas' })

    }
  }
  Palmera.init({
    
    
    tipo: {
      type: DataTypes.STRING,
      allowNull: false
    
    }, // tipo de enfermedad
    enfermo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
       
    },
    zonaID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Palmera',
    tableName: 'palmera'

  });
  return Palmera;
};