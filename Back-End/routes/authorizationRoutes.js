// 127.0.0.1:3001/api/authorization

// Imports
const { connection } = require('../db');
const bcrypt = require('bcryptjs');
const webtoken = require('jsonwebtoken');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config();

// Functions
const help = (req,res) => {
    res.status(200).json({message: "Ruta de autorizacion.",loginRuta: "127.0.0.1:3001/api/authorization/login", registerRuta: "127.0.0.1:3001/api/authorization/register"});
}

const auth = async (req, res) => {
    res.json({status:"ok",message:"autenticacion aprobada"});
}

const login = async (req, res) => {
    const data = req.body;

    if(!data.correo || !data.password) {
        return res.status(400).json({status: "error", message: "Campos inexistentes. Los datos a enviar son 'correo' y 'password' en un json"});
    }

    try{
        const [rows] = await connection.query('SELECT * FROM users WHERE correo = ?',[req.body.correo]);
        if(rows.length == 0) {
            return res.status(400).json({status: "error", message: "Error en la autenticación, datos incorrectos."});
        }
        const isUser = await bcrypt.compare(data.password,rows[0].password);
        if(!isUser) {
            return res.status(400).json({status: "error", message: "Error en la autenticación, datos incorrectos."});
        }

        const [roles] = await connection.query('SELECT rol FROM users_rols WHERE correo = ?',[rows[0].correo]);

        const token = webtoken.sign({correo:rows[0].correo,roles:roles},process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRATION
        });

        const cookieOption = {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
            httpOnly: true
        }
        
        res.cookie('jwt',token,cookieOption);
        return res.status(200).json({status:"ok",message:"Usuario autenticado"});
    }catch(error){
        console.log(error);
        return res.status(400).json({status: "error", message: error});
    }
}

const register = async (req, res) => {
    const data = req.body;
    const salt = await bcrypt.genSalt(5);
    const hashPassword = await bcrypt.hash(req.body.password,salt)

    try {
        await connection.query('INSERT INTO users(correo,nombre,apellido,password,clave_lector,curp,`createdAt`,`updatedAt`) VALUES (?,?,?,?,?,?,now(),now())',[
            data.correo,
            data.nombre,
            data.apellido,
            hashPassword,
            data.claveElector,
            data.curp
        ])
        res.status(200).json({status: "ok"});
    } catch(error) {
        res.status(400).json({status: "error", message: error.sqlMessage});
    }
    
}

module.exports = {
    help,
    auth,
    login,
    register,
};  