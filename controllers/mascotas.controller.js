const { response, json } = require('express');
const Mascota = require('../models/mascotas');

const mascotasGet = async (req, res = response) =>{
    const { limite, desde } = req.query;
    const query = { estado: true};

    const [total, mascotas] = await Promise.all([
        Mascota.countDocuments(query),
        Mascota.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.status(200).json({
        total, 
        mascotas
    });
}

const getMascotaByid = async (req, res) => {
    const { id } = req.params; 
    const mascota = await Mascota.findOne({_id: id});

    res.status(200).json({
        mascota
    })
}

const mascotasPut = async (req, res) => {
    const { id } =  req.params; 
    const { _id, nombre, raza, edad, color, tamaño} = req.body;
    
    await Mascota.findByIdAndUpdate(id, resto);
    const mascota = await Mascota.findOne({_id: id})

    res.status(200).json({
        msg: 'Se han actualizado correctamente los datos de la mascota', 
        mascota
    });
}
const mascotasDelete = async(req, res) => {
    const {id} = req.params;
    await Mascota.findByIdAndUpdate(id,{estado: false});
    const mascota = await Mascota.findOne({_id: id});

    res.status(200).json({
        msg: 'Los datos de la mascota se han eliminado correctamente',
        mascota
    });
}
const mascotasPost = async (req, res) =>{
    const {nombre, raza, edad, color, tamaño} = req.body;
    const mascota = new Mascota({nombre, raza, edad, color, tamaño});
    await mascota.save();
    res.status(200).json({
        mascota
    });
}

module.exports = {
    mascotasGet,
    getMascotaByid,
    mascotasPut, 
    mascotasDelete,
    mascotasPost
}