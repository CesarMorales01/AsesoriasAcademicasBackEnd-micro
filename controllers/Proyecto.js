const { resp } = require('express');
const proyectoModel = require('../models/Proyectos');

const getProyecto = async (req, res = resp) => {
    try{
        console.log("Ambiente", process.env.CONTAINET_HOST)
        const proyectoBD = await proyectoModel.find()
        res.json(proyectoBD)
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

module.exports = { getProyecto}