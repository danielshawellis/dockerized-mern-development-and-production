import React, { Component } from 'react';
import "./App.scss"

import Items from "../../containers/Items/Items";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Items />
      </React.Fragment>
    );
  };
}

export default App;
