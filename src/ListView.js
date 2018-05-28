import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

export const ListView = props => (
  <div>
    <h3>ListView component</h3>
    <ul>
      {props.items.map(item => (
        <li key={item} className="item">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default connect(state => ({
  items: state.city.list,
}))(ListView);
