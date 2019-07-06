import React, { Component } from 'react'

export default class ContactPage extends Component {
  render() {
    return (
      <section id="contact-page">
        <div className="center-content">

          <div className="content-container">
            
            <div className="section-header">
              <h3>Contacts</h3>
            </div>

            <div className="section-info-container">

              <div className="inner-container">
                <h5>Get in touch with us if you have any questions about real estate search or adding your property to our listings!
                </h5>

                <p>We reply within 1 business day...</p>
              </div>

            </div>

            <section id="form-section">

              <h3>Ask a Question</h3>

              <div className="form-container">
                <form action="#">

                  <label htmlFor="yourName">Your name</label>
                  <input type="text" placeholder="Enter your name"/>
                  
                  <label htmlFor="yourEmail">Your email</label>
                  <input type="text" placeholder="Enter your email"/>

                  <label htmlFor="yourNumber">Your number</label>
                  <input type="text" placeholder="Enter your number"/>

                  <label htmlFor="yourMessage">Your message</label>
                  <textarea name="yourMessage" placeholder="Your message"></textarea>

                  <button className="primary-btn">Send</button> 
                
                </form>
              </div>

            </section>
          </div>

        </div>
      </section>
    )
  }
}
