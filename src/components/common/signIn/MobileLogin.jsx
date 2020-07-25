import React, { Component } from "react";
import { connect } from 'react-redux';
import { loginUserMobile } from '../../../redux/authentication/actions';

class MobileLogin extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        mobile: '',
        password: ''
      }
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    handleClick = e => {
      e.preventDefault()
      const { loginUserMobile } = this.props
      loginUserMobile(this.state)
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
          <button onClick={this.handleClick} type="submit" className="btn btn-block btn-primary">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading
})

const mapDispatchToProps = dispatch => ({
  loginUserMobile : payload => dispatch(loginUserMobile(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(MobileLogin)