const express = require('express')
const authController = require('../controllers/authController')
const router = express.Router()

router.post('/login', authController.login)

router.get('/', (req, res) => {
    res.send('Api is working')
})



module.exports = router