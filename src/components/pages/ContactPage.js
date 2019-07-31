import React, { Component } from 'react'

export default class ContactPage extends Component {
  
  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <section id="contact-page">
        <div className="center-content">

          <div className="content-container">
            
            <div className="section-header">
              <h3>Contact</h3>
            </div>

            <div className="section-info-container">

              <div className="inner-container">
                <h5>Get in touch with us regarding your real estate search or adding your property to our listings!
                </h5>

                <p>We reply within 1 business day...</p>
              </div>

            </div>

            <section id="form-section">

              <h3>Ask a Question</h3>

              <div className="form-container">
                <form onSubmit={this.handleSubmit}>

                  <div className="row">
                    <input type="text" aria-label="Input for name" placeholder="Enter your name"/>
                  </div>
                  
                  <div className="row">
                    <input type="text" aria-label="Input for email" placeholder="Enter your email"/>
                  </div>

                  <div className="row">
                    <input type="text" aria-label="Input for number" placeholder="Enter your number"/>
                  </div>

                  <div className="row">
                    <textarea name="yourMessage" aria-label="Textarea for message" placeholder="What can we help you with?"></textarea>
                  </div>

                  <div className="row">
                    <button className="primary-btn" >Send</button> 
                  </div>
                
                </form>
              </div>

            </section>
          </div>

        </div>
      </section>
    )
  }
}
