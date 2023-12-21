const Trainer = require('../models/trainer_model')
const mongoose = require('mongoose')


// get all Trainer
const getTrainer = async (req, res) => {
    const trainer = await Trainer.find({})
    
    res.status(200).json(trainer)
}

// create  Trainer
const createTrainer = async (req, res) => {
    
    const {trainerName} = req.body
    

    // add doc to db
    try {
        const trainer = await Trainer.create({trainerName})
        
        res.status(200).json(trainer)
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
}

// delete a Trainer
const deleteTrainer = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such Trainer'})
    }

    const trainer = await Trainer.findOneAndDelete({_id: id})
    
    if (!trainer) {
        return res.status(400).json({error: 'No such Trainer'})
    }

    res.status(200).json(trainer)
}

// update a Trainer
const updateTrainer = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such Trainer'})
    }


    const trainer = await Trainer.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    
    if (!trainer) {
        return res.status(400).json({error: 'No such Trainer'})
    }

    res.status(200).json(trainer)
}

module.exports = {
    getTrainer,
    createTrainer,
    deleteTrainer,
    updateTrainer
}
