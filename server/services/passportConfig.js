const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy; //import strategy
const mongoose = require('mongoose');
const keys = require('../config/keys') //import keys.js file

const User = mongoose.model('ourusers'); //to get access to that user model class

passport.use(
    new googleStrategy({ //option for GoogleStrategy
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
        (accessToken, refreshToken, profile, done) => { //passport callback function
            console.log('This passport callback funciton is called right after completing exchanging code for user profile and email, and user is back to our server. Here, we can save user info to our own database.')
            console.log('profile token: ', profile);
            new User({ googleID: profile.id }).save(); //save instance to database
        }
    )
);