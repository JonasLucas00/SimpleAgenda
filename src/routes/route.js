const express = require('express')
const router = express.Router();
const loginController = require('../controllers/loginController.js');
const indexController = require('../controllers/indexController.js');
const middlewares = require('../middlewares/midlewares.js');

router.get('/', middlewares.verifySession,  indexController.renderIndex);
router.get('/login',loginController.renderLogin)
router.post('/login/register', loginController.register);
router.post('/login/login', loginController.login);
router.get('/login/logout', loginController.logout);

module.exports = router;