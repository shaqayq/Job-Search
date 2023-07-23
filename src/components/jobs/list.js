import React , {useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {fetchJobs} from '../../store/jobsReducer'
import JobCard from './jobCard'

export default function List() {

  const dispatch = useDispatch();
  const jobsList = useSelector((state)=>state.jobs)

  useEffect(()=>{
    dispatch(fetchJobs())
  },[] )

  //  console.log(jobsList.length);

  return (
   <>
    <div className='job-lists'>
    <div className='lists'>
   {  jobsList.map((element) => {
       return <JobCard key={element.id} details={element}/>
     })}
      </div>
    </div>
   </>
  )
}
