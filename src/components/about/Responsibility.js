import React from 'react'
import Extensive_Job from '../../img/Extensive_Job_Opportunities.jpg'
import User_Friendly from '../../img/User-Friendly-Interface.jpg'
import Personlized from '../../img/Personalized_Experience.png'



export default function Responsibility() {
  return (
   
    <>
      <h5>Why Choose Us:</h5>
      <ul className='responsiblity'>
          <li>
          <p>
            <b>Extensive Job Opportunities:</b> We collaborate with a 
            diverse range of companies, from startups to 
            multinational corporations, offering an extensive array 
            of job opportunities across various industries and sectors. Whatever your field 
            of expertise, we have the right job for you.
         </p>
         <img alt="Extensive_job" src={Extensive_Job}/>
          </li>
          <li id='reverse'>
          <p>
        <b>User-Friendly Interface: </b>Our platform is thoughtfully designed with
          a user-friendly interface, making the job search process intuitive and 
          efficient. With just a few clicks, you can browse through thousands of job
            listings, customize your search, and apply for your dream job in no time.
        </p>
        <img alt="User_Friendly" src={User_Friendly}/>
          </li>
          <li>
          <p>
          <b>Personalized Experience:</b> We understand that every job seeker is unique,
           with specific skills and preferences. Our advanced algorithms and personalized 
           recommendations ensure that you receive tailored job suggestions that match your
            qualifications and aspirations.
        </p>
        <img alt="Personlized" src={Personlized}/>
          </li>
          </ul>
    </>
  )
}
