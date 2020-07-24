import React from 'react';
import Navbar from './components/common/Navbar';
import LandingPageNav from './components/landingPageComponents/LandingPageNav';
// import Homes from './components/landingPageComponents/Homes';
import ExploreMore from './components/landingPageComponents/ExploreMore';
import RecommendedPlaces from './components/landingPageComponents/RecommendedPlaces';
import DestinationsIndia from './components/landingPageComponents/DestinationsIndia';
import Footer from './components/landingPageComponents/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <LandingPageNav />
      <ExploreMore />
      <RecommendedPlaces />
      <DestinationsIndia />
      <Footer />
      {/* <Homes /> */}
    </div>
  );
}

export default App;
