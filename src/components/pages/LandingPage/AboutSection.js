import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class AboutSection extends Component {
  render() {
    return (
      // About section Start
      <section id="about-section">

        <div className="center-content">

          <div className="about-section-items-container">

            <h2>We tirelessly search.</h2>

            <h4>To deliver a diverse range of properties...<br />
            So you can have an optimal range of choice!
            </h4>

            <Link className='primary-btn' to="/About">Read More</Link>


          </div>

        </div>

      </section>
      // About section End

    )
  }
}
