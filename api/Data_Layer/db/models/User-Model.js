'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    uuid: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      field: 'uuid'
    },
    flname: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }, 
    activationCode: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true
    },
     activationEmailExpiresAt: {
      type: DataTypes.DATE,
      unique: true,
      allowNull: true
    },
    activationEmailExpiresResend: {
      type: DataTypes.DATE,
      unique: true,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    emailValidate: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:false,
      field: 'emailValidate'
    },
    passwordResetCode: {
      type: DataTypes.JSON,
      allowNull: true,
      defualtValue: {
        code: '',
        isVaild: false
      },
      field: 'password_reset_code'
    },
    passwordResetCodeExpiresAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    version: true,
    paranoid:true
  });
  User.associate = function (models) {
    models.User.hasMany(models.User_Password)
    models.User_Password.belongsTo(models.User)
  };
  User.prototype.JsonUser=function(token=""){
   return({
    flname:this.flname,
    email:this.email,
    Token:token,
    uuid:this.uuid
   })
  }
   User.prototype.JsonUserWithCode=function(){
    return({
     flname:this.flname,
     email:this.email,
     activationCode:this.activationCode,
     uuid:this.uuid
    })
  }
  return User;
}