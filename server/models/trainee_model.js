const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TraineeSchema = new Schema({
  
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    orgName: {
        type: String,
        required: true
    },
    traineePhone: {
        type: Number,
        required: true
    },
    traineePosition: {
        type: String,
        required: true
    },
    courseRequest: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Trainee', TraineeSchema)