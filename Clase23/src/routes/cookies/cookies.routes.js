const {Router} = require('express');
const router=Router();

router.get('/',(req,res)=>{
    const {cookies} = req;
    res.status(200).json(cookies);
})

router.get('/set',(req,res)=>{
    const {cookies} = req;
    res.cookie('nombre','Fede',{
        signed:true //encripta el value en el storage de cookies de devtools de chrome, por hash -> cadena de caracteres
    });
    res.status(200).json({
        message:'Cookie seteada',
        success: true
    });
})

//limite de tiempo de vida de la cookie
router.get('/setEx',(req,res)=>{
    const {cookies} = req;
    res.cookie('apellido','Osandon',{
        signed:true,
        maxAge:5000}); //miliseg //eltiempo que se almacenan en las cookie del devtoolls de chrome
    res.status(200).json({
        message:'Cookie seteada',
        success: true
    });
})

//borrarcookie
router.get('/borrar',(req,res)=>{
    const {cookies} = req;
    res.clearCookie('apellido'); 
    res.status(200).json({
        message:'Cookie borrada',
        success: true
    });
})

module.exports = router;