import React from 'react'
import List from './jobs/list'
import Device from './jobs/device'

import '../style/jobs.css'

export default function Main() {
  return (
   <>
   <div className='main-section'>
    <Device/>
   <List />
   </div>
   
   </>
  )
}
