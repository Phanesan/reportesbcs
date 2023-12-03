const { DataTypes } = require("sequelize")
const { sequelize } = require('../db');

const Materiales = sequelize.define('materiales', {
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
    }
});

module.exports = {
    Materiales
}