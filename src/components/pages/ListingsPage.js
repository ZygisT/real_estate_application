import React, { Component } from 'react'
import Filter from './ListingsPage/Filter'
import Listings from './ListingsPage/Listings'
import listingsData from '../../data/listingsData'

export default class ListingsPage extends Component {
  constructor() {
    super();
    this.state = {
      listingsData,
      viewMode: 'box',
      city: "All",
      homeType: "All",
      bedrooms: 0,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 500,
      filteredData: listingsData,
      populateFormsData: '',
      sortby: 'price-asc',

    };
  }

  componentWillMount() {
    
    let listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })

    this.setState({
      listingsData
    })
  }

  change = (event) => {
    var name = event.target.name;
    var value = (event.target.type === "checkbox") ? event.target.checked : event.target.value;
    this.setState({
      [name]:value
    }, () => {
      console.log(this.state)
      this.filteredData()
    })
  }

  changeView = (viewName) => {
    this.setState({
      viewMode: viewName
    })
  }

  filteredData = () => {
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price 
      && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.bedrooms
    })

    if(this.state.city !== "All") {
      newData = newData.filter((item) => {
        return item.city === this.state.city
      })
    }

    if(this.state.homeType !== "All") {
      newData = newData.filter((item) => {
        return item.homeType === this.state.homeType
      })
    }

    if(this.state.sortby === 'price-dsc') {
      newData = newData.sort((a, b) => {
        return a.price - b.price
      })
    }

    if(this.state.sortby === 'price-asc') {
      newData = newData.sort((a, b) => {
        return b.price - a.price
      })
    }

    this.setState({
      filteredData: newData
    })
  }

  render() {
    return (
      // Listings Section Start
      <section id="listings-section">

        <div className="center-content">
          
          <div className="content-wrapper">

            <div className="listings-area">
              <Listings listingsData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView}/>
            </div>

            <div className="filter-area">
              {/* <Filter /> */}
            </div>

          </div>

        </div>

      </section>
      // Listings Section End

    )
  }
}
