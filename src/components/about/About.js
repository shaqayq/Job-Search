import React from 'react'
import '../../style/about.css'
import Responsibility from './Responsibility'
import Description from './Description'
import Welcome from './Welcom'
import Mission from './Mission'
import Container from '../container'

export default function About() {
  return (
    <>
      <Container>
        <div className='details'>
          <Welcome />
          <hr />
          <Mission />
          <hr />
          <Responsibility />
          <hr />
          <Description />
        </div>
      </Container>
    </>
  );
}
