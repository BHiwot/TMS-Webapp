import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/"><h1>TMS</h1></Link>
          
          <div className="topnav">
  <a className="active" href="#home">Home</a>
  <a href="/Course">Courses</a>
  <a href="/Schedules">Schedule</a>
  <a href="/Trainer">Trainer</a>
  <a href="/Trainee">Trainee</a>
</div>
        
      </div>
    </header>
  )
}

export default Navbar