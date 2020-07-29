import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../utils/agoda-logo.png";
import { Link } from "react-router-dom";
import SigninModal from "./signIn/SigninModal";
import Button from '@material-ui/core/Button';
import CreateAccountModal from './signUp/CreateAccountModal';
import { connect } from 'react-redux';
import { logoutUser } from "../../redux/authentication/actions";

export const Navbar = props => {
  const { isAuth } = props
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
            <div className="p-2 ">
              <Button variant="outlined" color="primary">
                <small>List your place</small>
              </Button>
            </div>
            {isAuth? <button onClick={(payload) => this.props.logoutUser(payload)}>signout</button> : <SigninModal />}
            {isAuth? this.props.username : <CreateAccountModal />}
          </form>
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  username: state.authReducer.currentUser.name
})

const mapDispatchToProps = dispatch =>({
  logoutUser : payload => dispatch(logoutUser(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

