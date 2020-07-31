import React, { Component } from 'react'
import DropdownComponent from '../entityPageComponents/DropdownComponent';
import DatePicker from './DatePicker';

export default class SearchForm extends Component {
    render() {
        return (
            <div className="jumbotron " id="landingPageImg">
                <div className="container  rounded p-5">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="fa fa-search" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <input  style={{ height: "50px" }} type="search" class="form-control"  placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>     
                            <div className="form-group  col-4">
                                <label htmlFor> Start</label>
                                {/* <DatePicker /> */}
                                <input type="date" style={{ height: "50px" }} className="form-control" id="date" name="date" placeholder=" date" />
                            </div>
                            <div className="form-group  col-4">
                                <label htmlFor> End</label>
                                <input type="date" style={{ height: "50px" }} className="form-control" id="date" name="date" placeholder=" date" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-6">
                                <div className="dropdown">
                                    <button style={{ height: "50px" }}className="btn btn-secondary btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown button
                                    </button>
                                    {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-2">
                                <button style={{ height: "50px" }} type="button" class="btn btn-primary btn-block">Primary</button>
                            </div>
                        </div> 
                </div>
            </div>
        )
    }
}
