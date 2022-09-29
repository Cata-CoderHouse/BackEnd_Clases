const { application } = require('express');
const express = require('express');
const multer = require('multer');


const app = express();


app.use(express.json());
app.use(express.static(__dirname+'\public'));

let storage = multer.diskStorage({ //config de documentacion, los archivos que se envian y guardan en el servidor
    destination: (req, file, cb) =>{
        cb(null, 'uploads'); //donde guardo el archivo
    },
    filename: (req, file, cb) =>{
        //onsole.log(file);
        cb(null, file.fieldname+'-'+Date.now()); //en null va el error, mas adelante lo veremos
    }
});

const upload = multer({storage: storage});

application.post('/uploadfile',upload.single('myfile'),(req, res, next) => {
    const file = req.file;
    if(!file){
        const error = new Error('Please upload a file');
        error.httpStatusCode=400;
        return next(error); 
    }
    res.send(file)
})

application.post('/uploadmultiples',upload.array('myfiles',12),(req, res, next) => { //max 12 archivos
    const files = req.files;
    if(!files){
        const error = new Error('Please upload a file');
        error.httpStatusCode=400;
        return next(error); 
    }
    res.send(files);
})


app.get('/', (req, res) => {
    //res.send('Hello World!');
    res.sendFile(__dirname+'/public/index.html');
})

app.listen(8000,()=>{
    console.log('Listening on port 8000!');
})

//<form action method enctype>