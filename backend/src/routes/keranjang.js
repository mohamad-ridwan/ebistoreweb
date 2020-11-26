const express = require('express')
const router = express.Router();

const keranjangController = require('../controllers/keranjang')

// POST
router.post('/postkeranjang/:id', keranjangController.postData)

// GET with query params
router.get('/getkeranjang', keranjangController.getData)

// PUT
router.put('/putkeranjang/:id', keranjangController.putData)

module.exports = router