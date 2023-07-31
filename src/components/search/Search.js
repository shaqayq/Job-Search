import React from 'react'
import { useSelector } from 'react-redux'
import SearchForm from './SearchForm'
import Result from './Result'
import Container from '../../layouts/container'

import Loading from '../../layouts/Loading'

import '../../style/search.css'


export default function Search() {


  const jobs = useSelector(state => state.result);
  const jobsLength = Object.keys(jobs).length;
  const result_data = jobs?.data;

  const data_length = result_data.length > 0 ? result_data.length : null ;
  
  const {delay} = jobs
 

  return (
   
   <>
   <Container>
    <div className='row search'>
        <SearchForm/>
     
     {delay && 
        <div id='loading-section' className='col-lg-8'>
          <Loading/>
        </div>
       }

       
       {!delay && jobsLength > 1  ? <Result result={result_data} dataLength={data_length}/> : <></>}

    </div>
   </Container>
   </>
  )
}
