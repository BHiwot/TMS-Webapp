import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm.min';
//import BootstrapTable from 'react-bootstrap-table-next';
import Table from 'react-bootstrap/Table';
import { Button,Modal,Input } from 'react-bootstrap';


const CourDetail = () => {
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
    <div>
    <div class="container mt-3">
    <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
    <div class="row ">
     
     <div class="col-sm-3 mt-5 mb-4 text-gred">
           
        </div>  
        <div class="col-sm-4 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h5><b>Course Details</b></h5></div>
              <div class="col-sm-4 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary" >
                Add New Student
              </Button>
             </div>
           </div>  
           <div class="row">
          <div class="table-responsive " >
           <table class="table table-striped table-hover table-bordered">
   
        <thead>
          <tr>
            <th>
              Course Name
            </th>
            <th>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
            courses.map(course => {
              return <tr>
                <td>{course.courseName}</td>
                <td>
                            <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                            </td>
              </tr>
            })
          }
        </tbody>
      </table>

    </div></div></div></div></div>
  )

}
export default CourDetail
//module.exports = { courDetail };