var express = require('express');
var router = express.Router();

/* GET post listing. */
router.get('/', function(req, res, next) {
  res.render('post',
  { author: 'Devbuilt',
    headline: 'Welcome to Kinela Futbol'});
  });

module.exports = router;
