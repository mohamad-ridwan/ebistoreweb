const express = require('express')
const router = express.Router()

const allProductController = require('../controllers/allproduct')

router.post('/postall', allProductController.postAll)
router.get('/getall', allProductController.getAll)
router.get('/getall/:getId', allProductController.getAllById)
// router.get('/getall/:username', allProductController.getAllByUsername)
module.exports = router