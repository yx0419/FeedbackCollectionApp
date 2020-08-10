//This file will send email so it needs API key from sendgrid.

const sendgrid = require('sendgrid'); //first require in sendGrid module that we just installed.
const keys = require('../config/keys'); //import our API key from config directory.
const helper = sendgrid.mail; //pull a property from sandgrid object and call this property as 'helper'

class Mailer extends helper.Mail {//define Mailer class
    constructor({ subject, recipients }, content) {//recipient=property from Survey instance
        super();

        this.sgApi = sendgrid(keys.sendGridKey);
        this.from_email = new helper.Email('surveyclearfeedback@gmail.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);

        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();
    }

    formatAddresses(recipients) {
        return recipients.map(({ email }) => {
            return new helper.Email(email);
        });
    }

    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addRecipients() {
        const personalize = new helper.Personalization();

        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });
        this.addPersonalization(personalize);
    }
    async send() {
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        });

        const response = await this.sgApi.API(request);
        return response;
    }
}

module.exports = Mailer;
/*in which file inside of our project, do we want to create and send this new Mailer object(= an email)
= inside 'surveyRoutes.js'.
*/