'use strict';
/** @type {import('DataTypes-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
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
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('Jobs');
  }
};