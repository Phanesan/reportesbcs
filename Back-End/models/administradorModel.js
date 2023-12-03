const { DataTypes } = require("sequelize")
const { DB } = require('../db');
const Reporte = require('./reporteModel')

const Administrador = DB.define('administrador', {
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
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    }
});