// 127.0.0.1:3001/api/users

// Imports
const { connection } = require('../db');

const list = async (req, res) => {
    let limit = req.query.limit;
    limit = parseInt(limit);

    if(!limit) {
        limit = 30;
    }

    try{
        const [rows] = await connection.query(`SELECT * FROM users LIMIT ?`, limit);
        return res.status(200).json(rows);
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    list
};