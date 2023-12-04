const webtoken = require('jsonwebtoken');
const dotenv = require('dotenv');
const { connection } = require('../db.js');

dotenv.config();

async function auth(req,res,next) {
    const rol = req.query.rol;
    const login = await haveCookie(req,rol);
    
    if(login) {
        return next();
    } else {
        return res.status(400).json({status:"error",message:"No tienes permiso"})
    }
}

async function haveCookie(req,rol) {
    let JSON_COOKIE;
    try {
        const COOKIE_JWT = req.headers.cookie.split("; ").find(cookie => cookie.startsWith("jwt")).slice(4)
        JSON_COOKIE = webtoken.verify(COOKIE_JWT,process.env.JWT_SECRET)
    } catch (error) {
        return false;
    }
    
    try{
        const ROLES = JSON_COOKIE.roles;
        for(i = 0; i < ROLES.length; i++){
            const [rows] = await connection.query('SELECT correo,rol FROM users_rols WHERE correo = ? AND rol = ?',[JSON_COOKIE.correo,ROLES[i].rol]);
            if(rows[0].rol == rol) {
                return true;
            }
        }
        
    } catch(error) {
        console.log(error);
        return false;
    }
    return false;
}

module.exports = {
    auth
}