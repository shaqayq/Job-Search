import React,{useState , useEffect} from 'react'
import {BsBookmarkHeart} from 'react-icons/bs'

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

  const jobs_detail = props.details;
  const [saveJob, setsaveJob] = useState({
    title: '',
    role: '',
    company_name: '',
    employment_type: '',
    date_posted: '',
    remote: '',
    url: '',
    location: ''
  });

  const getJobs = (job) => {
    setsaveJob((prevJob) => ({
      ...prevJob,
      ...job
    }));
  };
  

  const addJobs = (e) => {
    e.preventDefault();
    getJobs(jobs_detail);
  };

  useEffect(() => {
    console.log(saveJob);
  }, [saveJob]);


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
            <a onClick={addJobs}>
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
         
         
         <a href={url} target='_blank'> <button className='btn btn-sm btn-info'>Apply</button></a>
       
         </section>
        </div>
       

      
    </>
  )
}
