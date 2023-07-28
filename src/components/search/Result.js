import React from 'react'
import JobCard from '../jobs/jobCard'
import Pagination from '../pagination/Pagination'
import { usePagination } from '../pagination/PaginationUtils';
export default function Result(props) {
console.log(props);
 
   const jobs_length = props.result.length;
  const {currentPage, jobsPerPage, currentJobs, paginate } = usePagination(1,4,props.result)

  return (
    <>
        <div className='result col-lg-8'>
          {currentJobs.length === 0 ? <h1 id='alert'>No Result</h1> :
          currentJobs.map((element) => {
          return <JobCard key={element.id} details={element}/>
        })}
        </div>

        <Pagination
        jobsPerPage={jobsPerPage}
        totalJobs={jobs_length}
        paginate={paginate}
        currentNumber={currentPage}
      />
    </>
  )
}
