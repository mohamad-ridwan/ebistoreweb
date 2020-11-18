const express = require('express')
const router = express.Router();

const limaRibuController = require('../controllers/limaribu');

// For 5RB
// POST
router.post('/postlimaribu', limaRibuController.createLimaRibu)

// GET with query params
router.get('/getlimaribu', limaRibuController.getLimaRibu)

module.exports = router
