const express = require('express');
const app = express();

//Puerto
const PORT = 8082;
app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`);
})

//definir cosas a usar automatically
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Para cualquier motor de plantilla: propio o tercero, se deben definir los sets
app.set('views','./src/views') //ubicacion de la carpeta views
app.set('view engine','ejs'); //nombre del motor de plantilla

const usuarios = [
    {
        nombre: 'Juan',
        apellido: 'Hernandez'
    },
    {
        nombre: 'Cata',
        apellido: 'Hernandez Ch'
    },
    {
        nombre: 'Kathe',
        apellido: 'Hernandez Ca'
    }
]

app.get('/',(req,res) => {
    res.render('pages/index',{nombre:'cata',render:true, usuarios})
})


