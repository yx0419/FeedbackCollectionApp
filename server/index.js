const express = require('express');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy; //import strategy

const app = express();

passport.use(new googleStrategy());

app.get('/', (request, response) => {
    response.send({ framework: 'express' });
});

const PORT = process.env.PORT || 5000;//Heroku OR development environment
app.listen(PORT);