import React, { Component } from 'react'
import Filter from './ListingsPage/Filter'
import Listings from './ListingsPage/Listings'

export default class ListingsPage extends Component {
  render() {
    return (
      // Listings Section Start
      <section id="listings-section">

        <div className="center-content">
          
          <div className="content-wrapper">

            <div className="listings-area">
              <Listings />
            </div>

            <div className="filter-area">
              <Filter />
            </div>

          </div>

        </div>

      </section>
      // Listings Section End

    )
  }
}
