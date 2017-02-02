var express = require('express');
var request = require('request');

var router = express.Router();

router.get('/', function(req, res, next) {
  request('https://www.reddit.com'+req.url+'.json?raw_json=1', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      body = JSON.parse(body);
      res.render('index', { posts: body['data']['children'] });
    }
  });
});

module.exports = router;
