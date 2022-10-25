const mongoose = require('mongoose');
const Usuarios = require('./models/usuarios.model');

class Server{
    constructor(){
        this.connect();
    }

connect(){ //async function CRUD( //CRUD();
    try {
        const URL= 'mongodb://localhost:27017/ecommerce';
        mongoose.connect(URL, { //await 
            useNewUrlParser: true, 
            useUnifiedTopology: true});
        console.log('Conectado a la base de datos');

        }catch(error){
            console.log('Error al conectar a la base de datos');    
        }
    }


    //crear un nuevo usuario
    async createUser(user){
        try{
            const newUser= new Usuarios(user);
            await newUser.save(); 
            console.log('Usuario creado');
        }catch(error){
            console.log('Error al crear el usuario');
        }
    }

    //obtener todos los usuarios
    async getUsers(){
        try{
            const users= await Usuarios.find();
            console.log(users);
            return users;
        }catch(error){
            console.log('Error al obtener los usuarios');
        }
    }

    //update an user
    async updateUser(id, user){
        console.log('Actualizando usuario')
        await Usuarios.updateOne({nombre:'Juan'},{$set:{nombre:'Marcos'}})
    }

    async deleteUser(){
        console.log('Actualizando usuario')
        await Usuarios.deleteOne({nombre:'Juan'})
    }
}
const server = new Server();
server.createUser({nombre: 'Juan', apellido: 'Perez', email: 'juan@perez.com', username: 'juanperez', password: '123456'});
server.getUsers();
server.updateUser();

///HASTA LAS 9:25