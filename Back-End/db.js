const Sequelize = require('sequelize');
const testModel = require('./models/testModel');

const DB = new Sequelize('mydb','root','root', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

//  --------------------------------------------------------------------    //
//                                  Models                                  //
//  Los modelos seran importados aqui, en la siguiente linea esta un        //
//  ejemplo. (lo que esta entre <> se modifica)                             //
//  const <nombre del modelo> = <nombre del archivo del modelo>(DB, Sequelize);

//  --------------------------------------------------------------------    //
DB.sync({force: false})
    .then(() => {
        console.log('Tablas sincronizadas con exito');
    })
    .catch(() => {
        console.error('Hubo un problema al sincronizar las tablas');
    })

module.exports = {
    // Inserta aqui el nombre de la constante
    // <nombre del modelo>
}