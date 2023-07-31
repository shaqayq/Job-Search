import React from 'react'
import JobCard from '../jobs/jobCard'
import Pagination from '../pagination/Pagination'
import { usePagination } from '../pagination/PaginationUtils';
export default function Result(props) {
  
  const jobs_length = props.result.length;
  const {currentPage, jobsPerPage, currentJobs, paginate } = usePagination(1,6,props.result)

  return (
    <>
       <div className='col-lg-8'>
       <div className='result '>
          {props.dataLength === 0 ? <h1 id='alert'>No Result</h1> :
          currentJobs.map((element) => {
          return <JobCard key={element.id} details={element} save={true}/>
        })}
     
        </div>
        <Pagination
        jobsPerPage={jobsPerPage}
        totalJobs={jobs_length}
        paginate={paginate}
        currentNumber={currentPage}
      />  
       </div>
    
    </>
  )
}
