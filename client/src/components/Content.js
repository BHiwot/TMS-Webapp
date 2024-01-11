import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
//import Dashboards from './Dashboards'
import Course from '../pages/Course'
import Dashboard from '../pages/Dashboard'
import Trainer from '../pages/Trainer'
import Trainee from '../pages/Trainee'
import Schedule from '../pages/Schedule'
import Location from '../pages/Location'
import Courseform from '../pages/Courseform'
import TrainerForm from '../pages/Trainerform'
import LocationForm from '../pages/LocationForm'
import TraineeForm from '../pages/TraineeForm'
import Session from '../pages/Session'


export default function Content() {
  return (
    <Routes>
        <Route exact path='/' element={<Dashboard/>}/>
        <Route  path='/Course' element={<Course/>}/>
        <Route  path='/Trainer' element={<Trainer/>}/>
        <Route  path='/Trainee' element={<Trainee/>}/>
        <Route  path='/Location' element={<Location/>}/>
        <Route  path='/Schedule' element={<Schedule/>}/>
        <Route  path='/Courseform' element={<Courseform/>}/>
        <Route  path='/TrainerForm' element={<TrainerForm/>}/>
        <Route  path='/LocationForm' element={<LocationForm/>}/>
        <Route  path='/TraineeForm' element={<TraineeForm/>}/>
        <Route  path='/Session/:id' element={<Session/>}/>
    </Routes>
  )
}
