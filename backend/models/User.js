const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('user', UserSchema);

//here email is unique: true so we have created an index corresponding to it and therefore no entries with duplicate email will be allowed in the database:-
// User.createIndexes();
//we will create similar logic of no duplicate email entries in db in auth.js

module.exports = User;