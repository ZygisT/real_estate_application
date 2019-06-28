import React, { Component } from "react";

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
     
    }
    this.cities = this.cities.bind(this)
    this.homeTypes = this.homeTypes.bind(this)
    this.bedrooms = this.bedrooms.bind(this)
    this.bathrooms = this.bathrooms.bind(this)
  }

  componentWillMount(){
    this.props.populateAction()
  }

  cities() {
    if(this.props.globalState.populateFormsData.propertyCity !== undefined) {
      var { propertyCity } = this.props.globalState.populateFormsData
      return propertyCity.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  homeTypes() {
    if(this.props.globalState.populateFormsData.propertyTypes !== undefined) {
      var { propertyTypes } = this.props.globalState.populateFormsData
      return propertyTypes.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  bedrooms() {
    if(this.props.globalState.populateFormsData.bedrooms !== undefined) {
      var { bedrooms } = this.props.globalState.populateFormsData
      return bedrooms.map((item) => {
        return (
          <option key={item} value={item}>{item}+</option>
        )
      })
    }
  }

  bathrooms() {
    if(this.props.globalState.populateFormsData.bathrooms !== undefined) {
      var { bathrooms } = this.props.globalState.populateFormsData
      return bathrooms.map((item) => {
        return (
          <option key={item} value={item}>{item}+</option>
        )
      })
    }
  }


  render() {
    return (
      // Filter Start
      <section id="filter">
        <div className="filter-container">
          <h3>Search for properties:</h3>

          <div className="fields-wrapper">
            <div className="top-block">
              <label htmlFor="properyStatus">Property status</label>
              <select name="properyStatus" onChange={this.props.change}>
                <option value="All">All</option>
              </select>

              <label htmlFor="propertyTypes">Property type</label>
              <select name="propertyTypes" onChange={this.props.change}>
                <option value="All">All</option>
                {this.homeTypes()}
              </select>

              <label htmlFor="propertyLocation">Location</label>
              <select name="propertyCity" onChange={this.props.change}>
                <option value="All">All</option>
                {this.cities()}
              </select>
            </div>

            <div className="bottom-block">
              <label htmlFor="Price">Price</label>
              <div className="input-container">
                <input type="text" placeholder="Min" onChange={this.props.change} value={this.props.globalState.min_price} />
                <input type="text" placeholder="Max" onChange={this.props.change} value={this.props.globalState.max_price}/>
              </div>

              <label htmlFor="Bedrooms">Bedrooms</label>
              <select name="bedrooms" onChange={this.props.change}>
                <option value="All">All</option>
                {this.bedrooms()}
              </select>


              <label htmlFor="Bathrooms">Bathrooms</label>
              <select name="bathrooms" onChange={this.props.change}>
                <option value="All">All</option>
                {this.bathrooms()}
              </select>
            </div>
          </div>
        </div>
      </section>
      // Filter End
    );
  }
}
