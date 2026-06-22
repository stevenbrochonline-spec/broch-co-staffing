const express = require('express');
const router = express.Router();
const candidates = require('../data/candidates');
const testimonials = require('../data/testimonials');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/services', (req, res) => {
  res.render('services');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/book', (req, res) => {
  res.render('book');
});

router.get('/candidates', (req, res) => {
  res.render('candidates', { candidates });
});

router.get('/candidates/:slug', (req, res) => {
  const candidate = candidates.find((c) => c.slug === req.params.slug);
  if (!candidate) {
    return res.status(404).render('404');
  }
  res.render('candidate', { candidate });
});

router.get('/testimonials', (req, res) => {
  res.render('testimonials', { testimonials });
});

module.exports = router;
