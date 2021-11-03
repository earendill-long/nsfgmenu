const Work = require('../modells/Work')

//show the list of work
const index = (req, res, next) =>{
    Work.find()
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

//Show single work
const show = (req, res, next) =>{
    let WorkID = req.body.workID
    Subject.findById(workID)
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

//add new work
const store = (req, res, next) =>{
    let work = new Work({
        subjectName: req.body.subjectName,
        workName: req.body.workName,
        workType: req.body.workType,
        discriptions: req.body.discriptions
    })
    work.save()
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

//update an work
const update = (req, res, next) =>{
    let workID = req.body.workID

    let updateData = {
        work: req.body.work,
    }

    Work.findByIdAndUpdate(workID, {$set: updateData})
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

//delete an work
const destroy = (req, res, next) =>{
    let workID = req.body.workID
    Work.findOneAndRemove(workID)
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