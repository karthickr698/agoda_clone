import React, { Component } from 'react'
import DropdownComponent from '../entityPageComponents/DropdownComponent';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

export default class SearchForm extends Component {
    render() {
        return (
            <div className="jumbotron " id="landingPageImg">
                <div className="container rounded p-5">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8" >
                            <div class="input-group mb-3" style={{ height: "70px" }}>
                                <div class="input-group-prepend" >
                                    <span class="input-group-text" id="basic-addon1" >
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <input style={{ height: "70px" }} type="search" class="form-control" placeholder="Enter City" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="form-group  col-4">
                            <label htmlFor> Start</label>
                            <input type="date" style={{ height: "40px" }} className="form-control" id="date" name="date" placeholder="start date" />
                        </div>
                        <div className="form-group  col-4">
                            <label htmlFor> End</label>
                            <input type="date" style={{ height: "40px" }} className="form-control" id="date" name="date" placeholder=" date" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2"></div>

                        <div className="text-center  col-4">
                            <button type="button" class="btn btn-lg btn-primary btn-block">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
