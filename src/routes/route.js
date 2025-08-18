const express = require('express')
const router = express.Router();
const loginController = require('../controllers/loginController.js');
const indexController = require('../controllers/indexController.js');
const middlewares = require('../middlewares/midlewares.js');
const contatosController = require('../controllers/contatosController.js')

router.get('/', middlewares.verifySession,  indexController.renderIndex);
router.get('/login',loginController.renderLogin)
router.post('/login/register', loginController.register);
router.post('/login/login', loginController.login);
router.get('/login/logout', loginController.logout);

router.get('/contatos', contatosController.renderContato )
router.post('/contatos/add', contatosController.contatosAdd)
router.get('/contatos/edit/:id', contatosController.contatosEdit); // Leva para pagina de edição de contato
router.post('/contatos/edit/edit', contatosController.editEdit); // Efetua a edição do contato no BD
router.post('/contatos/delete', contatosController.contatosDelete)


module.exports = router;