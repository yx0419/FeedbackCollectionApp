const passport = require('passport');

module.exports = (app) => {

    //add a route handler. when user clicks google login, user will be redirected to this route. Then passport will redirect user to Google's server. Google server will ask user for permission
    app.get(
        '/auth/google', passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    //add a route handler. After user allows/chose google account right after clicking 'sign in with Google', user will be redirected to this route including 'code' in url. Then, passport will exchange code received from Google server, with Google server.)
    app.get('/auth/google/callback', passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys'); //when user comes to /auth/google/callback, passport.authentication will do its job and then user will be redirected to '/surveys' this another route. 'localhost:3000/surveys'
        }
    );

    app.get('/api/logout', (request, response) => {
        request.logout();
        //response.send(request.user); //send them back the user model. this is just to test: this will send empty response because already logged out, so will send back the empty user model (no one is logged in).
        response.redirect('/') //redirect the user to the root (/) route of our app.
    })

    app.get('/api/currentUser', (request, response) => { //second parameter function will be automatically called whenever a user makes a GET request to this route.
        response.send(request.user); //if this is undefined, it means user is not signed in. 
        //response.send(request.session);
    });
};

