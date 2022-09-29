const { application } = require('express');
const express = require('express');

const app = express(); //instancia el express

app.use(express.json()); //para POST, si uso json
app.use(express.urlencoded({extended:true})); //para formularios 

let arrayMsg = [{id:1, msg:"Hola 1"},{id:2, msg:"Hola 2"},{id:3, msg:"Hola 3"}];

app.get('/',(req,res)=>{ //raiz de la url
    res.status(200).json({mensaje:'Hola Raiz'});//respondemos con un obj
});

app.get('/api/mensajes',(req,res)=>{ //en otra parte de la url
    console.log(req.query);
    const {nombre, apellido, dni} = req.query;
    
    if(nombre && apellido && dni){
    res.status(200).json({ //http://localhost:4000/api/mensajes?nombre=Cata&apellido=Hernandez
        mensaje:`Hola ${nombre} ${apellido}, con DNI: ${dni}`});//respondemos con un obj
        console.log(req.query); //trae metadata del get, localhost, header
    }
        

    res.status(400).json({mensaje:'No hay usuarios'}); //http://localhost:4000/api/mensajes
});

app.get('/api/arreglos/:id',(req,res)=>{ //en otra parte de la url
    const {id} = req.params;
    console.log(id);
    if(id){
        let msg = arrayMsg.find(mensaje => mensaje.id ==parseInt(id)).msg;
        res.status(200).json({
            mensaje: 'Mensaje encontrado',            
            msg
        })
    }    

});

//listen on port4000

app.listen(4000,err=>{
    if(err) console.log(err);
    console.log('Listening on port 4000');
});
    
//package-json -> nom init -y
//correr servidor nodemon server.js
//instalar paquetes para el dependency del pkg-json nom i nombrePqte     


app.post('/api/mensajes',(req,res)=>{ //en otra parte de la url
    console.log(req.body);
    const {nombre,email,pass}=req.body;
    res.json({
        mensaje: 'Mensaje POST recibido',
        nombre,
        email,
        pass
    })   

});

application.put('/api/mensajes/:id',(req,res)=>{
    console.log(req.body);
    console.log(req.params.id);

    res.json({
        mensaje: 'Mensaje PUT recibido'
    })
});

app.delete('/api/mensajes/:id',(req,res)=>{ //especifico id que quiero borrar
    console.log(req.params.id);

}); 