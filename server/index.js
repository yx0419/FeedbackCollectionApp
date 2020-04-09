const express = require('express');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy; //import strategy
const keys = require('./config/keys') //import keys.js file

const app = express();

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

app.get('/', (request, response) => {
    response.send({ framework: 'express' });
});

//add a route handler. when user clicks google login, user will be redirected to this route. Then passport will redirect user to Google's server. Google server will ask user for permission
app.get(
    '/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

//add a route handler. After user allows/chose account, user will be redirected to this route including 'code' in url. Then, passport will exchange code received from Google server, with Google server.)
app.get('/auth/google/callback', passport.authenticate('google'));


//Heroku OR development environment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server app is listening for request on ' + PORT);
});