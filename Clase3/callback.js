const saludar = (nombre, apellido, getNombre) => //un callback, una fn es parametro
{                                       //hoisting
    return getNombre(nombre,apellido);
}

function getNombre(nombre,apellido)
{
    return `Mi nombre es ${nombre} ${apellido}`;
}

console.log(saludar('cata','hernandez',getNombre));

/*---------------------------------------*/

const ejecutar = unaFuncion => unaFuncion();

const saludo = _=>console.log('Hola');

ejecutar(saludo);

ejecutar(() => console.log('Hola'));//el calback puede ser el cuerpo de la fn //fn anonma y flecha

/*----*/

const ejecutar1 = (nombre,unaFuncion) => unaFuncion(nombre);

const saludo1 =(nombre)=>console.log(nombre);

ejecutar1('Cata',saludo1);