import React, { Component } from 'react';
import Header from './Header';
import ListView from './ListView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="React test workshop" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ListView />
      </div>
    );
  }
}

export default App;
