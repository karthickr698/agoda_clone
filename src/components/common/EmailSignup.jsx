import React, { Component } from "react";

export default class EmailLogin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
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
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                type="email"
                name='email'
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={this.handleChange}
                />
                
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                name='password'
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={this.handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">First Name</label>
                <input
                name='firstname'
                type="text"
                className="form-control"
                
                onChange={this.handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Last Name</label>
                <input
                name='lastname'
                type="text"
                className="form-control"
                
                onChange={this.handleChange}
                />
            </div>
            
            <button onClick={""} type="submit" className="btn btn-block btn-primary">
            Create account
          </button>
        </form>
      </div>
    );
  }
}
