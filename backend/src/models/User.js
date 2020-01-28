const { Schema, model } = require('mongoose');

// Define the structure of the model that will be used
const userSchema = new Schema({
    fullname: String,
    email: String,
    password: String
});

// Export the model that will be used with the structure defined in the Schema
module.exports = model('User', userSchema);