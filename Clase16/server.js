console.log('Hola server')

//1 realizo el config,js

//2

const {options} = require('./config.js')
const knex = require('knex')(options.mysql)
const knexsqlite = require('knex')(options.sqlite)


knexsqlite.schema.createTable('autossqlite', table => { //nombre de la tabla y una callback, table instancia la tabla
    table.increments('id') //se autocrea e incrementa solo
    table.string('marca')
    table.string('modelo')
    table.integer('anio')
})
.then(()=>console.log('tabla creada'))
.catch((err) =>{console.log(console.log(err)); throw err})
.finally(()=>knex.destroy()) //destruye la conexion


/*
knex.schema.createTable('autos', table => { //nombre de la tabla y una callback, table instancia la tabla
    table.increments('id') //se autocrea e incrementa solo
    table.string('marca')
    table.string('modelo')
    table.integer('anio')
})
.then(()=>console.log('tabla creada'))
.catch((err) =>{console.log(console.log(err)); throw err})
.finally(()=>knex.destroy()) //destruye la conexion
*/

/*(async () => {
   try {
         await knex.schema.createTable('cars', table => {
           table.increments('id');
             table.string('name');
             table.integer('price');
         });
         console.log('Table cars created');
     } catch (err) {
         console.log(err);
     } finally {
         knex.destroy();
     }
 })();
*/

// array de automoviles
const autosl = [
    { marca: 'Ford', modelo: 'Fiesta', anio: 2019 },
    { marca: 'Ford', modelo: 'Focus', anio: 2018 },
    { marca: 'Ford', modelo: 'Ka', anio: 2017 },
    { marca: 'Ford', modelo: 'Fusion', anio: 2016 },
    { marca: 'Ford', modelo: 'Mustang', anio: 2015 },
    { marca: 'Ford', modelo: 'Ranger', anio: 2014 }
]
/*
//const insertProducto = producto=>{
    knex('autos').insert(autosl)
    .then(()=>console.log('Registrs insertados'))
    .catch((err)=>{console.log(err); throw err})
    .finally(()=>knex.destroy());
//    }
    
console.log('select *  from autos')
    knex('autos').select('*') //select *  from autos
    .then((data)=>console.log(data)) //data[1]
    .catch((err)=>{console.log(err); throw err})
    .finally(()=>knex.destroy());

    console.log('select *  from autos where marca = "toyota"')
    knex.from('autos').select('modelo','anio').where('modelo','=','Fiesta')//select *  from autos where marca = 'toyota'
    .then((data)=>console.log(data)) //data[1]
    .catch((err)=>{console.log(err); throw err})
    .finally(()=>knex.destroy());

    console.log('select *  from autos where anio >= "2019" order by anio desc')
    knex.from('autos').select('modelo','anio').where('anio','>=',2019).orderBy('anio','desc') //asc desc //select *  from autos where marca = 'toyota'
    .then((data)=>console.log(data)) //data[1]
    .catch((err)=>{console.log(err); throw err})
    .finally(()=>knex.destroy());

//actualizando los registros
knex('autos').where('modelo','Fiesta').update({anio:2023})
.then(()=>console.log('tabla actualizada')) //data[1]
    .catch((err)=>{console.log(err); throw err})
    .finally(()=>knex.destroy());

//borrando registros
knex('autos').where('modelo','Fiesta').del()
.then(()=>console.log('registro eliminado')) //data[1]
.catch((err)=>{console.log(err); throw err})
    .finally(()=>knex.destroy());

    //borrar todo
    knex('autos').del()
    .then(()=>console.log('registro eliminado')) //data[1]
    .catch((err)=>{console.log(err); throw err})
        .finally(()=>knex.destroy());
*/
/*
async function batch(){
    try{
        /*
        await knex.schema.createTable('cars', table => {
            table.increments('id');
            table.string('name');
            table.integer('price');
        });
        console.log('Table cars created');
        
        console.log('inserte registros, cantidad de registros de la tabla')
        const productos = await knex('autos').insert(autosl)
        console.log(productos) 

        //leer todo
        console.log('select *')
        const todos = await knex.select('*').from('autos')
        console.log(todos)

        console.log('select modelo, anio  from autos where anio >= "2019" order by anio desc')
        const data = await knex.from('autos').select('modelo','anio').where('anio','>=',2019).orderBy('anio','desc')
        console.log(data)

    }
    catch(err){
        console.log(err); 
        throw err
    }finally{
        knex.destroy()
    }
}

batch();
*/