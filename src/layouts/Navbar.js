import React from 'react'
import '../style/navbar.css'

import logo from '../img/logo.png'
export default function Navbar() {
  return (
    <>
        <div className='navbar'>
            <div>
                <a href='/'><img src={logo} alt='logo' id='logo'/></a>
            </div>
            <div id='social'>
           <p>About us</p>
           <p>Your Jobs</p>
           <p>Contact</p>
            

            </div>
        </div>
    </>
  )
}
