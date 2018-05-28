import React, { Component } from 'react';
import ComplexComponent from './ComplexComponent';
import Header from './Header';
import ListView from './ListView';
import Toggle from './Toggle';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="React test workshop" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Toggle />
        <hr style={{ marginBottom: 60 }} />
        <ListView />
        <hr style={{ marginBottom: 60 }} />
        <ComplexComponent />
      </div>
    );
  }
}

export default App;
