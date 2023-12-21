const mongoose = require('mongoose');
const Schema = mongoose.Schema

const orgSchema = new Schema({
    organame: {
        type: String,
        required: true
    }
  
},  { timestamps: true })

// const org = mongoose.model("org", OrgSchema);
// module.exports = org;
module.exports = mongoose.model('Organization', orgSchema)