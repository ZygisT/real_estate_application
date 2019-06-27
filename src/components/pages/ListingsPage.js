import React, { Component } from 'react'
import Filter from './ListingsPage/Filter'
import Listings from './ListingsPage/Listings'
import listingsData from '../../data/listingsData'

export default class ListingsPage extends Component {
  constructor() {
    super();
    this.state = {
      listingsData,

    };
  }

  render() {
    return (
      // Listings Section Start
      <section id="listings-section">

        <div className="center-content">
          
          <div className="content-wrapper">

            <div className="listings-area">
              <Listings listingsData={this.state.listingsData}/>
            </div>

            <div className="filter-area">
              {/* <Filter /> */}
            </div>

          </div>

        </div>

      </section>
      // Listings Section End

    )
  }
}
