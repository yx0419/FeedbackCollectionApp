//here we'll create mongoose model class.

const mongoose = require('mongoose'); //require mongoose library
const Schema = mongoose.Schema; //mongoose object has one property called 'Schema'. const Schema means an object

const userSchema = new Schema({//create a schema that describes what properties a ouruser will have.
    googleID: String
});

mongoose.model('ourusers', userSchema);//create a new collection(=a model class) called 'ourusers' with that schema.