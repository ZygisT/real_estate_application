import React, { Component } from 'react'
import { Link } from "react-router-dom";



export default class LandingSection extends Component {
  render() {
    return (

      // Landing section start
      <section id='landing-section'>
        
        <div className="center-content">

          <div className="landing-section-items-container">
            
            <h2>The best way to find your new home</h2>
            <p>With the best tools in the industry and our most experienced pros in the business, our goal is to serve our clients so that they can find their dream home.</p>

            <Link className='primary-btn' to="/Listings">Find Home</Link>

          </div>


        </div>

      </section>
      // Landing section end

    )
  }
}
