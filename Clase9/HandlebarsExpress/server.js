const { application } = require('express');
const express = require('express');
const hbs = require('express-handlebars');
const app = express();

//Para el hds
app.set('views','./views');
app.set('view engine','hbs');


//La carpeta views  tiene dos subcarpetas obligatorias layouts(plantillas reutilizables generales - cascaron base) 
//y partials (posee bloques de codigo que quisiera repetir en varios lugares) y el index.hbs me dice como incrustar la info de los layouts

const PORT = 3000;
app.listen(PORT,()=>{
    console.log('listening on port '+PORT);
})



//enlazar hds con el app
app.engine('hbs',hbs.engine({
    extname:'.hbs', // opcional, la extension de los archivos handlerbars
    partialsDir:__dirname+'/views/partials', //estos tres obligatorsos
    layoutsDir:__dirname+'/views/layouts',
    defaultLayout: 'layout1.hbs' //cual tomar y que me diga donde incrustar
}));

app.get('/',(req, res)=>{
    res.render('index') //El index se incrusta al default:layout1.hbs
})

app.get('/prueba',(req, res)=>{
    const {nombre, apellido} = req.query;
    //res.render('main',{layout:'layout2.hbs'}) //No el layout por default, sino uno en particular
    res.render('main',{layout:'layout2.hbs',nombre, apellido, render:true}) //http://localhost:3000/prueba?nombre=cata&apellido=hernandez
})