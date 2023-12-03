const { DataTypes } = require("sequelize")
const { sequelize } = require('../db');

const ListaMateriales = sequelize.define('lista_materiales', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    id_reporte: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    id_material: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    cantidad_solicitada: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = {
    ListaMateriales
}