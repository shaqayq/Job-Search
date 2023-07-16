import React from 'react'
import '../../style/app.css'
import {FaSearch } from 'react-icons/fa'
export default function Search() {
  return (
  <>
    <div className='search'>
    </div>
    <div >
      <form className='search-box'>
        <input type="text" className='form-control' placeholder='find you`r job'/>
        <button className='btn btn-lg btn-primary'><FaSearch/></button>
      </form>
     
    </div>
  </>
  )
}
