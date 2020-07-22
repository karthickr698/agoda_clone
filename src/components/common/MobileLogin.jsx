import React, { Component } from "react";

export default class MobileLogin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            mobile: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.name] : e.target.value
        })
    }
    
  render() {
    return (
      <div>
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Mobile</label>
                <input
                name='mobile'
                type="mobile"
                onChange={this.handleChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                />
                
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                name='password'
                type="password"
                onChange={this.handleChange}
                className="form-control"
                id="exampleInputPassword1"
                />
            </div>
            
            <button onClick={''} type="submit" className="btn btn-block btn-primary">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
