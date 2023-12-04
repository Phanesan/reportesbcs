const { Sequelize } = require('sequelize');
const { createPool } = require('mysql2/promise.js');

//  CONFIG DATABASE
const HOST = '127.0.0.1';
const USER = 'root';
const PASSWORD = 'root';
const DATABASE = 'mydb';

const sequelize = new Sequelize(DATABASE,USER,PASSWORD, {
    host: HOST,
    dialect: 'mysql'
});

const connection = createPool({
    host: HOST,
    port: 3306,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
});

module.exports = {
    sequelize,
    connection
}

const { Reporte } = require('./models/reporteModel.js');
const { UsersRol } = require('./models/usersRolModel.js');
const { Materiales } = require('./models/materialesModel.js');
const { Trabajadores } = require('./models/trabajadoresModel.js');
const { Users } = require('./models/usuarioModel.js');
const { ListaMateriales } = require('./models/listaMaterialesModel.js');

//  Llaves foraneas
// Users - Trabajadores
Users.hasMany(Trabajadores, {
    foreignKey: 'correo',
    sourceKey: 'correo'
})

Trabajadores.belongsTo(Users, {
    foreignKey: 'correo',
    targetKey: 'correo'
});

// Users - Reporte
Users.hasMany(Reporte, {
    foreignKey: 'correo',
    sourceKey: 'correo'
})

Reporte.belongsTo(Users, {
    foreignKey: 'correo',
    targetKey: 'correo'
})

// ListaMateriales - Reporte
Reporte.hasMany(ListaMateriales, {
    foreignKey: 'id_reporte',
    sourceKey: 'id'
})

ListaMateriales.belongsTo(Reporte, {
    foreignKey: 'id_reporte',
    targetKey: 'id'
})

// ListaMateriales - Material
Materiales.hasMany(ListaMateriales, {
    foreignKey: 'id_material',
    sourceKey: 'id'
})

ListaMateriales.belongsTo(Materiales, {
    foreignKey: 'id_material',
    targetKey: 'id'
})

// Users - UsersRol
Users.hasMany(UsersRol, {
    foreignKey: 'correo',
    sourceKey: 'correo'
})

UsersRol.belongsTo(Users, {
    foreignKey: 'correo',
    targetKey: 'correo'
})