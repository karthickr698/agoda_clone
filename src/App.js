import React from 'react';
import Routes from './routes/Routes';
import ReactGA from 'react-ga';

function initializeAnalytics(){
  ReactGA.initialize("UA-173957799-1")
  ReactGA.pageview('/HomePage')
}

function App() {
  initializeAnalytics()
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;