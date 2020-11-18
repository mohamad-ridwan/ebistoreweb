const express = require('express')
const router = express.Router();

const productController = require('../controllers/limabelasribu');

// POST
router.post('/postlimabelasribu', productController.createProduct)

// GET with query params
router.get('/getlimabelasribu', productController.getProduct)

module.exports = router