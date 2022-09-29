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

//ruta
const personas= [];
app.get('/',(req, res) => {
    res.render('pages/index',{personas})
})

app.post('/personas',(req, res) => {
    personas.push(req.body);
    res.redirect('/');
    console.log(req.body);
})



