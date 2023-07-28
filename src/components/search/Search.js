import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import JobSearch from './JobSearch'
import Result from './Result'
import Container from '../../layouts/container'

import Loading from '../../layouts/Loading'

import '../../style/search.css'


export default function Search() {


  const jobs = useSelector(state => state.result);

  const jobsLength = Object.keys(jobs).length;
 
  const result_data = jobs?.data;
  // console.log(jobsLength);

  const {delay} = jobs
 
  return (
   
   <>
   <Container>
    <div className='row search'>
        <JobSearch/>
     
     {delay && 
        <div id='loading-section' className='col-lg-8'>
          <Loading/>
        </div>
       }

       
       {!delay && jobsLength > 1 ? <Result result={result_data} /> : <></>}

    </div>
   </Container>
   </>
  )
}
