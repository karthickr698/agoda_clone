import React from 'react';
// import apartment from '../../utils/entire-apartment.jpg';
import recommendedPlace from '../../utils/recommended.jpg';

export default function ExploreMore() {
    return (
        <div className="container ">
            <h2 className="text-center mt-5 pt-5"> Recommended places to stay for your next trip! </h2>
            <div className="row">
                <div className="col mr-5" >
                    <div className="card m-3 border-1" style={{width: '18rem'}}>
                        <img src={recommendedPlace} className="card-img-top" alt="aprtments" />
                        <div className="card-body">
                            <h5 className="card-title">ANA Crowne Plaza Osaka</h5>
                            <p className="card-text text-muted">Umeda</p>
                        </div>
                    </div>
                </div>
                <div className="col mr-5">
                    <div className="card m-3 border-1" style={{width: '18rem'}}>
                        <img src={recommendedPlace} className="card-img-top" alt="aprtments" />
                        <div className="card-body">
                            <h5 className="card-title">Hotel Plaza Osaka</h5>
                            <p className="card-text text-muted">Juso</p>
                        </div>
                    </div>
                </div>
                <div className="col mr-5">
                    <div className="card m-3 border-1" style={{width: '18rem'}}>
                        <img src={recommendedPlace} className="card-img-top" alt="aprtments" />
                        <div className="card-body">
                            <h5 className="card-title">RIHGA Royal Hotel Osaka</h5>
                            <p className="card-text text-muted">Umeda</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
