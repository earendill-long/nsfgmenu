const Part = require('../modells/Part')

//show the list of part
const index = (req, res, next) =>{
    Part.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occured'
        })
    })
}

//Show single part
const show = (req, res, next) =>{
    let PartkID = req.body.partID
    Part.findById(partID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
       res.json({
        message: 'An error Occured'
       })
    
    })
}

//add new part
const store = (req, res, next) =>{
    let part = new Part({
        partName: req.body.partName,
        isAssambly: req.body.isAssambly,
        path: req.body.path,
        tag1: req.body.tag1
    })
    part.save()
    .then(response =>{
        res.json({
            message:'subject Added Successfully'
        })
    })
    .catch(error =>{
        res.json({
            message:'An error Occured'
        })
    })
}

//update an part
const update = (req, res, next) =>{
    let partID = req.body.partID

    let updateData = {
        part: req.body.part,
    }

    Part.findByIdAndUpdate(partID, {$set: updateData})
    .then(() => {
        res.json({
            message: 'work updated successfully'
        })
    })
    .catch(error =>{
        res.json({
            message:'An error Occured'
        })
    })
}

//delete an part
const destroy = (req, res, next) =>{
    let partID = req.body.partID
    Part.findOneAndRemove(partID)
    .then(() =>{
        res.json({
            message: 'subject deleted successfuly'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}