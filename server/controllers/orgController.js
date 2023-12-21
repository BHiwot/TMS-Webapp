const Organization = require('../models/organModel')
const mongoose = require('mongoose')


// get all organization
const getOrg = async (req, res) => {
    const organizations = await Organization.find({}).sort({createdAt: -1})
    
    res.status(200).json(organizations)
}

// create all organization
const createOrg = async (req, res) => {
    const {organame} = req.body

    // add doc to db
    try {
        const organization = await Organization.create({organame})
        res.status(200).json(organization)
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
}

// delete all organization
const deleteOrg = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such Organization'})
    }

    const organization = await Organization.findOneAndDelete({_id: id})
    
    if (!organization) {
        return res.status(400).json({error: 'No such Organization'})
    }

    res.status(200).json(organization)
}

// update all organization
const updateOrg = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such Organization'})
    }


    const organization = await Organization.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    
    if (!organization) {
        return res.status(400).json({error: 'No such Organization'})
    }

    res.status(200).json(organization)
}

module.exports = {
    getOrg,
    createOrg,
    deleteOrg,
    updateOrg
}
