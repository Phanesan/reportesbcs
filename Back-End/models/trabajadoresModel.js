const { DataTypes } = require("sequelize")
const { sequelize } = require('../db');

const Trabajadores = sequelize.define('trabajadores', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    correo: { // LLAVE FORANEA
        type: DataTypes.CHAR(40),
        allowNull: false,
    },
    rfc: {
        type: DataTypes.CHAR(13),
        allowNull: false,
    }
});

module.exports = {
    Trabajadores
}