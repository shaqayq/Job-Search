import React from 'react'
import { useSelector } from 'react-redux'
import JobSearch from './JobSearch'
import Result from './Result'
import Container from '../../layouts/container'

import '../../style/search.css'

export default function Search() {

  const jobs = useSelector(state => state.result);
 
  return (
   <>
   <Container>
    <div className='row search'>
        <JobSearch/>
        <Result result={jobs}/>
    </div>
   </Container>
   </>
  )
}
