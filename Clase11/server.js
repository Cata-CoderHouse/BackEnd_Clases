const express = require('express');
const {Server: IOServer} = require('socket.io'); //los dos ptos renombran
const {Server: HttpServer} = require('http');

//Construyedo desde el lado del servidor
const app = express(); //instancio express
const httServer=new HttpServer(app); //instancio httpserver que funciona dentro de un servidor
const io = new IOServer(httServer); //llamo jttp


const port = 8000; //puerto
const server = httServer.listen(port,()=>{
    console.log(`listening on port ${server.address().port}`);
})

app.use(express.static('public')) //usar caprteta public

app.get('/',(req, res)=>{
    res.sendFile('index.html',{root:__dirname }) //index.html lo busca aca
})

io.on('connection',(socket)=>{
    console.log('an user connected');
    //console.log(socket);
    console.log(socket.id);
    socket.emit('saludo','Hola desde el servidor') //emitir mensaje desde el lado servidor
    
    //Escuchar eventorespuesta desde el lado del cliente
    socket.on('respuesta',(data)=>{
        console.log(data);
        io.sockets.emit('respuesta-server',arrayMensajes);
        arrayMensajes.push({socketId:socket.id, mensaje:data})
    })
    socket.on('disconnect',()=>{
        console.log('user disconnected');
    })
});

const arrayMensajes = []