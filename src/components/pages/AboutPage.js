import React, { Component } from 'react'

export default class AboutPage extends Component {
  render() {
    return (
      <section id="about-us-section">

        <div className="center-content">

          <div className="about-us-items-container">

            <div className="col">
              <h3>About us</h3>
              <p>We’re very passionate about searching for only the best properties on the market and offering them to our clients. Our team of more than 175 professional,dedicated real estate agents is waiting for a chance to be helpful to your cause. We’re sure that whatever type of property you’re searching for, we’ll be the agency to get it found, checked and offered for you!</p>
            </div>

            <div className="col">
              <h3>Our Team</h3>
              <p>We’ve got more than 175 dedicated, professional real estate agents constantly looking for newest and best properties.
              <br/>
              On average, each of our agents has more than 200 homes successfully sold and more than 400 rented out.
              <br/>
              The most notable qualities of our agents is their fast pace, trustworthiness and dedication!</p>
            </div>

          </div>

        </div>

      </section>
    )
  }
}
