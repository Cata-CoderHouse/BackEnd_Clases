class Cliente
{
    constructor(nombre, fecha, direccion)
    {
        this.nombre=nombre;
        this.fecha=fecha;
        this.direccion=direccion;
    }

    mostrarDatos()
    {
        return 'nombre": '+this.nombre+" direccion: "+this.direccion;
    }
}



let miObjeto= new Cliente("Chad","30-06-1995","Alcala Envigado")
console.log(miObjeto);
console.log(miObjeto.nombre);
console.log(miObjeto.mostrarDatos());
