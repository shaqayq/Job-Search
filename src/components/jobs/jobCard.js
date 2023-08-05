import React from 'react'
import { useDispatch } from 'react-redux'
import {BsBookmarkHeart} from 'react-icons/bs'

import {FcHome, FcOrganization} from 'react-icons/fc'
import { saveJob  } from '../../store/jobsReducer'

export default function JobCard(props) {

  const {id, role, company_name, employment_type, date_posted,remote,url ,location} = props.details
  const companyInitial = company_name.charAt(0);
  
  const {save} = props
  
  const dispatch = useDispatch()

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const randomBackgroundColor = getRandomColor();


  const saveJobs = () => {
    
    dispatch(saveJob(id));
  };



  return (
    <>
      <div className='card'>  
         <section id="title">
            <div id='mobile-title'>
              
            <h1 className='company_initial' style={{backgroundColor: randomBackgroundColor}}>{companyInitial}</h1>
            <span id='mobile-bookmark'>
              {!save ? 
                <></> :
                 <span onClick={()=>saveJobs()}>
                 <i><BsBookmarkHeart/></i>
                 </span>
              }
            </span>
            </div>
            <span>
            <h6>{role}</h6>
           
            <p id='post-date'>{date_posted}</p>
            </span>
            <span id='desktop-bookmark'>
              {!save ? 
                <></> :
                 <span  onClick={()=>saveJobs()}>
                 <i><BsBookmarkHeart/></i>
                 </span>
              }
            </span>
         </section>
             <hr/>
         <section id='details'> 
            <p><b>Company: </b>{company_name}</p>
             <p>
            <b>location:</b>{remote ? <i>Remote <FcHome/></i> : <span>Onsite ({location})<i><FcOrganization/></i></span> }   
            </p>
         
            <p>
              <b>Type:</b> {employment_type != null ? employment_type : 'Part_time'}
            </p>
         
         
         <a href={url} target='_blank' rel="noreferrer"> <button className='btn btn-sm btn-info'>Apply</button></a>
       
         </section>
        </div>
       

      
    </>
  )
}
