import React, { Component } from "react";

export default class BlogPage extends Component {
  constructor() {
    super();
    this.state = {
      items: [1, 2, 3],
      search: ''
    };
  }

  loopPostings = () => {
    const items = this.state.items;
    return items.map((post, i) => {
      return (
        <div key={i} className="post-card">
          <div className="inner-wrapper">
            <h3 className="topic-title">This is the title of the topic.</h3>

            <div className="post-details">
              <span className="username">Emillia Warren</span>
              <span className="time-posted"> - June 7, 2019</span>
            </div>

            <div className="post-img" />

            <div className="post-topic">
              <p>
                Think you have a “photogenic side” for camera? So does your
                home! We will teach you how to take interesting picture of your
                house to make your listings stand out!
              </p>
            </div>

            <div className="misc">
              <div className="comment-count-box">
                <i className="far fa-comment-alt comment-icon" />
                <span className="comment-num">0 comments</span>
              </div>

              <div className="tags-box">
                <span className="tags-text">Tags:</span>

                <div className="tags-container">
                  <span className="tag">Apartment</span>
                  <span className="tag">New</span>
                  <span className="tag">Modern</span>
                  <span className="tag">Photos</span>
                  <span className="tag">Learning</span>
                </div>
              </div>
            </div>

            <button className="primary-btn">Read More</button>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <section id="blog-page">
        <div className="center-content">
          <section id="search-section">
            <h3>Search</h3>
            <input
              className="search-bar"
              type="text"
              placeholder="What are you looking for?"
            />
          </section>

          <section id="sort-section">
            <div className="sort-container">
              <span className="sort-title">Sort by:</span>
              <div className="sort-options">
                <select className="sort-by-time-select" name="sortby">
                  <option value="all">All</option>
                  <option value="time-newest">Posts (New to Old)</option>
                  <option value="time-oldest">Posts (Old to New)</option>
                </select>
              </div>
            </div>
          </section>

          <section id="post-section">
          {this.loopPostings()}
          </section>
        </div>
      </section>
    );
  }
}
