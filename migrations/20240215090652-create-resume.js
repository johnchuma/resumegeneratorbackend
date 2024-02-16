'use strict';
/** @type {import('DataTypes-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Resumes', {
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
      name: {
        type: DataTypes.STRING,
        allowNull:true 
      },
      image: {
        type: DataTypes.STRING,
        allowNull:true
      },
      email: {
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
    await queryInterface.dropTable('Resumes');
  }
};