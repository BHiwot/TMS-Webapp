import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
  render() {
    return (
      <div>
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/mof.png" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">TMS</a>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
        <li className="nav-item has-treeview menu-open">
          <Link to="/" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
              
            </p>
          </Link>
          
        </li>
        <li className="nav-item">
        <Link to="/Trainee" className="nav-link">
          <i className="nav-icon fas fa-edit" />
            <p>
            Trainee Registration     
            </p>
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/Schedule" className="nav-link">
          <i className="nav-icon far fa-calendar-alt" />
            <p>
            Schedule     
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <a href="pages/widgets.html" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
            Session     
            </p>
          </a>
        </li>
            
        
           
        <li className="nav-header"><h6>Setting</h6> </li>
        <li className="nav-item">
          <Link to="/Course" className="nav-link">
            <i className="nav-icon far fa-calendar-alt" />
            <p>
            Courses 
            
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Trainer" className="nav-link">
            <i className="nav-icon far fa-image" />
            <p>
            Trainer 
            </p>
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/Location" className="nav-link">
            <i className="nav-icon far fa-image" />
            <p>
            Training Location  
            </p>
          </Link>
        </li>
        
        
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

      </div>
    )
  }
}
