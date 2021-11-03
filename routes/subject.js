const express = require('express')
const router = express.Router()

const SubjectController = require('../controllers/SubjectController')
const authenticate = require('../middleware/authenticate')

router.get('/', SubjectController.index)
router.post('/show', SubjectController.show)
router.post('/store', SubjectController.store)
router.post('/update', SubjectController.update)
router.post('/delete', SubjectController.destroy)

module.exports = router