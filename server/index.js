const express = require('express');//import express
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');
require('./models/User');
require('./services/passportConfig');//import passportConfig.js


const app = express();

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

authRoutes(app);//call function



app.get('/', (request, response) => {
    response.send({ framework: 'express' });
});


//Heroku OR development environment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server app is listening for request on ' + PORT);
});