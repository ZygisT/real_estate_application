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
      bathrooms: 0,
      min_price: 0,
      max_price: 1000000,
      filteredData: listingsData,
      populateFormsData: '',
      sortby: 'price-dsc',
      houseStatus: 'All'

    };
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    this.changeView = this.changeView.bind(this)

  }

  componentWillMount() {
    
    let listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })

    this.setState({
      listingsData
    })
  }

  change(event) {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]:value
    }, () => {
      console.log(this.state)
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

    if(this.state.houseStatus !== "All") {
      newData = newData.filter((item) => {
        return item.status === this.state.houseStatus
      })
    }

    // if(this.state.houseStatus === "Rent") {
    //   newData = newData.filter((item) => {
    //     return item.status === this.state.houseStatus
    //   })
    // }

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
    let cities = this.state.listingsData.map((item) => {
      return item.city
    })
    cities = new Set(cities)
    cities = [...cities]

    cities.sort()

    // homeType
    let homeTypes = this.state.listingsData.map((item) => {
      return item.homeType
    })
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]

    homeTypes.sort()

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
        cities,
        homeTypes,
        bedrooms,
        bathrooms
      }
    }, () => {
      // console.log(this.state)
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
              <Filter change={this.change} globalState={this.state} populateAction={this.populateForms}/>
            </div>

          </div>

        </div>

      </section>
      // Listings Section End

    )
  }
}
