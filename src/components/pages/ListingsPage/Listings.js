import React, { Component } from "react";

export default class Listings extends Component {
  constructor() {
    super();
    this.state = {};
  }

  loopListings = () => {
    const { listingsData } = this.props;

    return listingsData.map((listing, i) => {

      return (
        <div key={i} className="listing-card">
          <div className="listing-img" style={{background: `url(${listing.image}) no-repeat center`, backgroundSize: 'cover'}}>
            <span className="listing-status">{listing.status}</span>
          </div>

          <div className="listing-features-container">
            <span className="feature">
              <i className="far fa-square feature-icon" />{listing.floorSpace} m&sup2;
            </span>

            <span className="feature">
              <i className="fas fa-bed feature-icon" />{listing.bedrooms}
            </span>

            <span className="feature">
              <i className="fas fa-bath feature-icon" />{listing.bathrooms}
            </span>
          </div>

          <div className="price-and-description-container">
            <div className="listing-price">${listing.price.toLocaleString()}</div>

            <div className="listing-description">
              <p>
                {listing.description}
              </p>
            </div>
          </div>

          <div className="location-and-btn-container">
            <span className="listing-location">
              <i className="fas fa-map-marker-alt address-marker" />{listing.address}, {listing.city}, {listing.state}
            </span>

            <a className="primary-btn" href="#sort-by-area">
              Read More
            </a>
          </div>
        </div>
      );
    });
  };

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
              <select
                className="sort-by-price-select"
                name="sort-by-price"
                id="sort-by-price"
              >
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

          {this.loopListings()}

        </section>

      </section>
    );
  }
}
