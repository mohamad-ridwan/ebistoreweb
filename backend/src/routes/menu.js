const express = require('express')
const router = express.Router()

const menuController = require('../controllers/menu')

router.post('/postmenu', menuController.postData)
router.get('/getmenu', menuController.getData)

module.exports = router