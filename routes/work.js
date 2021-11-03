const express = require('express')
const router = express.Router()

const WorkController = require('../controllers/WorkController')

const authenticate       = require('../middleware/authenticate')

router.get('/', WorkController.index)
router.post('/show', WorkController.show)
router.post('/store', WorkController.store)
router.post('/update', WorkController.update)
router.post('/delete', WorkController.destroy)

module.exports = router