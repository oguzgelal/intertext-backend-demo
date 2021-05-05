const get = require('lodash/get');
const express = require('express');
const router = express.Router();

const fakeUser = {
  email: 'test@test.com',
  password: 'test123',
  token: 'test-user-123'
}

/**
 * Main screen
 */
router.post('/', function(req, res, next) {
  const token = get(res, 'body.state.user.token')
  
  res.render('recipes/login');
  // if (!token) {
  // } else {
  //   res.render('recipes/home');
  // }
  
});

module.exports = router;