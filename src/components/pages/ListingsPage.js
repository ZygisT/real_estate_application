import React, { Component } from 'react'
import Filter from './ListingsPage/Filter'

export default class ListingsPage extends Component {
  render() {
    return (
      // Listings Section Start
      <section id="listings-section">

        <div className="center-content">
          
          <div className="content-wrapper">

           <div className="filter-area">
             <Filter />
           </div>

           <div className="listings-area">
             
           </div>

          </div>

        </div>

      </section>
      // Listings Section End

    )
  }
}
