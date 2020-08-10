import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllHotels from "./Hotels/AllHotels";
import { updateTheFilters, getHotels } from '../../redux/listingPage/actions';
import { filterOptions } from "../../utils/data.js";

class ListingComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedFilters: [this.props.selectedFilters]
    }
  }

  componentDidMount() {
    const params = new URL(window.location.href);
    const url = 'https://agoda-server.herokuapp.com/getproperty' + params.search;
    this.props.getHotels(url);

  }

  toggleFilter = clickedFilterKey => {
    var newFilters;
    var alreadySelected = this.props.selectedFilters.includes(clickedFilterKey);
    if (alreadySelected) {
      newFilters = this.props.selectedFilters.filter(
        selectedFilter => selectedFilter !== clickedFilterKey
      );
    } else {
      newFilters = this.props.selectedFilters.concat(clickedFilterKey);
    }
    // console.log(newFilters)
    this.props.updateTheFilters(newFilters)

    const newUrl = new URL(window.location.href)
    // console.log(newUrl)

    newFilters.forEach(filter => newUrl.searchParams.set(filter, 1))

    this.props.history.push(newUrl.search)
    this.props.getHotels('https://agoda-server.herokuapp.com/getproperty' + newUrl.search)

  };

  render() {
    console.log(this.props.hotels)
    return (
      <div className="App">

        <div className="filters">
          <h5 className="filters__header">Filter By:</h5>
          <hr />
          <ul className="filters-list">{
            filterOptions.map(filter => {
              // var isChecked = this.props.selectedFilters.includes(filter.key);
              // console.log(isChecked, this.props.selectedFilters)
              return (
                <li key={filter.key} className="filter">
                  <span>{filter.display}</span>
                  <span>
                    <label className="switch">
                      <input
                        type="checkbox"
                        // checked={isChecked}
                        onChange={() => this.toggleFilter(filter.key)}
                      />
                      <span className="slider round"></span>
                    </label>
                  </span>
                </li>
              )
            })
          }</ul>
        </div>

        <AllHotels hotels={this.props.hotels} />

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedFilters: state.listingPageReducer.selectedFilters,
  hotels: state.listingPageReducer.hotels
})

const mapDispatchToProps = dispatch => ({
  updateTheFilters: payload => dispatch(updateTheFilters(payload)),
  getHotels: payload => dispatch(getHotels(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingComponent)