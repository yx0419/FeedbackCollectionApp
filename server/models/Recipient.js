//here we'll create our sub document collection.
//Each recipient should have two properties: email, responded

const mongoose = require('mongoose'); //require mongoose library
const Schema = mongoose.Schema; //mongoose object has one property called 'Schema'. const Schema means an object

const recipientSchema = new Schema({//create a schema that defines all the properties that our model class will have.
    email: String,
    responded: { type: Boolean, default: false } //when the user clicks and respond to the survey, this will become true.
});

module.exports = recipientSchema; //Insead of registering the schma with mongoose, export the schema so that we can import this schema into our Survey.