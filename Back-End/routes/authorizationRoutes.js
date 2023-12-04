// 127.0.0.1:3001/api/authorization

// Imports
const express = require('express');
const { connection } = require('../db');
const bcrypt = require('bcryptjs');
const webtoken = require('jsonwebtoken');
const dotenv = require('dotenv');
const perms = require('../middlewares/authorization.js');
const router = express.Router();

dotenv.config();

router.get('/',(req,res) => {
    res.status(200).json({message: "Ruta de autorizacion.",loginRuta: "127.0.0.1:3001/api/authorization/login", registerRuta: "127.0.0.1:3001/api/authorization/register"});
})

//  MIDDLEWARES
router.use(express.json());
router.use(express.urlencoded({extended:true}));

//  METHOD POST
router.post('/login',login);
router.post('/register',register);

router.use(perms.confirmAdmin)

router.post('/auth',auth)

// Functions

async function auth(req, res) {
    const rol = req.query.rol;
}

async function login(req, res) {
    const data = req.body;

    if(!data.correo || !data.password) {
        return res.status(400).json({status: "error", message: "Campos inexistentes. Los datos a enviar son 'correo' y 'password' en un json"});
    }

    try{
        const [rows] = await connection.query('SELECT * FROM users WHERE correo = ?',[req.body.correo]);
        if(rows.length == 0) {
            return res.status(400).json({status: "error", message: "Error en la autenticación, datos incorrectos.1"});
        }
        const isUser = await bcrypt.compare(data.password,rows[0].password);
        if(!isUser) {
            return res.status(400).json({status: "error", message: "Error en la autenticación, datos incorrectos.2"});
        }

        const token = webtoken.sign({correo:rows[0].correo},process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRATION
        });

        const cookieOption = {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000)
        }

        res.cookie('jwt',token,cookieOption);
        res.status(200).json({status:"ok",message:"Usuario autenticado"});
    }catch(error){
        console.log(error);
        return res.status(400).json({status: "error", message: error});
    }
}

async function register(req, res) {
    const data = req.body;
    const salt = await bcrypt.genSalt(5);
    const hashPassword = await bcrypt.hash(req.body.password,salt)

    try {
        await connection.query('INSERT INTO users(correo,nombre,apellido,password,curp,`createdAt`,`updatedAt`) VALUES (?,?,?,?,?,now(),now())',[
            data.correo,
            data.nombre,
            data.apellido,
            hashPassword,
            data.curp,
        ])
        res.status(200).json({status: "ok"});
    } catch(error) {
        res.status(400).json({status: "error", message: error.sqlMessage});
    }
    
}

module.exports = router;