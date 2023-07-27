import React from 'react'
 import '../style/contact.css'
import contact from '../img/contact.png'
import Container from '../layouts/container'

export default function Contact() {
  return (
    <>
    <Container>
    <div className="contact-container">
      <div className="contact-content">
        <div className="image-box">
          <img src={contact} alt="" />
        </div>
        <form action="#">
          <div className="topic">Send us a message</div>
          <div className="input-box">
            <input type="text" required />
            <label>Enter your name</label>
          </div>
          <div className="input-box">
            <input type="text" required />
            <label>Enter your email</label>
          </div>
          <div className="message-box">
            <textarea></textarea>
            <label>Enter your message</label>
          </div>
          <div className="input-box">
            <input type="submit" value="Send Message" />
          </div>
        </form>
      </div>
    </div>
    </Container>
    </>
  )
}
