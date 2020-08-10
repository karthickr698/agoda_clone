import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../utils/agoda-logo.png";
import { Link } from "react-router-dom";
import SigninModal from "./signIn/SigninModal";
import CreateAccountModal from './signUp/CreateAccountModal';
import { connect } from 'react-redux';
import { logoutUser } from "../../redux/authentication/actions";

export const Navbar = props => {
  const { isAuth, numberOfPeople } = props
  console.log(props)
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
              <Link to="" className="nav-link" href="#">
                Flight + Hotel <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link" href="#">
                Hotels & Homes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link" href="#">
                Flights
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link" href="#">
                Today's deals
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {/* <div className="p-2 ">
              <Button variant="outlined" color="primary">
                <small>List your place</small>
              </Button>
            </div> */}
            {isAuth ? <button className="btn btn-outline-primary mr-1" onClick={(payload) => props.logoutUser(payload)}>signout</button> : <SigninModal />}
            {isAuth ? props.username.name : <CreateAccountModal />}
            {numberOfPeople ? <Link to='/booking' className="nav-link">Booking</Link> : ''}
          </form>
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  username: state.authReducer.currentUser,
  hotel: state.listingPageReducer.hotel,
  numberOfPeople: state.listingPageReducer.numberOfPeople
})

const mapDispatchToProps = dispatch => ({
  logoutUser: payload => dispatch(logoutUser(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

