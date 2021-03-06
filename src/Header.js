import React from 'react';
import logo from './logo.svg';
import './App.css';

const Header = props => (
  <div>
    <h3>Header Component</h3>
    <img src={logo} className="App-logo" alt="logo" />
    <div className="title">{props.title}</div>
  </div>
);

export default Header;
