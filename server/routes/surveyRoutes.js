const mongoose = require('mongoose');
const requireSignin = require('../middlewares/requireSignIn');
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys'); //get the model class called 'surveys'.

module.exports = app => { //create a route handler that will craete a new survey and send out emails.
    app.post('/api/surveys', requireSignin, requireCredits, (request, response) => { //first parameter is route, third parameter is arrow function (=request handler), each time someone makes request to /api/surveys, this arrow function will be called.

        const { title, subject, body, recipients } = request.body;

        const survey = new Survey({ //create an instance(object) of Survey (but creation doesn't mean saving to database)
            title: title,
            subject: subject,
            body: body,
            recipients: recipients.split(',').map(email => { return { email: email.trim() } }),//array of objects
            whichUser: request.user.id, //this 'id' is what mangoose give to every model
        });
    });
};


/*
Order of execution: first, need to make sure the user is signed in using middleware 'requireSignin'.
                 then, second, need to make sure that the user has enough credits using middleware 'requireCredits'.
                 then lastly, call the arrow function to create and save the survey to our database.

In (requset, response), 'request' means an object representing incoming request, and the body of the request will contain properties (title,subject,body,recipients),
so here inside the request handler, we can access those properties.
We can use the model class to create a new instance (record) of a Survey.
*/