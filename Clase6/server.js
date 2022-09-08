const express = require('express')
const moment =  require('moment');
console.log(express);

const app = express();

//Ejercicio diap 24
app.get('/inicio',(req,res)=>{ // '/' seria el localhost o raiz, o ruta que se obtiene, y get obtengo esa url
    //res.send({mensaje:'Hola mundo'});
    res.send('<h1 style="color:blue;">Bienvenidos al servidor express</h1>');
})

let cuantos = 0;
app.get('/visitas',(req,res)=>{
    cuantos++;
    res.send(`La cantidad de visitas es ${count}`);
})

app.get('/fyh',(req,res)=>{
    const hora = parseInt(moment().format('HH:mm:ss'));
    res.send(hora);
}).on('error',(err)=>console.log(err))

//app.get('/sesion') asi puedo crear diferentes sesiones 

const port=4000;
const server = app.listen(port,()=>{
    console.log(`Listening on port ${server.address().port}`);
})//.on para llamar el metodo

server.on('error',(err)=>console.log(err))

