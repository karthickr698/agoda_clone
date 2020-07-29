import React from "react";
import { filterOptions } from "../../../utils/data.js";

var FiltersList = props => {
  
  return (
    <div className="filters">
      <h5 className="filters__header">Filter By:</h5>
      <hr />
      <ul className="filters-list">{
        filterOptions.map(filter => {
          var isChecked = props.selectedFilters.includes(filter.key);
          console.log(isChecked, props.selectedFilters)
          return (
            <li key={filter.key} className="filter">
              <span>{filter.display}</span>
              <span>
                <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={isChecked}
                    onChange={() => props.toggleFilter(filter.key)}
                  />
                  <span className="slider round"></span>
                </label>
              </span>
            </li>
          )
        })
      }</ul>
    </div>
  );
};

export default FiltersList;