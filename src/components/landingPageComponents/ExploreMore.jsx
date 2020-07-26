import React from 'react';
import apartment from '../../utils/entire-apartment.jpg';
import bungalow from '../../utils/entire-bungalow.jpg';
import house from '../../utils/entire-house.jpg';
import villa from '../../utils/entire-villa.jpg';

export default function ExploreMore() {
    return (
        <div className="container text-center">
            <h2 className="text-center mt-3"> Explore more travel vacation rentals </h2>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg  mr-5" >
                    <div className="card m-3 border-1" style={{width: '18rem'}}>
                        <img src={apartment} className="card-img-top" alt="aprtments" />
                        <div className="card-body">
                            <h5 className="card-title">Apartments</h5>
                            <p className="card-text text-muted">156,786 properties</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg  mr-5">
                    <div className="card m-3 border-1" style={{width: '18rem'}}>
                        <img src={house} className="card-img-top" alt="aprtments" />
                        <div className="card-body">
                            <h5 className="card-title">Apartments</h5>
                            <p className="card-text text-muted">156,786 properties</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg  mr-5">
                    <div className="card m-3 border-1" style={{width: '18rem'}}>
                        <img src={villa} className="card-img-top" alt="aprtments" />
                        <div className="card-body">
                            <h5 className="card-title">Apartments</h5>
                            <p className="card-text text-muted">156,786 properties</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg  ">
                    <div className="card m-3 border-1" style={{width: '18rem'}}>
                        <img src={bungalow} className="card-img-top" alt="aprtments" />
                        <div className="card-body">
                            <h5 className="card-title">Apartments</h5>
                            <p className="card-text text-muted">156,786 properties</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
