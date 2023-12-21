const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchedSchema = new Schema({
 
    course: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    trainer: {
        type: String,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('Schedule', SchedSchema)
