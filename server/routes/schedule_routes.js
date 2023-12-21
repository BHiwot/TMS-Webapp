const express = require('express')
const {
    getSchedule,
    createSchedule,
    deleteSchedule,
    updateSchedule
    
} = require('../controllers/schedule_controller')

const router =express.Router()



//GET all Schedule
router.get('/', getSchedule)

//POST a new Schedule
router.post('/', createSchedule)

// DELETE a Schedule
router.delete('/:id', deleteSchedule)

// UPDATE a Schedule
router.patch('/:id', updateSchedule)

module.exports = router
