const { Sequelize } = require('sequelize');

const DB = new Sequelize('mydb','root','root', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

module.exports = {
    // Inserta aqui el nombre de la constante
    // <nombre del modelo>
    DB
}

const { Test } = require('./models/testModel.js');
const { Reporte } = require('./models/reporteModel.js');
