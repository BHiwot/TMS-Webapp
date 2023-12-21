const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourSchema = new Schema({

    courseName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Course', CourSchema)