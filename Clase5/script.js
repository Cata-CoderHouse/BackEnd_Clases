/*Desafios clase*/
/*Punto 1*/
aleatorio = _ => parseInt(1+(20-1)*Math.random());
//MathFloor redondea hacia abajo
arrAleat=[]
for (let i=0; i<1000;i++)
{
    arrAleat.push(aleatorio());
}
//console.log(arrAleat);
/*Punto 2*/
let cont;
let objAleat=[{}];
for (let i=1; i<=20;i++)
{
    cont=0;
    for (const p of arrAleat)
    {
        if(i==p)
        {
            cont++;
        }
    }
    objAleat.push({i:cont})
}

//console.log(objAleat);

const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
];

listaNombre='';
precioTotal=0;
cant=0;
for (const p of productos) {
    listaNombre += ' '+p.nombre;
    precioTotal+=p.precio;
    cant++;
}

//console.log(listaNombre);


/*Clase 5*/
//console.log(require('fs'));

