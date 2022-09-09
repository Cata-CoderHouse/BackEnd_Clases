// //Sincronico
// console.log(1);
// console.log(2);
// console.log(3);

// //acsincronico, setTimeOut, com primer param es una callback con segund param el tiempo
//Nobloqueante
// console.log ( ' 1 ' )
// console.log ( ' 2 ' )
// setTimeout (() => {
//     console.log ( ' 3 ' )
//   },  1000 )
// console.log ( ' 4 ' ) 

//codigo bloqueante
function funcA() { //sincronico
    console.log ( " 1 " )
    funcB() //se para/corta el hilo de ejecucion y llama funcB que esta abajo, hasta que funcB termine
    console.log ( " 2 " )
}
function funcB() {
    console.log ( " 3 " )
    funcC() //paar y ejecuta funcC
    console.log ( " 4 " )
}
function funcC() {
    console.log( " 5 " )
}
funcA()