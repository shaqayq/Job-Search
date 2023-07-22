import React from 'react'
import photo from '../../img/img1.jpg'
import {FaBookmark} from 'react-icons/fa'

export default function JobCard(props) {

  const {role} = props.details
  return (
    <>
      <div className='lists'>

      <div className='card'>  
         <section id="title">
            <img src={photo} id='comapany_logo ' alt = 'jobLogo'/>
            <span>
            <h5>{role}</h5>
            <p id='post-date'>2023-10-06</p>
            </span>
            <a href='/'>
              <i><FaBookmark/></i></a>
         </section>

         <section id='details'> 
            <p><b>Parsoft </b>(remote)</p>
            
           <p>I have studied Computer Science and Engineering.
             I am an enthusiastic and social person who loves
              to take up new challenges and learn new skills.
          </p>
         
          <button className='btn btn-sm btn-warning'>Apply</button>
          <button className='btn btn-sm btn-info'>Show</button>
         </section>
        </div>
       

      </div>
    </>
  )
}
