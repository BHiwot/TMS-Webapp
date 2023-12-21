import { useState } from 'react'

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
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Trainer</h3>

      <label>Trainer Name:</label>
      <input 
        type="text" 
        onChange={(e) => setTrain(e.target.value)} 
        value={trainerName}
      />

      

      <button>Add </button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default TrainerForm