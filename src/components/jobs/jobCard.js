import React from 'react'
import {BsBookmarkHeart} from 'react-icons/bs'
import {FaBookmark} from 'react-icons/fa'
import {FcHome, FcOrganization} from 'react-icons/fc'

export default function JobCard(props) {

  const {id, role, company_name, employment_type, date_posted,remote,url ,location} = props.details
  const companyInitial = company_name.charAt(0);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const randomBackgroundColor = getRandomColor();

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
            <a href='/'>
              <i><BsBookmarkHeart/></i></a>
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
         
         
         <a href={url}> <button className='btn btn-sm btn-warning'>Apply</button></a>
          <a href={id}><button className='btn btn-sm btn-info'>Show</button></a>
         </section>
        </div>
       

      
    </>
  )
}
