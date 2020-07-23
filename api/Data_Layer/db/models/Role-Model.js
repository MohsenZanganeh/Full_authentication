'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    responsibility: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }, 
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  }, {
    version: true,
    paranoid:true
  });
  return Role;
}