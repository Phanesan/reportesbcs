// 127.0.0.1:3001/api/users

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

module.exports = router;