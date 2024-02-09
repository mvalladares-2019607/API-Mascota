const { Schema, model} = require('mongoose');

const LoginSchema = Schema ({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio']
    }
});

module.exports = model('Login', LoginSchema);