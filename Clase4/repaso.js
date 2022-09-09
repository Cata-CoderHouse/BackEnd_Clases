// setTimeout(()=>{
//     //acciones

// }, //milisegundos)

// setInterval(()=>{
//     //acciones
//     console.log('Hola');
// }, 2000)

const delay = ret => { for ( let i = 0 ; i < ret * 3e6 ; i ++ ) ; }

function hacerTarea ( num ) {
    console.log ( ' haciendo tarea' + num )
    delay ( 1000 ) //el delay es sincronico, espera aterminarse para seguir
console.log ( ' inicio de tareas ' ) ;
hacerTarea ( 1 )
hacerTarea ( 2 )
hacerTarea ( 3 )
hacerTarea ( 4 )
console.log ( ' fin de tareas ')
console.log ( ' otras tareas . ' )
}                                               
///////////////////////// ii /////////////////////////////////////////////////////////////
function hacerTarea ( num , cb ) {
    console.log ( ' haciendo tarea' + num )
    setTimeout ( cb , 1000 )
}
                      //// 2.1.2 ///
console.log ( ' inicio de tareas ' ) 
hacerTarea ( 1 , ( ) => {
    hacerTarea ( 2 , ( ) => {
        hacerTarea ( 3 , ( ) => {
            hacerTarea ( 4 , ( ) => {
                console.log ( ' fin de tareas ' )
            } )
        } )
    } )
} )   
console.log('otras tareas');                              
