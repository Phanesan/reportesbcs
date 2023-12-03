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
const { Administrador } = require('./models/administradorModel.js');
const { Materiales } = require('./models/materialesModel.js');
const { Trabajadores } = require('./models/trabajadoresModel.js');
const { Users } = require('./models/usuarioModel.js');
