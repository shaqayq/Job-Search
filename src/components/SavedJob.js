import React from 'react'
import JobCard from './jobs/jobCard'
import { useSelector} from 'react-redux'
import { usePagination } from './pagination/PaginationUtils'
import Pagination from './pagination/Pagination'
import Container from '../layouts/container'
import '../style/saveJob.css'
export default function SavedJob() {

   
    const jobs = useSelector(state => state.jobs)
    const saved_jobs = jobs?.saved
    const {currentPage, jobsPerPage, currentJobs, paginate } = usePagination(1,4,saved_jobs)



  return (
    <>
    <Container>
        <div className='saved_job'>
            <h1 id='saved_title'>Your jobs</h1>
            
            <div className='lists save_card'>
                {currentJobs.map((job)=>{
                return <JobCard details={job} key={job.id} save={false}/>
                })
                }
            </div>

            <Pagination
                jobsPerPage={jobsPerPage}
                totalJobs={saved_jobs.length}
                paginate={paginate}
                currentNumber={currentPage}
             />
        </div>
    </Container>
    </>
  )
}
