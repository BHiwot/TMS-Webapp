//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import Layout from "./pages/Layout";
//import {Home, Course, Schedule, Trainer, Trainee} from './pages/home'
import Home from './pages/home'
import Course from './pages/Course'

import Trainer from './pages/Trainer'
import Trainee from './pages/Trainee'
import Schedules from './pages/Schedules'
import Navbar from './components/Navbar'


function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Course" element={<Course/>} />
              <Route path="/Schedules" element={<Schedules/>} />
              <Route path="/Trainer" element={<Trainer/>} />
              <Route path="/Trainee" element={<Trainee/>} />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
