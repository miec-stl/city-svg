import React from 'react';
import logo from './logo.svg';
import './App.css';

import CitySVG from './components/CitySVG';

import Precincts2010 from './geoJSON/2010_precincts_wgs.json';
// import Neighborhoods2010 from './geoJSON/2010_neighborhoods_wgs.json';

function App() {
  return (
    <div className="App">
      <div className="AppHeader">
        <span className="AppNamecard">
          citySVG
        </span>
        <img src={logo} className="App-logo" alt="logo"/>
      </div>
      <div>
        <CitySVG GeoJsonData={Precincts2010} MapId={'Precincts'} />
      </div>
    </div>
  );
}

export default App;
