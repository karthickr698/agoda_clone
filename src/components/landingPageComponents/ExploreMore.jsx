import React from 'react';
import apartment from '../../utils/entire-apartment.jpg';
// import bungalow from '../../utils/entire-bungalow.jpg';
// import house from '../../utils/entire-house.jpg';
// import villa from '../../utils/entire-villa.jpg';
import { Link } from 'react-router-dom';


export default function ExploreMore() {
    return (
        <div className="container text-center">
            <h2 className="text-center mt-3"> Explore more travel vacation rentals </h2>
            <div className="explore-more-wrapper" >
                {[1,2,3,4].map(item =>(
                    <div>
                        <Link to='/apartments' style={{textDecoration:"none"}}>
                            <div className="card m-3 border-1" style={{width: '20rem'}}>
                                <img src={apartment} className="card-img-top" alt="aprtments" />
                                <div className="card-body">
                                    <h5 className="card-title">Apartments</h5>
                                    <p className="card-text text-muted">156,786 properties</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
