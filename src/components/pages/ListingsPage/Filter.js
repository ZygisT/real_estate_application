import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      // Filter Start
      <section id="filter">
        <div className="filter-container">
          <h3>Search for properties:</h3>

          <div className="fields-wrapper">
            <div className="top-block">
              <label htmlFor="properyStatus">Property status</label>
              <select name="properyStatus" id="propertyStatus">
                <option value="any">Any</option>
              </select>

              <label htmlFor="propertyType">Property type</label>
              <select name="properyType" id="propertyType">
                <option value="any">Any</option>
              </select>

              <label htmlFor="propertyLocation">Location</label>
              <select name="properyLocation" id="propertyLocation">
                <option value="any">Any</option>
              </select>
            </div>

            <div className="bottom-block">
              <label htmlFor="Price">Price</label>
              <div className="input-container">
                <input type="number" value="min" placeholder="Min" />
                <input type="number" value="max" placeholder="Max" />
              </div>

              <label htmlFor="Bedrooms">Bedrooms</label>
              <div className="input-container">
                <input type="number" value="min" placeholder="Min" />
                <input type="number" value="max" placeholder="Max" />
              </div>

              <label htmlFor="Bathrooms">Bathrooms</label>
              <div className="input-container">
                <input type="number" value="min" placeholder="Min" />
                <input type="number" value="max" placeholder="Max" />
              </div>
            </div>
          </div>
        </div>
      </section>
      // Filter End
    );
  }
}
