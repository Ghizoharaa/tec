import React, { useRef } from 'react'
import "./style.css"
import { Container } from '../../golobalStyle'
import emailjs from '@emailjs/browser';
export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pnmwd8n',
     'template_1c8dodw',
      form.current, 'attcGULGv8EpYM0CA')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <Container>
    <div className="background">
    <div className="container">
      <div className="screen">
        <div className="screen-header">
         
          
        </div>
        <div className="screen-body">
          <div className="screen-body-item left">
            <div className="app-title">
              <span>CONTACT</span>
              <span>US</span>
            </div>
            <div className="app-contact">CONTACT INFO : +07 08 08 09 09 </div>
          </div>
          <div className="screen-body-item">
            <form className="app-form"  ref={form} onSubmit={sendEmail}>
              <div className="app-form-group">
                <input className="app-form-control" name='user_name' placeholder="NAME" />
              </div>
              <div className="app-form-group">
                <input className="app-form-control" name='user_email' placeholder="EMAIL"/>
              </div>
              <div className="app-form-group">
                <input className="app-form-control" name='user_nb'  placeholder="CONTACT numb"/>
              </div>
              <div className="app-form-group message">
                <input className="app-form-control" name='message' placeholder="MESSAGE"/>
              </div>
              <div className="app-form-group buttons">
                <button type='reset' className="app-form-button">CANCEL</button>
                <button type="submit" className="app-form-button">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
     </div>
     </div>
     </Container>
  )
}
