import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

export class ComplexComponent extends Component {
  state = { selectedItem: 'one' };

  handleChangeSelect = event => {
    this.setState({
      selectedItem: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submit(this.state.selectedItem);
  };

  render() {
    const items = ['one', 'two', 'three'];
    return (
      <div>
        <h3>Select component</h3>
        <form className="form" onSubmit={this.handleSubmit}>
          <select
            className="select"
            onChange={this.handleChangeSelect}
            value={this.state.selectedItem}
          >
            {items.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, {
  submit: payload => ({
    type: 'SUBMIT',
    payload,
  }),
})(ComplexComponent);
