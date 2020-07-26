import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPageNav from '../components/landingPageComponents/LandingPageNav';
import ListingComponent from '../components/listingPage/ListingComponent';
import Navbar from '../components/common/Navbar';

export default function Routes() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/' component={LandingPageNav} />
                <Route path='/listingPage' component={ListingComponent} />
                
            </Switch>
        </div>
    )
}
