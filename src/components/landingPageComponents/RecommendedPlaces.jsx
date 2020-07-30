import React from 'react';
import Crowne from '../../utils/Crowne.jpg';
import HotelOsaka from '../../utils/HotelOsaka.jpg';
import RoyalOsaka from '../../utils/RoyalOsaka.jpg';

export default function ExploreMore() {
    return (
        <div className="container ">
            <h2 className="text-center mt-5 pt-5"> Recommended places to stay for your next trip! </h2>
            <div className="row">
                {[[Crowne, 'ANA Crowne Plaza Osaka','Umeda'],[HotelOsaka, 'Hotel Plaza Osaka','Juso'],[RoyalOsaka, 'RIHGA Royal Hotel Osaka','Umeda']].map(item=> 
                    <div className="col mr-5" >
                        <div className="card m-3 border-1" style={{width: '18rem'}}>
                            <img src={item[0]} className="card-img-top" alt="aprtments" />
                            <div className="card-body">
                                <h5 className="card-title">{item[1]}</h5>
                                <p className="card-text text-muted">{item[2]}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
