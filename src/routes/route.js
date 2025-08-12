const express = require('express')
const router = express.Router();
const indexController = require('../controllers/indexController.js');

router.get('/',indexController.renderIndex)
router.post('/cadastro', indexController.formIndexController);
module.exports = router;