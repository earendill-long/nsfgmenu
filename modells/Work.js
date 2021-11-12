const { ObjectID, ObjectId } = require('bson')
const mongoose = require('mongoose')
const Shema = mongoose.Schema

const workShema = new Shema({
    subjectName:{
        type: String,
        required: [true, '...']
    },
    workName:{
        type: String,
        required: true
    },
    workType:{
        type: String,
        required: true
    },
    discriptions:{
        type: String
    },
    parts: {
        type: [ObjectId],
        required: false
    }
}, {timestamps: true})

const Work = mongoose.model('Work', workShema)
module.exports = Work