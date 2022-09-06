console.dir('hola');
console.log(1);
console.log(undefined);
console.dir({id:1, nombre:'jhon'})
console.warn('Warn: Clase CH')

let nombre='cata'
console.log(typeof nombre);

let nombre1=undefined
console.log(typeof nombre1);

let campoDate = new Date()
console.log(campoDate);
console.log(typeof campoDate);

let objNombre = new String('Cata')
console.log(objNombre);
console.log(typeof objNombre);

let nombreN= 'Fede'
{
    //Otro scope
    let nombreN='Juan'
    console.log(nombreN);
}
console.log(nombreN);
nombreN='Lucas';
console.log(nombreN);

//const mutable con objs y arrays
const nombreO= {nombre:'Fede'}
console.log(nombreO.nombre);
nombreO.nombre = 'cata'
console.log(nombreO.nombre);
