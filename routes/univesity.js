const express = require('express')
const router = express.Router()

const UniversityController = require('../controllers/UniversityController')
const upload             = require('../middleware/upload')
const authenticate       = require('../middleware/authenticate')

router.get('/', authenticate, UniversityController.index)
router.post('/show', UniversityController.show)
router.post('/store', upload.array('avatar'), UniversityController.store)
router.post('/update', UniversityController.update)
router.post('/delete', UniversityController.destroy)

module.exports = router