const { DataTypes } = require("sequelize")
const { sequelize } = require('../db');

const { Users } = require('./usuarioModel');

const Trabajadores = sequelize.define('trabajadores', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    correo: {
        type: DataTypes.CHAR(40),
        allowNull: false,
        primaryKey: true,
    },
    rfc: {
        type: DataTypes.CHAR(13),
        allowNull: false,
    }
});

module.exports = {
    Trabajadores
}