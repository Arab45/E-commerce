const express = require('express');
const { signUp } = require('../controllers/user-auth-controller');
const router = express.Router();


router.post('/signup', signUp);

module.exports = router