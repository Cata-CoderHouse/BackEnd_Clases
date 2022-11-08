const sessionGet = (req,res)=>{
    try {
        req.session.visitas=req.session.visitas ? req.session.visitas+1:1;
        res.send('<h1>Bienvenido</h1>'+req.session.user+' visitas: '+req.session.visitas);
    } catch (error) {
        return res.status(500).json({
            msg:error.message,
            success:false
        })
    }  
}

const sessionLogout = (req,res)=>{
    try {
        req.session.destroy(err=>{
            if(err) return res.send(err)
            res.send('<h1>Sesion cerrada</h1>');
        })
    } catch (error) {
        return res.status(500).json({
            msg:error.message,
            success:false
        })
    }
    
}

const sessionPostLogin = (req, res) => {
    try {
        const { username, password } = req.body
        if (username !== 'pepe' || password !== 'pepepass') {
        return res.send('login failed')
        }
        req.session.user = username
        req.session.admin = true
        res.send('<h1>login success!</h1>')
    }
    catch (error) {
        return res.status(500).json({
            msg:error.message,
            success:false
        })
    }
}
module.exports={sessionGet, sessionLogout, sessionPostLogin}