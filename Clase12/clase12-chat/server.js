const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static('public'));

//mensajes guardados en las bdd
const arrayMensajes = [
    {author: 'Fede',text:'Hola!!',date:'2021-01-05- 10:00:00'},
    {author: 'Fedeg',text:'Hola!!',date:'2021-01-05- 10:00:00'},
    {author: 'Fedef',text:'Hola!!',date:'2021-01-05- 10:00:00'}
]

app.get('/',(req, res)=>{
    res.send('Hello world!');
})

httpServer.listen(4000,()=>{
    console.log('listening on 4000')
});

io.on('connection',(cliente)=>{
    console.log('onConection', cliente);
    cliente.emit('mensajes',arrayMensajes);

    cliente.on('new-message',(mensaje)=>{
        arrayMensajes.push(mensaje)
        cliente.emit('mensajes',arrayMensajes);
    })

})
