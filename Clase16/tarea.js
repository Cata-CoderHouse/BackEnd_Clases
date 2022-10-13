const {options} = require('./config.js')
const knex = require('knex')(options)

async function batch(){
    try{
        await knex.schema.createTable('ecommerce',table=>{
            table.increments('id');
            table.string('nombre',15);
            table.string('codigo',10);
            table.float('precio');
            table.integer('stock')
        })
    }catch(err){
        console.log(err); 
        throw err
    }finally{
        knex.destroy()
    }

}
batch();