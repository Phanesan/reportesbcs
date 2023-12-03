const { DataTypes } = require("sequelize")
const { sequelize } = require('../db');

const Administrador = sequelize.define('administrador', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    correo: { // foranea
        type: DataTypes.CHAR(40),
        allowNull: false,
    },
    rol: {
        type: DataTypes.ENUM('0','1'), // 0 = Servidor publico, 1 = Lider de trabajo
        allowNull: false,
    }
});

module.exports = {
    Administrador
}