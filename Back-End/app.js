const express = require('express');
const app = express();
const PORT = 3000;

require('./route')(app);

app.listen(PORT, () => {
    console.log(`El servidor ha sido inicializado en http://localhost:${PORT}`);
});