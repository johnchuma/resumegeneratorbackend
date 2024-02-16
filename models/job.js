'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Job.hasMany(models.JobRole)
      Job.belongsTo(models.Resume)
      // define association here
    }
  }
  Job.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    resumeId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    position: {
      type: DataTypes.STRING,
      allowNull:true 
    },
    company: {
      type: DataTypes.STRING,
      allowNull:true
    },
    from: {
      type: DataTypes.STRING,
      allowNull:true
    },
    to: {
      type: DataTypes.STRING,
      allowNull:true
    },
    location:{
      type: DataTypes.STRING,
      allowNull:true
    },
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};