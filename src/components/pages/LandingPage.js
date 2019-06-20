import React, { Component } from 'react'
import LandingSection from './LandingPage/LandingSection'
import LatestOffers from './LandingPage/LatestOffers'

const listingsData = [
  {
    location: "New York",
    housePrice: 1340,
    houseStatus: 'Sale'
  },
  {
    location: "Tokyo",
    housePrice: 1200,
    houseStatus: 'Rent'
  },
  {
    location: "New York",
    housePrice: 3400,
    houseStatus: 'Sale'
  },
]

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: listingsData
    }
  }
  
  
  render() {
    return (
      <div>
        <LandingSection />
        <LatestOffers listingsData={this.state.data} />
      </div>
    )
  }
}
