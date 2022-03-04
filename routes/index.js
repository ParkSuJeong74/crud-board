var express = require('express');
var router = express.Router();

/* GET home page : post.js */
router.get('/', function(req, res) {
  res.redirect('/posts');
});

module.exports = router;