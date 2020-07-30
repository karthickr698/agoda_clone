import React, { Component } from 'react';
import { connect } from 'react-redux';

export class PaymentPage extends Component {
    render() {
        console.log(this.props)
        const { hotel, numberOfPeople } = this.props
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-8">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Full Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Email address</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Phone number</label>
                                        <input type="number" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">City of residence</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Proceed to payment</button>
                        </form>
                    </div>
                    <div className="col-4">
                        <div className="container border border-right">
                            <div className="row m-2">
                                <div className="col-3 ">
                                    <img src={hotel[5]} height="100" width="80" alt="hotel" />
                                </div>
                                <div className="col-9 ml-1">
                                    <h1>{hotel[1]}</h1>
                                    <p>5290, Iljudong-ro, Seongsan-eup, Seongsan, Jeju Island</p>
                                    <p>no. of persons: {numberOfPeople}</p>
                                    <h3>{hotel[4] * numberOfPeople}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    hotel: state.listingPageReducer.hotel,
    numberOfPeople: state.listingPageReducer.numberOfPeople
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage)

