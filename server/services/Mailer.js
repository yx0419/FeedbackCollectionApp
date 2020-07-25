//This file will send email so it needs API key from sendgrid.
const keys = require('../config/keys'); //import our API key from config directory.
const sendgrid = require('@sendgrid/mail'); //first require in sendGrid module that we just installed.

const helper = sendgrid.mail; //pull a property from sandgrid object and call this property as 'helper'



class Mailer extends helper.Mail {//define Mailer class
    constructor({ subject, recipients }, content) {
        super();
        this.from_email = new helper.Email('surveyclearfeedback@gmail.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);
    }
}

// module.exports = Mailer;
/*in which file inside of our project, do we want to create and send this new Mailer object(= an email)
= inside 'surveyRoutes.js'.
*/