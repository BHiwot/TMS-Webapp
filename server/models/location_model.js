const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({

    trainingArea: {
        type: String,
        required: true
    },
    roomNo: {
        type: Number,
        required: true
    },
    roomCapacity: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Location', LocationSchema)