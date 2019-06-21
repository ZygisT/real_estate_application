import React, { Component } from 'react'
import LandingSection from './LandingPage/LandingSection'
import LatestListingsSection from './LandingPage/LatestListingsSection'
import listingsData from '../../data/listingsData'


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
        <LatestListingsSection listingsData={this.state.data} />
      </div>
    )
  }
}
