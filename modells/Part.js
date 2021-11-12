const mongoose = require('mongoose')
const Shema = mongoose.Schema

const partShema = new Shema({
    summary:{
        type: String
    },
    partName:{
        type: String,
        required: [true, 'Part name ...']
    },
    isAssembly:{
        type: Boolean
    },
    path:{
        type: String,
        required: true
    },
    tag1:{
        type: String
    }
}, {timestamps: true})

const Part = mongoose.model('Part', partShema)
module.exports = Part