const express = require('express')
const router = express.Router()

const PartController = require('../controllers/PartController')

const authenticate       = require('../middleware/authenticate')

router.get('/', PartController.index)
router.post('/show', PartController.show)
router.post('/store', PartController.store)
router.post('/update', PartController.update)
router.post('/delete', PartController.destroy)

module.exports = router