import React from "react";

var Filter = props => {

  var onChange = () => props.toggleFilter(props.filter.key);
  
  return (
    <li className="filter">
      <span>
        {props.filter.display}
      </span>
      <span>
        <label className="switch">
          <input type="checkbox" 
            checked={props.isChecked}
            onChange={onChange}
          />
          <span className="slider round"></span>
        </label>
      </span>
    </li>
  );
};

export default Filter;


//togglefilter
//filter
//isChecked