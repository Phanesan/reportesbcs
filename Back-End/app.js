//  Imports
const express = require("express");

//  Path
const API = require('./routes/mainRoutes');

//  Config
const app = express();
const PORT = 3000;

require('./db');

//  Middlewares
app.use('/api', API)

//  Root path
app.get('/', (req, res) => {
    res.send("Bienvenido a la API de reportes bcs")
})

//  Listen port
app.listen(PORT, () => {
    console.log(`El servidor ha sido inicializado en http://localhost:${PORT}`);
});