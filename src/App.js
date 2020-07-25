import React, {Component} from 'react';
import Navbar from './components/common/Navbar';
import LandingPageNav from './components/landingPageComponents/LandingPageNav';
import ExploreMore from './components/landingPageComponents/ExploreMore';
import RecommendedPlaces from './components/landingPageComponents/RecommendedPlaces';
import DestinationsIndia from './components/landingPageComponents/DestinationsIndia';
import Footer from './components/landingPageComponents/Footer';
import ListingComponent from './components/listingPage/ListingComponent';

function App() {
  return (
    <div>
      <Navbar />
      <ListingComponent />
      {/* <LandingPageNav />
      <ExploreMore />
      <RecommendedPlaces />
      <DestinationsIndia /> */}
      <Footer />
    </div>
  );
}

export default App;

