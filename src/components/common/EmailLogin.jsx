import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUserEmail } from '../../redux/authentication/actions';

class EmailLogin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.state, this.props)
    const { loginUserEmail } = this.props
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

          <button onClick={() => loginUserEmail(this.state)} type="submit" className="btn btn-block btn-primary">
            Sign in
          </button>
        </form>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading
})

const mapDispatchToProps = dispatch => ({
  loginUserEmail: payload => dispatch(loginUserEmail(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(EmailLogin)

