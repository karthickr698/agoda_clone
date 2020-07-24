import React from 'react';
import { Link } from 'react-router-dom'

export default function LandingPageNav() {
    return(
      <div className="container text-center mt-5 pt-5">
          <div className="d-flex justify-content-around">
            <Link to="/homes"> 
                <div className="col-4 ">
                  <i class="fa fa-home fa-3x" aria-hidden="true"></i>   
                </div>
                <div>Hotels & Homes</div>
            </Link>
            <Link to="/hotels">
                <div className="col-4">
                   <i class="fa fa-building-o fa-3x" aria-hidden="true"></i>
                </div>
                <div>Flight + Hotel</div>
            </Link>
            <Link to="/flights">
                <div className="col-4">
                  <i class="fa fa-plane fa-3x" aria-hidden="true"></i>
                  <div>Flights</div>
                </div>
            </Link>
          </div>
      </div>
    )
}



