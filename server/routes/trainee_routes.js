const express = require('express')
const {

    getTrainee,
    createTrainee,
    deleteTrainee,
    updateTrainee
} = require('../controllers/trainee_controller')

const router =express.Router()



//GET all Trainer
router.get('/', getTrainee)

//POST a new Trainer
router.post('/', createTrainee)

// DELETE a Trainer
router.delete('/:id', deleteTrainee)

// UPDATE a Trainer
router.patch('/:id', updateTrainee)

module.exports = router
