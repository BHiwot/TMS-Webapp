import { useState } from 'react'

const OrgForm = () => {
  const [organame, setOrg] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const organization = {organame}
    
    const response = await fetch('/api/routes', {
      method: 'POST',
      body: JSON.stringify(organization),
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
      setOrg('')
    
      console.log('New Organization added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Organization</h3>

      <label>Organization Name:</label>
      <input 
        type="text" 
        onChange={(e) => setOrg(e.target.value)} 
        value={organame}
      />

      

      <button>Add </button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default OrgForm