//  Imports
const express = require("express");
const cors = require('cors');
const { sequelize } = require('./db');

//  Config
const app = express();
const PORT = 3001;

const api = require('./routes/mainRoutes');

async function Main() {
    try {
        
        await sequelize.sync({force: false})
        .then(() => {
            console.log('Tablas sincronizadas con exito');
        })
        
        //  Listen port
        app.listen(PORT, () => {
            console.log(`El servidor ha sido inicializado en http://localhost:${PORT}`);
        });
        
        //  Middlewares
        app.use(cors());
        app.use(express.json())
        app.use(express.urlencoded({extended:true}))
        
        //  Root path
        app.get('/', (req, res) => {
            res.json({response: 'Bienvenido a la API de reportes bcs'})
        })

        app.use('/api',api.router);
        
    } catch (error) {
        console.log(error);
    }
}

Main();