//  Modelo de ejemplo
const { DataTypes } = require("sequelize")
const { DB } = require('../db');
const Reporte = require('./reporteModel')


const Users = DB.define('users', {
    nombre: {
        type: DataTypes.CHAR(50),
        allowNull: false,
    },
    apellido: {
        type: DataTypes.CHAR(50),
        allowNull: false,
    },
    correo: {
        type: DataTypes.CHAR(40),
        allowNull: false,
    },
    contraseña: {
        type: DataTypes.CHAR(30),
        allowNull: false,
    },
    clave_lector: {
        type: DataTypes.CHAR(18),
    },
    foto: {
        type: DataTypes.BLOB,
    },
    curp: {
        type: DataTypes.CHAR(18),
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
