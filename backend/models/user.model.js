const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: false

    },
    age:{
        type: String,
        required: true,
        unique: false
    },
    gender:{
        type: String,
        required: false
    }

},{
    timestamps: true
});

const User = mongoose.model('User',userSchema);
module.exports = User;