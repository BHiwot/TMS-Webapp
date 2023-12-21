const express = require('express')
const {
    getCourse,
    createCourse,
    deleteCourse,
    updateCourse
} = require('../controllers/course_controller')

const router =express.Router()



//GET all Course
router.get('/', getCourse)

//POST a new Course
router.post('/', createCourse)

// DELETE a organization
router.delete('/:id', deleteCourse)

// UPDATE an organization
router.patch('/:id', updateCourse)

module.exports = router