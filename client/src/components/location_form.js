import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LocationForm = () => {
  const [trainingArea, setArea] = useState('')
  const [roomNo, setRoom] = useState('')
  const [roomCapacity, setCap] = useState('')
  
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const location = {trainingArea, roomNo, roomCapacity}
    
    const response = await fetch('/locationRoutes', {
      method: 'POST',
      body: JSON.stringify(location),
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
      setArea('')
      setRoom('')
      setCap('')

    
      console.log('New Location added:', json)
    }

  }

  return (
   
    <form  onSubmit={handleSubmit}> 
       <Form.Group className = "mb-3" controlId = "area">
          <Form.Label>Training Area </Form.Label>
          <Form.Control type  = "text" placeholder = "Area"  onChange = {(e) => setArea(e.target.value)}
                    value = {trainingArea}/>
          </Form.Group> 
       <Form.Group className = "mb-3" controlId = "room">
          <Form.Label>Room </Form.Label>
          <Form.Control type  = "Number" placeholder = "Room"  onChange = {(e) => setRoom(e.target.value)}
                    value = {roomNo}/>
          </Form.Group> 
        <Form.Group className = "mb-3" controlId = "roomcap">
          <Form.Label>Room Capacity </Form.Label>
          <Form.Control type  = "Number" placeholder = "Room Capacity"  onChange = {(e) => setCap(e.target.value)}
                    value = {roomCapacity}/>
          </Form.Group>
      
          <Button variant = "primary" type = "submit">
              Submit
          </Button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default LocationForm