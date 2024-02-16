'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resume extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Resume.hasMany(models.Job);
      Resume.hasMany(models.Language);
      Resume.hasMany(models.Certificate);
      Resume.hasMany(models.Skill);

      // define association here
    }
  }
  Resume.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull:true 
    },
    email: {
      type: DataTypes.STRING,
      allowNull:true
    },
    image: {
      type: DataTypes.STRING,
      allowNull:true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull:true
    },
    address: {
      type: DataTypes.STRING,
      allowNull:true
    },
    objective: {
      type: DataTypes.TEXT,
      allowNull:true
    },
  }, {
    sequelize,
    modelName: 'Resume',
  });
  return Resume;
};