import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    <form       onSubmit  = {handleSubmit}>
    <Form.Group className = "mb-3" controlId = "trainer">
          <Form.Label>Trainer Name</Form.Label>
          <Form.Control type  = "text" placeholder = "Trainer"  onChange = {(e) => setTrain(e.target.value)}
                        value = {trainerName}/>
          </Form.Group>  

          <Button variant = "primary" type = "submit">
              Submit
          </Button>
          {error && <div className="error">{error}</div>}
    </form>
  )
}

export default TrainerForm