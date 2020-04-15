const passport = require('passport');

module.exports = (app) => {

    //add a route handler. when user clicks google login, user will be redirected to this route. Then passport will redirect user to Google's server. Google server will ask user for permission
    app.get(
        '/auth/google', passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    //add a route handler. After user allows/chose account, user will be redirected to this route including 'code' in url. Then, passport will exchange code received from Google server, with Google server.)
    app.get('/auth/google/callback', passport.authenticate('google'));

};
