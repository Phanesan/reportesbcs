const { connection } = require('../db');

const addReport = async (req,res) => {
    const data = req.body;
    console.log(data);
    
    try {
        if(data.pruebas) {
            await connection.query('INSERT INTO reportes(correo,ubicacion,tipo,imagen_video,comentarios,`createdAt`,`updatedAt`) VALUES(?,?,?,?,?,now(),now())',[data.correo,data.ubicacion,data.tipo,data.pruebas,data.comentarios])
        } else {
            await connection.query('INSERT INTO reportes(correo,ubicacion,tipo,comentarios,`createdAt`,`updatedAt`) VALUES(?,?,?,?,now(),now())',[data.correo,data.ubicacion,data.tipo,data.comentarios])
        }

        res.status(200).json({success:"ok"})
    } catch (error) {
        console.log(error)
        res.status(400).json({success:"failed",message:error})
    }
}

const deleteReport = async (req,res) => {
    const data = req.query.id;
    //console.log(data);
    try {
        const result = await connection.query('DELETE FROM `reportes` WHERE `id`= ?',[data])
        if(result[0].affectedRows <= 0) {
            return res.status(400).json({success:"failed",message:"No encontro ninguna coincidencia para eliminar"})
        }
        return res.status(200).json({success:"ok"})
    } catch(error) {
        return res.status(400).json({success:"failed",message:error})
    }
} 

const searchReport = async (req,res) => {
    const data = req.query.id;
    console.log(data);
    try {
        let result;
        if(data == undefined) {
            result = await connection.query('SELECT * FROM reportes')
        } else {
            result = await connection.query('SELECT * FROM reportes WHERE id= ?',[data])
        }
        console.log(result[0][0]);
        if(!result[0][0]) {
            return res.status(400).json({success:"failed",message:"No encontro ninguna coincidencia"})
        }
        return res.status(200).json(result[0]);
    } catch(error) {
        return res.status(400).json({success:"failed",message:error})
    }
}

const editReport = async (req,res) => {
    const id = req.query.id;
    const data = req.body;

    try {
        const result = await connection.query('UPDATE reportes SET ubicacion=?,tipo=?,imagen_video=?,comentarios=?,updatedAt=now() WHERE `id`=?',
        [data.ubicacion,
        data.tipo,
        data.pruebas?data.pruebas:null,
        data.comentarios,
        id]);

        if(result[0].affectedRows <= 0) {
            return res.status(400).json({success:"failed",message:"No encontro ninguna coincidencia para actualizar"})
        }
        return res.status(200).json({success:"ok"})
    }catch(error) {
        return res.status(400).json({success:"failed",message:error})
    }
}

module.exports = {
    addReport,
    deleteReport,
    searchReport,
    editReport
};



//ola