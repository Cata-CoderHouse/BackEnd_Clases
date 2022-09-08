const http = require('http');
const moment =  require('moment');

//Servidor por pasos(Recomendadod)
//1. Configuramos la funcionaldad de lo que escucha y lo que responde
const server = http.createServer((peticion, respuesta)=>{//Crear servidor, crear callback de tipo flecha, la callback con dos parametros peticion y respuesta
    console.log(peticion); //muestra metadata
    //respuesta.end('<h1>Hola mundo</h1>'); //para terminar la petcion y enviarle datos al cliente
    //respuesta.setHeader('Content-Type','text/plain') // otros ejemplos de tipos de respuesta
    respuesta.statusCode = 200;
    
    const hora = parseInt(moment().format('HH:mm:ss'));
    console.log(hora);
    if(hora >= 6 && hora <=12)
        respuesta.end('<h1>Buenos dias</h1>');
}); 

//2. Configuramos el puerto
const port = 8080;
const connectServer = server.listen(port,() => {
    console.log(`Servidor corriendo en el puerto ${server.address().port}`);
})

//ejercicio hora
// new Date() o usar Date