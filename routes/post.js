var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/r/:subreddit/comments/:post_id/:slug', function(req, res, next) {
  request('https://www.reddit.com'+req.url+'.json?raw_json=1', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      body = JSON.parse(body);
      res.render('post', { post: body[0]['data']['children'][0]['data'], comments: body[1]['data']['children'] });
    }
  });
  
});

module.exports = router;
