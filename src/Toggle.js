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
        <h3>Toggle component</h3>
        <button className="button" onClick={this.toggleDiv}>
          Toggle my div
        </button>
        <div
          style={{
            backgroundColor: toggleOn ? 'green' : 'red',
            width: 100,
            height: 100,
            margin: 20,
          }}
        >
          {toggleOn ? 'On' : 'Off'}
        </div>
      </div>
    );
  }
}

export default Toggle;
