
  //import { useState } from 'react'
import React, { useState, useEffect } from 'react'

export default function TraineeForm() {
    const [firstName, setFname]      = useState('')
    const [middleName, setMname]     = useState('')
    const [lastName, setLname]       = useState('')
    const [orgName, setOrg]          = useState('')
    const [traineePhone, setPhone]   = useState('')
    const [traineePosition, setPos]  = useState('')
    const [courseRequest, setSelectedValue] = useState('');
    const [courses, setOptions]      = useState([]);
    const [error, setError]          = useState(null)
  
    useEffect(() => {
        fetch('/courseroutes/')
          .then((data) => data.json())
          .then((data) => setOptions(data));
        
        })

    const handleSelectChange = (event) => {
            setSelectedValue(event.target.value);
                      //settSelectedValue(event.target.value);
          };
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      const trainee = {firstName, middleName, lastName, orgName, traineePhone, traineePosition, courseRequest }
      
      const response = await fetch('/traineeRoutes', {
        method : 'POST',
        body   : JSON.stringify(trainee),
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
        setFname('')
        setMname('')
        setLname('')
        setOrg('')
        setPhone('')
        setPos('')
        setSelectedValue('')
    
  
      
        console.log('New Trainee added:', json)
      }
  
    }
  
  return (
    <div>
  <div     className = "content-wrapper">
  <section className = "content-header">
  <div     className = "container-fluid">
  <div     className = "row mb-2">
  <div     className = "col-sm-6">
          <h1>Trainee Registration </h1>
        </div>
        <div className = "col-sm-6">
        <ol  className = "breadcrumb float-sm-right">
        <li  className = "breadcrumb-item"><a href = "#">Home</a></li>
        <li  className = "breadcrumb-item active">Trainee Registration</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  <section className = "content">
  <div     className = "container-fluid">
  <div     className = "card card-default">
  <div     className = "card-header">
  <h3      className = "card-title">Trainee Registration</h3>
  <div     className = "card-tools">
  <button  type      = "button" className = "btn btn-tool" data-card-widget = "collapse">
  <i       className = "fas fa-minus" />
            </button>
            <button type      = "button" className = "btn btn-tool" data-card-widget = "remove">
            <i      className = "fas fa-times" />
            </button>
          </div>
        </div>
        <form onSubmit  = {handleSubmit} onsubmit="myFunctionWithFetch() return false;">
        <div  className = "card-body">
        <div  className = "row">
        <div  className = "col-md-6">
        <div  className = "form-group">
                <label>First Name</label>
                <input type  = "text" className = "form-control" id = "fname" placeholder = "Enter First Name"  onChange = {(e) => setFname(e.target.value)}
                       value = {firstName}/>
              </div>
              
              <div className = "form-group">
                <label>Middle Name</label>
                <input type  = "text" className = "form-control" id = "mname" placeholder = "Enter Middle Name"  onChange = {(e) => setMname(e.target.value)}
                       value = {middleName}/>
              </div>
            </div>
            
            <div className = "col-md-6">
            <div className = "form-group">
                <label>Phone Number</label>
                <input type  = "Number" className = "form-control" id = "phone" placeholder = "Enter Phone"  onChange = {(e) => setPhone(e.target.value)}
                       value = {traineePhone}/>
              </div>
              <div className = "form-group">
                <label>Position</label>
                <div   className = "select2-purple">
                <input type      = "text" className = "form-control" id = "position" placeholder = "Enter Trainee Position"  onChange = {(e) => setPos(e.target.value)}
                       value     = {traineePosition}/>
                </div>
            </div>
          </div>
          
          <div className = "row">
          <div className = "col-12 col-sm-6">
          <div className = "form-group">
                <label>Last Name</label>
                <input type  = "text" className = "form-control" id = "lname" placeholder = "Enter Last Name"  onChange = {(e) => setLname(e.target.value)}
                       value = {lastName}/>
              </div>
              <div className = "form-group">
                <label>Organization</label>
                <input type  = "text" className = "form-control" id = "organ" placeholder = "Enter Organization"  onChange = {(e) => setOrg(e.target.value)}
                       value = {orgName}/>
                    
              </div>
              
            </div>
            <div className = "col-12 col-sm-6"> 
              <div className = "form-group">
                <label>Course</label>
                <div    className = "select2-purple">
                <select className = "form-control select2"  >
                <option value = "">Select Course</option>
          {courses.map((course, i) => (
                <option key = {i} value = {course.courseName}>
                  {course.courseName}
                </option>
                ))} 
                </select>
               
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div    className = "card-footer">
        <button type      = "submit" className = "btn btn-primary">Submit</button>
      {error && <div className="error">{error}</div>}
        </div>
        </form>
      </div>
    </div>
  </section>
</div>

    </div>
  )
}
