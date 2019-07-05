import React, { Component } from 'react'
import agentsData from '../../data/agentsData'

export default class AgentsPage extends Component {
  constructor() {
    super();
    this.state = {
      agentsData
    }
  }

  loopAgentsData = () => {
    return this.state.agentsData.map((item, i) => {
      return (
        <div key={i} className="agent-card">

        <div className="card-img" style={{backgroundImage: `url(${item.agentImage})`}}></div>

        <div className="agent-details">

          <h4 className="agent-name">{item.agentName}</h4>

          <div className="agent-description">
            <p>{item.agentDescription}</p>
          </div>

          <span className="contact-number"><i className="fas fa-phone-alt fa-fw icon"></i> {item.agentContactNumber}</span>

          <div className="social-media-container">
            <a className='media-link' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-fw media-icon"></i></a>
            <a className='media-link' href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-fw media-icon"></i></a>
            <a className='media-link' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-fw media-icon"></i></a>
          </div>

          <a href="#agents-page" className="primary-btn">Read More</a>
        </div>
        </div>
      )
    })
  }

  render() {
    return (
      <section id="agents-page">
        <div className="center-content">
          <div className="agents-listing-container">
            <div className="section-header">      
              <h3>Agents Listing</h3>
            </div>

            <div className="agents-card-container">

              {this.loopAgentsData()}
            </div>

            
          </div>
        </div>
      </section>
    )
  }
}
