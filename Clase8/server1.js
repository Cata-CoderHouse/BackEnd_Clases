const express = require('express');
const app = express();

const { json } = express; // lo mismo 4 5, permite mandar o recibir json con post y put
app.use(json()); //sin linea 4 app.use(express.json());

const { Router } = express; //import Router
const router = Router(); //permite individualizar rutas
const cookieParser = require('cookie-Parser');

//listen to port 4000
app.listen(4000,()=>{
    console.log('Listening on port 4000');
});

app.use('/static',express.static(__dirname+'/public')); //para almacenar archivos, por ej index.html y toma la rota absoluta hasta clse8/public 
//app.use(express.static('public')) lo hace publico;
app.use(cookieParser());
//forma anterior
/*
app.get('/',(req,res)=>{
    //res.send('Hello world')
})
*/


/////////////////////////////usuarios///////////////////////////////// crearlo en otro archivo
router.get('/',(req,res)=>{ //router.get('/',fn,(req,res) otro parametro toma la fn que es middleware que es una fn intermedia qque se ejecuta antes de la eticion y si esta bn, continua al req
    //console.log(__dirname);
    console.log(req.id);
    res.json('get raiz')
    }); //creando una capa adicional

router.post('/',(req,res)=>{
    res.json('post usuarios')
    }); //creando una capa adicional

////////////////////////////////declarar uns fn middleware//////////////////

const middle = (req,res, next) =>{
    console.log(req.params);
    req.id=1;
    console.log('soy un middleware de ruta');
    next()
}

////////////////////////////////carrito///////////////////////////////////////
app.use((err,req,res,next)=>{ //next es una fn que continua le proceso, la ruta middle-> llama la fn middle
    //console.log('middleware');
    //next();
    console.error(err.stack); //con error
    res.status(500).send('Something broke!');
}); //

app.use('/api/usuario',middle,router); //use-> usame en esta ruta esta config
app.use('/',router);
app.get('/api/carrito',(req,res)=>{
    res.send('Hello car');
});


