'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Certificate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Certificate.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    resumeId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    certificate: {
      type: DataTypes.STRING,
      allowNull:true
    },
    institute: {
      type: DataTypes.STRING,
      allowNull:true
    },
    year: {
      type: DataTypes.STRING,
      allowNull:true
    },
  }, {
    sequelize,
    modelName: 'Certificate',
  });
  return Certificate;
};