const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session')

//Filestore
//const FileStore= require('session-file-store')(session);

//Redis
// const redis = require('redis');
// const client = redis.createClient();
// const RedisStore = require('connect-redis')(session);

//Mongo
const MongoStore =   require('connect-mongo');
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }


//Cookies
const cookiesRoutes = require('./src/routes/cookies/cookies.routes');
const sessionRoutes = require('./src/routes/session/session.routes')
require('dotenv').config()


const app = express();
const PORT = process.env.PORT || 3000;


//const {Router} = require('express');
//const router=Router();



//session

app.use(cookieParser(process.env.SECRET_KEY_COOKIE));
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}));

//filestore
/* const config ={
    path: './src/sessions',
    ttl: 60*60*24*7, //1 week time to load tiempo de vida desde segs
    retries:0,
} */

//redis
// const config = {
//     host:'localhost',
//     port:6379,
//     client:client,
//     ttl:60*3600*24*168,
// }

//mongo-local
const config = {

}

app.use(session({
    secret: process.env.SECRET_KEY_SESSION,
    
    //FileStore
    //store: FileStore(config)

    //Redis
    //store: new RedisStore(config),
    
    //MongoStore
    //store: new MongoStore.create({
    //    mongoUrl: 'mongodb://localhost:27017/sessions',
    //}),

    store: MongoStore.create({
        mongoUrl: process.env.MONGO_ATLAS_URL,
        mongoOptions: advancedOptions,
    }),
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
