// import express
const express = require('express')
const router = express.Router();

const productController = require('../controllers/products');

// For Semua HARGA
// POST
router.post('/postproduk', productController.createProduct);

// GET with query params
router.get('/getproduk', productController.getProduct);

// GET with params ID
router.get('/getproductbyid/:productId', productController.getProductById)

module.exports = router