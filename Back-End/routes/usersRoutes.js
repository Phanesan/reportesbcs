// Imports
const express = require('express');
const { connection } = require('../db');
const router = express.Router();

//  ----------------------------------------------------------------------  //
// GET
router.get('/', async (req, res) => {
    let limit = req.query.limit;
    limit = parseInt(limit);

    if(!limit) {
        limit = 30;
    }

    const [rows] = await connection.query(`SELECT * FROM users LIMIT ?`, limit);
    res.json(rows);
});

// POST
router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.post('/', async (req, res) => {
    const data = req.body;
    const [rows] = await connection.query('INSERT INTO users(correo,nombre,apellido,password,curp,`createdAt`,`updatedAt`) VALUES (?,?,?,?,?,now(),now())',[
        data.correo,
        data.nombre,
        data.apellido,
        data.password,
        data.curp,
    ])
    res.status(200).json(data);
})


module.exports = router;