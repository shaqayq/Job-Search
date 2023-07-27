import React from 'react'
import JobSearch from './JobSearch'
import Container from '../../layouts/container'
import '../../style/search.css'

export default function Search() {
  return (
   <>
   <Container>
    <div>
        <JobSearch/>
    </div>
   </Container>
   </>
  )
}
