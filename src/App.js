import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="React test workshop" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Toggle />
      </div>
    );
  }
}

export default App;
