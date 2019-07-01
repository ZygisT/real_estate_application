import React, { Component } from 'react'

export default class BlogPage extends Component {
  render() {
    return (
      <section id="blog-page">

        <div className="center-content">

          <section id="search-section">
            <h3>Search</h3>
            <input className="search-input" type="text" placeholder="Enter keyword"/>
          </section>

        </div>

      </section>
    )
  }
}
