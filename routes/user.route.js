const express = require('express');
const router = express.Router();

const { redirectAuthenticated } = require('../libs/middleware');

const {
  validateSignup,
  signup,
  validateLogin,
  login,
  logout
} = require('../controllers/user.controller');

router.get('/', (req, res) => {
  res.render('pages/index', { title: 'Finly' });
  });
  router.get('/login', (req, res) => {
  res.render('pages/login', {
  title: 'Sign in',
  });
  });
  router.get('/signup', (req, res) => {
  res.render('pages/signup', {
  title: 'Sign up',
  });
  });
  module.exports = router;