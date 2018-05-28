var express = require('express');
var router = express.Router();

/* GET about-us page. */
router.get('/', function(req, res, next) {
  res.render('about-us', { author: 'Devbuilt',
                           headline: 'Kinela Futbol'});
});

module.exports = router;
