import React , {useEffect , useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'

import {fetchJobs} from '../../store/jobsReducer'
import JobCard from './jobCard'
import Pagination from '../Pagination'

export default function List() {

  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(8);

  const dispatch = useDispatch();
  const jobsList = useSelector((state)=>state.jobs)

  useEffect(()=>{
    dispatch(fetchJobs())
  },[] )

  // Get current posts
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobsList.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
   <>
    <div className='job-lists'>
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
