import React, { Component } from 'react'

export default class AgentsPage extends Component {
  render() {
    return (
      <section id="agents-page">
        <div className="center-content">
          <div className="agents-listing-items-container">
            <div className="section-header">      
              <h3>Agents Listing</h3>
            </div>

            <div className="agent-card">

              <div className="card-img"></div>

              <div className="agent-details">

                <h4 className="agent-name">Agent Name</h4>

                <div className="agent-description">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic reiciendis inventore rem temporibus expedita voluptates natus illum dolorum porro similique?</p>
                </div>

                <span className="contact-number"><i className="fas fa-phone-alt fa-fw icon"></i> 800-1234-5678</span>

                <div className="social-media-container">
                  <a className='media-link' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-fw media-icon"></i></a>
                  <a className='media-link' href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-fw media-icon"></i></a>
                  <a className='media-link' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-fw media-icon"></i></a>
                </div>

                <a href="#agents-page" className="primary-btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
