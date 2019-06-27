import React, { Component } from "react";

export default class Listings extends Component {
  constructor() {
    super();
    this.state = {};
  }

  

  render() {
    return (
      <section className="listings-wrapper">

        <section id="sort-by-area">
  
          <div className="results-container">
            <div className="search-results">12 results found</div>
          </div>
  
          <div className="sort-container">
  
  
            <div className="sort-options">
  
              <span className="sort-by-text">Sort by:</span>
              <select className='sort-by-price-select' name="sort-by-price" id="sort-by-price">
                <option value="all">All</option>
                <option value="price-dsc">Price (Low to High)</option>
                <option value="price-asc">Price (High to Low)</option>
              </select>
              
            </div>
  
            <div className="view-mode">
  
                <i className="fas fa-th view-mode-icon is-active" />
                <i className="fas fa-th-list view-mode-icon" />
            
            </div>
  
          </div>
  
  
        </section>

        <section id="listings-container">

          <div className="listing-card">

            <div className="listing-img">
              <span className="listing-status">Sale</span>
            </div>

            <div className="listing-features-container">

              <span className="feature">
                <i className="far fa-square feature-icon"></i>210 m&sup2;
              </span>

              <span className="feature">
                <i className="fas fa-bed feature-icon"></i>3
              </span>

              <span className="feature">
                <i className="fas fa-bath feature-icon"></i>4
              </span>

            </div>

            <div className="price-and-description-container">
              <div className="listing-price">$180,000</div>
              
              <div className="listing-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae dolor labore placeat libero dolorum rerum eaque praesentium expedita in.</p>
              </div>
            </div>

            <div className="location-and-btn-container">
              <span className="listing-location">
                <i className="fas fa-map-marker-alt address-marker"></i>Address
              </span>

              <a className='primary-btn' href="#sort-by-area">Read More</a>
            </div>
          
          </div>
          

        </section>

      </section>

    );
  }
}
