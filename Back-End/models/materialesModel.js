const { DataTypes } = require("sequelize")
const { DB } = require('../db');
const Reporte = require('./reporteModel')

const Materiales = DB.define('materiales', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.CHAR(40),
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.CHAR(250),
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    disponibilidad: {
        type: DataTypes.ENUM('disponible','no disponible'),
        allowNull: false,
    },
    categoria: {
        type: DataTypes.ENUM('Asfalto','Señales de trafico','Concreto','Grava','Pintura','Tubos'),
        allowNull: false,
    }
});

module.exports = {
    Usuario,
    Administrador,
    Trabajadores,
    Materiales
}