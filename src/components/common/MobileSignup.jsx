import React, { Component } from "react";

export default class MobileSignup extends Component {
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
            
            
            <button onClick={''} type="submit" className="btn btn-block btn-primary">
            Continue
          </button>
        </form>
      </div>
    );
  }
}
