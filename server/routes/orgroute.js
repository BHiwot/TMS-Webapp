const express = require('express')
const {
    getOrg,
    createOrg,
    deleteOrg,
    updateOrg
} = require('../controllers/orgController')

const router =express.Router()



//GET all organization
router.get('/', getOrg)

//POST a new organization
router.post('/', createOrg)

// DELETE a organization
router.delete('/:id', deleteOrg)

// UPDATE an organization
router.patch('/:id', updateOrg)

module.exports = router