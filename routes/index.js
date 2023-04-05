var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inicio' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Nosotros' });
});

router.get('/course', function(req, res, next) {
  res.render('course', { title: 'Servicios' });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Blog' });
});

router.get('/event', function(req, res, next) {
  res.render('event', { title: 'Eventos' });
});

router.get('/blog-single', function(req, res, next) {
  res.render('blog-single', { title: 'Blog-single' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contacto' });
});

router.post('/contact-single', function(req, res, next) {
  const name = req.body.name;
  const lastname = req.body.lastname;  
  const email = req.body.email; 
  const number = req.body.number; 
  const nacimiento = req.body.nacimiento; 
  const message = req.body.message;
  res.render('contact-single', { title: 'Contact-single' ,name,email,number,nacimiento,lastname,message });
});

module.exports = router;
