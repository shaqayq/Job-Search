import React , {useEffect } from 'react'
import {useDispatch , useSelector} from 'react-redux'

import {fetchJobs} from '../../store/jobsReducer'
import JobCard from './jobCard'
import Pagination from '../pagination/Pagination'
import { usePagination } from '../pagination/PaginationUtils'
import Loading from '../../layouts/Loading'

export default function List() {

  const dispatch = useDispatch();
  const jobsList = useSelector((state)=>state.jobs)
  const all_jobs = jobsList?.data;
 
  const {delay} = jobsList
   const {currentPage, jobsPerPage, currentJobs, paginate } = usePagination(1,8,all_jobs)
  
  useEffect(()=>{
    dispatch(fetchJobs())
  },[] )


  return (
   <>
    <div className='job-lists'>
      <h1 id='list-title'>Explore and Apply: Your Next Career Awaits</h1>
    <div className='lists'>
     
      {delay &&
       <div id='list_loading'>
       <Loading/>
      </div> }
      
     {!delay && currentJobs.map((element) => {
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
