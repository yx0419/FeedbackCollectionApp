//here we'll create mongoose model class.

const mongoose = require('mongoose'); //require mongoose library
const Schema = mongoose.Schema; //mongoose object has one property called 'Schema'. const Schema means an object

const userSchema = new Schema({//create an instance of the schema that describes what properties a user will have.
    googleID: String
});

mongoose.model('users', userSchema);//create a new collection called 'users'.