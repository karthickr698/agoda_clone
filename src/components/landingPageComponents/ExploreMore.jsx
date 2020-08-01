import React from 'react';
import apartment from '../../utils/entire-apartment.jpg';
import bungalow from '../../utils/entire-bungalow.jpg';
import house from '../../utils/entire-house.jpg';
import villa from '../../utils/entire-villa.jpg';
import { Link } from 'react-router-dom';



export default function ExploreMore() {
    return (
        <div className="container-fluid text-center">
            <h2 className="text-center mt-3"> Explore more travel vacation rentals </h2>
            <div className="explore-more-wrapper" >
                {[[apartment, 'Apartments', '156,786'], [bungalow, 'Vacation Rentals', '517,245'], [house, 'Private Villas', '567,245'], [villa, 'Bunglows', '162,945']].map(item => (
                    <div>
                        <Link to='/apartments' style={{ textDecoration: "none" }}>
                            <div className="card m-3 border-1" style={{ width: '20rem' }}>
                                <img src={item[0]} className="card-img-top" alt="aprtments" />
                                <div className="card-body">
                                    <h5 className="card-title">{item[1]}</h5>
                                    <p className="card-text text-muted">{item[2]} properties</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}


                // [[apartment, 'Apartments','156,786'],[bungalow, 'Vacation Rentals','517,245'],[house, 'Private Villas','567,245'],[villa, 'Bunglows','162,945']]
