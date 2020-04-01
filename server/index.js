const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send({ framework: 'express' });
});

app.listen(5000);