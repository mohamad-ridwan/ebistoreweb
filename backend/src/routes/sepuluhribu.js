const express = require('express')
const router = express.Router();

const sepuluhRibuController = require('../controllers/sepuluhribu')

// For 10RB
// POST
router.post('/postsepuluhribu', sepuluhRibuController.createProduct)

// GET with query params
router.get('/getsepuluhribu', sepuluhRibuController.getProduct)

module.exports = router