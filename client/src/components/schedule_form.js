//import { useState } from 'react'
import React, { useState, useEffect } from 'react';
//import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const ScheduleForm = () => {
  //const [course, setCour] = useState('')
  const [course, setSelectedValue] = useState('');
  const [courses, setOptions] = useState([]);
  const [startDate, setSdate] = useState('')
  const [endDate, setEdate] = useState('')
  const [trainer, settSelectedValue] = useState('');
  const [trainers, settOptions] = useState([]);
  const [error, setError] = useState(null)
// selectedValue
useEffect(() => {
fetch('/courseroutes/')
  .then((data) => data.json())
  .then((data) => setOptions(data));
fetch('/trainerRoutes/')
  .then((data) => data.json())
  .then((data) => settOptions(data));
})
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    //settSelectedValue(event.target.value);
  };
  const handleSelectChange1 = (event) => {
   // setSelectedValue(event.target.value);
    settSelectedValue(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const schedule = {course, startDate, endDate, trainer}
    
    const response = await fetch('/scheduleRoutes', {
      method: 'POST',
      body: JSON.stringify(schedule),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setSelectedValue('')
      setSdate('')
      setEdate('')
      settSelectedValue('')
    
      console.log('New Schedule added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Schedule</h3>

      <label>Course Name:</label>
      <select  value={course} onChange={handleSelectChange}  >
      <option value="">Select an option</option>
        {courses.map((course, i) => (
                <option key={i} value={course.courseName}>
                  {course.courseName}
                </option>
              ))}
        
      </select>
      <label>Startdate:</label>
      <input 
        type="date" 
        onChange={(e) => setSdate(e.target.value)} 
        value={startDate}
      />

      <label>Enddate:</label>
      <input 
        type="date" 
        onChange={(e) => setEdate(e.target.value)} 
        value={endDate}
      />

      <label>Trainer:</label>
      <select  value={trainer} onChange={handleSelectChange1}  >
      <option value="">Select an Trainer</option>
      {trainers.map((trainer, i) => (
                <option key={i} value={trainer.trainerName}>
                  {trainer.trainerName}
                </option>
              ))}
        
      </select>


      

      <button>Add </button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default ScheduleForm