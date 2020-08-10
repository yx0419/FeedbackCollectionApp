//this file is about configuration and setup of passport.
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy; //import strategy
const mongoose = require('mongoose');
const keys = require('../config/keys') //import keys.js file

const User = mongoose.model('users'); //to get access to that 'user' model class. 'Users' is that model class.

passport.serializeUser((user, done) => {//'user' is same as 'user' below in else statement. user = user record. 'done' is callback.
    done(null, user.id)//user.id is token to save in browser cookie. Serialization turned 'user' into 'user.id'.
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user); //opposite. turn 'id' into 'user'
    });
});

passport.use(
    new googleStrategy({ //option for GoogleStrategy
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
        (accessToken, refreshToken, profile, done) => { //passport callback function
            console.log('This passport callback funciton is called right after completing exchanging code for user profile and email, and user is back to our server. Here, we can save user info to our own database.')
            console.log('profile token: ', profile);
            User.findOne({ googleID: profile.id }).then(existingUser => {//makes search query to mongoDB
                if (existingUser) {
                    //we already have a existing record with given profile id, so don't create a new record 
                    done(null, existingUser);
                } else {
                    new User({ googleID: profile.id }).save().then(user => done(null, user)); //here, 'user' means existingUser found from db. //create a new record and save to database
                }
            });
        }
    )
);