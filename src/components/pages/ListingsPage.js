import React, { Component } from 'react'

export default class ListingsPage extends Component {
  render() {
    return (
      <section id="search-form-section">

        <div className="center-content">

          <div className="search-form-container">
             
            <div className="search-form">

              <h3>Search for properties:</h3>
              <label htmlFor="">Property status</label>
              <select name="properyStatus" id="propertyStatus">
                <option value="any">Any</option>
              </select>

            </div>

          </div> 

        </div>

      </section>
    )
  }
}
