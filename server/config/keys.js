//decide whether or not we are in a production or development environment.

if (process.env.NODE_ENV === 'production') {
    //in production. export the prod keys.
    module.exports = require('./production');
} else {
    //in development. export the dev keys.
    module.exports = require('./development');
}