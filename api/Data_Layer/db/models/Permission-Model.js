'use strict';
module.exports = (sequelize, DataTypes) => {
    const Permission = sequelize.define('Permission', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        permission_code: {
            type: DataTypes.STRING,
            allowNull: false
        }
        //
    }, {
        version: true,
        paranoid: true
    });
    return Permission;
}