const express = require('express');
const router = express.Router();
const candidates = require('../data/candidates');
const testimonials = require('../data/testimonials');
// Private CV links are only sent manually after consultation/agreement and
// should never contain direct contact details. These pages are not linked from
// public navigation, candidate cards, the sitemap, or public candidate pages.
const privateCvs = require('../data/privateCvs');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/services', (req, res) => {
  res.render('services');
});

router.get('/nanny-in-dubai', (req, res) => {
  res.render('nanny-in-dubai');
});

router.get('/babysitter-in-dubai', (req, res) => {
  res.render('babysitter-in-dubai');
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

// Private, non-public CV page reached only via an unguessable token shared
// privately after consultation. An invalid token returns a generic 404 and
// never reveals which tokens exist.
router.get('/private-cv/:token', (req, res) => {
  const cv = privateCvs.find((c) => c.token === req.params.token);
  if (!cv) {
    return res.status(404).render('404');
  }
  res.render('private-cv', { cv });
});


router.get('/agreement', (req, res) => {
    res.render('agreement');
});

module.exports = router;
