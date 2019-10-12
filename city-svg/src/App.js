import React from 'react';
import logo from './logo.svg';
import './App.css';

import cityPrecincts from './precincts.svg';

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <span className="AppNamecard">
          citySVG
        </span>
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <div className="SvgBox">
        <img src={cityPrecincts} alt="precincts" id="citySVG" />
      </div>
    </div>
  );
}

export default App;
