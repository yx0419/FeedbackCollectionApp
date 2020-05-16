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

    app.get('/api/logout', (request, response) => {
        request.logout();
        response.send(request.user);//to test: this will send empty response because already logged out
    })

    app.get('/api/currentUser', (request, response) => { //second parameter function will be automatically called whenever a user makes a GET request to this route.
        response.send(request.user); //if this is undefined, it means user is not signe in. 
        //response.send(request.session);
    });
};

