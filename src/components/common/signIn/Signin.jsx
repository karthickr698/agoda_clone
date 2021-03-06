import React, { Component } from "react";
import signinImage from "../../../utils/signin.svg";
import EmailLogin from "./EmailLogin";
import MobileLogin from './MobileLogin';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { sendGoogleLoginData } from '../../../redux/authentication/actions';


class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: false
    };
  }

  responseGoogle = (response) => {
    console.log(response)
    const { email, givenName, familyName } = response.profileObj;
    const {
      access_token,
    } = response.tokenObj;
    let datas = {
      name: givenName,
      last_name: familyName,
      email: email,
      accessToken: access_token,
      googleId: response.googleId,
    }

    console.log(datas)

    this.props.sendGoogleLoginData(datas);
    this.props.handleClose()
  }

  responseFacebook = (response) => {
    console.log(response)
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                  <Tab eventKey="profile" title="Email" >
                    <EmailLogin />
                  </Tab>

                  <Tab eventKey="home" title="Mobile">
                    <MobileLogin />
                  </Tab>
                </Tabs>
              </div>
              <div className="row text-center">
                <div className="col    mr-1 p-2">
                  <FacebookLogin
                    appId="334344694410398"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    textButton=" facebook"
                    cssClass="btn btn-default h-75 btn-primary pl-2 m-2"
                    icon="fa-facebook"
                  />
                </div>
                <div className="col    ml-1 p-2">
                  <GoogleLogin
                    clientId="404677930428-jcp3lq8cma356g1fjamhoudqd1npphhl.apps.googleusercontent.com"
                    buttonText="google"
                    className="mt-2 h-75"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                  />
                </div>
              </div>
              <hr />
              <div className="row mb-2">
                <div className="col-6 text-center mt-2"> <small>No account yet? </small></div>
                <div className="col-6">
                  <button className="btn btn-outline-primary">
                    Create account
                  </button>
                </div>
              </div >
            </div>
            <div className="col-4 ml-2">
              <img src={signinImage} alt="signin pic" />
              <div className="pl-5  text-center">
                Up to 30% OFF with Agoda <br />Insider Deals! Prices drop the <br />moment you sign in.
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading
})

const mapDispatchToProps = dispatch => ({
  sendGoogleLoginData: payload => dispatch(sendGoogleLoginData(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
