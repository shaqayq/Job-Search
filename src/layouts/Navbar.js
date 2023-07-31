import React from 'react'
import '../style/navbar.css'
import { Link } from 'react-router-dom'
import {MdArrowDropDown} from 'react-icons/md'
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
            
            <div className='dropdown'>
                <p>Your Jobs<MdArrowDropDown/></p>
                <div class="dropdown-content">
                    <Link to='/save-jobs'> <p>Saved Jobs</p></Link>
                    <hr></hr>
                    <Link to='/search'> <p>Serach Job</p></Link>
                </div>
            </div>
            
            
             <Link to='/contact'>
                 <p>Contact</p>
             </Link>
          
            

            </div>
        </div>
    </>
  )
}
