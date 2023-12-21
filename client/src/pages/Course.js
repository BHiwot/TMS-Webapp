import React, { useEffect, useState } from "react"

import CourDetail from "../components/course_detail"
import CourseForm from "../components/course_form"

const Course = () => {
  const [courses, setCour] = useState([])

  useEffect(() => {
    const fetchCour = async () => {
      const response = await fetch('/courseroutes/')
      const json = await response.json()

      if (response.ok) {
        setCour(json)
      }
    }

    fetchCour()
  }, [])
//const Course = () => {
  return (
    <div className="home">
      <div className="workouts">
        {courses && courses.map(course => (
          <CourDetail key={course._id} course={course}  />
        ))}
      </div>
      <CourseForm />
    </div>
    );
  }


  
  export default Course