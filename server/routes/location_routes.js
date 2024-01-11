const express = require('express')
const {
    getLocation,
    createLocation,
    deleteLocation,
    updateLocation
    
} = require('../controllers/location_controller')

const router =express.Router()



//GET all Schedule
router.get('/', getLocation)

//POST a new Schedule
router.post('/', createLocation)

// DELETE a Schedule
router.delete('/:id', deleteLocation)

// UPDATE a Schedule
router.patch('/:id', updateLocation)

module.exports = router
