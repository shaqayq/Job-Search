import React from 'react'
import logo from '../img/logo.png'
import '../style/footer.css'
import {FaGithub , FaLinkedinIn , FaTwitter } from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
export default function Footer() {
  return (
    <>
    <div className='footer'>
        
            <img src={logo} alt='foo_logo' id='foo'/>
        
        <div>
          <h4>Follow us:</h4>
          <ul id='foo_social'>
            <li><a href='/'><FaGithub/></a></li>
            <li><a href='/'><FaLinkedinIn/></a></li>
            <li><a href='/'><FaTwitter/></a></li>
          </ul>
        </div>

        <div id='contact'>
        <h4>Contact:</h4>
         <span> 
          <i><SiGmail/> </i> 
          adbc.der@gmail.com
          </span>
        </div>
    </div>
    </>
  )
}
