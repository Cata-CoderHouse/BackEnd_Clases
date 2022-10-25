const {Schema, model} = require('mongoose');

const usuarioSchema = new Schema({
    /*nombre: {type: String, required: true, maxLength: 100},
    apellido: {type: String, required: true, maxLength: [70, "ESTE APELLIDO ES MUY LARGO"]},
    email: {type: String, required: true, maxLength: 100},
    password: {type: String, required: true, maxLength: 100},
    */

    name:{
        type: String,
        required: true,
        max:100
    },
    apellido:{
        type: String,
        max:100
    },
    email:{
        type: String,
        max:100,
        unique: true,
        required: true
    },
    username:{
        type: String,
        max:100,
        unique: true,
        required: true
    },
    password:{
        type: String,
        max:100,
        required: true
    }
});

//importamos el modelo
module.exports = model('Usuarios', usuarioSchema); //1 nombre del modelo y 2 el esquema a usa rpara instanciarlo