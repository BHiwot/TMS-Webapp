const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
 
    scheduleId: {
        type: String,
        required: true
    },
    traineeList: {
        type: Array,
        required: true
    },
 
}, { timestamps: true })


module.exports = mongoose.model('Session', SessionSchema)
