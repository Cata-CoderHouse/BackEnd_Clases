const saludar = (nombre, apellido, getNombre) => //un callback, una fn es parametro
{                                       //hoisting
    return getNombre(nombre, apellido);
}

function getNombre(nombre, apellido) {
    return `Mi nombre es ${nombre} ${apellido}`;
}

console.log(saludar('cata', 'hernandez', getNombre));