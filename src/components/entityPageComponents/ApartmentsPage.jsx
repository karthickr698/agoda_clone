import React from "react";
import { Link } from 'react-router-dom';

export default function ApartmentsPage() {
  return (
    <div>
      <div>
        <div className="jumbotron " id="bgimg">
          <h1 className="text-center ">Search for Apartments</h1>
          <nav
            className="navbar navbar-light bg-light  "
            style={{ height: "100px" }}
          >
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                style={{ height: "70px" }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <input
                className="form-control mr-sm-2"
                style={{ height: "70px" }}
                type="date"
                aria-label="Search"
              />
              <input
                className="form-control mr-sm-2"
                style={{ height: "70px" }}
                type="date"
                aria-label="Search"
              />
              <button
                className="btn btn-lg  btn-primary my-2 py-3 my-sm-0"
                style={{ width: "180px" }}
                type="submit"
              >
                Search
              </button>
            </form>
          </nav>
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="text-center font-weight-bold">
          Why travellers love renting Apartments
        </h2>
        <div className="container mt-5">
          <div className="row">
            <div>
              <div className="col">
                <img
                  src="https://cdn6.agoda.net/images/accommodation/popular-choice/Apartment-1.png"
                  className="rounded-circle"
                  alt="rounded"
                />
                <h4>Private kitchens</h4>
              </div>
            </div>
            <div className="col">
              <img
                src="https://cdn6.agoda.net/images/accommodation/popular-choice/Apartment-2.png"
                className="rounded-circle"
                alt="rounded"
              />
              <h4 className="text-center">Private bathrooms</h4>
            </div>
            <div className="col">
              <img
                src="https://cdn6.agoda.net/images/accommodation/popular-choice/Apartment-3.png"
                className="rounded-circle"
                alt="rounded"
              />
              <h4 className="text-center">Common space for gathering</h4>
            </div>
            <div className="col">
              <img
                src="https://cdn6.agoda.net/images/accommodation/popular-choice/Apartment-4.png"
                className="rounded-circle"
                alt="rounded"
              />
              <h4 className="text-center">Facilities for groups</h4>
            </div>
            <div className="col">
              <img
                src="https://cdn6.agoda.net/images/accommodation/popular-choice/Apartment-5.png"
                className="rounded-circle"
                alt="rounded"
              />
              <h4 className="text-center">Great for long stays</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="text-center font-weight-bold">
          Best destinations with Apartments
        </h2>
        <div className="mt-4">
          <div className="card-deck">
            {['Osaka, Japan','Tokyo, Japan', 'Kuala Lumpur, Malaysia'].map(hotel => (
                <Link to='/listingPage' style={{textDecoration:"none"}}>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://cdn6.agoda.net/images/accommodation/best-destinations/apartment-osaka.jpg"
                      alt="Card cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">{hotel}</h5>
                      <p className="card-text text-center text-muted">
                        19,844 properties
                      </p>
                    </div>
                  </div>
                </Link>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <div className="card-deck">
            {['Manila, Philippines','Bangkok, Thailand', 'Pattaya, Thailand'].map(hotel => (
                <Link to='/listingPage' style={{textDecoration:"none"}}>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://cdn6.agoda.net/images/accommodation/best-destinations/apartment-osaka.jpg"
                      alt="Card cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">{hotel}</h5>
                      <p className="card-text text-center text-muted">
                        19,844 properties
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

    <div className="container mt-5">
        <h2 className="text-center font-weight-bold">
        Other great alternatives to hotels
        </h2>
        <div className="card-deck mt-4">
        <div className="card">
          <img className="card-img-top" src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-house.jpg" alt="Card  cap" />
          <div className="card-body">
            <h5 className="card-title">Vacation Rentals</h5>
            <p className="card-text">517,703 properties</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-villa.jpg" alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">Private Villas</h5>
            <p className="card-text">517,703 properties</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-bungalow.jpg" alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">Bungalows</h5>
            <p className="card-text">517,703 properties</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg" alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">Apartments</h5>
            <p className="card-text">517,703 properties</p>
          </div>
        </div>
      </div>
    </div> 
    </div>
  );
}
