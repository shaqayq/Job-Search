import React , {useEffect } from 'react'
import {useDispatch , useSelector} from 'react-redux'

import {fetchJobs} from '../../store/jobsReducer'
import JobCard from './jobCard'
import Pagination from '../pagination/Pagination'
import { usePagination } from '../pagination/PaginationUtils'

export default function List() {

  const dispatch = useDispatch();
  const jobsList = useSelector((state)=>state.jobs)

  const {currentPage, jobsPerPage, currentJobs, paginate } = usePagination(1,8,jobsList)
  
  useEffect(()=>{
    dispatch(fetchJobs())
  },[] )


  return (
   <>
    <div className='job-lists'>
      <h1 id='list-title'>Explore and Apply: Your Next Career Awaits</h1>
    <div className='lists'>
   {  currentJobs.map((element) => {
       return <JobCard key={element.id} details={element}/>
     })}
      </div>
      <Pagination
        jobsPerPage={jobsPerPage}
        totalJobs={jobsList.length}
        paginate={paginate}
        currentNumber={currentPage}
      />
    </div>
    
   </>
  )
}
