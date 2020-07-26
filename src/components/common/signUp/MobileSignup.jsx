import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signupUserMobile } from '../../../redux/authentication/actions'

class MobileSignup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mobile: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleClick = e => {
    e.preventDefault()
    console.log(this.state, this.props)
    const { signupUserMobile } = this.props
    signupUserMobile(this.state)
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
        <button onClick={this.handleClick} type="submit" className="btn btn-block btn-primary">
        Continue
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
  signupUserMobile: payload => dispatch(signupUserMobile(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(MobileSignup)