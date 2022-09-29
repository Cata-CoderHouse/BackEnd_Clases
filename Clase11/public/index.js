console.log('Holaaaaaaaaaaaaa');
//Este es el archivo del cliente del socket
const socket = io();

socket.on('saludo',(data)=>{ //detecta mensajes desde el servidor de tipo saludo, con el on
    console.log(data);
    socket.emit('respuesta','Hola desd el lado del client') //enviando
})

//Escucha el evento respuesta-server des lado del servidor
socket.on('respuesta-server',(data)=>{
    console.log(data);
}) //detecta mensajes desde el servidor)