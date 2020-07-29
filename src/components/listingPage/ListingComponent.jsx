import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllHotels from "./Hotels/AllHotels";
import FilterList from "./Filters/FilterList";
import { updateTheFilters, getHotels } from '../../redux/listingPage/actions';

class ListingComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // selectedFilters: [this.props.selectedFilters]
    }
  }

  componentDidMount() {
    const params = new URL(window.location.href);
    const url = 'https://87583a193985.ngrok.io/getproperty' + params.search;
    console.log(url);
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
    console.log(newFilters)
    this.props.updateTheFilters(newFilters)

    const newUrl = new URL(window.location.href)
    console.log(newUrl)

    newFilters.forEach(filter => newUrl.searchParams.set(filter, 1))

    this.props.history.push(newUrl.search)
    this.props.getHotels('http://localhost:5000/getproperty' + newUrl.search)

  };
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <FilterList
          selectedFilters={this.props.selectedFilters}
          toggleFilter={this.toggleFilter}
        />
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