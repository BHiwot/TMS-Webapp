const Course = require('../models/courses_model')
const mongoose = require('mongoose')


// get all courses
const getCourse = async (req, res) => {
    const courses = await Course.find({}).sort({createdAt: -1})
    
    res.status(200).json(courses)
}

// create all Course
const createCourse = async (req, res) => {
    const {courseName} = req.body

    // add doc to db
    try {
        const course = await Course.create({courseName})
        res.status(200).json(course)
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
}

// delete all Course
const deleteCourse = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such Course'})
    }

    const course = await Course.findOneAndDelete({_id: id})
    
    if (!course) {
        return res.status(400).json({error: 'No such Course'})
    }

    res.status(200).json(course)
}

// update all course
const updateCourse = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such Course'})
    }


    const course = await Course.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    
    if (!course) {
        return res.status(400).json({error: 'No such Course'})
    }

    res.status(200).json(course)
}

module.exports = {
    getCourse,
    createCourse,
    deleteCourse,
    updateCourse
}
