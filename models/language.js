'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Language.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    resumeId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    language: {
      type: DataTypes.STRING,
      allowNull:true
    },
    level:{
      type: DataTypes.STRING,
      allowNull:true
    }
  }, {
    sequelize,
    modelName: 'Language',
  });
  return Language;
};