import React, { Component } from 'react'
import LandingPage from '../components/pages/LandingPage';
import ListingsPage from '../components/pages/ListingsPage';
import ContactPage from '../components/pages/ContactPage';
import AboutPage from '../components/pages/AboutPage';
import BlogPage from '../components/pages/BlogPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <Router>
        <header>

          {/* Top panel start */}
          <div className="top-panel">

            <div className="center-content">
              <div className="top-panel-items-container">

                <div className="left-col">
                  Please <a className="highlight" href="#login">login</a> or <a className="highlight" href="#register">register</a> to create a new listing
                </div>

                <div className="right-col">
                  <a className="social-media-icons" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-fw"></i></a>
                  <a className="social-media-icons" href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-fw"></i></a>
                  <a className="social-media-icons" href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-fw"></i></a>
                </div>
                
              </div>
            </div>
            
          </div>
          {/* Top panel end */}

          {/* Header container start */}
          <div className="header-container">

            <div className="center-content">
              <div className="header-items-container">

                <div className="branding">
                  <i className="fas fa-home branding-icon"></i>
                  <h1>Better<span>Home</span></h1>
                </div>

                <nav>
                  <Link className='nav-link' to="/">Home</Link>
                  <Link className='nav-link' to="/Listings">Listings</Link>
                  <Link className='nav-link' to="/About">About</Link>
                  <Link className='nav-link' to="/Blog">Blog</Link>
                  <Link className='nav-link' to="/Contact">Contact</Link>
                </nav>

                <div className="info-block">

                  Get in touch with us
                  <div className="info-block-phone">
                    <i className="fas fa-phone-alt phone-icon"></i>
                    <h4>800-1234-5678</h4>
                  </div>

                </div>

              </div>
            </div>

          </div>
          {/* Header container end */}


        </header>


        <Route path="/" exact component={LandingPage} />
        <Route path="/Listings/" component={ListingsPage} />
        <Route path="/About/" component={AboutPage} />
        <Route path="/Blog/" component={BlogPage} />
        <Route path="/Contact/" component={ContactPage} />
      </Router>
    )
  }
}
