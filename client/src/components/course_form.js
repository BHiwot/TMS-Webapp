import { useState } from 'react'

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
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Course</h3>

      <label>Course Name:</label>
      <input 
        type="text" 
        onChange={(e) => setCour(e.target.value)} 
        value={courseName}
      />

      

      <button>Add </button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default CourseForm