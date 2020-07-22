import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUserEmail } from '../../redux/authentication/actions';

class EmailSignup extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
      }
  }
  handleChange = (e) => {
      this.setState({
          [e.target.name] : e.target.value
      })
  }

  handleClick = e => {
    e.preventDefault()
    const { signupUserEmail } = this.props
    signupUserEmail(this.state)
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
          <label htmlFor="exampleInputPassword">Password</label>
          <input
          name='password'
          type="password"
          className="form-control"
          id="exampleInputPassword"
          onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">First Name</label>
          <input
          name='firstName'
          type="text"
          className="form-control"
          onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Last Name</label>
          <input
          name='lastName'
          type="text"
          className="form-control"
          onChange={this.handleChange}
          />
        </div>
        <button onClick={this.handleClick} type="submit" className="btn btn-block btn-primary">
          Create account
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
  signupUserEmail: payload => dispatch(signupUserEmail(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(EmailSignup)

