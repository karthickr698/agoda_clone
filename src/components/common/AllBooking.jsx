import React from 'react';
import { connect } from 'react-redux';

export const AllBooking = props => {
    const { hotel, numberOfDays, startDate, endDate, numberOfPeople } = props
    return (
        <div style={{display:'flex', width:'500px', height:'auto'}}>
            <div><img src={hotel[5]} alt='hotel' /></div>
            <div style={{display:'flex', flexDirection:"column", justifyContent:'space-between'}}>
                <h3 style={{margin: '0px'}}>{hotel[1]}</h3>
                <p>5290, Iljudong-ro, Seongsan-eup, Seongsan, Jeju Island</p>
                <p>Number of People : {numberOfPeople}</p> 
                <p>Number of Days : {numberOfDays}</p> 
                <span><p>start: {startDate}</p></span>
                <span><p>end: {endDate}</p></span>
                <h3>Price : {numberOfDays*numberOfPeople*hotel[4]}</h3>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    hotel: state.listingPageReducer.hotel,
    numberOfPeople: state.listingPageReducer.numberOfPeople,
    numberOfDays: state.listingPageReducer.numberOfDays,
    startDate: state.listingPageReducer.startDate,
    endDate: state.listingPageReducer.endDate
})

export default connect(mapStateToProps, null)(AllBooking)
