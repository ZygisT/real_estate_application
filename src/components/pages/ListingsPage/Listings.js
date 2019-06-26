import React, { Component } from "react";

export default class Listings extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      // Sort by area start
      <div id="sort-by-area">

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


      </div>
      // Sort by area end
    );
  }
}
