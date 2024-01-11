import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CourseForm = () => {
  const [courseName, setCour] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const course = {courseName}
    
    const response = await fetch('/courseroutes', {
      method: 'POST',
      body: JSON.stringify(course),
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
      setCour('')
    
      console.log('New Course added:', json)
    }

  }

  return (    
      <Form onSubmit = {handleSubmit}>
  
          <Form.Group className = "mb-3" controlId = "exampleForm.ControlInput1">
          <Form.Label>Course Name</Form.Label>
          <Form.Control type  = "text" placeholder = "Course"  onChange = {(e) => setCour(e.target.value)}
                    value = {courseName}/>
          </Form.Group> 
          

          <Button variant = "primary" type = "submit">
              Submit
          </Button>
          {error && <div className="error">{error}</div>}
      </Form>   
  )
}

export default CourseForm