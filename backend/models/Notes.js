const mongoose = require('mongoose')
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        //it is like a foriegn key, the note will be linked to a user from User.js
      type: mongoose.Schema.Types.ObjectId,  
      ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: 'general'
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('notes', NotesSchema);