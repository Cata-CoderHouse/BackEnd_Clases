//Ejercicios
//
//Punto 1 
function mostrarLista(...lista) //spread operator, ayuda que si no paso argumentos, no se rompe codigo
{
    if(lista.length===0)
    {
        console.log('Lista Vacia');
    } 
    else
    {
        console.log(lista);
    }
}
mostrarLista([])
mostrarLista([1,2,3])
mostrarLista() //sin args


let alumnos=['Luis','Chad'];
alumnos.push('Cata') //dos formas de agregar elementos a un arryay, con push y ...
alumnos=[...alumnos,"Pedro"]
alumnos=["Juan",...alumnos]
console.log(alumnos);

//Punto2
(function(lista)
{
    if(lista.length===0)
    {
        console.log('Lista Vacia');
    } 
    else
    {
        console.log(lista);
    }
}
)([5,7,8]);

(function(...lista)
{
    if(lista.length===0)
    {
        console.log('Lista Vacia');
    } 
    else
    {
        console.log(lista);
    }
}
)();

//punto3

function crearMultiplicador(a)
{
    return (b)=>{
        return a*b;
    };
}

const duplicar=crearMultiplicador(2)
console.log(duplicar(3)); // es el b

const triplicar=crearMultiplicador(3)
console.log(triplicar(5));