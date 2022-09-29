// Dada la siguiente constante: const frase = 'Hola mundo cómo están'
// Realizar un servidor con API Rest usando node.js y express que contenga los siguientes endpoints get:

// 1) '/api/frase' -> devuelve la frase en forma completa en un campo ‘frase’.
// 2) '/api/letras/:num  -> devuelve por número de orden la letra dentro de esa frase (num 1 refiere a la primera letra), en un campo ‘letra’.
// 3) '/api/palabras/:num  -> devuelve por número de orden la palabra dentro de esa frase (num 1 refiere a la primera palabra), en un campo ‘palabra’.


const express = require('express');
const app= express();

//listen on port8000

app.listen(8000,err=>{
    if(err) console.log(err);
    console.log('Listening on port 8000');
});

const frase = 'Hola mundo, cómo estas';
const arregloFrase = frase.split("");
const arregloFrasePalabra = frase.split(" ");

app.get('/api/frase',(req,res)=>{
    res.status(200).json({frase});
})

app.get('/api/letras/:id',(req,res)=>{
    const {id} = req.params;
    console.log(id);
    if(id){
        let letra= arregloFrase[id-1];
        res.status(200).json({
            letra
        })
    }    
})

app.get('/api/palabras/:id',(req,res)=>{
    const {id} = req.params;
    console.log(id);
    if(id){
        let palabra= arregloFrasePalabra[id-1];
        res.status(200).json({
            palabra
        })
    }    
})



