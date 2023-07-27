import React from 'react'
import JobSearch from './JobSearch'
import Result from './Result'
import Container from '../../layouts/container'
import '../../style/search.css'

export default function Search() {
  return (
   <>
   <Container>
    <div className='row search'>
        <JobSearch/>
        <Result/>
    </div>
   </Container>
   </>
  )
}
