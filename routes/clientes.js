var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Confira nossos produtos');
});

/* GET users listing. */
router.get('/produtos', function(req, res, next) {
  res.send('Nao tem mais produtos');
});


module.exports = router;