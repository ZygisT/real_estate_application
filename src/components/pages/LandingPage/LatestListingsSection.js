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

    return listingsData.map((listing, i) => {

      return (
        <div key={i} className="listing-card">

        <div className="listing-img" style={{background: `url(${listing.image}) no-repeat center`, backgroundSize: 'cover'}}>

          <span className="listing-status">
            Sale
          </span>

        </div>

        <div className="listing-basic-details-container">
          <h3 className='listing-price'>$1,200.00</h3>
          <span className="listing-location">
            {listing.address}
          </span>
          <a className='primary-btn' href="#listing-basic-details-container">Read More</a>
        </div>

     </div>
      )
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
