var express = require('express');
var router = express.Router();

/* GET main page. */
router.get('/', function(req, res, next) {
  res.render('main',
  { author: 'Devbuilt',
    headline: 'Welcome to Kinela Futbol'});
});

module.exports = router;
