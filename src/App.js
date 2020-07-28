import React from 'react';
import Navbar from './components/common/Navbar';
import LandingPageNav from './components/landingPageComponents/LandingPageNav';
import ExploreMore from './components/landingPageComponents/ExploreMore';
import RecommendedPlaces from './components/landingPageComponents/RecommendedPlaces';
import DestinationsIndia from './components/landingPageComponents/DestinationsIndia';
import Footer from './components/landingPageComponents/Footer';
import ListingComponent from './components/listingPage/ListingComponent';
import Routes from './routes/Routes';
import EntityPage from './components/entityPageComponents/EntityPage';
import ApartmentsPage from './components/entityPageComponents/ApartmentsPage';

function App() {
  return (
    <div>
      <Routes />
      {/* <ListingComponent /> */}
      {/* <ExploreMore /> */}
      {/* <RecommendedPlaces /> */}
      {/* <DestinationsIndia /> */}
      <Footer /> 
    </div>
  );
}

export default App;