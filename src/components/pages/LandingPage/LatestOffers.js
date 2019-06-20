import React, { Component } from 'react'

export default class LatestOffers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  componentWillMount() {
    this.setState({
      data: this.props.listingsData
    })
  }

  componentDidMount() {
    
  }

  
  
  render() {
    return (
      <section id='lastest-offers-section'>
        
        <div className="lastest-offers-item-container">


        </div>

      </section>
    )
  }
}
