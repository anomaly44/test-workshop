import React, { Component } from 'react';

class Toggle extends Component {
  state = {
    toggleOn: false,
  };

  toggleDiv = () => {
    this.setState(state => ({ toggleOn: !state.toggleOn }));
  };
  render() {
    const { toggleOn } = this.state;
    return (
      <div>
        <button id="myButton" onClick={this.toggleDiv}>
          Toggle my div
        </button>
        <div style={{ backgroundColor: toggleOn ? 'green' : 'red' }}>
          {toggleOn ? 'On' : 'Off'}
        </div>
      </div>
    );
  }
}

export default Toggle;
