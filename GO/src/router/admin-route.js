const express = require('express');
// const { Google } = require('../controllers/admin-auth-controller');
const router = express.Router();
const passport = require('passport');
const { callbackSuccessURI, loginAttempt, verifyProfile } = require('../controllers/admin-auth-controller');
// const { Google } = require('./') 


//google authentication
router.get('/google', passport.authenticate('google', {
    scope: [ 'profile',  'email' ]
}));




router.get('/google/redirect', passport.authenticate('google', {
  failureRedirect: '/auth/login',
}), callbackSuccessURI
);



router.get('/login', loginAttempt);
router.get('/profile', verifyProfile)


  
  

module.exports = router