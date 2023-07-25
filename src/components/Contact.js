import React from 'react'
// import '../style/contact.css'
import contact from '../img/contact.png'
import Container from './container'

export default function Contact() {
  return (
    <>
    <Container>
    <div class="contact-container">
      <div class="contact-content">
        <div class="image-box">
          <img src={contact} alt="" />
        </div>
        <form action="#">
          <div class="topic">Send us a message</div>
          <div class="input-box">
            <input type="text" required />
            <label>Enter your name</label>
          </div>
          <div class="input-box">
            <input type="text" required />
            <label>Enter your email</label>
          </div>
          <div class="message-box">
            <textarea></textarea>
            <label>Enter your message</label>
          </div>
          <div class="input-box">
            <input type="submit" value="Send Message" />
          </div>
        </form>
      </div>
    </div>
    </Container>
    </>
  )
}
