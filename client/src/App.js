import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import Items from "./components/items";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Items />
          </header>
        </div>
      </React.Fragment>
    );
  };
}

export default App;
