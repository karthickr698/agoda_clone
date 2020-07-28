import React from "react";
import Hotel from "./Hotel.jsx";
import { hotels } from "../../../utils/data.js";

var renderHotel = hotel => <Hotel key={hotel.id} hotel={hotel} />;

var HotelsList = props => {
  var filterCallback = hotel => {
    var everyCallback = filter => hotel[filter];
    return props.selectedFilters.every(everyCallback);
  };
  var filteredHotels = hotels.filter(filterCallback);

  var hotelListElements = filteredHotels.map(renderHotel);
  return <ul className="hotels-list">{hotelListElements}</ul>;
};

export default HotelsList;