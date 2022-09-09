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

const ejecutar2 = (nombre,unaFuncion) => {
    //acciones
    unaFuncion(nombre);
}

const saludo1 =(nombre)=>console.log(nombre);

ejecutar1('Cata',saludo1);

//ejemplo de callback

function escribirYLoguear(texto, callbackPararLoguear)
{
    //simular escrbir archivo
    console.log(texto);
    //al finalizar, ejecutamos la callback
    callbackPararLoguear('archivo escrito con exito')
}

//callback para loguear
const funcParametro = (mensajeParaLoguear) => { //esta es la callback
    const fecha = new Date().toLocaleDateString();
    console.log(`${fecha}: ${mensajeParaLoguear}`);
}
const texto = 'ejemplo callback'
escribirYLoguear(texto, funcParametro);

//otro ejemplo
const operacion = (num1,num2,callback)=>{
    return callback(num1,num2)
}

const suma = (num1,num2) => num1+num2;
const resta = (num1,num2) => num1-num2;
const multiplicacion = (num1,num2) => num1*num2;
const div = (num1,num2) => num1/num2;

console.log(operacion(1,3,suma)); 
console.log(operacion(1,3,resta)); 
console.log(operacion(1,3,multiplicacion)); 
console.log(operacion(1,3,div)); 