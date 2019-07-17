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
                <img src="./about-page/about-us-img.jpg" alt="Skyscraper"/>
                <p>
                  We’re very passionate about searching for only the best
                  properties on the market and offering them to our clients. Our
                  team of more than 175 professional,dedicated real estate agents
                  is waiting for a chance to be helpful to your cause. We’re sure
                  that whatever type of property you’re searching for, we’ll be
                  the agency to get it found, checked and offered for you!
                </p>

                <p>
                  Our values...
                  <br/>
                  <br/>

                  Integrity — Our agents will always provide you with honest, well considered advice. We will ensure you are in the best possible position to make clear decisions. Your success is our principal driver. 
                  <br/>
                  <br/>


                  Professionalism — Luxury real estate is our passion and it requires our focus. We strive to provide a high level of personalised service. 
                  <br/>
                  <br/>


                  Expertise — Service and integrity supported by commercial expertise is where Better Home stands apart. A depth of local knowledge and eye for opportunities, we are your property partner.
                  </p>
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
        
          <section id="testimonials-section">

            <div className="testimonials-container">

              <h3>What Our Clients Say</h3>

              <div className="testimonials-box-container">

                <div className="testimonial-box">
                  <div className="top-block">

                    <p>Me and my wife spent tons of time searching for a not so expensive condo in Maryland. As soon as I hired one of your agents, we were finally able to find it and move in! Agents were outstanding and the house they've found was brilliant.</p>

                  </div>

                  <div className="bottom-block">
                    <img className='client-img' src="./about-page/client-images/client_1.jpg" alt="Client"/>
                    <h4 className='client-name'>Oliver James</h4>
                  </div>
                </div>

                <div className="testimonial-box">
                  <div className="top-block">

                    <p>Gotta love how fast-minded your real estate agents are! I was in a real hurry to buy a new home in Florida. Your real estate agents helped it happen in the shortest time frame!</p>

                  </div>

                  <div className="bottom-block">
                    <img className='client-img' src="./about-page/client-images/client_2.jpg" alt="Client"/>
                    <h4 className='client-name'>Amelia Williams</h4>
                  </div>
                </div>

                <div className="testimonial-box">
                  <div className="top-block">

                    <p>I've been searching to rent a house for a while. Finally came across Better Home and these people helped me out tremendously.</p>

                  </div>

                  <div className="bottom-block">
                    <img className='client-img' src="./about-page/client-images/client_3.jpg" alt="Client"/>
                    <h4 className='client-name'>Victoria Jones</h4>
                  </div>
                </div>

                <div className="testimonial-box">
                  <div className="top-block">

                    <p>Better Home is one of the greatest real estate companies I've ever come across. Working with these people were so enjoyable I've ended up checking out 20 different homes and they helped me choose the best one to suit my needs.</p>
                  </div>

                  <div className="bottom-block">
                    <img className='client-img' src="./about-page/client-images/client_1.jpg" alt="Client"/>
                    <h4 className='client-name'>Jacob Anderson</h4>
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
