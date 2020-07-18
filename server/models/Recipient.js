//here we'll create our sub document collection.
//Each recipient should have two properties: email, isSubmitted

const mongoose = require('mongoose'); //require mongoose library
const Schema = mongoose.Schema; //mongoose object has one property called 'Schema'. const Schema means an object

const recipientSchema = new Schema({//create a schema that defines all the properties that our model class will have.
    email: String,
    isSubmitted: { type: Boolean, default: false } //when the user clicks and respond to the survey, this will become true.
});

mongoose.model('surveys', surveySchema);//create a new collection(=a model class) called 'surveys' with that schema. = load the 4 info into our mongoose library.

module.exports = recipientSchema; //Insead of registering the schma with mongoose, export the schema so that we can import this schema into our Survey.