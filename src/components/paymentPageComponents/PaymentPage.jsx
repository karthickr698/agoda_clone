import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendBillData } from '../../redux/listingPage/actions';
import axios from 'axios'

export class PaymentPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            fullName: '',
            phoneNumber: '',
            address: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: [e.target.value] })
    }

    handleBooking = async (e) => {
        e.preventDefault()

        console.log("fuck")
        let { hotel, numberOfPeople } = this.props
        let order_res = await axios.post("https://c7b2859e52b7.ngrok.io/orders", {
            "amount": (hotel[4] * numberOfPeople) * 100,
            "currency": "INR",
            "receipt": 32 + "#karthick",
            "payment_capture": "1"
        })
        const options = {
            "key": "rzp_test_9DjEQTF0xqxKcb",
            "amount": "9000",
            "currency": "INR",
            "name": "Book Trip",
            "description": "Transaction",
            "image": "/logo.svg",
            "order_id": order_res.data.id,
            handler: async function (response) {
                console.log(response)
                let final_res = await axios.post("https://c7b2859e52b7.ngrok.io/verifypay", {
                    ...response
                })
                if (final_res.data.isRazorPaySuccess === true) {
                    alert("Payment Successful")
                    this.props.history.push('/')
                } else {
                    alert("Payment Successful")
                }
            },
            "prefill": {
                "name": "karthick",
                "email": "karthick@gmail.com",
                "contact": "8220504785"
            },
            "theme": {
                "color": "#F37254"
            }
        };
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()

    }

    render() {
        let { hotel, numberOfPeople } = this.props
        numberOfPeople = numberOfPeople || 1
        if (this.props.pay) {
            return (
                <div>
                    done
                </div>
            )
        }
        else {
            return (
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-8">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Full Name</label>
                                    <input type="email" className="form-control" name='fullName' aria-describedby="emailHelp" onChange={this.handleChange} />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" name="email" onChange={this.handleChange} />
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label>Phone number</label>
                                            <input type="number" className="form-control" name="phoneNumber" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label>City of residence</label>
                                            <input type="text" className="form-control" name="address" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={this.handleBooking}>Proceed to payment</button>
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
}

const mapStateToProps = (state) => ({
    hotel: state.listingPageReducer.hotel,
    numberOfPeople: state.listingPageReducer.numberOfPeople,
    pay: state.listingPageReducer.pay
})

const mapDispatchToProps = dispatch => ({
    sendBillData: payload => dispatch(sendBillData(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage)

