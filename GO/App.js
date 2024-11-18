const express = require('express');
const { connectToDB } = require('./src/db');
const app = express();
require('dotenv').config();
// const passportSetup = require('./service/outh')
const adminAuth = require('./src/router/admin-route');
const passport = require('passport');
const config = require('./service/config')
// const GoogleStrategy = require('passport-google-oauth20');
const session = require('express-session');



app.use(express.json());


//copy work
//outh configuration setting

app.use(session({
    secret: process.env.SESSION_SECRETE,
    resave: false,
    saveUninitialized: false
  }));



//initialization to work with express session
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', adminAuth);





//passport set up and it take two parameter obeject and callback function
// passport.use(
//     new GoogleStrategy({
//     //option for google strategy taking an object
//     callbackURL: '/auth/google/redirect',
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecrete: process.env.GOOGLE_SECRETE

//     }, (accessToken, refreshToken, profile, done) => {
//         //passport callback function
//         done(null, profile);
//     })
// );




  
  


app.listen(process.env.PORT_NUM, () => {
    console.log(`https://localhost:${process.env.PORT_NUM}`)
    connectToDB();
});