import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Schedules = () => {
  const [schedules, setSch] = useState([])

  useEffect(() => {
    const fetchSche = async () => {
      const response = await fetch('/scheduleRoutes/')
      const json = await response.json()

      if (response.ok) {
        setSch(json)
      }
    }

    fetchSche()
  }, [])
  return (
    <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Schedule </h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="# ">Home</a></li>
              <li className="breadcrumb-item active">Schedule List</li>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Schedule</h3>
              </div>
              {/* /.card-header */}
              <br />
              <div class="col-sm-5  right">
          <Link to="/ScheduleForm"><Button variant="primary" >
          Register Schedule 
            </Button></Link>
           </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>                  
                    <tr>
                      <th style={{width: 10}}>#</th>
                      <th>Course</th>
                      <th>Trainer</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Location</th>
                      <th>Session</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                {
            schedules.map(schedule => {
              return <tr>
                <td></td>
                <td>{schedule.course} </td>
                <td>{schedule.trainer}</td>
                <td>{schedule.startDate}</td>
                <td>{schedule.endDate}</td>
                <td>{schedule.room}</td>
                
                <td>
                <Link
                    className="btn btn-primary btn-sm me-2"
                    to={"/Session/" + schedule._id}
                  >
                    Create Session
                  </Link>
                             
                            </td>
              </tr>
            })
          }
                </tbody>
                </table>
              </div>
              {/* /.card-body */}
              <div className="card-footer clearfix">
                <ul className="pagination pagination-sm m-0 float-right">
                  <li className="page-item"><a className="page-link" href="# ">«</a></li>
                  <li className="page-item"><a className="page-link" href="# ">1</a></li>
                  <li className="page-item"><a className="page-link" href="# ">2</a></li>
                  <li className="page-item"><a className="page-link" href="# ">3</a></li>
                  <li className="page-item"><a className="page-link" href="# ">»</a></li>
                </ul>
              </div>
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
export default Schedules;
