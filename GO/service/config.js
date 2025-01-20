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
            Admin.findOne({googleId: profile.id}).then((currentUser) => {
                if(currentUser){
                    console.log("User data exist in the data base");
                } else {
                    console.log("User data does not exist");
                }
            })
            
            new Admin({
                googleID: profile.id,
                fullName: profile.displayName,
                email: profile._json.email
            }).save().then((newAdmin) => {
                console.log('new admin created', newAdmin);
            })
        })
    );

    passport.serializeUser((admin, done) => {
        console.log('my serialize id', admin.id);
        done(null, admin.id);
      });
      
      passport.deserializeUser((id, done) => {
        Admin.findById(id).then((admin) => {
        done(null, admin);
        })
      });
    







