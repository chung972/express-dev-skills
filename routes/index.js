var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Dev Skills' });
  // i'm pretty sure that the "title" inside the <%%> in our views is referencing this attribute
  
});

module.exports = router;
