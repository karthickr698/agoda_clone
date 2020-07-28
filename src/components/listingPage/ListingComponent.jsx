import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllHotels from "./Hotels/AllHotels";
import FilterList from "./Filters/FilterList";
import { updateTheFilters, getHotels } from '../../redux/listingPage/actions';

class ListingComponent extends Component {
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //     selectedFilters: [this.props.selectedFilters]
  //   }
  // }

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

    newFilters.forEach(filter => newUrl.searchParams.set(filter, true))

    console.log(newUrl.toString())

    // window.location.href = newUrl.toString()

    // this.setState({ selectedFilters: newFilters });
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
  selectedFilters : state.listingPageReducer.selectedFilters,
  hotels: state.listingPageReducer.hotels
})

const mapDispatchToProps = dispatch => ({
  updateTheFilters : payload => dispatch(updateTheFilters(payload)),
  getHotels: payload => dispatch(getHotels(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingComponent)
