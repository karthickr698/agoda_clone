import React, { Component } from "react";
import Hotels from "./Hotels";
import Filters from "./Filters";

class ListingComponent extends Component {
  state = { selectedFilters: [] };
  toggleFilter = clickedFilterKey => {
    var newFilters;
    var alreadySelected = this.state.selectedFilters.includes(clickedFilterKey);
    if (alreadySelected) {
      newFilters = this.state.selectedFilters.filter(
        selectedFilter => selectedFilter !== clickedFilterKey
      );
    } else {
      newFilters = this.state.selectedFilters.concat(clickedFilterKey);
    }
    this.setState({ selectedFilters: newFilters });
  };
  render() {
    return (
      <div className="App">
        <Filters
          selectedFilters={this.state.selectedFilters}
          toggleFilter={this.toggleFilter}
        />
        <Hotels selectedFilters={this.state.selectedFilters} />
      </div>
    );
  }
}

export default ListingComponent;