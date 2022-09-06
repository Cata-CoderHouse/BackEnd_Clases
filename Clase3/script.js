//Debilente tipado
const funcion = function(a,b)
{
    return a+b;
}

//fuertemente tipado (typescript)
/*const funcion2 = function(a: Number,b: NUmber):NUmber
{
    return a+b;
}*/

//Arrown function
const sum1=(a,b) => { //sin return implicito
    return a+b;
}

const sum3=(a,b) => a+b; //puedo tener una sola linea, cuando el scope es 1 linea, retirno implicito


const sum2=b => {
    let a=1;
    return a+b;
}

const sum4= _ => { //fn sin parametros, puedo tener ()
    let a=1;
    let b=2;
    return a+b;
}

console.log(sum4());

const getPersona = _ => ({nombre:'juan',edad:30}) //los parentesis para mantener el return implicito
                                                //las llaves confunden con el scope y no el obj
console.log(getPersona());