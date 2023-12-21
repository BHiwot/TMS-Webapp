import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/course">Course</Link>
          </li>
          <li>
            <Link to="/schedule ">Schedule</Link>
          </li>
          <li>
            <Link to="/trainer ">Trainer</Link>
          </li>
          <li>
            <Link to="/trainee ">Trainee</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;