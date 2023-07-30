import React,{useEffect} from 'react'
import JobCard from './jobs/jobCard'
import { useSelector, useDispatch } from 'react-redux'
import { usePagination } from './pagination/PaginationUtils'
import Pagination from './pagination/Pagination'
import Container from '../layouts/container'
export default function SavedJob() {

    const dispatch = useDispatch()
    const jobs = useSelector(state => state.jobs)
    const saved_jobs = jobs?.data
    const {currentPage, jobsPerPage, currentJobs, paginate } = usePagination(1,8,saved_jobs)

   const filter_job = saved_jobs.filter((val)=> val.save === true)


  return (
    <>
    <Container>
        <div className='saved_job'>
            <h1 id='saved_title'>Your jobs</h1>
            {filter_job.map((job)=>{
               return <JobCard details={job} key={job.id}/>
            })
            }

            <Pagination
                jobsPerPage={jobsPerPage}
                totalJobs={filter_job.length}
                paginate={paginate}
                currentNumber={currentPage}
             />
        </div>
    </Container>
    </>
  )
}
