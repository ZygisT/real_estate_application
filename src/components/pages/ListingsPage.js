import React, { Component } from 'react'

export default class ListingsPage extends Component {
  render() {
    return (
      <section id="search-form-section">

        <div className="center-content">

          <div className="search-form-container">
             
            <div className="search-form">

              <h3>Search for properties:</h3>

              <div className="fields-wrapper">
                <label htmlFor="">Property status</label>
                <select name="properyStatus" id="propertyStatus">
                  <option value="any">Any</option>
                </select>

                <label htmlFor="">Property type</label>
                <select name="properyType" id="propertyType">
                  <option value="any">Any</option>
                </select>

                <label htmlFor="">Location</label>
                <select name="properyLocation" id="propertyLocation">
                  <option value="any">Any</option>
                </select>

              </div>

            </div>

          </div> 

        </div>

      </section>
    )
  }
}
