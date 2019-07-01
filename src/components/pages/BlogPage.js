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

          <section id="post-section">

            <div className="post-card">

              <h3 className="topic-title">This is the title of the topic.</h3>

              <div className="post-details">
                <span className="username">Emillia Warren</span>
                <span className="time-posted"> - June 7, 2019</span>
              </div>
            
              <div className="post-img"></div>

              <div className="post-topic">
                <p>Think you have a “photogenic side” for camera? So does your home! We will teach you how to take interesting picture of your house to make your listings stand out!</p>
              </div>

              <div className="misc">
                <div className="comment-count">
                  <i className="far fa-comment-alt comment-icon"></i> 0 comments
                </div>
                <div className="tags-box">
                  <span>Tags:</span>
                  <div className="tags-container">
                    <span className="tag">Apartment</span>
                    <span className="tag">New</span>
                    <span className="tag">Modern</span>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </div>

      </section>
    )
  }
}
