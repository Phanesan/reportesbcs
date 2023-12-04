const { DataTypes } = require("sequelize")
const { sequelize } = require('../db');

const UsersRol = sequelize.define('users_rol', {
    rol: {
        type: DataTypes.TINYINT, // 3 = Servidor publico, 2 = Lider de trabajo, 1 = Empleado, 0 = Usuario
        primaryKey: true,
        allowNull: false,
    }
});

module.exports = {
    UsersRol
}