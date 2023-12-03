const { DataTypes } = require("sequelize")
const { DB } = require('../db');
const Reporte = require('./reporteModel')

const Trabajadores = DB.define('trabajadores', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
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
        allowNull: false,
    },
    curp: {
        type: DataTypes.CHAR(18),
        allowNull: false,
    },
    rfc: {
        type: DataTypes.CHAR(13),
        allowNull: false,
    }
});