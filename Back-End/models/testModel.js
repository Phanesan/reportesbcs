//  Modelo de ejemplo
const { DataTypes } = require("sequelize")
const { DB } = require('../db');
const Reporte = require('./reporteModel')

const Users = DB.define('users', {
    correo: {
        type: DataTypes.CHAR(40),
        primaryKey: true,
        allowNull: false
    },
    password: {
        type: DataTypes.CHAR(50),
        allowNull: false
    }
});

Users.hasMany(Reporte.Reporte, {
    foreignKey: 'correo',
    sourceKey: 'correo'
})

Reporte.Reporte.belongsTo(Users, {
    foreignKey: 'correo',
    targetKey: 'correo'
})

module.exports = {
    Users
}