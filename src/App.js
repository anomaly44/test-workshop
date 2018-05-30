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
        <hr style={{ marginBottom: 60 }} />

        <ListView />
        <hr style={{ marginBottom: 60 }} />

        <Toggle />
        <hr style={{ marginBottom: 60 }} />

        <ComplexComponent />
      </div>
    );
  }
}

export default App;
