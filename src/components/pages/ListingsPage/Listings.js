import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Listings extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      setCurrentPage: 1,
      listingsPerPage: 4
    };
    this.loopListings = this.loopListings.bind(this)
  }

  handleClick = (e) => {
    this.setState({
      currentPage: Number(e.target.id)
    })
    console.log(this.state.currentPage)
  }

  pageNumbers = () => {
    const { listingsData } = this.props;
    const { listingsPerPage } = this.state

    // Display page numbers
    const pageNumbers = [];
    let i = 1;
    for (i; i <= Math.ceil(listingsData.length / listingsPerPage); i++) {
      pageNumbers.push(i)
    }

    return pageNumbers.map(number => {
      return (
        <li className={`page-number ${this.state.currentPage === number ? 'is-active-button' : ''}`} key={number} id={number} onClick={this.handleClick}>{number}</li>
      )
    })
  }

  setPage = (e) => {
    const { currentPage } = this.state
    let nextPage = currentPage + e.target.value
    this.setState({
      currentPage: nextPage
    })
  }


  loopListings() {
    // Listings data
    const { listingsData } = this.props;
    const {currentPage, listingsPerPage } = this.state

    // Logic to determinate which index of listings to slice
    const indexOfLastPost = currentPage * listingsPerPage;
    const indexOfFirstPost = indexOfLastPost - listingsPerPage;

    return listingsData.slice(indexOfFirstPost, indexOfLastPost).map((listing, i) => {

      if(this.props.globalState.viewMode === 'box') {
        // Box View
        return (
          <div key={i} className="listing-card-box">
  
            <div className="card-top">
              <div className="listing-img" style={{
                backgroundImage: `url(${listing.image})`}}>
                <span className="listing-status">{listing.status}</span>
              </div>
            </div>
  
            <div className="card-bottom">
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
          </div>
        );
      } else {
        // Long View
        return (
          <div key={i} className="listing-card-long">
  
            <div className="card-top">
              <div className="listing-img" style={{backgroundImage: `url(${listing.image})`}}>
                <span className="listing-status">{listing.status}</span>
              </div>
            </div>
  
            <div className="card-bottom">
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
          </div>
        )
      }
    });
  };

  render() {
    return (
      <section className="listings-wrapper">
        <section id="sort-by-area">
          <div className="results-container">
            <div className="search-results">{this.props.globalState.filteredData.length} results found</div>
          </div>

          <div className="sort-container">
            <div className="sort-options">
              <span className="sort-by-text">Sort by:</span>
              <select
                onChange={this.props.change}
                className="sort-by-price-select"
                name="sortby"
              >
                <option value="all">All</option>
                <option value="price-dsc">Price (Low to High)</option>
                <option value="price-asc">Price (High to Low)</option>
              </select>
            </div>

            <div className="view-mode">
              <i className={`fas fa-th view-mode-icon ${this.props.globalState.viewMode === 'box' ? 'is-active' : ''}`} onClick={this.props.changeView.bind(null, "box")}/>
              <i className={`fas fa-th-list view-mode-icon ${this.props.globalState.viewMode === 'long' ? 'is-active' : ''}`} onClick={this.props.changeView.bind(null, "long")}/>
            </div>
          </div>
        </section>

        <section className="listings-container">

          {this.loopListings()}


        </section>

        <div className="pagination-container">
          <div className="inner-container">
            <ul id="page-numbers-container">
              {this.pageNumbers()}
              <li onClick={this.setPage} value='1' className="next-btn">Next</li>
            </ul>
          </div>
        </div>

      </section>
    );
  }
}
