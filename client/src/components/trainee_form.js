import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TraineeForm = () => {
  const [firstName, setFname] = useState('')
  const [middleName, setMname] = useState('')
  const [lastName, setLname] = useState('')
  const [orgName, setOrg] = useState('')
  const [traineePhone, setPhone] = useState('')
  const [traineePosition, setPos] = useState('')
  const [schedule, setSch] = useState('')
  
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const trainee = {firstName, middleName, lastName, orgName, traineePhone, traineePosition, schedule}
    
    const response = await fetch('/traineeroutes', {
      method: 'POST',
      body: JSON.stringify(trainee),
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
      setSch('')

    
      console.log('New Trainee added:', json)
    }

  }

  return (
   
    <form  onSubmit={handleSubmit}> 
       <Form.Group className = "mb-3" controlId = "fname">
          <Form.Label>First Name </Form.Label>
          <Form.Control type  = "text" placeholder = "First Name"  onChange = {(e) => setFname(e.target.value)}
                    value = {firstName}/>
          </Form.Group> 
       <Form.Group className = "mb-3" controlId = "mname">
          <Form.Label>Middle Name </Form.Label>
          <Form.Control type  = "text" placeholder = "Middle Name"  onChange = {(e) => setMname(e.target.value)}
                    value = {middleName}/>
          </Form.Group> 
        <Form.Group className = "mb-3" controlId = "mname">
          <Form.Label>Last Name </Form.Label>
          <Form.Control type  = "text" placeholder = "Last Name"  onChange = {(e) => setLname(e.target.value)}
                    value = {lastName}/>
          </Form.Group>
      <Form.Group className = "mb-3" controlId = "org">
          <Form.Label>Organization Name</Form.Label>
          <Form.Control type  = "text" placeholder = "Organization"  onChange = {(e) => setOrg(e.target.value)}
                    value = {orgName}/>
          </Form.Group>
       <Form.Group className = "mb-3" controlId = "phone">
          <Form.Label>Trainee Phone</Form.Label>
          <Form.Control type  = "Number" placeholder = "Trainee Phone"  onChange = {(e) => setPhone(e.target.value)}
                    value = {traineePhone}/>
          </Form.Group>
      <Form.Group className = "mb-3" controlId = "position">
          <Form.Label>Position</Form.Label>
          <Form.Control type  = "text" placeholder = "Position"  onChange = {(e) => setPos(e.target.value)}
                    value = {traineePosition}/>
          </Form.Group>
          <Button variant = "primary" type = "submit">
              Submit
          </Button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default TraineeForm