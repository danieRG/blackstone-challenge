const express = require('express')
const authController = require('../controllers/authController')
const updateStreamController = require('../controllers/updateStreamController')
const router = express.Router()

router.post('/updateSearchTerm', updateStreamController.update)
router.post('/login', authController.login)

router.get('/', (req, res) => {
    res.send('Api is working')
})



module.exports = router