import { useState } from 'react'



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
   
    <form className="create" onSubmit={handleSubmit}> 

      <h3>Add a New Trainee</h3>

      <label>First Name:</label>
      <input 
        type="text" 
        onChange={(e) => setFname(e.target.value)} 
        value={firstName}
      />
      <label>Middle Name:</label>
      <input 
        type="text" 
        onChange={(e) => setMname(e.target.value)} 
        value={middleName}
      />
      <label>Last Name:</label>
      <input 
        type="text" 
        onChange={(e) => setLname(e.target.value)} 
        value={lastName}
      />

<label>Organization Name:</label>
      <input 
        type="text" 
        onChange={(e) => setOrg(e.target.value)} 
        value={orgName}
      />

<label>Trainee Phone No:</label>
      <input 
        type="text" 
        onChange={(e) => setPhone(e.target.value)} 
        value={traineePhone}
      />
      <label>Trainee Position :</label>
      <input 
        type="text" 
        onChange={(e) => setPos(e.target.value)} 
        value={traineePosition}
      />

<label>Training Schedule :</label>
      <input 
        type="text" 
        onChange={(e) => setSch(e.target.value)} 
        value={schedule}
      />

      

      <button>Add </button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default TraineeForm