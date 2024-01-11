        //import { useState } from 'react'
import React, { useState, useEffect } from 'react';
        //import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormSelect from 'react-bootstrap/FormSelect'


const ScheduleForm = () => {
          //const [course, setCour] = useState('')
  const [course, setSelectedValue]      = useState('');
  const [courses, setOptions]           = useState([]);
  const [startDate, setSdate]           = useState('')
  const [endDate, setEdate]             = useState('')
  const [trainer, settSelectedValue]    = useState('');
  const [trainers, settOptions]         = useState([]);
  const [room, setLocSelectedValue] = useState('');
  const [locations, setLocation]        = useState([]);
  const [error, setError]               = useState(null)
        // selectedValue
useEffect(() => {
fetch('/courseroutes/')
  .then((data) => data.json())
  .then((data) => setOptions(data));
fetch('/trainerRoutes/')
  .then((data) => data.json())
  .then((data) => settOptions(data));
fetch('/locationRoutes/')
  .then((data) => data.json())
  .then((data) => setLocation(data));
})
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
            //settSelectedValue(event.target.value);
  };
  const handleSelectChange1 = (event) => {
           // setSelectedValue(event.target.value);
    settSelectedValue(event.target.value);
  };
  const handleSelectChange2 = (event) => {
    // setSelectedValue(event.target.value);
    setLocSelectedValue(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const schedule = {course, startDate, endDate, trainer, room}
    
    const response = await fetch('/scheduleRoutes', {
      method : 'POST',
      body   : JSON.stringify(schedule),
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
      setLocSelectedValue('')
    
      console.log('New Schedule added:', json)
    }

  }

  return (
    <div id="page-wrapper">
		
    <form       onSubmit  = {handleSubmit} onsubmit="myFunctionWithFetch(); return false;">
    <Form.Group className = "mb-3" controlId = "course" size = "lg">
    <Form.Label>Course </Form.Label>       
    <Form.Select value = {course} onChange = {handleSelectChange} aria-label = "Default select example">

          <option value = "">Select Course</option>
          {courses.map((course, i) => (
                <option key = {i} value = {course.courseName}>
                  {course.courseName}
                </option>
                ))} 
       </Form.Select>     
       </Form.Group>
      <Form.Group className = "mb-3" controlId = "startdate">
      <Form.Label>Start Date </Form.Label>
          <Form.Control type  = "date"   onChange = {(e) => setSdate(e.target.value)}
                        value = {startDate}/>
          </Form.Group> 
      <Form.Group className = "mb-3" controlId = "enddate">
      <Form.Label>End Date </Form.Label>
          <Form.Control type  = "date"   onChange = {(e) => setEdate(e.target.value)}
                        value = {endDate}/>
          </Form.Group>
          <Form.Group className = "mb-3" controlId = "trainer" >
          <Form.Label>Trainer </Form.Label>
      <Form.Select value = {trainer} onChange = {handleSelectChange1} aria-label = "Default select example">
      <option      value = "">Select Trainer</option>
        {trainers.map((trainer, i) => (
               <option key = {i} value = {trainer.trainerName}>
               {trainer.trainerName}
             </option>
                ))}     
       </Form.Select>
       </Form.Group>
       <Form.Group className = "mb-3" controlId = "room">
      <Form.Select value = {room} onChange = {handleSelectChange2} aria-label = "Default select example">
      <option      value = "">Select Room</option>
        {locations.map((location, i) => (
               <option key = {i} value = {location.roomNo}>
               {location.roomNo}
             </option>
                ))}     
       </Form.Select>
       </Form.Group>
       <Button variant = "primary" type = "submit">
              Submit
          </Button>
          {error && <div className="error">{error}</div>}
    </form>
    </div>
  )
}

export default ScheduleForm