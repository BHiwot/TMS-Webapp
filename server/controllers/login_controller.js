const Login = require('../models/signup_model')
const mongoose = require('mongoose')


//
const createUser = async (req, res) => {
    const {email, password} = req.body;
    Login.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
        FormDataModel.create(req.body)
        .then(log_reg_form => res.json(log_reg_form))
        .catch(err => res.json(err))
        }
    })
}
// get user
const getUser = async (req, res) => {
    const {email, password} = req.body;
    Login.findOne({email: email})
    .then(user => {
        if(user){
        // If user found then these 2 cases
             if(user.password === password) {
            res.json("Success");
             }
             else{
                res.json("Wrong password");
             }
        }
    // If user not found then 
       else{
        res.json("No records found! ");
        }
    }
)}



module.exports = {
    createUser,
    getUser
    
}

