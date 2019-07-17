import React, { Component } from 'react'

export default class NewsletterSection extends Component {
  render() {
    return (
      // Newsletter Section Start
      <section id="newsletter-section">
        
        <div className="center-content">

          <div className="newsletter-section-items-container">

            <div className="subscribe-message">
            <h4>Newsletter. Sign Up for greatest deals on real estate!</h4>
            </div>

            <div className="subscribe-form">
              <input className='subscribe-input' type="text" name='email' placeholder='Enter your email'/>

              <a href="#newsletter-section" className="subscribe-btn">Subscribe</a>
            </div>
          </div>

        </div>

      </section>
      // Newsletter Section End

    )
  }
}
