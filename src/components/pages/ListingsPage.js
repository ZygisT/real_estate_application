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
      propertyCity: "All",
      propertyTypes: "All",
      propertyStatus: 'All',
      bedrooms: 0,
      bathrooms: 0,
      min_price: 0,
      max_price: 1000000,
      filteredData: listingsData,
      populateFormsData: '',
      sortby: 'price-asc'

    };
    this.change = this.change.bind(this)
    this.changeInt = this.changeInt.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    this.changeView = this.changeView.bind(this)

  }

  change(event) {
    var name = event.target.name;
    var value = event.target.value
    this.setState({
      [name]:value
    }, () => {
      this.filteredData()
    })
  }

  changeInt(event) {
    var name = event.target.name;
    var value = parseFloat(event.target.value.replace(/[^\d\-eE+]/g, ""));
    this.setState({
      [name]:value
    }, () => {
      this.filteredData()
    })
  }

  changeView(viewName)  {
    this.setState({
      viewMode: viewName
    })
  }

  filteredData() {
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price
      && item.bedrooms >= this.state.bedrooms && item.bathrooms >= this.state.bathrooms
    })

    if(this.state.propertyCity !== "All") {
      newData = newData.filter((item) => {
        return item.city === this.state.propertyCity
      })
    }

    if(this.state.propertyTypes !== "All") {
      newData = newData.filter((item) => {
        return item.homeType === this.state.propertyTypes
      })
    }

    if(this.state.propertyStatus !== "All") {
      newData = newData.filter((item) => {
        return item.status === this.state.propertyStatus
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

  populateForms() {
    // city
    let propertyCity = this.state.listingsData.map((item) => {
      return item.city
    })
    propertyCity = new Set(propertyCity)
    propertyCity = [...propertyCity]

    propertyCity.sort()

    // homeType
    let propertyTypes = this.state.listingsData.map((item) => {
      return item.homeType
    })
    propertyTypes = new Set(propertyTypes)
    propertyTypes = [...propertyTypes]

    propertyTypes.sort()

    // Property Status
    let propertyStatus = this.state.listingsData.map((item) => {
      return item.status
    })

    propertyStatus = new Set(propertyStatus)
    propertyStatus = [...propertyStatus]

    propertyStatus.sort()

    // Bedrooms
    let bedrooms = this.state.listingsData.map((item) => {
      return item.bedrooms
    })
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]

    bedrooms.sort()

    // Bathrooms
    let bathrooms = this.state.listingsData.map((item) => {
      return item.bathrooms
    })

    bathrooms = new Set(bathrooms)
    bathrooms = [...bathrooms]

    bathrooms.sort()


    this.setState({
      populateFormsData: {
        propertyCity,
        propertyTypes,
        propertyStatus,
        bedrooms,
        bathrooms
      }
    });
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
              <Filter change={this.change} changeInt={this.changeInt} globalState={this.state} populateAction={this.populateForms}/>
            </div>

          </div>

        </div>

      </section>
      // Listings Section End

    )
  }
}
