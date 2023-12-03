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
        unique: true
    },
    descripcion: {
        type: DataTypes.CHAR(250),
        allowNull: false,
    },
    tipo_unidad: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0 //  0 - Cantidad, 1 - Mililitros, 2 - Gramos
    },
    stock: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
    }
});

module.exports = {
    Materiales
}