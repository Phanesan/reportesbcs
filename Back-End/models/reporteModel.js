const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Reporte = sequelize.define('reportes', {
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
    ubicacion: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.ENUM('1','2','3','4','5','6'),
        allowNull: false,
    },
    imagen_video: {
        type: DataTypes.BLOB,
    },
    comentarios: {
        type: DataTypes.TEXT,
    }
});

module.exports = {
    Reporte
}
