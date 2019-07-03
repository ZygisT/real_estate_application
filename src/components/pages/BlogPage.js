import React, { Component } from "react";
import axios from "axios";


export default class BlogPage extends Component {
  constructor() {
    super();
    this.state = {
      isFetching: true,
      blogPosts: '',
      filteredBlogPosts: '',
      search: ''
    };
  }

  componentDidMount() {
    // Make a request to backend
    axios.get('/api/posts')
      .then((response) => {
        this.setState({
          blogPosts: response.data,
          filteredBlogPosts: response.data,
          isFetching: false
        })
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});
  }


  change = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]:value
    }, () => {
      // console.log(this.state)
      this.filteredData()
    })
  }

  filteredData() {
    let newData = this.state.blogPosts
    if(this.state.search !== '') {
      newData = newData.filter((item) => {
        
        // Set data strings to be lowercase
        let postTitle = item.postTitle.toLowerCase()
        let postAuthor = item.postAuthor.toLowerCase()

        // Create arrays that hold tag strings
        let postTags = item.postTags.map((item) => {
          return item.toLowerCase();
        })

        // Merge all data into one array
        let postDataArray = [postTitle, postAuthor, postTags]

        // Join all data entries in the array to create one string
        let jointPostsDataArray = postDataArray.join(':')

        // Set search string to lowerstring
        let searchText = this.state.search.toLowerCase()

        // Match the data string with search string
        let n = jointPostsDataArray.match(searchText)

        if(n != null) {
          return true
        }
      })
    }

    this.setState({
      filteredBlogPosts: newData
    })
  }


  loopPostings = () => {
    const postsData = this.state.filteredBlogPosts

    if(postsData === undefined || postsData.length === 0) {
      return <span className='error-message'>Sorry no search results found</span>
    }

    return postsData.map((post, i) => {

      // Format the date of the post from timestamp
      let options = { year: 'numeric', month: 'long', day: 'numeric' }
      let formattedPostTime = new Date(post.postDate).toLocaleDateString('en-US', options)
      
      // Loop thru post tags to output them in the tags container
      let postTags = post.postTags.map((tag, i) => {
        return <span key={i} className="tag">{tag}</span>
      })

      return (
        <div key={i} className="post-card">
          <div className="inner-wrapper">
            <h3 className="topic-title">{post.postTitle}</h3>

            <div className="post-details">
              <span className="username">{post.postAuthor}</span>
              <span className="time-posted"> - {formattedPostTime}</span>
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
                  {postTags}
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
              onChange={this.change}
              className="search-bar"
              name="search"
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
          {isFetching ? <div className="loader-box"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><span className="isLoading">Loading...</span></div> : this.loopPostings() }
          </section>
        </div>
      </section>
    );
  }
}
