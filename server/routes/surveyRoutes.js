const mongoose = require('mongoose');
const requireSignin = require('../middlewares/requireSignIn');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const _ = require('lodash');
const { Path } = require('path-parser');
const url = require('url');
const Survey = mongoose.model('surveys'); //get the model class called 'surveys'.

module.exports = app => {
    app.get('/api/surveys', requireSignin, async (req, res) => {

        const surveys = await Survey.find({ whichUser: req.user.id }).select({
            recipients: false
        });
        console.log(req.user.id);
        console.log("hi" + surveys);

        res.send(surveys);
    });



    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send('Thanks for voting!');
    });

    // app.post('/api/surveys/webhooks', (req, res) => { //this route handler will do all the processing logic to look at the incoming array of events which exists on 'req.body',
    //     console.log('req.body is ' + req.body);
    //     const p = new Path('/api/surveys/:surveyId/:choice');
    //     _.chain(req.body)
    //         .map(({ email, url }) => {
    //             if (url) {
    //                 const match = p.test(new URL(url).pathname);

    //                 if (match) {
    //                     return { email, surveyId: match.surveyId, choice: match.choice };
    //                 }
    //             }
    //         })
    //         .compact()
    //         .uniqBy('email', 'surveyId')
    //         .each(({ surveyId, email, choice }) => {
    //             Survey.updateOne(
    //                 {
    //                     _id: surveyId,
    //                     recipients: {
    //                         $elemMatch: { email: email, responded: false }
    //                     }
    //                 },
    //                 {
    //                     $inc: { [choice]: 1 },
    //                     $set: { 'recipients.$.responded': true },
    //                     lastResponded: new Date()
    //                 }
    //             ).exec();
    //         })
    //         .value();

    //     res.send({});
    // });
    app.post("/api/surveys/webhooks", (req, res) => {
        const p = new Path("/api/surveys/:surveyId/:choice");

        _.chain(req.body)
            .map(({ email, url }) => {
                if (url) {
                    const match = p.test(new URL(url).pathname);
                    if (match) {
                        return { email, surveyId: match.surveyId, choice: match.choice };
                    }
                }
            })
            .compact()
            .uniqBy("email", "surveyId")
            .each(({ surveyId, email, choice }) => {
                Survey.updateOne(
                    {
                        _id: surveyId,
                        recipients: {
                            $elemMatch: { email: email, responded: false }
                        }
                    },
                    {
                        $inc: { [choice]: 1 },
                        $set: { "recipients.$.responded": true },
                        lastResponded: new Date()
                    }
                ).exec();
            })
            .value();

        res.send({});
    });

    // app.post('/api/surveys/webhooks', (req, res) => {
    //     const events = _.map(req.body, ({ email, url }) => {
    //         const pathname = new URL(url).pathname;
    //         const p = new Path('/api/surveys/:surveyId/:choice');
    //         const match = p.test(pathname);
    //         if (match) {
    //             return { email, surveyId: match.surveyId, choice: match.choice }
    //         }
    //     });
    //     console.log(events);
    // })

    app.post('/api/surveys', requireSignin, requireCredits, async (request, response) => { //first parameter is route, third parameter is arrow function (=request handler), each time someone makes request to /api/surveys, this arrow function will be called.

        const { title, subject, body, recipients } = request.body;

        const survey = new Survey({ //create an instance(object) of Survey (but creation doesn't mean saving to database)
            title: title,
            subject: subject,
            body: body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),//array of objects
            whichUser: request.user.id, //this 'id' is what mangoose give to every model
            dateSent: Date.now()
        });

        //send an email
        const mailer = new Mailer(survey, surveyTemplate(survey)); //first parameter = the entire survey object
        await mailer.send();
        await survey.save();
        request.user.credits -= 1;
        const user = await request.user.save();
        response.send(user);
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