var express = require('express');
var router = express.Router();
const passport = require('passport')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('home');
});


// Login/signup route
// User clicks on "Login with Google"
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
))

// AFTER user signs in with Google
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/items', 
    failureRedirect: '/home' 
  }
))

// Logout Route *** ASYNC AS OF MAY 2022 ***
router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    res.redirect('/users')
  })
})


module.exports = router;
