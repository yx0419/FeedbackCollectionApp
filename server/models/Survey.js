//here we'll create mongoose model class.

const mongoose = require('mongoose'); //require mongoose library
const { Schema } = mongoose; //mongoose object has one property called 'Schema'. const Schema means an object
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({//create a schema that defines all the properties that our model class will have.
    title: String,
    subject: String,
    body: String,
    recipients: [RecipientSchema], //array of Strings
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    whichUser: { type: Schema.Types.ObjectId, ref: 'User' }, //this schema belongs to this particular user
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema);//create a new collection(=a model class) called 'surveys' with that schema. = load the 4 info into our mongoose library.


