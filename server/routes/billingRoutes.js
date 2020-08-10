const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey);
const requireSignIn = require('../middlewares/requireSignIn');

module.exports = app => { //create a route handler that will listen for POST requests that made to api/stripe.
    app.post('/api/stripe', requireSignIn, async (req, res) => { //first parameter is route, second parameter is request handler

        //here it handles the token that it received from front-end. It will send to Stripe API and bill the charge. and then update UI for updated credit #.
        const charge = await stripe.charges.create({//create an actual charge and bill the credit card.
            amount: 100,
            currency: 'usd',
            description: '10 credits for 10 surveys',
            source: req.body.id
        });
        //console.log(charge);

        req.user.credits += 10;
        const user = await req.user.save();

        res.send(user);
    });
};