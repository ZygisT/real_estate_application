import React, { Component } from "react";
import axios from "axios";


export default class BlogPage extends Component {
  constructor() {
    super();
    this.state = {
      isFetching: true,
      blogPosts: '',
      items: [1, 2, 3],
      search: ''
    };
  }

  componentDidMount() {
    // Make a request to backend
    axios.get('/api/posts')
      .then((response) => {
        this.setState({
          blogPosts: response.data,
          isFetching: false
        })
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});
  }

  // posts = () => {
  //   const postsData = this.state.blogPosts
  //   console.log(postsData)
  //   return postsData.map((post, i) => {
  //     return console.log(post)
  //   })
  // }

  loopPostings = () => {
    const postsData = this.state.blogPosts
    return postsData.map((post, i) => {
      let postTime = post.postDate
      let formattedTime = new Date(postTime)
      console.log(formattedTime)
      return (
        <div key={i} className="post-card">
          <div className="inner-wrapper">
            <h3 className="topic-title">{post.postTitle}</h3>

            <div className="post-details">
              <span className="username">{post.postAuthor}</span>
              <span className="time-posted"> - {postTime}</span>
            </div>

            <div className="post-img" style={{
                backgroundImage: `url(${post.postImageAddress})`}}/>

            <div className="post-topic">
              <p>
                {post.postTopic}
              </p>
            </div>

            <div className="misc">
              <div className="comment-count-box">
                <i className="far fa-comment-alt comment-icon" />
                <span className="comment-num">{post.postComments} comments</span>
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
    const isFetching = this.state.isFetching
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
          {isFetching ? <span>Loading...</span> : this.loopPostings() }
          </section>
        </div>
      </section>
    );
  }
}
