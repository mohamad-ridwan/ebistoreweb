const express = require('express')

const router = express.Router();

const alamatController = require('../controllers/alamat');

// POST
router.post('/postalamat', alamatController.createAlamat);

// Get with query params
router.get('/getalamat', alamatController.getAlamat);

// GET with params id
// router.get('/getalamat/:postId', alamatController.getAlamatById);

// PUT
router.put('/updatealamat/:postId', alamatController.updateAlamat)

// DELETE
router.delete('/postalamat/:postId', alamatController.deleteAlamat)

module.exports = router