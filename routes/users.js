var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/Emanuel', function(req, res, next) {
  res.send('Bem vindo Emanuel');
});


module.exports = router;
