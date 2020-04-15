const express = require('express');
require('./services/passportConfig');//import passport.js
const authRoutes = require('./routes/authRoutes');

const app = express();

authRoutes(app);//call function

app.get('/', (request, response) => {
    response.send({ framework: 'express' });
});


//Heroku OR development environment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server app is listening for request on ' + PORT);
});