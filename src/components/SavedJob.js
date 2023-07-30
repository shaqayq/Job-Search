import React,{useEffect} from 'react'
import JobCard from './jobs/jobCard'
import { useSelector, useDispatch } from 'react-redux'
import { usePagination } from './pagination/PaginationUtils'
export default function SavedJob() {

    const dispatch = useDispatch()
    const jobs = useSelector(state => state.jobs)
    const saved_jobs = jobs?.data
    const {currentPage, jobsPerPage, currentJobs, paginate } = usePagination(1,8,all_jobs)

   const filter_job = saved_jobs.filter((val)=> val.save === true)


  return (
    <>
        <div className='saved_job'>
            <h1>Your jobs</h1>
            {filter_job.map((job)=>{
               return <JobCard details={job} key={job.id}/>
            })
            }

            <Pagination
                jobsPerPage={jobsPerPage}
                totalJobs={all_jobs.length}
                paginate={paginate}
                currentNumber={currentPage}
             />
        </div>
    </>
  )
}
