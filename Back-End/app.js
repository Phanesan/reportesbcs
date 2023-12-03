//  Imports
const express = require("express");
const { sequelize } = require('./db');

//  Path
const API = require('./routes/mainRoutes');

//  Config
const app = express();
const PORT = 3000;

async function Main() {
    try {

        await sequelize.sync({force: true})
        .then(() => {
            console.log('Tablas sincronizadas con exito');
        })

        //  Listen port
        app.listen(PORT, () => {
            console.log(`El servidor ha sido inicializado en http://localhost:${PORT}`);
        });

        //  Middlewares
        app.use('/api', API);

        //  Root path
        app.get('/', (req, res) => {
            res.json({response: 'Bienvenido a la API de reportes bcs'})
        })

    } catch (error) {
        console.log(error);
    }
}

Main();