import React from 'react'
import '../style/contact.css'

export default function Container({ children }) {
    return (
      <>
        <div className='about_container'>
          <div className='about'></div>
          {children}
        </div>
      </>
    );
  }
  