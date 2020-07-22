import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../utils/agoda-logo.png";
import { Link } from "react-router-dom";
// import Signin from './Signin';
import SigninModal from "./SigninModal";
import Button from '@material-ui/core/Button';


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img
          src={logo}
          alt="agoda logo"
          width="80"
          height="28"
          className="border-right"
        />

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="#">
                Flight + Hotel <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Hotels & Homes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Flights
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Today's deals
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div
              className="p-2
                 border-right"
            >
              <Button variant="outlined" color="primary">
                List your place
            </Button>
            </div>

            {/* <button
                    className="btn btn-primary my-2 my-sm-0 m-3"
                    type="submit"
                >
                Sign in
                </button> */}
            <SigninModal />

            
            <Button variant="outlined" color="primary">
            Create Account
            </Button>
          </form>
        </div>
      </nav>
    </div>
  );
}
