import React from 'react'
import photo from '../../img/img1.jpg'
import {FaBookmark} from 'react-icons/fa'

export default function JobCard(props) {

  const {id, role, company_name, employment_type, date_posted,logo,remote,url} = props.details
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
      <div className='lists'>

      <div className='card'>  
         <section id="title">
            {/* <img src={logo} id='comapany_logo ' alt = 'jobLogo'/> */}
            <h1 className='company_initial' style={{backgroundColor: randomBackgroundColor}}>{companyInitial}</h1>
            <span>
            <h5>{role}</h5>
            <p id='post-date'>{date_posted}</p>
            </span>
            <a href='/'>
              <i><FaBookmark/></i></a>
         </section>

         <section id='details'> 
            <p><b>{company_name} </b>(remote:{remote})</p>
            
           <p>I have studied Computer Science and Engineering.
             I am an enthusiastic and social person who loves
              to take up new challenges and learn new skills.
          </p>
         
         <a href={url}> <button className='btn btn-sm btn-warning'>Apply</button></a>
          <button className='btn btn-sm btn-info'>Show</button>
         </section>
        </div>
       

      </div>
    </>
  )
}
