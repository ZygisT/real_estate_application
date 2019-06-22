import React, { Component } from 'react'

export default class LatestOffers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  componentWillMount() {
    this.setState({
      data: this.props.listingsData
    })
  }

  listingsMapper = () => {
    let listingsData = this.props.listingsData

    return listingsData.slice(0, 5).map((listing, i) => {

      if(i <= 1) {
        
        return (
      
          <div key={i} className="listing-card" style={{width: `50%`}}>
  
            <div className="listing-img" style={{background: `url(${listing.image}) no-repeat center`, backgroundSize: 'cover'}}>
  
            <span className="listing-status">
              {listing.status}
            </span>

            <div className="features-side-panel">
              <span className="feature">
                <i className="fas fa-bed bed-icon"></i> {listing.rooms}
              </span>

              <span className="feature-2">
                <i className="far fa-square bed-icon"></i> {listing.floorSpace}m&sup2;
              </span>

              <span className="feature-3">
                <i className="fas fa-bath bed-icon"></i> {listing.rooms}
              </span>
            </div>
  
            </div>
  
            <div className="listing-basic-details-container">
              <h3 className='listing-price'>${listing.price.toLocaleString()}</h3>
              <span className="listing-location">
                <i className="fas fa-map-marker-alt address-marker"></i>{listing.address}, {listing.city}, {listing.state}
              </span>
              <a className='primary-btn' href="#listing-basic-details-container">Read More</a>
            </div>
  
          </div>
        )
      } else {
        return (
      
          <div key={i} className="listing-card">
  
            <div className="listing-img" style={{background: `url(${listing.image}) no-repeat center`, backgroundSize: 'cover'}}>
  
            <span className="listing-status">
              {listing.status}
            </span>

            <span className="feature">
              <i className="fas fa-bed bed-icon"></i> {listing.rooms}
            </span>
  
            </div>
  
            <div className="listing-basic-details-container">
              <h3 className='listing-price'>${listing.price.toLocaleString()}</h3>
              <span className="listing-location">
              <i className="fas fa-map-marker-alt address-marker"></i>{listing.address}, {listing.city}, {listing.state}
              </span>
              <a className='primary-btn' href="#listing-basic-details-container">Read More</a>
            </div>
  
          </div>
        )
      }
    })
  }

  
  
  render() {
    return (
      // Latest Listings Section Start
      <section id='latest-listings-section'>
        
        <div className="latest-listings-item-container">

          {this.listingsMapper()}

        </div>

      </section>
      // Latest Listings Section End

    )
  }
}
