import React , {useState} from 'react'
import { useDispatch } from 'react-redux';
import { fetch_job } from '../../store/searchReducer';
export default function JobSearch() {
    
    const dispatch = useDispatch();
    const [formData , setFormData] = useState({
        title: '',
        source_url:'',
        location_search:'',
        remote:'',
        company_employees:'',
        employment_type:''

    })

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prevData)=>({
            ...prevData ,
            [name]: value

        }))
    }

    const handleSubmit = (e) =>{
       
        e.preventDefault();     
        dispatch(fetch_job(formData))
      }
    
  return (
    <>
     <div className='col-lg-4'>
       
     <form className="job-search-form" onSubmit={handleSubmit}>
     <h3 id='form-title'>Search Your Dream Job</h3>
        <div className="form-group">
            <label htmlFor="search">Title:</label>
            <input type="text" id="search" name="title" placeholder="Search jobs..."  onChange={handleChange} value={formData.title}/>
        </div>
        <div className="form-group">
            <label htmlFor="source-url">Source URL:</label>
            <select id="s" name="source_url" onChange={handleChange} value={formData.source_url}>
                <option value='null'>-----Select Source------</option>
                <option value="google" >www.google.com</option>
                <option value="faceBook" >www.faceBook.com</option>

            </select>
        </div>
        <div className="form-group">
            <label htmlFor="location-search">Location Search:</label>
            <input type="text" id="location_search" name="location_search" placeholder="Enter location..." onChange={handleChange} value={formData.location_search}/>
        </div>
        <div className="form-group">
            <label htmlFor="remote">Remote:</label>
            <select id="remote" name="remote" onChange={handleChange} value={formData.remote} >
            <option >-----Select Your chooice------</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="company-employees">Company Number of Employees:</label>
            <select id="company_employees" name="company_employees" onChange={handleChange} value={formData.company_employees}>
            <option >-----Select Number Of Comany Employees ------</option>
                <option value='1-15'>1-15</option>
                <option value='20-30'>20-30</option>

            </select>
        </div>
        <div className="form-group">
            <label htmlFor="employment-type">Employment Type:</label>
            <select id="employment_type" name="employment_type" onChange={handleChange} value={formData.employment_type}>
            <option>-----Select Your Chooice------</option>
            <option value="full time">Full-time</option>
            <option value="part time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="temporary">Temporary</option>
            <option value="internship">Internship</option>
            </select>
        </div>
        <div className="form-group">
            <button type="submit" id='searchBtn'>Search</button>
        </div>
     </form>
     </div>

    </>
  )
}
