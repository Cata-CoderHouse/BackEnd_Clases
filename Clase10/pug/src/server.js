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
//app.engine('pug', require('pug').__express)
app.set('views','./src/views') //ubicacion de la carpeta views
app.set('view engine','pug'); //nombre del motor de plantilla

//routers
app.get('/',(req, res) => {
    res.render('prueba.pug',{mensaje:'Bienvenido',nombre:'Luciano',apellido:'Hernandez',render:true})
    //primer par: lo que quiero renderizar y segundo par, los valores que quiero renderizar
})

const nombres =['cata','chad','juan']
app.get('/ciclos',(req, res) => {
    res.render('index',{
        nombres
    })
})

app.get('/datos',(req, res) => {
    const {max,min,value,title}=req.query
    res.render('medidor',{max,min,value,title}) //http://localhost:8082/datos?max=80&min=20&value=40&title=medidor
})
