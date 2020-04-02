const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send({ framework: 'express' });
});

const PORT = process.env.PORT || 5000;//Heroku OR development environment
app.listen(PORT);