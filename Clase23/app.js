const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const cookiesRoutes = require('./src/routes/cookies/cookies.routes');
const sessionRoutes = require('./src/routes/session/session.routes')
require('dotenv').config()


const app = express();
const PORT = process.env.PORT || 3000;


//const {Router} = require('express');
//const router=Router();

app.use(cookieParser(process.env.SECRET_KEY_COOKIE));
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}));

//session
app.use(session({
    secret: process.env.SECRET_KEY_SESSION,
    resave: true,
    saveUninitialized: true
}))

app.use('/cookies',cookiesRoutes);
app.use('/session',sessionRoutes)

module.exports = app;




/*

app.use(cookieParser());
app.get(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//puertos
app.listen(PORT,()=>{
    console.log(`Server corriendo en `+PORT);
})

//rutas

app.get('/prueba', (req, res) => {
    res.send('Hola mundo');
})

app.use('/cookies',cookiesRoutes);

module.exports = app;

*/
