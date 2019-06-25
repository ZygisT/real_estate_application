import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerStyle: {
        topPanelBackground: '#162a39c5',
        topPanelBorderColor: 'transparent',
        position: 'absolute',
        background: 'transparent'
      }
    }
  }

  changeHeader = () => {
    this.setState({
      headerStyle: {
        topPanelBackground: '#0A1923',
        topPanelBorderColor: '#222f38',
        position: 'relative',
        background: '#0A1923' 
      }
    })
  }

  revertHeader = () => {
    this.setState({
      headerStyle: {
        topPanelBackground: '#162a39c5',
        topPanelBorderColor: 'transparent',
        position: 'absolute',
        background: 'transparent'
      }
    })
  }

  render() {
    return (
        // Header start
        <header style={{position: `${this.state.headerStyle.position}`, background: `${this.state.headerStyle.background}`}}>

          {/* Top panel start */}
          <div className="top-panel" style={{background: `${this.state.headerStyle.topPanelBackground}`, borderBottom: `1px solid ${this.state.headerStyle.topPanelBorderColor}`}}>

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
                  <NavLink exact={true} activeClassName='is-active' onClick={this.revertHeader} className='nav-link' to="/">Home</NavLink>

                  <NavLink activeClassName='is-active' onClick={this.changeHeader} className='nav-link' to="/Listings">Listings</NavLink>

                  <NavLink activeClassName='is-active' onClick={this.changeHeader} className='nav-link' to="/About">About</NavLink>

                  <NavLink activeClassName='is-active' onClick={this.changeHeader} className='nav-link' to="/Blog">Blog</NavLink>

                  <NavLink activeClassName='is-active' onClick={this.changeHeader} className='nav-link' to="/Contact">Contact</NavLink>
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
        // Header end
    )
  }
}
