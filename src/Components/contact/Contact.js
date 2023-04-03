import React from 'react'
import "./style.css"
import { Container } from '../../golobalStyle'
export default function Contact() {
  return (
    <Container>
    <div class="background">
    <div class="container">
      <div class="screen">
        <div class="screen-header">
         
          
        </div>
        <div class="screen-body">
          <div class="screen-body-item left">
            <div class="app-title">
              <span>CONTACT</span>
              <span>US</span>
            </div>
            <div class="app-contact">CONTACT INFO : +07 08 08 09 09 </div>
          </div>
          <div class="screen-body-item">
            <div class="app-form">
              <div class="app-form-group">
                <input class="app-form-control" placeholder="NAME" />
              </div>
              <div class="app-form-group">
                <input class="app-form-control" placeholder="EMAIL"/>
              </div>
              <div class="app-form-group">
                <input class="app-form-control" placeholder="CONTACT numb"/>
              </div>
              <div class="app-form-group message">
                <input class="app-form-control" placeholder="MESSAGE"/>
              </div>
              <div class="app-form-group buttons">
                <button class="app-form-button">CANCEL</button>
                <button class="app-form-button">SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
     </div>
     </Container>
  )
}
