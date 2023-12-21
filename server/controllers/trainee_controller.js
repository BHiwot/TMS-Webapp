const Trainee = require('../models/trainee_model')
const mongoose = require('mongoose')


// get all Trainee
const getTrainee = async (req, res) => {
    const trainee = await Trainee.find({})
    
    res.status(200).json(trainee)
}

// create  Trainee
const createTrainee = async (req, res) => {
    
    const {firstName, middleName, lastName, orgName, traineePhone, traineePosition, schedule} = req.body
    

    // add doc to db
    try {
        const trainee = await Trainee.create({firstName, middleName, lastName, orgName, traineePhone, traineePosition, schedule})
        
        res.status(200).json(trainee)
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
}

// delete a Trainee
const deleteTrainee = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such Trainee'})
    }

    const trainee = await Trainee.findOneAndDelete({_id: id})
    
    if (!trainee) {
        return res.status(400).json({error: 'No such Trainee'})
    }

    res.status(200).json(trainee)
}

// update a Trainee
const updateTrainee = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such Trainee'})
    }


    const trainee = await Trainee.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    
    if (!trainee) {
        return res.status(400).json({error: 'No such Trainee'})
    }

    res.status(200).json(trainee)
}

module.exports = {
    getTrainee,
    createTrainee,
    deleteTrainee,
    updateTrainee
}
