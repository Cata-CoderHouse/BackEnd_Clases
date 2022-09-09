//funcionalodades fs sincronicas

// const { createCipheriv } = require('crypto');
const { log } = require('console');
const fs = require('fs');
// const { readFile } = require('fs/promises');

// // const fecha = new Date();

// //console.log(fs);
// //fs.writeFileSync('./data1.txt','aca hay contenido \n'+fecha,'utf8') //si no existe lo crea
// //fs.appendFileSync('./data1.txt','aca hay contenido agregado \n','utf8') //si no existe, lo crea, si existe, agrega
// //fs.unlinkSync('data1.txt') //borra el archvo

// // try {
// //     const data = fs.readFileSync('data.txt','utf8');
// //     console.log(data);
// // }catch(error){
// //     console.log(error);
// // }


// //funcionalodades fs asincronicas
// //Mismo nombre sin Sync

// fs.readFile('data.txt','utf8',(err, data)=>{
//     if (err){ //eror: no existe el archivo
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// fs.writeFile('data.txt','nuevo archivo y contenido \n','utf-8',(err)=>{
//     if (err){ 
//         console.log(err);
//     }else{
//         console.log('archivo creado');
//     }
// })

// fs.appendFile('data.txt','agregando contenido','utf-8',err=>{
//     if (err){ 
//         console.log(err);
//     }else{
//         console.log('contenido agregado');
//     }
// })

// fs.unlink('data11.txt',err=>{
//     if (err){
//         console.log(err);
//     }else{
//         console.log('archivo eliminado');
//     }
// })

// //otras funciones

// fs.mkdir('./folder1', err => {//tambien mkdirSync
//     if (err)
//     {
//         console.log(err);
//     } else{
//         console.log('creando carpeta');
//     }
// }) 

// fs.readdir('./folder1',(err, data) => {
//     if (err){
//         console.log(err);
//     }else{
//         console.log(data); //retorna arreglo con nombres de archivos dentro de el
//     }
// })


// fs con promesas


const leerArchivo = async() => {

    // fs.promises.readFile('./data.txt','utf8') //la promesas retorna algo por el resolve
    // .then(contenidoArchivo => { //guarda el cont del archivo
    //     console.log(contenidoArchivo)})
    // .catch(err => console.log(err));

    try {  //Crea el archivo
        await fs.promises.writeFile ( './data.txt' , 'Creando contenido','utf-8' ); //await para que se comporte bloqueante
        console.log('archivo creado');
    }catch(err){
        console.log(err);
    }

    try {
        const contenidoArchivo = await fs.promises.readFile ( './data.txt' , 'utf-8' ); //await para que se comporte bloqueante
        console.log(contenidoArchivo);
    } catch ( error ) {
        console.log ( error )
    }

    try {
        const contenidoArchivo = await fs.promises.appendFile( './data.txt' , 'agregando contenido','utf-8' ); //await para que se comporte bloqueante
        console.log('archivo agregado');
    } catch ( error ) {
        console.log ( error )
    }

    try{
        await fs.promises.rename('./data.txt','./nuevoData.txt')
    } catch (err) {
        console.log(err);

    }

    
}
        
leerArchivo ( )