const Schedule = require('../models/schedule_model')
const mongoose = require('mongoose')


// get all Schedule
const getSchedule = async (req, res) => {
    const schedule = await Schedule.find({})
    
    res.status(200).json(schedule)
}

// create  Schedule
const createSchedule = async (req, res) => {
    
    const {course, startDate, endDate, trainer, room} = req.body
    

    // add doc to db
    try {
        const schedule = await Schedule.create({course, startDate, endDate, trainer, room})
        
        res.status(200).json(schedule)
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
}

// delete a Schedule
const deleteSchedule = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such schedule'})
    }

    const schedule = await Schedule.findOneAndDelete({_id: id})
    
    if (!schedule) {
        return res.status(400).json({error: 'No such schedule'})
    }

    res.status(200).json(schedule)
}

// update a Schedule
const updateSchedule = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such Schedule'})
    }


    const schedule = await Schedule.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    
    if (!schedule) {
        return res.status(400).json({error: 'No such schedule'})
    }

    res.status(200).json(schedule)
}

module.exports = {
    getSchedule,
    createSchedule,
    deleteSchedule,
    updateSchedule
}
