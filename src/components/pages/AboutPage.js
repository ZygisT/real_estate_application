import React, { Component } from "react";
import CountUp from 'react-countup';

export default class AboutPage extends Component {
  render() {
    return (
      <section id="about-us-page">
        <div className="center-content">

          <section id="about-us-section">
            <div className="about-us-items-container">
              <div className="col">
                <h3>About us</h3>
                <p>
                  We’re very passionate about searching for only the best
                  properties on the market and offering them to our clients. Our
                  team of more than 175 professional,dedicated real estate agents
                  is waiting for a chance to be helpful to your cause. We’re sure
                  that whatever type of property you’re searching for, we’ll be
                  the agency to get it found, checked and offered for you!
                </p>
                <img src="./about-page/about-us-img.jpg" alt="Skyscraper"/>
              </div>

              <div className="col">
                <h3>Our Team</h3>
                <p>
                  We’ve got more than 175 dedicated, professional real estate
                  agents constantly looking for newest and best properties.
                  <br />
                  On average, each of our agents has more than 200 homes
                  successfully sold and more than 400 rented out.
                  <br />
                  The most notable qualities of our agents is their fast pace,
                  trustworthiness and dedication!
                </p>
                <img src="./about-page/team-img.jpg" alt="Company's team"/>
              </div>
            </div>
          </section>

          <section id="counter-section">
            <div className="counter-items-container">


              <div className="counter-box">
                <CountUp className="counter" end={3787} duration={2.5}/>
                <h3>Properties Listed</h3>
              </div>

              <div className="counter-box">
                <CountUp className="counter" end={8322} duration={2.5}/>
                <h3>Satisfied Clients</h3>
              </div>

              <div className="counter-box">
                <CountUp className="counter" end={7573} duration={2.5}/>
                <h3>Properties Sold</h3>
              </div>

              <div className="counter-box">
                <CountUp className="counter" end={2952} duration={2.5}/>
                <h3>Properties Rented</h3>
              </div>
              

            </div>
          </section>
        
          <section id="testimonials">

            <div className="testimonials-container">

              <h3>What Our Clients Say</h3>

              <div className="testimonials-item-container">

                <div className="testimonial-box">
                  <div className="review-block">

                    <p>I’ve spent tons of time searching for a not so expensive condo in Maryland. As soon as I hired one of your agents, I was finally able to find it and move in! Agents were outstanding and the house they've found was brilliant.</p>

                  </div>

                  <div className="bottom-block">
                    <img src="" alt="Client"/>
                    <h4>Jimmy Doe</h4>
                  </div>
                </div>

              </div>

            </div>
          </section>
        </div>
      </section>
    );
  }
}
