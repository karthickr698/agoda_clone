import React from 'react';
import { connect } from 'react-redux';
import { getHotelEntityPage, setNumberOfDays } from '../../redux/listingPage/actions';
import DropdownComponent from './DropdownComponent';

export class EntityPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            startDate: [this.getDateRange()],
            endDate: ''
        }
    }

    getDateRange = () => {
        const today = new Date()
        let year = today.getFullYear()
        let month = today.getMonth() + 1
        let day = today.getDate()
        day = day < 10 ? '0' + day : day
        month = month < 10 ? '0' + month : month
        let min_date = year+'-'+month+'-'+day
        return min_date
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.props.currentHotelEntityPage(id)
        this.setState({min_date: this.getDateRange()})
    }

    handleChange = e => {
        this.setState({ 
            [e.target.name] : [e.target.value]
        })
    }

    render() {
        
        const { hotel, history, setNumberOfDays } = this.props
        const {min_date, startDate, endDate } = this.state

        return (
            <div className="container mt-4">
                <div className="row">
                    <div className=" col-8 ">
                        <div className="row p-0 m-0">
                            <div className="col-7 p-0 m-0">
                                <img alt='some hotel' src="https://pix6.agoda.net/hotelImages/109/10941418/10941418_19112710290084510021.jpg?s=1024x768" className="w-100 " />
                            </div>
                            <div className="col-5 p-0 m-0 pl-3">
                                <div className="row p-0 m-0">
                                    <img alt='some hotel' src="https://pix6.agoda.net/hotelImages/109/10941418/10941418_20011713540087185943.png?s=1024x768" className="w-100" />
                                </div>
                                <div className="row p-0 m-0 pt-3">
                                    <div className="col-6 p-0 mt-3">
                                        <img alt='some hotel' src="https://pix6.agoda.net/hotelImages/109/10941418/10941418_20011713540087185943.png?s=1024x768" className="w-100 p-0 m-0" />
                                    </div>
                                    <div className="col-6 p-0 mt-3 pl-1">
                                        <img alt='some hotel' src="https://pix6.agoda.net/hotelImages/109/10941418/10941418_20011713540087185943.png?s=1024x768" className="w-100 p-0 m-0" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" mt-2 p-2 border border-secondary">
                            <button className="border btn-success p-2" disabled>
                                Free Wifi
                                </button>
                            <span>
                                <button className="border btn-warning ml-2 p-2" disabled>
                                    Agoda Easy cancel
                                </button>
                            </span>
                            <h3 >{hotel[1]}</h3>
                            <p>2-8-10 Motomachi, Namba, Osaka, Japan, 556-0016</p>
                        </div>

                        <div className=" mt-2 p-2 border border-secondary">
                            <h5 >Property highlights</h5>
                            <div className="row p-2">
                                <div className="col-6 pl-5 border-right">
                                    <h5>Exceptional cleanliness</h5>
                                </div>
                                <div className="col-6 pl-5">
                                    <h5>Exceptional service</h5>
                                </div>
                            </div>
                        </div>

                        <div className=" mt-2 p-2 border border-secondary">
                            <div className="row mt-4">
                                <div className="col">
                                    <div className="text-center">
                                        <i className="fa fa-train fa-3x text-center" aria-hidden="true"></i>

                                    </div>
                                    <p className="text-center"> <small>570 meters to public transportation</small> </p>
                                </div>
                                <div className="col">
                                    <div className="text-center">
                                        <i className="fa fa-wifi fa-3x" aria-hidden="true"></i>

                                    </div>
                                    <p className="text-center"> <small>Free Wi-Fi in all rooms!</small> </p>
                                </div>
                                <div className="col">
                                    <div className="text-center">
                                        <i className="fa fa-snowflake-o fa-3x" aria-hidden="true"></i>

                                    </div>
                                    <p className="text-center"> <small>Air Conditioning</small> </p>
                                </div>
                                <div className="col">
                                    <div className="text-center">
                                        <i className="fa fa-magic fa-3x" aria-hidden="true"></i>

                                    </div>
                                    <p className="text-center"> <small>Smoking Place</small> </p>
                                </div>
                                <div className="col">
                                    <div className="text-center">
                                        <i className="fa fa-fire fa-3x" aria-hidden="true"></i>

                                    </div>
                                    <p className="text-center"> <small>Fire Place</small> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="container p-3 border border-secondary">
                                <div className="row">
                                    <div className="col-2">
                                        <span className="hotel__rating p-1">{hotel[2]}</span>
                                    </div>
                                    <div className="col-9">
                                        <h3 className="font-weight-bold">Excellent</h3>
                                    </div>
                                </div>
                                <div className="row m-2">
                                    <div className="rounded-pill p-1 m-1 border border-secondary">
                                        Housekeeping
                                        <i className="fa fa-thumbs-up green-color m-1" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="row m-2">
                                    <div className="rounded-pill p-1 m-1 border border-secondary">
                                        <div className="col">
                                            Breakfast
                                            <i className="fa fa-thumbs-up green-color m-1" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="rounded-pill p-1 m-1 border border-secondary">
                                        <div className="col">
                                            Shops
                                            <i className="fa fa-thumbs-up green-color m-1" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="container p-2 border border-secondary">
                                <div className="border p-5" >Google Map</div>
                                <hr />
                                <div className="mt-2">
                                    <h5>Popular Landmarks</h5>
                                    <div className="d-flex p-2 justify-content-between">
                                        Namba
                                        <span className="ml-auto">490m</span>
                                    </div>
                                    <div className="d-flex p-2 justify-content-between">
                                        Dotombori
                                        <span className="ml-auto">900m</span>
                                    </div>
                                    <div className="d-flex p-2 justify-content-between">
                                        Tsutenkaku Tower
                                        <span className="ml-auto">1.24 km</span>
                                    </div>
                                    <div className="d-flex p-2 justify-content-between">
                                        Shittenoji Temple
                                        <span className="ml-auto">1.91 km</span>
                                    </div>
                                    <div className="d-flex p-2 justify-content-between">
                                        Osaka Castle
                                        <span className="ml-auto">3.89 km</span>
                                    </div>
                                    <div className="d-flex p-2 justify-content-between">
                                        Umeda Sky Building
                                        <span className="ml-auto">4.19 km</span>
                                    </div>
                                    <div className="d-flex p-2 justify-content-between">
                                        Universal Studios
                                        <span className="ml-auto">6.01 km</span>
                                    </div>
                                    <div className="d-flex p-2 justify-content-between">
                                        Osaka Aquarium
                                        <span className="ml-auto">6.34 km</span>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container border  mt-3 p-3 border-success">
                    <div className=" mt-3 d-flex p-2 justify-content-between align-items-center ">
                        <span className="d-flex justify-content-between">
                            <span className="mr-2">
                                <label>Start:</label>
                            </span>
                           <span>
                            <input
                                className="form-control"
                                type="date"
                                aria-label="Search"
                                min={min_date}
                                max={endDate}
                                value={startDate}
                                name='startDate'
                                onChange= {this.handleChange}
                            />
                           </span>
                       </span>
                       <span className="d-flex justify-content-between">
                            <span className="mr-2">
                                <label>End:</label>
                            </span>
                           <span>
                            <input
                                className="form-control"
                                type="date"
                                aria-label="Search"
                                name='endDate'
                                min={startDate || min_date}
                                onChange= {this.handleChange}
                            />
                           </span>
                       </span>
                        <span>
                            <DropdownComponent />
                        </span>
                        <span>
                            <button onClick={() => {
                                setNumberOfDays(this.state)
                                history.push('/paymentPage')
                                }} className="btn btn-primary btn-md p-2">Reserve</button>
                        </span>
                    </div>
                </div>

                <div className="container mt-3 border border-secondary">
                    <div className="row ">
                        <div className="col-4 ">
                            <div className="container border-right">
                                <div className="row mt-4">
                                    <div className="col-2">
                                        <span className="hotel__rating p-1">8.9</span>
                                    </div>
                                    <div className="col-9">
                                        <h3 className="font-weight-bold">Excellent</h3>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-6">
                                        <h5>Cleanliness</h5>
                                    </div>
                                    <div className="col-6 mt-2">
                                        <span>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: 89 }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        <h5>Facilities</h5>
                                    </div>
                                    <div className="col-6 mt-2">
                                        <span>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: 77 }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </span>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-6">
                                        <h5>Location</h5>
                                    </div>
                                    <div className="col-6 mt-2">
                                        <span>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: 86 }} aria-valuenow="10" aria-valuemin="0" aria-valuemax=""></div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="container mt-3">
                                <h3>More about the hotel:</h3>
                                <p>
                                    The facilities and services provided by us ensure a pleasant stay for guests. Facilities like free Wi-Fi in all rooms, convenience store, kitchen, express check-in/check-out, car park are readily available for the convenience of each guest.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row mt-2">
                    <div className="col-4">
                        <div className="row">
                            <h3>What they offer</h3>
                        </div>

                    </div>

                    <div className="col-8">
                        <div className="row">
                            <div className="col-2 border-right">
                                <i className="fa fa-globe fa-4x" aria-hidden="true"></i>
                            </div>
                            <div className="col-10 ">
                                <h2>Languages spoken</h2>
                                <div className="row">
                                    <div className="col"><h4>English</h4></div>
                                    <div className="col"><h4>Japanese</h4></div>
                                    <div className="col"><h4>Chinese</h4></div>
                                    <div className="col"><h4>Korean</h4></div>

                                </div>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-2 border-right">
                                <i className="fa fa-wheelchair fa-4x" aria-hidden="true"></i>
                            </div>
                            <div className="col-10 ">
                                <h2>Accessibility</h2>
                                <div className="row">
                                    <div className="col">
                                        <i className="fa fa-check" aria-hidden="true"></i>
                                        <span className="ml-1">Wheel Chair Accessibility</span>
                                    </div>
                                    <div className="col">
                                        <i className="fa fa-check" aria-hidden="true"></i>
                                        <span className="ml-1">Elevator</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-2 border-right">
                                <i className="fa fa-wifi fa-4x" aria-hidden="true"></i>
                            </div>
                            <div className="col-10 ">
                                <h2>Accessibility</h2>
                                <div className="row">
                                    <div className="col">
                                        <i className="fa fa-check" aria-hidden="true"></i>
                                        <span className="ml-1">Free Wi-Fi in all rooms!</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-2 border-right">
                                <i className="fa fa-cutlery fa-4x" aria-hidden="true"></i>
                            </div>
                            <div className="col-10 ">
                                <h2>Dining, drinking, and snacking</h2>
                                <div className="row">
                                    <div className="col">
                                        <i className="fa fa-calculator" aria-hidden="true"></i>
                                        <span className="ml-1">Vending machine</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-2 border-right">
                                <i className="fa fa-male fa-4x" aria-hidden="true"></i>
                            </div>
                            <div className="col-10 ">
                                <h2>Services and conveniences</h2>
                                <div className="row">
                                    <div className="col">
                                        <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                                        <span className="ml-1">Laundromat</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-2 border-right">
                                <i className="fa fa-bed fa-4x" aria-hidden="true"></i>
                            </div>
                            <div className="col-10 ">
                                <h2>Available in all rooms</h2>
                                <div className="row">
                                    <div className="col">
                                        <i className="fa fa-shower" aria-hidden="true"></i>
                                        <span className="ml-1">Shower</span>
                                    </div>
                                    <div className="col">
                                        <i className="fa fa-television" aria-hidden="true"></i>
                                        <span className="ml-1">TV</span>
                                    </div>
                                    <div className="col">
                                        <i className="fa fa-road" aria-hidden="true"></i>
                                        <span className="ml-1">Slippers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="mt-5" />
                <div className="row">
                    <div className="col-4">
                        <div className="row">
                            <h3>Nearest essentials</h3>
                        </div>
                    </div>

                    <div className="col-8">
                        <div className="row">
                            <div className="col-2 border-right">
                                <i className="fa fa-plane fa-4x" aria-hidden="true"></i>
                            </div>
                            <div className="col-10 ">
                                <h2>Airports</h2>
                                <div className="row">
                                    <div className="col"><h4>Osaka International Airport (ITM)</h4></div>
                                    <div className="col"><h4>Kobe Airport (UKB)</h4></div>                            </div>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-2 border-right">
                                <i className="fa fa-train fa-4x" aria-hidden="true"></i>
                            </div>
                            <div className="col-10 ">
                                <h2>Public transportation</h2>
                                <div className="row">
                                    <div className="col">
                                        <h4>Daikokucho Subway Station</h4>
                                    </div>
                                    <div className="col">
                                        <h4>JR Namba Station</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-2 border-right">
                                <i className="fa fa-hospital-o fa-4x" aria-hidden="true"></i>
                            </div>
                            <div className="col-10 ">
                                <h2>Hospital or clinic</h2>
                                <div className="row">
                                    <div className="col">
                                        <i className="fa fa-check" aria-hidden="true"></i>
                                        <span className="ml-1">Honda Clinic</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-2 border-right">
                                <i className="fa fa-shopping-bag fa-4x" aria-hidden="true"></i>
                            </div>
                            <div className="col-10 ">
                                <h2>Shopping</h2>
                                <div className="row">
                                    <div className="col">
                                        <h4>Shinsaibashi-suji Shopping Street</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-2 border-right">
                                <i className="fa fa-money fa-4x" aria-hidden="true"></i>
                            </div>
                            <div className="col-10 ">
                                <h2>Cash Withdrawal</h2>
                                <div className="row">
                                    <div className="col">
                                        <h4>ATM</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-4">
                        <div className="row">
                            <h3>What's nearby</h3>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-2 border-right">
                                <i className="fa fa-map fa-4x" aria-hidden="true"></i>
                            </div>
                            <div className="col-10 ">
                                <h2>Nearby landmarks</h2>
                                <h5>Namba Yasaka Shrine - 90 m</h5>
                                <h5>Japan Folk Art Museum - 100 m</h5>
                                <h5>Namba Yasaka Jinja Shrine - 110 m</h5>
                                <h5>Edion Arena Osaka - 170 m</h5>
                                <h5>Osaka Prefecture Gymnasium - 200 m</h5>
                                <h5>Naniwa Church - 260 m</h5>
                                <h5>Osaka Jan Jan Yokocho - 270 m</h5>
                                <h5>Tetsugenji Temple - 340 m</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    hotel: state.listingPageReducer.hotel
})

const mapDispatchToProps = dispatch => ({
    currentHotelEntityPage: payload => dispatch(getHotelEntityPage(payload)),
    setNumberOfDays: payload => dispatch(setNumberOfDays(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(EntityPage)