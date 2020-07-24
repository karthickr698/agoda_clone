import React, { Component } from "react";
import signinImage from "../../utils/signin.svg";
import EmailSignup from "./EmailSignup";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import MobileSignup from './MobileSignup';


  

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
                    <EmailSignup />
                  </Tab>
                  
                  <Tab eventKey="home" title="Mobile">
                    <MobileSignup />
                  </Tab>
                </Tabs>
              </div>
              <div className="row justify-content-md-center mt-3">
                  <div className="col-3 border border-secondary w-100 text-center mr-1 p-2">
                  <i class="fa fa-facebook-square" aria-hidden="true"></i>
                  <div>
                    <small>
                    facebook
                    </small>
                  </div>
                  </div>
                  <div className="col-3 border border-secondary w-100 text-center ml-1 p-2">
                  <i class="fa fa-google" aria-hidden="true"></i>
                  <div>
                    <small>
                    Google
                    </small>
                  </div>
                  </div>
              </div>
              <hr/>
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
              <img src={signinImage} alt="signin page"/>
              <div className="text-center">
              Up to 30% OFF with Agoda <br/>Insider Deals! Prices drop the <br/>moment you sign in.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
