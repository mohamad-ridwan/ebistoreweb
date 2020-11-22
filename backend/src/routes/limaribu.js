const express = require('express')
const router = express.Router();

const limaRibuController = require('../controllers/limaribu');

// For 5RB
// POST
router.post('/postlimaribu', limaRibuController.createLimaRibu)

// GET with query params
router.get('/getlimaribu/', limaRibuController.getLimaRibu)

// GET with params ID
router.get('/getlimaribu/:getId', limaRibuController.getLimaRibuById)

module.exports = router
