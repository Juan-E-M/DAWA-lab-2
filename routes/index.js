var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inicio' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Inicio' });
});

router.get('/course', function(req, res, next) {
  res.render('course', { title: 'Inicio' });
});

router.get('/teacher', function(req, res, next) {
  res.render('teacher', { title: 'Inicio' });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Inicio' });
});

router.get('/event', function(req, res, next) {
  res.render('event', { title: 'Inicio' });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Inicio' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Inicio' });
});


module.exports = router;
