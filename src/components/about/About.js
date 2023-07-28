import React from 'react'
import '../../style/about.css'
import Responsiblity from './Responsiblity'
import Description from './Description'
import Welcom from './Welcom'
import Mission from './Mission'
export default function About() {
  return (
   <>
   <div className='about_container'>

      <div className='about'>
      
      </div>
      <div className='details'>
        <Welcom/>
        <hr/>
        <Mission/>
        <hr/>
        <Responsiblity/>
        <hr/>
        <Description/>
      </div>

   </div>
   </>
  )
}
