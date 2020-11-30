const express = require('express')
const router = express.Router()

const registerController = require('../controllers/register')

router.post('/postregister', registerController.postAkun)
router.get('/getakun', registerController.getAkun)

module.exports = router