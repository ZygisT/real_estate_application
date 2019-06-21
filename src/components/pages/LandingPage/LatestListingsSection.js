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

  // componentDidMount() {
  //   console.log(this.state.data)
  // }

  // listingsMapper = () => {
  //   let listingsData = this.props.listingsData

  //   return listingsData.map((item, i) => {
  //      return <li key={i}>{item.location}</li>
  //   })
  // }

  
  
  render() {
    return (
      // Latest Listings Section Start
      <section id='latest-listings-section'>
        
        <div className="latest-listings-item-container">

          {/* Listings Card Start */}
          <div className="listing-card">

            <div className="listing-img">

              <span className="listing-status">
                Sale
              </span>

            </div>

            <div className="listing-basic-details-container">
              <h3 className='listing-price'>$1,200.00</h3>
              <span className="listing-location">
                Street, State
              </span>
              <a href="#listing-basic-details-container">Read More</a>
            </div>



            
          </div>
          {/* Listings Card End */}

        </div>

      </section>
      // Latest Listings Section End

    )
  }
}
