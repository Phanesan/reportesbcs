//  Modelo de ejemplo
const { DataTypes } = require("sequelize")
const { sequelize } = require('../db');


const Users = sequelize.define('users', {
    correo: {
        type: DataTypes.CHAR(40),
        allowNull: false,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.CHAR(50),
        allowNull: false,
    },
    apellido: {
        type: DataTypes.CHAR(50),
        allowNull: false,
    },
    password: {
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
        allowNull: false,
    }
});

module.exports = {
    Users
}
