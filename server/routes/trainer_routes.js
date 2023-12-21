const express = require('express')
const {

    getTrainer,
    createTrainer,
    deleteTrainer,
    updateTrainer
} = require('../controllers/trainer_controller')

const router =express.Router()



//GET all Trainer
router.get('/', getTrainer)

//POST a new Trainer
router.post('/', createTrainer)

// DELETE a Trainer
router.delete('/:id', deleteTrainer)

// UPDATE a Trainer
router.patch('/:id', updateTrainer)

module.exports = router
