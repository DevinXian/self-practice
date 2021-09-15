var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/assets/img/:id', (req, res) => {
  console.log('图片重定向接口已访问：' + req.url);
  res.redirect(302, '/images/icon.png');
});

module.exports = router;
