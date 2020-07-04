const express = require('express');//import express
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport')
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/User');
require('./services/passportConfig');//import passportConfig.js

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(bodyParser.json());//this middleware will parse the body of the request, and assign it to the req.body property

//tell express to enable cookie
app.use(
    cookieSession({
        maxAge: 20 * 24 * 60 * 60 * 1000, //how long this cookie can exist inside the browser (20days)
        keys: [keys.cookieKey] //key to encrypt our cookie
    })
);

//tell passport to use cookie
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
require('./routes/billingRoutes')(app);

//Heroku OR development environment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server app is listening for request on ' + PORT);
});