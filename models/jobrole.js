'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobRole.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    jobId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    role: {
      type: DataTypes.TEXT,
      allowNull:true 
    },
  }, {
    sequelize,
    modelName: 'JobRole',
  });
  return JobRole;
};