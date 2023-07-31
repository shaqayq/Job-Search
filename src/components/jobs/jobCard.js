import React,{useState , useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {BsBookmarkHeart} from 'react-icons/bs'
import {FaBookmark} from 'react-icons/fa'
import {FcHome, FcOrganization} from 'react-icons/fc'
import { saveJob , unsaveJob } from '../../store/jobsReducer'

export default function JobCard(props) {

  const {id, role, company_name, employment_type, date_posted,remote,url ,location} = props.details
  const companyInitial = company_name.charAt(0);
  
  const {save} = props
  console.log(save);
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

  const removeJobs =(id) =>{
    dispatch(unsaveJob(id))
  }


  return (
    <>


      <div className='card'>  
         <section id="title">
          
            <h1 className='company_initial' style={{backgroundColor: randomBackgroundColor}}>{companyInitial}</h1>
            <span>
            <h6>{role}</h6>
            <p id='post-date'>{date_posted}</p>
            </span>
            <span>
              {!save ? 
                <></> :
                 <a onClick={()=>saveJobs()}>
                 <i><BsBookmarkHeart/></i>
                 </a>
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
         
         
         <a href={url} target='_blank'> <button className='btn btn-sm btn-info'>Apply</button></a>
       
         </section>
        </div>
       

      
    </>
  )
}
