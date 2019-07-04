import React, { Component } from 'react'
import { NavLink } from "react-router-dom";


export default class Footer extends Component {
  render() {
    return (
      // Footer Start
      <footer>

        <div className="center-content">

          <div className="footer-items-container">

            {/* Top Wrapper Start */}
            <div className="items-wrapper">

              <div className="about items-container">
                <h5>About</h5>
                <p>We're hunting for the best deals on the real estate market. With our help you'll find any house that you want and have dreamed of, be it a humble cottage, a median apartment or a huge residential building.</p>
              </div>

              <div className="recent-posts items-container">
                <h5>Recent Posts</h5>

                <div className="post-container">

                  <a href="#footer">23-34 Grand Avenue, Ridgewood, NY</a>

                  <span className="post-date">July 7, 2019</span>

                </div>

                <div className="post-container">

                  <a href="#footer">10 Cherry Hill, Camden, NJ</a>

                  <span className="post-date">July 8, 2019</span>

                </div>

              </div>

              <div className="tags items-container">
                <h5>Tags</h5>
                  <div className="tags-container">

                    <a href="#footer">Apartments</a>
                    <a href="#footer">Cottage</a>
                    <a href="#footer">Office</a>
                    <a href="#footer">Condo</a>
                  </div>
              </div>

            </div>
            {/* Top Wrapper End */}

            {/* Bottom Wrapper Start */}
            <div className="bottom-wrapper">

              <div className="branding">
                <i className="fas fa-home branding-icon"></i>
                <h1>Better<span>Home</span></h1>
              </div>

              <div className="nav-links">

              <nav>
                  <NavLink exact={true} activeClassName='is-active' className='nav-link' to="/">Home</NavLink>

                  <NavLink activeClassName='is-active' className='nav-link' to="/Listings">Listings</NavLink>

                  <NavLink activeClassName='is-active' className='nav-link' to="/About">About</NavLink>

                  <NavLink activeClassName='is-active' className='nav-link' to="/Blog">Blog</NavLink>

                  <NavLink activeClassName='is-active' className='nav-link' to="/Agents">Agents</NavLink>

                  <NavLink activeClassName='is-active' className='nav-link' to="/Contact">Contact</NavLink>
                </nav>

              </div>

            </div>
            {/* Bottom Wrapper End */}
            
          </div>

        </div>

      </footer>
      // Footer End
    )
  }
}
