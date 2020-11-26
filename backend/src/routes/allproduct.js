const express = require('express')
const router = express.Router()

const allProductController = require('../controllers/allproduct')

router.post('/postall', allProductController.postData)

module.exports = router