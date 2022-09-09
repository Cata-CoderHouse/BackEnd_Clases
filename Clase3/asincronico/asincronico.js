const escribirArchivo = require('./escrArch.js');

console.log ( ' inicio del programa ' )
// el creador de esta funcion la definió
// como no bloqueante . recibe un callback que
// se ejecutará al finalizar la escritura .


escribirArchivo ( ' hola mundo ' , ( ) => {
  console.log ( ' terminé de escribir el archivo ' )
} )
console.log ( ' fin del programa ' )