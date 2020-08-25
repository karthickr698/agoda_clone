import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendBillData } from '../../redux/listingPage/actions';
import axios from 'axios';
import swal from 'sweetalert';
import emailjs from 'emailjs-com';
import { Redirect } from 'react-router-dom'


export class PaymentPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            fullName: '',
            phoneNumber: '',
            address: '',
            msg: '',
            pay: false,
            fail: false,
            after: false
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: [e.target.value] })
    }

    form = (e) => {
        e.preventDefault()
        this.setState({ pay: true })

    }

    handleBooking =  async(e) => {

        e.preventDefault()

        let templateParams = {
            from_name: 'rkarthick410@gmail.com',
            to_name: 'karthick184r@gmail.com',
            subject: "send",
            message_html: "datas",
        }
        emailjs.send(
            'gmail',
            'template_xxKzOdyD',
            templateParams,
            'user_dRRjC8Dekxlz2UBL2EKrF'
        )

        let { hotel, numberOfPeople } = this.props
        let order_res = await axios({
            method: 'post',
            url: 'https://agoda-server.herokuapp.com/orders',
            data: {
                "amount": hotel[4] * numberOfPeople,
                "currency": "INR",
                "receipt": "32#karthick",
                "payment_capture": "1"
            }
        });
        const options = {
            "key": "rzp_test_9DjEQTF0xqxKcb",
            "amount": hotel[4] * numberOfPeople*100,
            "currency": "INR",
            "name": "Book Trip",
            "description": "Transaction",
            "image": "/logo.svg",
            "order_id": order_res.id,
            handler: (response) => {
                swal("Booked!", "Your Booking has been made", "success");
                this.props.history.push('/')

            },
            "prefill": {
                "name": "karthick",
                "email": "karthick@gmail.com",
                "contact": this.state.phoneNumber
            },
            "theme": {
                "color": "#F37254"
            }
        };
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()



    }

    render() {
        let { hotel, numberOfPeople, numberOfDays } = this.props
        numberOfPeople = numberOfPeople || 1
        if (this.state.after) {
            return (
                <Redirect to='/' />
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
                                    <input type="text" className="form-control" name='fullName' aria-describedby="emailHelp" onChange={this.handleChange} />
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
                                        <img src="https://www.princehotels.com/wp-content/uploads/2019/04/aboutslider2-1.jpg" height="150" width="250" alt="hotel" />
                                    </div>
                                    <div className="col-9 ml-1">
                                        <h1>{hotel[1]}</h1>
                                        <p>5290, Iljudong-ro, Seongsan-eup, Seongsan, Jeju Island</p>
                                        <p>no. of persons: {numberOfPeople}</p>
                                        <p>no. of days: {numberOfDays}</p>
                                        <h3> RS {hotel[4] * numberOfPeople}</h3>
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
    numberOfDays: state.listingPageReducer.numberOfDays,
    pay: state.listingPageReducer.pay
})

const mapDispatchToProps = dispatch => ({
    sendBillData: payload => dispatch(sendBillData(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage)

