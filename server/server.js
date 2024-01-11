
//Import npm packages
//require('dotenv').config()
const dotenv = require('dotenv')
//const dotenv = require('dotenv')
//dotenv.config({path:__dirname+'/.env'});
const { error } = require('console');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
//const signupRoutes = require('./routes/signup_route')
//const orgnRoutes = require('./routes/orgroute')
const orgnRoutes = require('./routes/orgroute')
const courseRoutes = require('./routes/course_routes')
const trainerRoutes = require('./routes/trainer_routes')
const scheduleRoutes = require('./routes/schedule_routes')
const traineeRoutes = require('./routes/trainee_routes')
const locationRoutes = require('./routes/location_routes')


dotenv.config()
// express app
const app = express()

// middleware
app.use(express.json())



// Routes
//app.use("/home",homeroute) 
//app.use('/signuprout', signupRoutes)
app.use('/routes', orgnRoutes)
app.use('/courseroutes', courseRoutes) 
app.use('/trainerroutes', trainerRoutes)
app.use('/scheduleroutes', scheduleRoutes)
app.use('/traineeroutes', traineeRoutes)
app.use('/locationRoutes', locationRoutes)
//app.use("view engine","jade");

// connect to db

mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        app.listen(process.env.PORT, () => {
         console.log(`Connected to db and listening on port`, process.env.PORT)
        })
    })
    .catch((error) => {
    console.log(error)
    })

// HTTP request logger
 // app.use(morgan('tiny'));







