import React, { Component } from 'react'

export default class PaymentPage extends Component {
    render() {
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
                                    <img src="https://pix5.agoda.net/hotelImages/172/1723530/1723530_17050212580052742129.jpg?s=450x450" height="100" width="80" alt="hotel" />
                                </div>
                                <div className="col-9 ml-1">
                                    <h1>Hotel name</h1>
                                    <p>5290, Iljudong-ro, Seongsan-eup, Seongsan, Jeju Island</p>
                                    <p>no. of persons</p>
                                    <h3>Total price</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
