import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import LandingPageNav from '../components/landingPageComponents/LandingPageNav';
import ListingComponent from '../components/listingPage/ListingComponent';
import Navbar from '../components/common/Navbar';
import Footer from '../components/landingPageComponents/Footer'
import ExploreMore from '../components/landingPageComponents/ExploreMore';
import RecommendedPlaces from '../components/landingPageComponents/RecommendedPlaces';
import ApartmentsPage from '../components/entityPageComponents/ApartmentsPage.jsx'
import EntityPage from '../components/entityPageComponents/EntityPage';

export default function Routes() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/' render={() => <>
                    <ExploreMore />
                    <RecommendedPlaces />
                </>} />
                <Route path='/apartments' component={ApartmentsPage} />
                <Route path='/listingPage' component={ListingComponent} />
                <Route path='/listingPage/:id' render={(props) => <EntityPage {...props}/>} />
            </Switch>
            <Footer />
        </div>
    )
}
