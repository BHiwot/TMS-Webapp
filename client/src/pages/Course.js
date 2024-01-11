import React, { Component } from 'react'
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Course = () => {
  const [courses, setCour] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/courseroutes/')
      const json = await response.json()

      if (response.ok) {
        setCour(json)
      }
    }

    fetchCourses()
  }, [])

 
  
    return (
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Courses</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Courses</li>
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
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Course List</h3>
            </div>
            {/* /.card-header */}
            <br />
            <div class="col-sm-5 ">
            <Link to="/Courseform"><Button variant="primary" >
                Add Course
              </Button></Link>
             </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>                  
                  <tr>
                    <th style={{width: 10}}>#</th>
                    <th>Course</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {
            courses.map(course => {
              return <tr>
                <td></td>
                <td>{course.courseName}</td>
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

export default Course