const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy; //import strategy
const keys = require('../config/keys') //import keys.js file

passport.use(
    new googleStrategy({ //option for GoogleStrategy
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
        (accessToken, refreshToken, profile, done) => { //passport callback function
            console.log('This passport callback funciton is called right after completing exchanging code for user profile and email, and user is back to our server. Here, we can save user info to our own database.')
            console.log('access token: ', accessToken);
            console.log('refresh token: ', refreshToken);
            console.log('profile token: ', profile);
        }
    )
);