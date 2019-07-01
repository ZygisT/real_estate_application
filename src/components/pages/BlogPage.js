import React, { Component } from 'react'

export default class BlogPage extends Component {
  render() {
    return (
      <section id="blog-page">

        <div className="center-content">

          <section id="search-section">
            <h3>Search</h3>
            <input className="search-bar" type="text" placeholder="Enter keyword..."/>
          </section>

          <section id="sort-section">
            <div className="sort-container">
              <span className="sort-title">Sort by:</span>
              <div className="sort-options">
                <select
                  className="sort-by-time-select"
                  name="sortby"
                >
                  <option value="all">All</option>
                  <option value="time-newest">Posts (New to Old)</option>
                  <option value="time-oldest">Posts (Old to New)</option>
                </select>
              </div>

            </div>
          </section>

        </div>

      </section>
    )
  }
}
