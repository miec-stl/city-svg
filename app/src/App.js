import React from 'react';
import logo from './logo.svg';
import './App.css';

import MapPanel from './components/map_panel';

import SvgBox from './components/svg_box';

function App() {
  return (
    // <MapPanel />
    <div className="App">
      <header className="AppHeader">
        <span className="AppNamecard">
          citySVG
        </span>
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <SvgBox />
    </div>
  );
}

export default App;
