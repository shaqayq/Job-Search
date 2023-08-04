import React from 'react'
import '../style/navbar.css'
import { Link , NavLink } from 'react-router-dom'
import {MdArrowDropDown} from 'react-icons/md'
import logo from '../img/logo.png'
export default function Navbar() {
  return (
    <>
        <div className='navbar'>
  <div>
    <a href='/'>
      <img src={logo} alt='logo' id='logo'/>
    </a>
  </div>

  <div id='social'>
    <NavLink exact to='/' activeClassName="active" className="nav-link">
      Home
    </NavLink>
    <NavLink to='/about'  activeClassName="active" className="nav-link">
      <p>About us</p>
    </NavLink>
  
    <div className='dropdown'>
      <p id='drop'>Your Jobs<MdArrowDropDown/></p>
      <div className="dropdown-content">
        <NavLink to='/save-jobs' activeClassName="active" className="nav-link">
          <p>Saved Jobs</p>
        </NavLink>
        <hr></hr>
        <NavLink to='/search' activeClassName="active" className="nav-link">
          <p>Search Job</p>
        </NavLink>
      </div>
    </div>
    
    <NavLink to='/contact' activeClassName="active" className="nav-link">
      <p>Contact</p>
    </NavLink>
  </div>
</div>

    </>
  )
}
