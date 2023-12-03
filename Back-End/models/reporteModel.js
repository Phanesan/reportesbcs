//  Modelo de ejemplo
const { DataTypes } = require('sequelize');
const { DB } = require('../db');

const Reporte = DB.define('reportes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    }
});

module.exports = {
    Reporte
}