import React from 'react'
import '../style/navbar.css'
import { Link } from 'react-router-dom'

import logo from '../img/logo.png'
export default function Navbar() {
  return (
    <>
        <div className='navbar'>
            <div>
                <a href='/'><img src={logo} alt='logo' id='logo'/></a>
            </div>

            <div id='social'>
            <Link to='/'>
                  <p>Home</p>
             </Link>
              <Link to='/about'>
                  <p>About us</p>
             </Link>
             <Link to='/your_jobs'>
                  <p>Your Jobs</p>
             </Link>
             <Link to='/your_jobs'>
                 <p>Contact</p>
             </Link>
          
            

            </div>
        </div>
    </>
  )
}
