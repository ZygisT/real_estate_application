import React, { Component } from 'react'
import Filter from './ListingsPage/Filter'

export default class ListingsPage extends Component {
  render() {
    return (
      // Listings Section Start
      <section id="listings-section">

        <div className="center-content">
          
          <div className="content-wrapper">

            <div className="listings-area">
              
              <section id="sort-by-area">

                <div className="search-resulets">12 results found</div>

                <span className="sort-by">Sort by</span>

                <div className="sort-options">
                  <select name="sort-by-price" id="sort-by-price">
                    <option value="price-dsc">Price Lowest</option>
                    <option value="price-asc">Price Highest</option>
                  </select>
                  <div className="view-mode">
                    <i class="fas fa-th view-mode-icon"></i>
                    <i class="fas fa-th-list view-mode-icon"></i>
                  </div>
                </div>
              

              </section>

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
