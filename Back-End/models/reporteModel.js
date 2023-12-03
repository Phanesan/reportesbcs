const { DataTypes } = require('sequelize');
const { DB } = require('../db');

const Reporte = DB.define('reportes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    ubicacion: {
        type: DataTypes.CHAR(550),
        allowNull: false,
    },
    clasificacion: {
        type: DataTypes.ENUM('1','2','3','4','5'),
        allowNull: false,
    },
    imagen_video: {
        type: DataTypes.BLOB,
    },
    comentarios: {
        type: DataTypes.CHAR(250),
    }
});

module.exports = {
    Reporte
}
