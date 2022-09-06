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

console.log(objAleat);