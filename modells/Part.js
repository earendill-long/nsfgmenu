const mongoose = require('mongoose')
const Shema = mongoose.Schema

const partShema = new Shema({
    workName:{
        type: String
    },
    partName:{
        type: String
    },
    isAssembly:{
        type: Boolean
    },
    path:{
        type: String
    },
    tag1:{
        type: String
    }
}, {timestamps: true})

const Part = mongoose.model('Part', partShema)
module.exports = Part