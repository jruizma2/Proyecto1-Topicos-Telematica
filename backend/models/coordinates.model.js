const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const coordinatesSchema = new Schema({
    lat:{
        type: String,
        required: true,
        unique: false

    },
    lon:{
        type: String,
        required: true,
        unique: false
    },
    date:{
        type:Date,
        default: Date.now
    },
    user:{
        type:String,
        required:true,
        unique:false
    }

},{
    timestamps: true
});

const Coordinates = mongoose.model('Coordinates',coordinatesSchema);
module.exports = Coordinates;