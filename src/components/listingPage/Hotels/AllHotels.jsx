import React from 'react'
import Hotel from "./Hotel.jsx";

export default function AllHotels(props) {
  return (
    <div>
      {props.hotels.map(hotel => <Hotel key={hotel.id} hotel={hotel} />)}
    </div>
  )
}


// var AllHotels = () => (
//   console.log(hotels)
//  return (<div>hello</div>)

//     // hotels.map(hotel => <div>{hotel.name}</div>)

// )

// var HotelsList = props => {
//   var filterCallback = hotel => {
//     var everyCallback = filter => hotel[filter];
//     return props.selectedFilters.every(everyCallback);
//   };
//   var filteredHotels = hotels.filter(filterCallback);

//   var hotelListElements = filteredHotels.map(renderHotel);
//   return <ul className="hotels-list">{hotelListElements}</ul>;
// };

// export default HotelsList;
