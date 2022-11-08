const authMiddleware = (req,res,next)=>{ //next -> continua con la peticion
    if(req.session?.user && req.session?.admin){ //existe usuario?
        next();
    }else{
        return res.status(401).send('<h1>Usuario no autorizado</h1>');
    }
}

module.exports = {authMiddleware}