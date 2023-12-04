// 127.0.0.1:3001/api/authorization

// Imports
const express = require('express');
const { connection } = require('../db');
const router = express.Router();

router.get('/',(req,res) => {
    res.status(200).json({message: "Ruta de autorizacion.",loginRuta: "127.0.0.1:3001/api/authorization/login", registerRuta: "127.0.0.1:3001/api/authorization/register"});
})

//  MIDDLEWARES
router.use(express.json());
router.use(express.urlencoded({extended:true}));

//  METHOD POST
router.post('/login',login);
router.post('/register',register);

// Functions

async function login(req, res) {

}

async function register(req, res) {
    const data = req.body;
    try {
        const [rows] = await connection.query('INSERT INTO users(correo,nombre,apellido,password,curp,`createdAt`,`updatedAt`) VALUES (?,?,?,?,?,now(),now())',[
            data.correo,
            data.nombre,
            data.apellido,
            data.password,
            data.curp,
        ])
    }catch(error) {
        console.log(error);
    }
    
    res.status(200).json(data);
}

module.exports = router;