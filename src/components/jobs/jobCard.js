import React from 'react'
import photo from '../../img/img1.jpg'
import {FaGithub} from 'react-icons/fa'

export default function JobCard() {
  return (
    <>
        <div className='card'>
            <i><FaGithub/></i>
         <section id="title">
            <img src={photo} id='comapany_logo'/>
            <h4>Web Developer</h4>
            <p>2023-10-06</p>
         </section>

         <section id='details'> 
            <p><b>Parsoft </b>(remote)</p>
            
           <p>I have studied Computer Science and Engineering.
             I am an enthusiastic and social person who loves
              to take up new challenges and learn new skills.
          </p>
         
          <button className='btn btn-sm btn-primary'>Apply</button>
         </section>
        </div>
    </>
  )
}
