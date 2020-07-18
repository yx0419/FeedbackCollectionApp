//here we'll create mongoose model class.

const mongoose = require('mongoose'); //require mongoose library
const Schema = mongoose.Schema; //mongoose object has one property called 'Schema'. const Schema means an object

const userSchema = new Schema({//create a schema that defines all the properties that our model class will have.
    googleID: String,
    credits: { type: Number, default: 0 }
});

mongoose.model('ourusers', userSchema);//create a new collection(=a model class) called 'ourusers' with that schema.