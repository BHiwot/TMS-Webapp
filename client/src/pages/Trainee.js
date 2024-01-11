//import TraineeForm from "../components/trainee_form"
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Trainee = () => {
  const [trainees, setTrainee] = useState([])

  useEffect(() => {
    const fetchTrainee = async () => {
      const response = await fetch('/traineeRoutes/')
      const json = await response.json()

      if (response.ok) {
        setTrainee(json)
      }
    }

    fetchTrainee()
  }, [])
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Registered Trainee List </h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Trainee List</li>
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
                  <h3 className="card-title">Trainee</h3>
                </div>
                {/* /.card-header */}
                <br />
                <div class="col-sm-5  right">
            <Link to="/TraineeForm"><Button variant="primary" >
            Register Trainee 
              </Button></Link>
             </div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>                  
                      <tr>
                        <th style={{width: 10}}>#</th>
                        <th>Full Name</th>
                        <th>Organization</th>
                        <th>Phone Number</th>
                        <th>Position</th>
                        <th>Course</th>
                        <th>Action</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                  {
              trainees.map(trainee => {
                return <tr>
                  <td></td>
                  <td>{trainee.firstName} {trainee.middleName} {trainee.lastName}</td>
                  <td>{trainee.orgName}</td>
                  <td>{trainee.traineePhone}</td>
                  <td>{trainee.traineePosition}</td>
                  <td>{trainee.courseRequest}</td>
                  
                  <td>
                                  <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
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
                    <li className="page-item"><a className="page-link" href="#">«</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">»</a></li>
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
export default Trainee;