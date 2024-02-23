const { Schema, model} = require('mongoose');

const MascotaSchema = Schema ({
    nombre: {
        type: String, 
        required: [true, 'El nombre es indispensable']
    },
    raza: {
        type: String, 
        required: [true, 'La raza es indispensable']
    }, 
    edad: {
        type: String, 
        required: [true, 'La edad es indispensable']
    }, 
    color: {
        type: String, 
        required: [true, 'El color es necesario']
    }, 
    tamaño: {
        type: String, 
        required: [true, 'El tamaño es necesario']
    },
    estado:{
        type: Boolean,
        default: true
    }
});

module.exports = model('Mascota', MascotaSchema);