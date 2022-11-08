const {Router} = require('express');
const {authMiddleware} = require('../../middleware/auth.middleware');
const {sessionGet, sessionLogout, sessionPostLogin} = require('../../controllers/session/session.controllers')

const router = Router();

router.get('/',authMiddleware, sessionGet);
router.get('/logout',sessionLogout);
router.post('/login', sessionPostLogin);

   
module.exports = router