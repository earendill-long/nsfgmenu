const mongoose = require('mongoose')
const Schema = mongoose.Schema

const universityShema = new Schema({
    university:{
        type: String,
        required: [true, 'name ...']
    } 
}, {timestamps: true})

const University = mongoose.model('University', universityShema)
module.exports = University