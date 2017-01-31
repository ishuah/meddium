var express = require('express');
var snoowrap = require('snoowrap');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Reddium' });
});

module.exports = router;
