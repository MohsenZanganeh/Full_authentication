'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User_Password', {
    id:{ 
        type:DataTypes.BIGINT,
        unique:true,
        autoIncrement:true,
        primaryKey:true,
        field:"id"
    },
    password:{ 
        type:DataTypes.STRING(500),
        field:"password"
    },
    IsActive:{
        type:DataTypes.BOOLEAN,
        defaultValue:true,
        field:"is_active"
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};