const express = require('express')

const router = express.Router();

const allProductController = require('../controllers/allproduct')

router.post('/post/allproduct/', allProductController.createAllProduct)

module.exports = router