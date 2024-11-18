//outh configuration setting
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const Admin = require('../src/models/Admin');




    //passport set up and it take two parameter obeject and callback function
    passport.use(
        new GoogleStrategy({
        //option for google strategy taking an object
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRETE,
        callbackURL: '/auth/google/redirect',
        passReqToCallback: true
    
        }, ( request, accessToken, refreshToken, profile, done) => {
            console.log('Google Profile:', profile);
            // const user = { id: profile.id, displayName: profile.displayName };
            done(null, profile);
            
            new Admin({
                googleID: profile.id,
                fullName: profile.displayName,
                email: profile._json.email
            }).save().then((newAdmin) => {
                console.log('new admin created', newAdmin);
            })
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user);
      });
      
      passport.deserializeUser((user, done) => {
        done(null, user);
      });
    







