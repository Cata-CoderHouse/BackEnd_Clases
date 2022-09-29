const { application } = require('express');
const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 3000;
app.listen(PORT,()=>{
    console.log('listening on port '+PORT);
})

//Variables de entorno, este archivo no se sube a git o bitbubket
app.use(express.static(__dirname+'/public')); //el static es un middleware para manipular los archivos estaticos, lo uso con .use

//Plantillas FJS (personalizado)
//Configuracion del motor de plantilla personalizado
app.engine('fjs', function(filePath,options,callback){
    fs.readFile(filePath,(err,contenido)=>{ //leer contenido
        if(err) throw new Error(err);
        const contenidoMoficado = contenido //reemp contenido con las options
            .toString()
            .replace('!!titulo1!!', options.titulo1) //Creando logica interna
            .replace('!!titulo2!!', options.titulo1)
            .replace('!!nombre!!', options.nombre)
            .replace('!!apellido!!', options.apellido)
        return callback(null,contenidoMoficado);
    })
})
app.set('views','./views'); //donde esta
app.set('view engine','fjs') //que hay (motor de plantillas)

app.get('/plantilla',(req,res)=>{
    const options = {
        titulo1: 'Primera plantilla perzonalizada',
        titulo2: 'FJS',
        nombre:'Catalina',
        apellido:'Perez'
    }
    res.render('./views/index.fjs', options)
})