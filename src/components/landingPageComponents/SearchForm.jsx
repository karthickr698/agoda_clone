import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import PlacesAutocomplete from 'react-places-autocomplete';
import { Link } from 'react-router-dom';

export default class SearchForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            address: '',
            startDate: [this.getDateRange()],
            endDate: '',
            min_date: this.getDateRange()
        };
    }

    handleelementChange = e => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }

    handleChange = address => {
        this.setState({ address });
    };

    getDateRange = () => {
        const today = new Date()
        let year = today.getFullYear()
        let month = today.getMonth() + 1
        let day = today.getDate()
        day = day < 10 ? '0' + day : day
        month = month < 10 ? '0' + month : month
        let min_date = year + '-' + month + '-' + day
        return min_date
    }

    render() {
        const { min_date, startDate, endDate } = this.state
        return (
            <div className="jumbotron " id="landingPageImg">
                <div className="container rounded p-5">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">

                            <PlacesAutocomplete
                                name='address'
                                value={this.state.address}
                                onChange={this.handleChange}
                                onSelect={this.handleSelect}>
                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (<>
                                    <div className="input-group mb-3">
                                        <input  {...getInputProps({ placeholder: "Enter City" })} style={{ height: "40px" }} type="search" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    <div>
                                        {loading ? <div>...loading</div> : null}

                                        {suggestions.map(suggestion => {
                                            const style = {
                                                backgroundColor: suggestion.active ? "#fae3d9" : "#fff"
                                            };

                                            console.log(suggestion)

                                            return (
                                                <div {...getSuggestionItemProps(suggestion, { style })}>
                                                    {suggestion.description}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </>)}
                            </PlacesAutocomplete>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-2"></div>
                        <div className="form-group  col-4">
                            <label htmlFor> Start</label>
                            <input type="date"
                                style={{ height: "40px" }}
                                className="form-control" id="date"
                                name="startDate"
                                placeholder=" date"
                                min={min_date}
                                max={endDate}
                                value={startDate}
                                onChange={this.handleelementChange} />
                        </div>
                        <div className="form-group  col-4">
                            <label htmlFor> End</label>
                            <input type="date"
                                style={{ height: "40px" }}
                                className="form-control"
                                id="date" name="endDate"
                                placeholder=" date"
                                onChange={this.handleelementChange}
                                min={startDate || min_date} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-6">
                            <Dropdown>
                                <Dropdown.Toggle variant="light" size="lg" block id="dropdown-basic">
                                    No. of persons
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5">5</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="col-2">
                            <Link to='/listingPage' ><button type="button" class="btn btn-lg btn-primary btn-block">Search</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
