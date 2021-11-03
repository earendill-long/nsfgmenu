const express = require('express')
const router = express.Router()

const UniversityController = require('../controllers/UniversityController')

const authenticate       = require('../middleware/authenticate')

router.get('/', UniversityController.index)
router.post('/show', UniversityController.show)
router.post('/store', UniversityController.store)
router.post('/update', UniversityController.update)
router.post('/delete', UniversityController.destroy)

module.exports = router