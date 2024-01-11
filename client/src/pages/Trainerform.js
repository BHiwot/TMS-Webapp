import React  from 'react';
//import LocationForm from "../components/location_form"
import { useState } from 'react'
//import TrainerForm from ""
const TrainerForm = () => {
    const [trainerName, setTrain] = useState('')
    const [error, setError] = useState(null)
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      const trainer = {trainerName}
      
      const response = await fetch('/trainerRoutes', {
        method: 'POST',
        body: JSON.stringify(trainer),
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
        setTrain('')
      
        console.log('New Trainer added:', json)
      }
  
    }
  
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Add New Trainer</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Add New Trainer</li>
              </ol>
            </div>
          </div>
        </div>{/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
            <div className="card card-primary">
  <div className="card-header">
    <h3 className="card-title">Add Trainer</h3>
  </div>
  <form  onSubmit = {handleSubmit}>
    <div className="card-body">
      <div className="form-group">
        <label >Trainer</label>
        <input type="text" className="form-control" id="Trainer" placeholder="Enter Trainer"  onChange = {(e) => setTrain(e.target.value)}
                    value = {trainerName}/>
      </div>

     
     
    
    </div>
    <div className="card-footer">
      <button type="submit" className="btn btn-primary">Submit</button>
      {error && <div className="error">{error}</div>}
    </div>
  </form>
</div>

              {/* /.card */}
              
              {/* /.card */}
            </div>
            {/* /.col */}
           
            {/* /.col */}
          </div>
          {/* /.row */}
       
          {/* /.row */}
          
          {/* /.row */}
        </div>{/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div>
    
    
        )
      }
export default TrainerForm;
