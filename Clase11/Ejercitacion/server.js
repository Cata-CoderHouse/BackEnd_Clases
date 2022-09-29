const express = require('express');
const app = express();

const {Server: IOServer} = require('socket.io'); //los dos ptos renombran
const {Server: HttpServer} = require('http');

//Construyedo desde el lado del servidor
const httServer=new HttpServer(app); //instancio httpserver que funciona dentro de un servidor
const io = new IOServer(httServer); //llamo jttp

const port = 4000;
app.listen(port,()=>{
    console.log("port: " + port);
});

app.get('/',(req, res)=>{
    res.sendFile('indexEj.html',{root:__dirname }) //index.html lo busca aca
})

io.on('connection',(socket)=>{
    console.log('an user connected');
    
    //Escuchar eventorespuesta desde el lado del cliente
    socket.on('respuesta',(data)=>{
        console.log(data);
        io.sockets.emit('respuesta-server',arrayMensajes);
        arrayMensajes.push({socketId:socket.id, mensaje:data})
    })

});

const arrayMensajes = []