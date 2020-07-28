import React from "react";
import { hotels } from "../../../utils/data.js";

var getMatchCount = filterKey =>
  hotels.filter(hotel => hotel[filterKey]).length;
var Filter = props => {
  var onChange = () => props.toggleFilter(props.filter.key);
  var matchCount = getMatchCount(props.filter.key);
  return (
    <li className="filter">
      <span>
        {props.filter.display}
      </span>
      <span>
        <label class="switch">
          <input type="checkbox" 
            checked={props.isChecked}
            onChange={onChange}
          />
          <span class="slider round"></span>
        </label>
      </span>
    </li>
  );
};

export default Filter;
