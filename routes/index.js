var express = require('express');
var router = express.Router();

const usuarioController = require('../controller/usuarioController.js');

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('auth/login');
});

/*router.get('/registro', function(req, res, next) {
  res.render('auth/register');
});*/

router.get('/registro', usuarioController.registro);

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
