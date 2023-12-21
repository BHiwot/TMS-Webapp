const express = require('express')
const {
    createUser,
    getUser
 
} = require('../controllers/login_controller')

const router =express.Router()



//GET all Course
router.get('/', getUser)

//POST a new Course
router.post('/', createUser)



module.exports = router